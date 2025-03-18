import * as SQLite from 'expo-sqlite';


export class StudentDatabase {
  DB_NAME = 'studentDb.db';

  DBInit = async () => {
    const db = await SQLite.openDatabaseAsync(this.DB_NAME);
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS students
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                lastName TEXT NOT NULL,
                firstName TEXT NOT NULL,
                birthDate TEXT NOT NULL,
                email TEXT NOT NULL,
                phone INTEGER NOT NULL,
                grade INTEGER NOT NULL
            );`);
  }

  addStudent = async (info) => {
    try {
      const db = await SQLite.openDatabaseAsync(this.DB_NAME);
      await db.runAsync(
        'INSERT INTO students (lastName, firstName, birthDate, email, phone, grade) VALUES (?, ?, ?, ?, ?, ?);',
        [info.lastName, info.firstName, info.birthDate, info.email, info.phone, info.grade]
      );
      return true;
    } catch (e) {
      console.error("Erreur lors de l'ajout d'etudient:", e);
      return false;
    }
  };

  getStudent = async () => {
    try {
      const db = await SQLite.openDatabaseAsync(this.DB_NAME);
      return await db.getAllAsync('SELECT * FROM students ORDER BY grade DESC;');
    } catch (e) {
      console.error("Erreur lors de la récupération des etudients:", e);
      return [];
    }
  };
}