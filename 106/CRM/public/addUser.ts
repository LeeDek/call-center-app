function renderAddUser() {
  try {
    const html=`
    <h2>Add new user</h2>
    <form onsubmit=" handleRegister(event)">
        <label for="userName">Name</label>
        <input type="text" name="userName">
        <label for="email">Email</label>
        <input type="email" name="email">
        <label for="role">Role</label>
        <select name="role">
            <option value="user">User</option>
            <option value="DeptManager">DeptManager</option>
            <option value="Admin">Admin</option>
        </select>
        <button type="submit">Add</button>
    </form>`
    const ShowNewUserRoot = document.querySelector('#newUser') as HTMLDivElement
    ShowNewUserRoot.innerHTML = html
  } catch (error) {
    console.error(error);
  }
}


async function handleRegister(ev: any) {
  try {
    ev.preventDefault(); // stop form from submitting
    const user = {
      userName: ev.target.userName.value,
      email: ev.target.email.value,
      role: ev.target.role.value,
    };

    const response = await fetch("/API/users/add-user", {
      // send data to server
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const { error, userDB, firstPassword } = await response.json(); // get data from server
    if (error) throw new Error(error);

    renderNewUser(userDB._id, firstPassword)
  } catch (error) {
    console.error(error);
  }
}

async function renderNewUser(userId: string, firstPassword: string) {
  try {
    const response = await fetch(`API/users/userCont/get-user?id=${userId}`)
    const result = await response.json()
    const { user } = result

    const html = `
        <h2>New user added</h2>
        <h3>Name:${user.userName}</h3>
        <p>Role:${user.role}</p>
        <p>Email:${user.email}</p>
        <p>Initial password:${firstPassword}</p>`
    const ShowNewUserRoot = document.querySelector('#newUser') as HTMLDivElement
    ShowNewUserRoot.innerHTML = html
  } catch (error) {
    console.error(error);

  }
}

// const picturesDB = await PictureModel.find({})
// res.send({ pictures: picturesDB })
 
