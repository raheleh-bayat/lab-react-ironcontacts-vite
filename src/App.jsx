import "./App.css";
import contactsJson from "./contacts.json";
import { useState } from "react";

function App() {
  const[contacts, setContacts] = useState(contactsJson.slice(0, 5))
   const remainingContacts = contactsJson.slice(5); 

   const addRandomContact = () => {
     if (remainingContacts.length === 0) {
       alert("No more contacts to add!");
       return;
     }
     const randomIndex = Math.floor(Math.random() * remainingContacts.length);
     const randomContact = remainingContacts[randomIndex];
     const updatedContacts = [...contacts, randomContact];
     setContacts(updatedContacts);
     remainingContacts.splice(randomIndex, 1);
   };
    const sortByName = () => {
      const sortedContacts = [...contacts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setContacts(sortedContacts);
    };

    const sortByPopularity = () => {
      const sortedContacts = [...contacts].sort(
        (a, b) => b.popularity - a.popularity
      );
      setContacts(sortedContacts);
    };
      const removeContact = (id) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(updatedContacts);
      };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((oneContact) => {
            return (
              <tr key={oneContact.id}>
                <td>
                  <img
                    src={oneContact.pictureUrl}
                    style={{ height: "200px" }}
                  ></img>
                </td>
                <td>{oneContact.name}</td>
                <td>{oneContact.popularity}</td>
                <td>{oneContact.wonOscar ? "🏆" : ""}</td>
                <td>{oneContact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button onClick={() => removeContact(oneContact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
