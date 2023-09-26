// A function to get the email from the URL query
function _getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

const email = _getEmailFromQuery();
console.log(email);



async function getUserData(email) {
    try {
        const response = await fetch(`/API/users/get-user-data?email=${email}`);
        const data = await response.json();
        console.log(data);

        // Perform actions with user data here
    } catch (error) {
        console.error(error);
    }
}

function handleGetUsers() {
    const email = _getEmailFromQuery(); // Get the user's email from the URL query
    if (!email) {
        console.error("Email not found in URL query.");
        return;
    }

    // Perform actions to get user data based on the user's email
    console.log(`Getting user data for email: ${email}`);

    // You can use the user's email to fetch their data or perform other actions here.
    // Make AJAX requests, fetch user data, etc.

    // For example, you can fetch user data as follows:
    getUserData(email);
}


// function handleGetUser() {
//     const toHtml = document.querySelector('#userRoot');
//     const html = `
//     <h2>Add User</h2>
//     <form onsubmit="handleAddUser(event)">
//         <input type="text" name="name" placeholder="user name">
//         <input type="number" name='phoneNum' placeholder="phoneNum">
//         <input type="url" name="imgUrl" placeholder="Image URL">
//         <button type="submit">ADD</button>
//     </form>`

//     toHtml.innerHTML += html
// }

