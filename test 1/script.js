
function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}

function calculateGrade(average) {
    if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 50) {
        return "D";
    } else {
        return "E";
    }
}

// Get student details
let studentName = prompt("Enter student's full name:");
let course = prompt("Enter course name:");

let mark1 = Number(prompt("Enter first mark:"));
let mark2 = Number(prompt("Enter second mark:"));
let mark3 = Number(prompt("Enter third mark:"));

// Validate and calculate
if (studentName.trim() === "" || course.trim() === "") {
    alert("Name and course cannot be empty!");
} else if (
    isNaN(mark1) || isNaN(mark2) || isNaN(mark3) ||
    mark1 < 0 || mark1 > 100 ||
    mark2 < 0 || mark2 > 100 ||
    mark3 < 0 || mark3 > 100
) {
    alert("Invalid marks! Enter marks between 0 and 100.");
} else {
    let average = calculateAverage(mark1, mark2, mark3);
    let grade = calculateGrade(average);

    console.log("Student: " + studentName);
    console.log("Course: " + course);
    console.log("Average: " + average.toFixed(2));
    console.log("Grade: " + grade);

    alert("Student: " + studentName +
          "\nAverage: " + average.toFixed(2) +
          "\nGrade: " + grade);
}
