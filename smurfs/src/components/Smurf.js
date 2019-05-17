import React from "react";
//import { connect } from "tls";
import { connect } from "react-redux";
import { deleteSmurf} from "../actions";
import { Button } from "reactstrap";

const Smurf = props => {

    const deleteSmurf = event => {
        event.preventDefault();
        props.deleteSmurf(props.smurf.id)
    }

    return (
        <div>
            <h4>{props.smurf.name}</h4>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <button>hello</button>
            <Button onClick={deleteSmurf}>Delete</Button>
        </div>
    )
}



export default connect(
    null, 
    { deleteSmurf}
)(Smurf) ;