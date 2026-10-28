/*
 * Rate Table block
 * Renders a comparison table from a published spreadsheet (e.g. /rates.json),
 * so marketers update rates in a sheet and publish, with no code change.
 *
 * Authoring:
 * | Rate Table          |
 * | /rates.json         |   <- link or path to the published sheet
 * | Featured: 12 Month  |   <- optional: row to highlight (value of the first column)
 *
 * Without a sheet link, the block's own rows render as the table (first row = header).
 */

function buildTable(columns, rows, featured) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  columns.forEach((col) => {
    const th = document.createElement('th');
    th.scope = 'col';
    th.textContent = col;
    headRow.append(th);
  });
  thead.append(headRow);

  const tbody = document.createElement('tbody');
  rows.forEach((row) => {
    const tr = document.createElement('tr');
    columns.forEach((col, i) => {
      const cell = document.createElement(i === 0 ? 'th' : 'td');
      if (i === 0) cell.scope = 'row';
      cell.dataset.label = col;
      cell.textContent = row[col] ?? '';
      tr.append(cell);
    });
    if (featured && String(row[columns[0]]).trim().toLowerCase() === featured) {
      tr.classList.add('rate-table-featured');
    }
    tbody.append(tr);
  });

  table.append(thead, tbody);
  return table;
}

function readOption(block, name) {
  const row = [...block.children].find((r) => r.textContent.trim().toLowerCase().startsWith(`${name}:`));
  if (!row) return '';
  row.remove();
  return row.textContent.trim().slice(name.length + 1).trim().toLowerCase();
}

async function fetchSheet(source) {
  const url = new URL(source, window.location.href);
  if (!url.pathname.endsWith('.json')) url.pathname += '.json';
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`${resp.status} loading ${url.pathname}`);
  const json = await resp.json();
  const rows = json.data || [];
  const columns = json.columns || Object.keys(rows[0] || {});
  return { columns, rows };
}

function inlineData(block) {
  const cellsOf = (r) => [...r.children].map((c) => c.textContent.trim());
  const [header, ...body] = [...block.children].map(cellsOf);
  if (!header) return { columns: [], rows: [] };
  const rows = body.map((cells) => Object.fromEntries(header.map((h, i) => [h, cells[i] ?? ''])));
  return { columns: header, rows };
}

export default async function decorate(block) {
  const featured = readOption(block, 'featured');
  const link = block.querySelector('a[href]');
  const firstText = block.textContent.trim();
  const source = link?.getAttribute('href') || (firstText.startsWith('/') ? firstText.split(/\s/)[0] : '');

  let data;
  try {
    data = source ? await fetchSheet(source) : inlineData(block);
  } catch (e) {
    block.textContent = 'Rates are unavailable right now.';
    block.classList.add('rate-table-error');
    // eslint-disable-next-line no-console
    console.warn('rate-table:', e.message);
    return;
  }

  if (!data.columns.length) {
    block.textContent = '';
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'rate-table-scroll';
  wrapper.append(buildTable(data.columns, data.rows, featured));
  block.replaceChildren(wrapper);
}
