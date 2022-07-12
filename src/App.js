// src/App.js

import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
export default App;

function App() {
  const arrFive = contacts.slice(0, 5);
  // eslint-disable-next-line
  const [contactList, setContactList] = useState(arrFive);
  function Aleatoria (){
  console.log(contacts.length)
  const randomIndex = Math.ceil(Math.random()*contacts.length);
  setContactList([...contactList, contacts[randomIndex]])
  }

  return (<div className="App">
 <button onClick = {Aleatoria}>Add random!</button>
 
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