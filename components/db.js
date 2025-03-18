import * as SQLite from 'expo-sqlite';

export class StudentDatabase {
  DB_NAME = 'studentList.db';

  DBInit = () => {
    const db = SQLite.openDatabase('studentList.db');
    db.transaction(tx => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lastName TEXT NOT NULL,
        firstName TEXT NOT NULL,
        birthDate TEXT NOT NULL,
        email TEXT NOT NULL,
        phone INTEGER NOT NULL,
        grade INTEGER NOT NULL
    );`
      );
    });
  };

  addStudents = (student) => {
    return new Promise((resolve, reject) => {
      const db = SQLite.openDatabase(this.DB_NAME);
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO students (lastName, firstName, birthDate, email, phone, grade) VALUES (?, ?, ?, ?, ?, ?);',
          [student.lastName, student.firstName, student.birthDate, student.email, student.phone, student.grade],
        );
      });
    });
  };

  getStudents = () => {
    return new Promise((resolve, reject) => {
      const db = SQLite.openDatabase(this.DB_NAME);
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM students ORDER BY lastName;',
        );
      });
    });
  };
}
