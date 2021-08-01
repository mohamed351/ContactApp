// import {} from 'react-bootstrap';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ContactCard } from '../Components/ContactCard';

export default class ContactList extends React.Component {


    render() {
        return (
            <ListGroup>
                {this.props.contacts.map(a => {
                    return <ContactCard removeUserHandler={this.props.onContactRemoved} key={a.id} contact={a}></ContactCard>
                })}

            </ListGroup>
        )
    }
}