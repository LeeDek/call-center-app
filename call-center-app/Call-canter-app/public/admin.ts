import { relatives } from "../API/calls/callsModel";



function renderRelatives(relativesData, targetElement) {
    targetElement.innerHTML = ''; // Clear the target element

    if (!relativesData || relativesData.length === 0) {
        targetElement.innerHTML = '<p>No relatives found.</p>';
        return;
    }

    const relativesList = document.createElement('ul');
    relativesList.style.listStyle = 'none';

    relativesData.forEach(relative => {
        const relativeItem = document.createElement('li');

        const birthDate = new Date(relative.birthDate);
        const formattedBirthDate = `${birthDate.getDate()}-${birthDate.getMonth() + 1}-${birthDate.getFullYear()}`;

        relativeItem.innerHTML = `
        <span style="font-weight: bold">${relative.fullName}</span> is my:
        <span style="font-weight: bold">${relative.relation}</span> - born in:
        <span style="font-weight: bold">${formattedBirthDate}</span> - lives in:
        <span style="font-weight: bold">${relative.country}</span>
        <button onclick="handleUpdateRelatives('${relative.id}')">Update</button>
        <button onclick="handleDeleteRelatives('${relative.id}')">Delete</button>
      `;
        relativesList.appendChild(relativeItem);
    });

    targetElement.appendChild(relativesList);
}



async function handleGetAllUsersRelatives() {
    try {
      const response = await fetch('/API/users/userWithRelatives');
      const data = await response.json();
  
      if (data.user) {
        const userRelativesContainer = document.querySelector("#user-relatives-container");
        userRelativesContainer.innerHTML = ''; // Clear the container
  
        const user = data.user;
  
        const userName = document.createElement('h2');
        userName.textContent = user.userName || 'User Name';
  
        const relativesList = document.createElement('ul');
        relativesList.style.listStyle = 'none';
  
        user.familyMembers.forEach(relative => {
          const relativeItem = document.createElement('li');
  
          const birthDate = new Date(relative.birthDate);
          const formattedBirthDate = `${birthDate.getDate()}-${birthDate.getMonth() + 1}-${birthDate.getFullYear()}`;
  
          relativeItem.innerHTML = `
            <span style="font-weight: bold">${relative.fullName}</span> is my:
            <span style="font-weight: bold">${relative.relation}</span> - born in:
            <span style="font-weight: bold">${formattedBirthDate}</span> - lives in:
            <span style="font-weight: bold">${relative.country}</span>
            <button onclick="handleUpdateRelatives('${relative._id}')">Update</button>
            <button onclick="handleDeleteRelatives('${relative._id}')">Delete</button>
          `;
          relativesList.appendChild(relativeItem);
        });
  
        userRelativesContainer.appendChild(userName);
        userRelativesContainer.appendChild(relativesList);
      } else {
        console.log("No user and relatives found.");
      }
    } catch (error) {
      console.error("An error occurred while fetching and rendering users and relatives:", error);
    }
  }
  
  // Call the function when the admin page loads
  window.addEventListener('load', handleGetAllUsersRelatives);


export async function handleDeleteRelatives(relativeId: string) {
    try {
        console.log(relativeId);
        const response = await fetch(`/API/relatives/delete-relative/${relativeId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            const result = await response.json();
            if (result && result.relativeDB) {
                console.log("Relative deleted successfully.");
                // Update the UI or take other actions here.
            } else {
                console.error("Server response is missing 'relativeDB' property.");
            }
        } else if (response.status === 404) {
            console.error("Relative not found");
        } else {
            // Handle other status codes or errors
            const errorData = await response.json(); // Parse error response from server
            console.error("Error:", errorData.error); // Display the specific error message from the server
        }

    } catch (error) {
        console.error("An unexpected error occurred:", error);
    }
}





