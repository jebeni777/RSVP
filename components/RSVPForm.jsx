import * as React from 'react';
import Axios from 'axios';
import Select from './Select';

const guestsOptions = ["1", "2", "3", "4"];
export default class RSVPForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            numGuests: "",
            foodBring: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => {
            return {
                [name]: value
            }
        }, () => console.log(this.state)
        )
    }

    onSubmit(e) {
        e.preventDefault();
        let userData = this.state;
        Axios.post('http://localhost:5000/RSVP', userData)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    title={"First Name"}
                    name={"firstName"}
                    value={this.state.firstName}
                    placeholder={"Enter your first name"}
                    onChange={this.onChange}
                />{" "}
                <input
                    type="text"
                    title={"Last Name"}
                    name={"lastName"}
                    value={this.state.lastName}
                    placeholder={"Enter your last name"}
                    onChange={this.onChange}
                />{" "}
                <Select
                    title={"Guests"}
                    name={"numGuests"}
                    options={guestsOptions}
                    value={this.state.numGuests}
                    placeholder={"Number of Guests"}
                    onChange={this.onChange}
                />{" "}
                <input
                    type="text"
                    title={"Food Bringing"}
                    name={"foodBring"}
                    value={this.state.foodBring}
                    placeholder={"Enter your what food you're bringing"}
                    onChange={this.onChange}
                />{" "}

                <input type="submit" value="Submit" />

            </form>
        );
    }
}