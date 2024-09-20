document.getElementById('goButton').addEventListener('click', function() {
    const input = document.getElementById('objectIds').value;
    const ids = input.split(',').map(id => id.trim());
    const numericIds = ids.filter(id => !isNaN(id) && id !== "");

    const resultBody = document.getElementById('resultBody');
    resultBody.innerHTML = ''; // Clear previous results

    numericIds.forEach(id => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = id;
        row.appendChild(cell);
        resultBody.appendChild(row);
    });

    const resultTable = document.getElementById('resultTable');
    if (numericIds.length > 0) {
        resultTable.style.display = 'block'; // Show the table
    } else {
        resultTable.style.display = 'none'; // Hide if no numeric IDs found
    }
});
