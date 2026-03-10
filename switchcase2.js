

let marks = 80;

switch (true) {

    case (marks >= 90):
        console.log("Grade A");
        break;

    case (marks >= 75 && marks < 90):
        console.log("Grade B");
        break;

    case (marks >= 50 && marks < 75):
        console.log("Grade C");
        break;

    case (marks < 50):
        console.log("Fail");
        break;

    default:
        console.log("Invalid marks");
}
