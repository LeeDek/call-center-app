import { Status } from '../API/enums/status';

enum Departments {}

interface Calls {
  id: string;
  phone: string;
  date: string;
  dep: Departments;
}

const sortStatusButton = document.getElementById("sortStatus");

sortStatusButton.addEventListener("click", async () => {
  const currentStatus = Status.Open;
  try {
    const response = await fetch("/api/calls/getCallsByStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: currentStatus }),
    });
    const data = await response.json();
    const callsDB = data.callsDB;

    // Update the table with the sorted data
    updateTableWithSortedData(callsDB);
  } catch (error) {
    console.error(error);
  }
});

function updateTableWithSortedData(sortedData) {
  const tableBody = document.querySelector(".client-requests tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  // Loop through sorted data and render rows
  sortedData.forEach((call) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${call.date}</td>
      <td>${call.dept}</td>
      <td>${call.status}</td>
    `;
    tableBody.appendChild(row);
  });
}

const callsData = [
  {
    date: "1-10-2023",
    requestType: "אין מיזוג בבית הספר הדמוקרטי",
    dept: "Operations",
    status: "Fixed",
  },

  {
    date: "30-09-2023",
    requestType: "משאית נתקעה ברחוב אהובה עוזרי",
    dept: "Operations",
    status: "Fixed",
  },
  // Add more call objects here
];

// Function to render the table rows based on data
function renderCalls(callsData) {
  const table= document.querySelector(".requests table");

  // Clear the existing table rows
  table.innerHTML = "";

  // Loop through the calls data and create table rows
  callsData.forEach((callsData) => {
    const row = document.createElement("tr");

    // Create table cells for each column
    const dateCell = document.createElement("td");
    dateCell.textContent = callsData.date;

    const deptCell = document.createElement("td");
    deptCell.textContent = callsData.dept;

    const statusCell = document.createElement("td");
    statusCell.textContent = callsData.status;
    statusCell.classList.add("status", "clickable");

    // Append the cells to the row
    row.appendChild(dateCell);
    row.appendChild(deptCell);
    row.appendChild(statusCell);

    // Append the row to the table body
    table.appendChild(row);
  });
}

// Call the render function with your data
renderCalls(callsData);