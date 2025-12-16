export function calculateClassAverage(students, courseId) {
    let totalScore = 0;
    let studentCount = 0;

    students.forEach(student => {
        const course = student.courses.find(c => c.courseId === courseId);
        if (course) {
            totalScore += course.grade;
            studentCount++;
        }
    });

    if (studentCount === 0) return 0;
    return totalScore / studentCount;
}
export function findTopStudent(students) {
    if (students.length === 0) return null;

    return students.reduce((prev, current) => {
        return (prev.getAverage() > current.getAverage()) ? prev : current;
    });
}

export function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}