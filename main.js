console.log("TEST");

// Array of Pokémon types since Generation 6
const pokemonTypes = [
'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost',
'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon',
'Dark', 'Fairy'
];

// Function to generate the Pokémon type table
function generateTable() {
const table = document.createElement('table');
const headerRow = document.createElement('tr');

// Create header cells
const emptyHeaderCell = document.createElement('th');
headerRow.appendChild(emptyHeaderCell); // Empty cell in the top-left corner
pokemonTypes.forEach(type => {
    const th = document.createElement('th');
    th.textContent = type;
    headerRow.appendChild(th);
});

// Append header row to the table
table.appendChild(headerRow);

// Create rows and cells for each type
pokemonTypes.forEach(rowType => {
    const row = document.createElement('tr');

    // First cell in each row is the type name
    const typeCell = document.createElement('td');
    typeCell.textContent = rowType;
    row.appendChild(typeCell);

    // Create cells for the effectiveness values (you can customize this logic)
    pokemonTypes.forEach(colType => {
    const td = document.createElement('td');
    // Here, you can set the values based on your logic
    // For simplicity, let's fill the cells with random values
    td.textContent = Math.random() < 0.5 ? 'x2' : 'x0.5';
    row.appendChild(td);
    });

    // Append the row to the table
    table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
}

// Call the function to generate the table
generateTable();