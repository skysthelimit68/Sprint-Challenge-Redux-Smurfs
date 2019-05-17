import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteSmurf} from "../actions";
import { Button, Toast, ToastBody, ToastHeader, ButtonGroup } from 'reactstrap';
import "./bootstrapOverride.css";

const Smurf = props => {

    const deleteSmurf = event => {
        event.preventDefault();
        props.deleteSmurf(props.smurf.id)
    }



    return (
        <div className="p-3 bg-info my-2 rounded smurf">
                <Toast>
                    <ToastHeader>{props.smurf.name}
                    <button type="button" className="close rightClose" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>                    
                        </ToastHeader>
                    <ToastBody>
                        <p>Age: {props.smurf.age}</p>
                        <p>Height: {props.smurf.height}</p>
                    </ToastBody>
                    <ButtonGroup>
                        <Button onClick={deleteSmurf}>Delete</Button>
                        
                            <Button><Link to={`/updateSmurf/${props.smurf.id}`}>Update</Link></Button>
                        
                    </ButtonGroup>
            </Toast>
        </div>
    )
}

export default connect(
    null, 
    { deleteSmurf}
)(Smurf) ;