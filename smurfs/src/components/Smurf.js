import React from "react";
import { Link } from "react-router-dom";
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
            <Button onClick={deleteSmurf}>Delete</Button>
            <Link to={`/updateSmurf/${props.smurf.id}`}>
                <Button>Update</Button>
            </Link>
        </div>
    )
}

export default connect(
    null, 
    { deleteSmurf}
)(Smurf) ;