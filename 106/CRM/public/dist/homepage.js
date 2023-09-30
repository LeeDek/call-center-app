function renderState() {
    try {
        var states = document.querySelectorAll(".status");
        console.log('states');
        states.forEach(function (state) {
            var element = state;
            if (element.innerHTML == "Fixed") {
                element.style.color = "white";
                element.style.backgroundColor = "lime";
            }
            if (element.innerHTML == "Pending") {
                element.style.color = "white";
                element.style.backgroundColor = "blue";
            }
            if (element.innerHTML == "Rejected") {
                element.style.color = "white";
                element.style.backgroundColor = "red";
            }
            element.addEventListener("click", function () {
                console.log("clicked");
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
renderState();
function createIssue(event) {
    try {
        event.preventDefault();
        var issueDate = document.getElementById('issueDate').value;
        var issueType = document.getElementById('issueType').value;
        var issueStatus = document.getElementById('issueStatus').value;
        var table = document.querySelector('.client-requests table tbody');
        var newRow = table.insertRow();
        newRow.innerHTML = "\n        <td>" + issueDate + "</td>\n        <td>" + issueType + "</td>\n        <td class=\"status clickable\">" + issueStatus + "</td>\n    ";
        renderState();
        var issues = JSON.parse(localStorage.getItem('issues')) || [];
        var newIssue = { date: issueDate, type: issueType, status: issueStatus };
        issues.push(newIssue);
        localStorage.setItem('issues', JSON.stringify(issues));
        var form = document.getElementById('issueForm');
        form.reset();
    }
    catch (error) {
        console.error(error);
    }
}
document.getElementById('issueForm').addEventListener('submit', createIssue);
