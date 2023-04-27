async function getUsers() {
    let people = await fetch("https://randomuser.me/api/?results=5");
    let data = await people.json();
    console.log(data);
}

getUsers();

// without await, we will only see a promise

// ----
// Axios equivalent

// async function getUsers() {
//     try {
//       const response = await axios.get('https://randomuser.me/api/?results=5');
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   getUsers();
  