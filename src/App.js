// src/App.js

import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
export default App;

function App() {
  const arrFive = contacts.slice(0, 5);
  // eslint-disable-next-line
  const [contactList, setContactList] = useState(arrFive);
  function Aleatoria() {
    const randomIndex = Math.ceil(Math.random() * contacts.length);
    setContactList([...contactList, contacts[randomIndex]])
  }
  const sortedList = [...contactList]
  function sortedByAlpha() {
    const sortedByAlpha = sortedList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    setContactList(sortedByAlpha)
  }
  const popularList = [...contactList]
  function sortedByPopu() {
    const sortedByPopu = popularList.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    setContactList(sortedByPopu)
  }


  return (<div className="App">
    <button onClick={Aleatoria}>Add random!</button>
    <button onClick={sortedByAlpha}>Alphabetical order</button>
    <button onClick={sortedByPopu}>Popularity order</button>

    <table>
      <tr>
        <th >Picture</th>
        <th >Name</th>
        <th >Popularity</th>
        <th >Won an Oscar</th>
        <th >Won an Emmy</th>
      </tr>

      {contactList.map((contact) => (
        <tr>
          <td><img src={contact.pictureUrl} class="foto" alt="IMG"></img></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          {contact.wonOscar ? (<td>🏆</td>) : (<td></td>)}
          {contact.wonEmmy ? (<td>🏆</td>) : (<td></td>)}
        </tr>
      ))}
    </table>
  </div>
  )
}