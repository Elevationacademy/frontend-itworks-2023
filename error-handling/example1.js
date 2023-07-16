
function getStudentAge(student) {
    try {
        return student.age;
    } catch (err) {
        console.warn(err);
    }
}

function printStudentsAge(students) {
    students.forEach(student => {
        try {
            console.log(getStudentAge(stuent))
        } catch (err) {
            if (err instanceof ReferenceError) {
                throw err;
            } 
            console.warn(err);
        }
    });
}

let studentsDummyInput = [
    null,
    { "name": "Koko", "age": "3" },
    { "name": "Momo", "age": 31 },
]
printStudentsAge(studentsDummyInput)