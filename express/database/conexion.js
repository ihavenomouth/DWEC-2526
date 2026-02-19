
import { DatabaseSync } from 'node:sqlite';
const database = new DatabaseSync("./database/database.sqlite");

export default database;