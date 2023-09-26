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
  
      const response = await fetch("/API/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const { error, email, isAdmin } = await response.json(); // get data from server
      console.log(error);
  
      if (error) {
        throw new Error(error);
      }
  
      if (isAdmin) {
        // Redirect admin user to admin.html
        window.location.href = `/admin.html?email=${email}`;
      } else {
        // Redirect regular user to main.html
        window.location.href = `/main.html?email=${email}`;
      }
    } catch (error) {
      console.error(error);
    }
  }