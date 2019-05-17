import React from "react";
import { Form, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { addSmurf } from "../actions";


class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            height:""
        }
    }
    updateField = event => {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addSmurf({name:this.state.name, age: this.state.age, height: this.state.height})
        .then(() => this.props.history.push('/'))
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input 
                        name="name"
                        value={this.state.name}
                        placeholder="name"
                        onChange={this.updateField}
                        type="text"
                    />
                    <Input 
                        name="age"
                        value={this.state.age}
                        placeholder="age"
                        onChange={this.updateField}
                        type="number"
                    />
                    <Input 
                        name="height"
                        value={this.state.height}
                        placeholder="height"
                        onChange={this.updateField}
                        type="text"
                    />
                    <Button type="submit">Add Smurf</Button>
                </Form>
            </div>
        )
    }
}



export default connect(
    null, 
    { addSmurf }
)(SmurfForm);