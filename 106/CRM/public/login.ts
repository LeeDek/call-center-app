async function handleLogin(ev: any) {
  try {
    ev.preventDefault(); // stop form from submitting

    const user = {
      password: ev.target.password.value,
      email: ev.target.email.value,
    };

    if (!user.email || !user.password) {
      throw new Error("Please complete all fields");
    }

    const response = await fetch("/API/users/userCont/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const { error, role } = await response.json(); // get data from server
    console.log(error);
    if (!role) throw new Error("cannot detect user role");

    if (error) throw new Error(error);

switch (role) {
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

  } catch (error) {
    console.error(error);
  }
}