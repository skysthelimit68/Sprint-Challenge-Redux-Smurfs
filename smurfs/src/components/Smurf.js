import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteSmurf} from "../actions";
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';
const Smurf = props => {

    const deleteSmurf = event => {
        event.preventDefault();
        props.deleteSmurf(props.smurf.id)
    }



    return (
        <div className="p-3 bg-info my-2 rounded">
                    <Toast>
                    <ToastHeader>{props.smurf.name}</ToastHeader>
                    <ToastBody>
                        <p>Age: {props.smurf.age}</p>
                        <p>Height: {props.smurf.height}</p>
                    </ToastBody>
                    <Button onClick={deleteSmurf}>Delete</Button>
                    <Link to={`/updateSmurf/${props.smurf.id}`}>
                        <Button>Update</Button>
                    </Link>
            </Toast>
        </div>
    )
}

export default connect(
    null, 
    { deleteSmurf}
)(Smurf) ;