
import React, { Component } from "react";
import { connect } from "react-redux";
import { cartOperations } from "../../state/features/cart";
import { dictionary } from "../utilities";

class Main extends Component {

    render () {
        return (<div>
               Main
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);