const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students WHERE id = $1";
const checkEmailExist = "SELECT s FROM students s WHERE s.email = $1";
const addStudents = 
    "INSERT INTO students (name,email,age) VALUES($1,$2,$3)";
const updateStudents = "UPDATE students set name=$2 WHERE id=$1";
const deleteStudents = "DELETE * FROM students WHERE id = $1";

module.exports = {
    getStudents,
    getStudentsById,
    checkEmailExist,
    addStudents,
    updateStudents,
    deleteStudents,
};