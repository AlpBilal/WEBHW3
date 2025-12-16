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
