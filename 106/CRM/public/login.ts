async function handleLogin(ev: any) {
  try {
    ev.preventDefault(); // stop form from submitting

    const _user = {
      userName: ev.target.userName,
      password: ev.target.password.value,
      email: ev.target.email.value,
    };

    if (!_user.email || !_user.password) {
      throw new Error("Please complete all fields");
    }

    const response = await fetch("/API/users/userCont/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_user),
    });

    const { error, user } = await response.json(); // get data from server
    console.log(error);
    if (!user.role) throw new Error("cannot detect user role");
    if (error) throw new Error(error);
    if (user.firstEntry) {
      renderUpdateFirstPassword(user._id, user.userName)
    } else {
      switch (user.role) {
        case 'admin':
          window.location.href = `/admin.html`;
          break;

        case 'departmentMng':
          window.location.href = `/manager.html`;
          break;
        case 'user':
          window.location.href = `/main.html`;
          break;
      }
    }

  } catch (error) {
    console.error(error);
  }
}

function renderUpdateFirstPassword(userId: string, name: string) {
  try {
    const html = `
<h2>Hi ${name}</h2>
<h3>It's your first entry to our site. <br> Please create a new password </h3>

<form onsubmit="updatePassword(event, ${userId})">
<input type="password" name="password" placeholder="New password">
<input type="password" name="confirmPassword" placeholder="Confirm password">
<button type="submit">Create</button>
</form>
`

    const loginRoot = document.querySelector('#login') as HTMLDivElement
    loginRoot.innerHTML = html
  } catch (error) {
    console.error(error);

  }
}

async function updatePassword(ev, userId: string) {
  try {
    ev.preventDefault()
    const newPassword = ev.target.password.value
    const confirmPassword = ev.target.confirmPassword.value
    if (newPassword === confirmPassword) {
      const response = await fetch('API/users/userCont/update-password', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newPassword, userId })
      })

      location.reload()
    } else {
      throw new Error("The passwords do not match");

    }
  } catch (error) {
    console.error(error);

  }
}
