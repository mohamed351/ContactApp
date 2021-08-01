import React from 'react';
import { ListGroup } from 'react-bootstrap';
import "./CantactCard.css"

export class ContactCard extends React.Component {
    render() {

        const { contact, removeUserHandler } = this.props;

        return (
            <ListGroup.Item>
                <div className="item-flex-space-between">
                    <div className="item-flex">
                        <div className="image-cover" style={{ backgroundImage: `url(${contact.avatar})`, width: 50, height: 50, backgroundSize: "cover", borderRadius: "50%" }}></div>
                        <div className="spliter"></div>
                        <div className="info-Card">
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                            <p>{contact.phone}</p>
                        </div>



                    </div>
                    <div>
                        <button onClick={() => removeUserHandler(contact)} className="btn btn-danger">
                            <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </ListGroup.Item>
        )
    }
}