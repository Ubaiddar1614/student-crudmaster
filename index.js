// Empty array to hold all students
let allstudents = [];

// Function to add a new student
function addStudent(studentData) {
    const newStudent = {
        id: allstudents.length + 1,
        ...studentData
    };
    allstudents.push(newStudent);
    console.log(`Student added: ${newStudent.name}`);
}

// Function to find a student by ID
function findStudentbyId(id) {
    const student = allstudents.find(student => student.id === id);
    if (student) {
        console.log('Student found:', student);
        return student;
    } else {
        console.log(`Student with ID ${id} not found.`);
        return null;
    }
}

// Function to update a student by ID
function updateStudent(id, newStudentdata) {
    const studentIndex = allstudents.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        allstudents[studentIndex] = {
            ...allstudents[studentIndex],
            ...newStudentdata,
            id
        };
        console.log(`Student with id ${id} updated successfully`);
        console.log(allstudents[studentIndex]);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}
// Function to delete a student by ID
function deleteStudent(id) {
    const initialLength = allstudents.length;
    allstudents = allstudents.filter(student => student.id !== id); // ← typo fixed here
    if (allstudents.length < initialLength) {
        console.log(`Student with ID ${id} deleted successfully`);
    } else {
        console.log(`Cannot delete student with ID ${id}. Not found.`);
    }
}

// Function to list all students
function listAllStudents() {
    console.log(`\nList of all students:`);
    if (allstudents.length === 0) {
        console.log("No students were found.");
    } else {
        allstudents.forEach(student => {
            console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Major: ${student.major}, GPA: ${student.gpa}`);
            console.log(`Courses: ${student.courses.join(', ')}`);
        });
    }
    console.log(`Total number of students: ${allstudents.length}`);
}

// Function to save students to JSON format
function saveStudentsToJSON() {
    const jsonString = JSON.stringify(allstudents, null, 2);
    console.log(`Saving students to JSON format`);
    console.log(jsonString);
    return jsonString; 
}

// Function to load students from JSON format
function loadStudentsfromJSON(jsonString) {
    try {
        const parsedStudents = JSON.parse(jsonString);
        allstudents = parsedStudents;
        console.log(`Successfully loaded ${allstudents.length} students from JSON.`);
    } catch (error) {
        console.error(`Error loading students from JSON: ${error.message}`);
    }
}

console.log("Welcome to Student Management System.");

// Adding students as an example
addStudent({ name: "Ubaid", age: 20, major: "Computer Science", gpa: 3.64, courses: ["Data Structures", "OOP", "Web Dev"] });
addStudent({ name: "Ruhi", age: 20, major: "B.Com", gpa: 4.00, courses: ["Accounting", "Economics", "Business Maths"] });
addStudent({ name: "dar", age: 20, major: "Computer Science", gpa: 3.84, courses: ["Data Structures", "OOP", "Web Dev"] });

// Listing all students
console.log(`\nListing all Students:`);
listAllStudents();

// Finding a student by ID
console.log(`\nFinding student by ID:`);
findStudentbyId(2);
findStudentbyId(5); // This will not be found because there is no student with ID 5

// Updating Student's Information
console.log(`\nUpdating student with ID 1:`);
updateStudent(1, {
    gpa: 3.90,
    courses: ["Data Structures", "OOP", "Web Dev", "AI"]
});

// Listing all students after update
console.log(`\nListing all students after update:`);
listAllStudents();

// Deleting a student by ID
console.log(`\nDeleting student with ID 3:`);
deleteStudent(3); 

// Listing all students after deletion
console.log(`\nListing all students after deletion:`);
listAllStudents();

// Saving students to JSON format
console.log(`\nSaving students to JSON format:`);
const jsonString = saveStudentsToJSON(); 

// Loading students from JSON format
console.log(`\nLoading students from JSON format:`);
loadStudentsfromJSON(jsonString); // ✅ Will reload the previously saved JSON data

// Final listing of all students after loading from JSON
console.log(`\nListing all students after loading from JSON:`);
listAllStudents();

console.log(`\nThe end MY FELLAS `);
// Copyright (c) 2023 Ubaid Dar. All rights reserved.
