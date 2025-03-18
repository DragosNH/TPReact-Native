import * as SQLite from 'expo-sqlite';


export class StudentDatabase {
    DB_NAME = 'studentList.db';
  
    DBInit = async () => {
      const db = await SQLite.openDatabaseAsync(this.DB_NAME);
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS students (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          lastName TEXT NOT NULL,
          firstName TEXT NOT NULL,
          birthDate TEXT NOT NULL,
          email TEXT NOT NULL,
          phone INTEGER NOT NULL,
          grade INTEGER NOT NULL,
        );`);
    }
  
    addStudents = async (student) => {
    try {
      const db = await SQLite.openDatabaseAsync(this.DB_NAME);
      await db.runAsync(
        'INSERT INTO students (lastName, firstName, birthDate, email, phone, grade) VALUES (?, ?, ?, ?, ?, ?);',
        [student.lastName, student.firstName, student.birthDate, student.email, student.phone, student.grade]
      );
      return true; 
    } catch (error) {
      console.error("Erreur lors de l'ajout d'etudiant:", error);
      return false; 
    }
  };
  
    getStudents = async () => {
    try {
      const db = await SQLite.openDatabaseAsync(this.DB_NAME);
      return await db.getAllAsync('SELECT * FROM students ORDER BY lastName;');
    } catch (error) {
      console.error("Erreur lors de la récupération des etudiants:", error);
      return []; 
    }
  };
  }