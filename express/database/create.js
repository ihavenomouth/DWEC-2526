import { DatabaseSync } from 'node:sqlite';
const database = new DatabaseSync("./database/database.sqlite");

// export default database;

// Execute SQL statements from strings.
database.exec(`
  CREATE TABLE IF NOT EXISTS biblioteca(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripción TEXT NOT NULL
  )
`);


database.exec(`
  CREATE TABLE IF NOT EXISTS usuario(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    clave TEXT NOT NULL
  )
`);


// Create a prepared statement to insert data into the database.
// const insert = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');

// Execute the prepared statement with bound values.
// insert.run(1, 'hello');
// insert.run(2, 'world');


// Create a prepared statement to read data from the database.
// const query = database.prepare('SELECT * FROM data ORDER BY key');



// Execute the prepared statement and log the result set.
// console.log(query.all());
// Prints: [ { key: 1, value: 'hello' }, { key: 2, value: 'world' } ]