function renderState(){
    try{
const states = document.querySelectorAll(".status");
states.forEach((state) => {
  const element = <HTMLElement>state;

  if (element.innerHTML == "Fixed") {
    element.style.color = "white";
    element.style.backgroundColor = "lime";
  }

function renderState() {
  try {
    const states = document.querySelectorAll(".status");
    console.log("states");
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
    });
  } catch (error) {
    console.error(error);
  }
}
renderState();

function createIssue(event) {
  try {
    event.preventDefault();
    const callerName = (<HTMLInputElement>document.getElementById("callerName"))
      .value;
    const callerPhone = (<HTMLInputElement>(
      document.getElementById("callerPhone")
    )).value;
    const issueInfo = (<HTMLInputElement>document.getElementById("issueInfo"))
      .value;
    const issueStatus = (<HTMLInputElement>(
      document.getElementById("issueStatus")
    )).value;
    const callDepartment = (<HTMLInputElement>(
      document.getElementById("issueInfo")
    )).value;

    const inputs = {
      callerName,
      callerPhone,
      issueInfo,
      issueStatus,
      callDepartment,
    };
    addCallToMongo(inputs);

    const table = document.querySelector(
      ".client-requests table tbody",
    ) as HTMLTableElement;
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${callerName}</td>
        <td>${issueInfo}</td>
        <td class="status clickable">${issueStatus}</td>
    `;

    renderState();

    const issues = JSON.parse(localStorage.getItem("issues")) || [];
    const newIssue = { date: callerName, type: issueInfo, status: issueStatus };
    issues.push(newIssue);
    localStorage.setItem("issues", JSON.stringify(issues));

    const form = <HTMLFormElement>document.getElementById("issueForm");
    form.reset();
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("issueForm").addEventListener("submit", createIssue);

async function addCallToMongo(inputs: Object) {
  try {
    const postInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YourAccessToken",
      },
      body: JSON.stringify(inputs),
    };

    const response = await fetch("/API/calls//add-call", postInit);
    const { ok } = await response.json();
    if (!ok) {
      throw new Error("Error in server side, call was not create successfuly");
    }
  } catch (error) {
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
