// This function takes in an object representing a classroom, with a boolean property "hasTeachingAssistant" and an array property "classList" representing the names of the teacher and students in the class.
function getStudents(classroom) {
    // Destructure the properties from the classroom object
    let { hasTeachingAssistant, classList } = classroom;
    let teacher, teachingAssistant, students;

    // Check if the classroom has a teaching assistant. If so, assign the first two names in the class list to "teacher" and "teachingAssistant", and assign the rest of the names to "students". If not, assign the first name to "teacher" and the rest of the names to "students".
    if (hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classList;
    } else {
        [teacher, ...students] = classList;
    }
    // Return an array containing the names of the students in the class
    return students;
}

// Test the function with an example classroom object
console.log(
    getStudents({
        hasTeachingAssistant: false,
        classList: ["JYP", "Momo", "Mina", "Sana"]
    })
)
