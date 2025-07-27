let subjectsDiv = document.getElementById('subjects');
let resultDiv = document.getElementById('result');
let subjectCount = 0;

function addSubject() {
    subjectCount++;
    let subjectDiv = document.createElement('div');
    subjectDiv.className = 'subject';
    subjectDiv.innerHTML = `
        <input type="number" placeholder="Grade (e.g. 9.0)" step="0.01" min="0" max="10" id="grade${subjectCount}">
        <input type="number" placeholder="Credit (e.g. 4)" step="0.1" min="0" id="credit${subjectCount}">
    `;
    subjectsDiv.appendChild(subjectDiv);
}

function calculateCGPA() {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= subjectCount; i++) {
        let grade = parseFloat(document.getElementById(`grade${i}`).value);
        let credit = parseFloat(document.getElementById(`credit${i}`).value);

        if (isNaN(grade) || isNaN(credit)) {
            alert(`Please enter valid grade and credit for Subject ${i}`);
            return;
        }

        totalPoints += grade * credit;
        totalCredits += credit;
    }

    if (totalCredits === 0) {
        resultDiv.innerText = "⚠️ Total credits cannot be zero!";
        return;
    }

    let cgpa = totalPoints / totalCredits;
    resultDiv.innerText = `🎯 Your CGPA is: ${cgpa.toFixed(2)}`;
}

function resetCalculator() {
    subjectsDiv.innerHTML = "";
    resultDiv.innerHTML = "";
    subjectCount = 0;
}
