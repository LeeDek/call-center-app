enum Relation {
  Choose = "Choose",
  Mother = "Mother",
  Father = "Father",
  Brother = "Brother",
  Sister = "Sister",
  Sibling = "Sibling",
  Spouse = "Spouse",
  Son = "Son",
  Daughter = "Daughter",
  Granddaughter = "Granddaughter",
  Grandson = "Grandson",
  Uncle = "Uncle",
  Aunt = "Aunt",
  Cousin = "Cousin",
  Niece = "Niece",
  Nephew = "Nephew",
  Other = "Other"
}

interface Relative {
  id: string;
  fullName: string;
  birthDate: string;
  country: string;
  relation: Relation;
}

// Function to add a relative for a user
async function handleAddRelative(event) {
  try {
      event.preventDefault();

      const email = getEmailFromQuery();
      if (!email) throw new Error("No email");

      const fullName = event.target.elements.fullName.value;
      const birthDate = event.target.elements.birthDate.value;
      const country = event.target.elements.country.value;

      // Cast the relationSelect element to HTMLSelectElement
      const relationSelect = <HTMLSelectElement>document.getElementById('relation');
      const selectedRelation = relationSelect.value;

      if (!fullName || !birthDate || !country || selectedRelation === Relation.Choose) {
          throw new Error("Please complete all fields and select a valid relation");
      }

      // Associate the new relative with the user by using their email.
      const newRelative = {
          fullName: fullName,
          birthDate: birthDate,
          country: country,
          relation: selectedRelation,
          userEmail: email, // Include the selected relation
      };

      const response = await fetch('/API/relatives/add-relative', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newRelative),
      });

      if (!response.ok) {
          throw new Error(`Server returned ${response.status} ${response.statusText}`);
      }

      const { relatives } = await response.json();
      console.log(relatives);

      await handleGetRelatives();

    } catch (error) {
      console.error(error);
  }
}

// Function to get user's relatives from the server
async function getRelativesFromServer(email: string) {
  try {
    const response = await fetch(`/API/relatives/get-user-relatives?email=${email}`);
    const data = await response.json();
    return data.relatives;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Render relatives to the screen
async function handleGetRelatives() {
  try {
    const email = getEmailFromQuery();
    if (!email) throw new Error("No email");
    const relatives = await getRelativesFromServer(email);
    console.log(relatives);
    renderRelatives(relatives, document.querySelector("#relatives"));
  } catch (error) {
    console.error(error);
  }
}


function getEmailFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('email');
}