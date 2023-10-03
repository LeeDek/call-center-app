function renderState(){
    try{
const states = document.querySelectorAll(".status");
states.forEach((state) => {
  const element = <HTMLElement>state;

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

  element.addEventListener("click", () => {
    console.log("clicked");
  });
})}
  catch(error){
    console.error(error);
}}
renderState();

function createIssue(event) {
    try{
    event.preventDefault(); 
    const issueDate = (<HTMLInputElement>document.getElementById('issueDate')).value;
    const issueType = (<HTMLInputElement>document.getElementById('issueType')).value;
    const issueStatus = (<HTMLInputElement>document.getElementById('issueStatus')).value;

    const table = document.querySelector('.client-requests table tbody') as HTMLTableElement;
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${issueDate}</td>
        <td>${issueType}</td>
        <td class="status clickable">${issueStatus}</td>
    `;

    renderState();

    const issues = JSON.parse(localStorage.getItem('issues')) || [];
    const newIssue = { date: issueDate, type: issueType, status: issueStatus };
    issues.push(newIssue);
    localStorage.setItem('issues', JSON.stringify(issues));

    const form = <HTMLFormElement>document.getElementById('issueForm');
    form.reset();
    }
    catch(error){
        console.error(error);
    }
}
document.getElementById('issueForm').addEventListener('submit', createIssue);

function loadIssues() {
    try{
    const issues = JSON.parse(localStorage.getItem('issues')) || [];
    const table = document.querySelector('.client-requests table tbody') as HTMLTableElement;

    issues.forEach((issue) => {
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${issue.date}</td>
            <td>${issue.type}</td>
            <td class="status clickable">${issue.status}</td>
        `;
    });

    renderState();
    }
    catch(error){
      throw new Error("Error in loadIssues function");
    }
}
loadIssues();

function changeTextColor() {
  try {
    const color = prompt('Enter color (e.g., red, #00FF00):');
    if (color) {
      const table = document.querySelector('.client-requests table tbody');
      const lastRow = table.querySelector('tr:last-child');
      if (lastRow) {
        const cells = lastRow.querySelectorAll('td');
        cells.forEach((cell) => {
          cell.style.color = color;
        });
      }
    }
  }
   catch (error) {
    throw new Error("Error in changeTextColor function");
  }
};

function sortTime() {
  const table = document.querySelector('.client-requests table tbody');
  const rows = Array.from(table.getElementsByTagName('tr'));

  rows.sort((a, b) => {
    const dateA = new Date(a.cells[0].innerText).getTime();
    const dateB = new Date(b.cells[0].innerText).getTime();
    return dateB - dateA;
  });

  rows.forEach(row => table.removeChild(row));

  rows.forEach(row => table.appendChild(row));
}
document.addEventListener('DOMContentLoaded', sortTime);

