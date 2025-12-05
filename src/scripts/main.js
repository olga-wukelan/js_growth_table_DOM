'use strict';

const container = document.querySelector('.container');
const field = container.querySelector('.field');
const tBody = field.querySelector('tbody');
const appendRow = container.querySelector('.append-row');
const appendColumn = container.querySelector('.append-column');
const removeRow = container.querySelector('.remove-row');
const removeColumn = container.querySelector('.remove-column');




container.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }
  const allRows = field.querySelectorAll('tr'); // Отримує колекцію всіх рядків
  const firstRow = allRows[0]; // Отримує перший рядок

  const maxCount = 10;
  const minCount = 2;

  const currentCols = firstRow ? firstRow.cells.length : 0;
  const currentRows = allRows.length ? allRows.length : 0;

  if (e.target === appendColumn) {
    if (currentCols < maxCount) {
      allRows.forEach((row) => {
        row.insertCell();
      });
    }
  }

  if (e.target === removeColumn) {
    if (currentCols > minCount) {
      allRows.forEach((row) => {
        row.deleteCell(currentCols - 1);
      });
    }
  }

  if (e.target === removeRow) {
    if (currentRows > minCount) {
      tBody.deleteRow(currentRows - 1); // видалення останього рядку
    }
  }

  if (e.target === appendRow) {
    if (currentRows < maxCount) {
      const newR = tBody.insertRow();

      for (let i = 0; i < currentCols; i++) {
        // Додаємо нову комірку в кінець (індекс не потрібен)
        newR.insertCell(i);
      }
    }
  }

  appendRow.disabled = currentRows >= maxCount;
  removeRow.disabled = currentRows <= minCount;
  appendColumn.disabled = currentCols >= maxCount;
  removeColumn.disabled = currentCols <= minCount;
});
