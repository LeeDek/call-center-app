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
    const { error } = await response.json(); // get data from server
    if (error) throw new Error(error);
  } catch (error) {
    console.error(error);
  }
}
