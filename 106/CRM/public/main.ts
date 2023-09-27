import { calls } from "../API/calls/callsModel";



function renderCalls (callsData, targetElement) {
    // targetElement.innerHTML = ''; // Clear the target element

    // if (!relativesData || relativesData.length === 0) {
    //     targetElement.innerHTML = '<p>No relatives found.</p>';
    //     return;
    // }

    // const relativesList = document.createElement('ul');
    // relativesList.style.listStyle = 'none';

    // relativesData.forEach(relative => {
    //     const relativeItem = document.createElement('li');

    //     const birthDate = new Date(relative.birthDate);
    //     const formattedBirthDate = `${birthDate.getDate()}-${birthDate.getMonth() + 1}-${birthDate.getFullYear()}`;

    //     relativeItem.innerHTML = `
    //     <span style="font-weight: bold">${relative.fullName}</span> is my:
    //     <span style="font-weight: bold">${relative.relation}</span> - born in:
    //     <span style="font-weight: bold">${formattedBirthDate}</span> - lives in:
    //     <span style="font-weight: bold">${relative.country}</span>
    //     <button onclick="handleUpdateRelatives('${relative.id}')">Update</button>
    //     <button onclick="handleDeleteRelatives('${relative.id}')">Delete</button>
    //   `;
    //     relativesList.appendChild(relativeItem);
    // });

    // targetElement.appendChild(relativesList);
}


// A function to get the user's relatives from the server by email
export async function getUserCalls(email: string) {
    // try {
    //     const response = await fetch(`/API/relatives/get-user-relatives?email=${email}`);
    //     const data = await response.json();
    //     console.log(data);

    //     // Assuming you have a rendering function for relatives, e.g., renderRelatives
    //     renderRelatives(data.relatives, document.querySelector("#relatives"));
    // } catch (error) {
    //     console.error(error);
    // }
}


export async function handleDeleteCalls(relativeId: string) {
//     try {
//         console.log(relativeId);
//         const response = await fetch(`/API/relatives/delete-relative/${relativeId}`, {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.status === 200) {
//             const result = await response.json();
//             if (result && result.relativeDB) {
//                 console.log("Relative deleted successfully.");
//                 // Update the UI or take other actions here.
//             } else {
//                 console.error("Server response is missing 'relativeDB' property.");
//             }
//         } else if (response.status === 404) {
//             console.error("Relative not found");
//         } else {
//             // Handle other status codes or errors
//             const errorData = await response.json(); // Parse error response from server
//             console.error("Error:", errorData.error); // Display the specific error message from the server
//         }

//     } catch (error) {
//         console.error("An unexpected error occurred:", error);
//     }
// }

// async function handleGetUserAndRelatives (){
//     try {
        
//         const response = await fetch("API/users/userWithRelatives")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.error(error)
        
//     }
}






