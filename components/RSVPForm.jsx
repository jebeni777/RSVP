import * as React from 'react';
import { render } from 'react-dom';
import Axios from 'axios';

export default class RSVPForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RSVP: {
                firstName: "",
                lastName: "",
                numGuests: "",
                foodBring: ""
            },

            guestsOptions: ["1", "2", "3", "4"],
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                RSVP: {
                    ...prevState.RSVP,
                    [name]: value
                }
            }),
            () => console.log(this.state.RSVP)
        );
    }

    onSubmit(e) {
        e.preventDefault();
        let userData = this.state.RSVP;
        Axios.post('http://localhost:5000',
            {
                RSVP: {
                    name: firstName,
                    name: lastName,
                    name: numGuest,
                    name: foodBring
                }
            })
        console.log('A guest submitted: ' + this.state.RSVP);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    title={"First Name"}
                    name={"firstName"}
                    value={this.state.RSVP.firstName}
                    placeholder={"Enter your first name"}
                    onChange={this.onChange}
                />{" "}
                <input
                    type="text"
                    title={"Last Name"}
                    name={"lastName"}
                    value={this.state.RSVP.lastName}
                    placeholder={"Enter your last name"}
                    onChange={this.onChange}
                />{" "}
                <select
                    title={"Guests"}
                    name={"numGuests"}
                    options={this.state.numGuests}
                    value={this.state.RSVP.numGuests}
                    placeholder={"Number of Guests"}
                    onChange={this.onChange}
                />{" "}
                <input
                    type="text"
                    title={"Food Bringing"}
                    name={"foodBring"}
                    value={this.state.RSVP.foodBring}
                    placeholder={"Enter your what food you're bringing"}
                    onChange={this.onChange}
                />{" "}

                <input type="submit" value="Submit" />

            </form>
        );
    }
}