
import React, { Component } from "react";
import { connect } from "react-redux";
import { homeOperations} from "../../state/features/home"
import { dictionary } from "../utilities";

class Home extends Component {

    componentDidMount( ){
        this.props.fetchHomepage('FETCH_HOME')
    }

    render(){
        return (<div>{ dictionary.title }</div>)
    }
}

const mapStateToProps = ( state ) => {
    console.log(state);
    return {
        homepage: state.homepage.details,
    }
}

const mapDispatchToProps = {
    fetchHomepage: homeOperations.fetchDetails,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );