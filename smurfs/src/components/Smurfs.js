import React from 'react';
import { connect } from "react-redux";
import { getSmurfs } from "../actions"
import Smurf from "./Smurf";

class Smurfs extends React.Component {
    constructor(){
        super();
        
    }

    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return(
            <div>
                {this.props.smurfs.map(smurf => <Smurf smurf={smurf}/>)}
            </div>
        )

    }
}

const mapStateToProps = state => ({
    smurfs : state.smurfs,
})

export default connect( mapStateToProps, { getSmurfs })(Smurfs);