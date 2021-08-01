import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import { Fragment, useState } from 'react'
import Header from './Components/Header';
import ContactList from './Pages/ContactList';
import CreateContact from './Pages/ContactCreate';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {

  const [getContact, setContact] = useState({
    contacts: [
      {
        id: 1,
        name: "Mohamed",
        phone: "01024181643",
        email: "mohamed.amer351@gmail.com",
        avatar: "https://avatars.githubusercontent.com/u/34129557?v=4"
      },
      {
        id: 2,
        name: "Amr",
        phone: "01024181643",
        email: "amr351@gmail.com",
        avatar: "https://avatars.githubusercontent.com/u/34129557?v=4"
      }, {
        id: 3,
        name: "Amir",
        phone: "01024181643",
        email: "amir@gmail.com",
        avatar: "https://avatars.githubusercontent.com/u/34129557?v=4"
      }
    ]
  });

  const onContactRemoved = (contact) => {
    setContact((state) => ({
      contacts: state.contacts.filter(a => a.id !== contact.id)
    }))


  }

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" render={() => {
          return <ContactList onContactRemoved={onContactRemoved} contacts={getContact.contacts} />
        }}>

        </Route>
        <Route path="/create">
          <CreateContact />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
