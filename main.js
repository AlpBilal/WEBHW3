import { Student } from './models.js';
import { fetchStudents } from './database.js';
import { calculateClassAverage, findTopStudent, filterStudents } from './analytics.js';

fetchStudents((rawData) => {
    const students = rawData.map(data => new Student(data.id, data.name, data.courses));

    console.log("Testing Immutability:");
    const testStudent = students[0];
    console.log(`Original ID: ${testStudent.id}`);
    
    console.log("Attempting to change ID to 999...");
    try {
        testStudent.id = 999; 
    } catch (e) {

    }
    
    if (testStudent.id === 1) {
        console.log(`Final ID: ${testStudent.id} (Success: ID did not change)`);
    } else {
        console.log(`Final ID: ${testStudent.id} (Failed: ID changed)`);
    }
    console.log(""); 

    console.log("       Analytics Report:    ");

    const avg101 = calculateClassAverage(students, 101);
    console.log(`Class Average for Course 101: ${avg101.toFixed(2)}`);

    const topStudent = findTopStudent(students);
    if (topStudent) {
        console.log(`Top Student: ${topStudent.name} (Average: ${topStudent.getAverage().toFixed(1)})`);
    }

    const studentsIn102 = filterStudents(students, (student) => {
        return student.courses.some(c => c.courseId === 102);
    });


    const names102 = studentsIn102.map(s => s.name).join(", ");
    console.log(`Students in Course 102: ${names102}`);
});