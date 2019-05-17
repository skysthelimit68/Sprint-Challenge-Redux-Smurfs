import React from "react";
import { Form, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { addSmurf, updateSmurf } from "../actions";


class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            height:"", 
            id: ""
        }
    }

    componentDidMount() {
        let activeSmurf = {}
        if(this.props.match.params.id) {
            activeSmurf = this.props.smurfs.find( smurf => smurf.id == this.props.match.params.id)
            this.setState({
                name: activeSmurf.name,
                age: activeSmurf.age,
                height: activeSmurf.height,
                id: activeSmurf.id
            })
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
        let id = this.props.match.params.id;
        if(id) {
            this.props.updateSmurf({name:this.state.name, age: this.state.age, height: this.state.height, id: this.state.id})
            .then(() => this.props.history.push('/'))
        } else {
            this.props.addSmurf({name:this.state.name, age: this.state.age, height: this.state.height})
            .then(() => this.props.history.push('/'))
        }
        
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
                    <Button>{`${this.props.match.params.id ? 'Update Smurf' : 'Add New Smurf'}`}</Button>                    
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs : state.smurfs
})

export default connect(
    mapStateToProps, 
    { addSmurf, updateSmurf }
)(SmurfForm);