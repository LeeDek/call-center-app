function renderState(){
    try{
const states = document.querySelectorAll(".status");
console.log('states');
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