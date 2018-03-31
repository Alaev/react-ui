
import React, { Component } from "react";
import { connect } from "react-redux";
import { cartOperations } from "../../state/features/cart";
import styled from 'react-emotion';
import { dictionary } from "../utilities";

const product = { id: 1, name: 'apple' };
const productB = { id: 2, name: 'banana' };
const quantity = 2
const newQ = 5
const localStorage = null

const Toast = styled('div')`
    color:white;
    background-color:blue;
    width:200px;
`;


class Home extends Component {
    componentDidMount () {
        if(localStorage) {
            return this.props.setCart(localStorage);
        }
    }

    render () {
        return (
            <React.Fragment>
                <p>{dictionary.title}</p>

                <h2>cart </h2>
                <Toast> Some Toast </Toast>
                <button onClick={() => this.props.addToCart(product, quantity)}>addToCart</button>
                <button onClick={() => this.props.addToCart(productB, quantity)}>addSecondOption</button>
                <button onClick={() => this.props.changeQuantity(productB, newQ)}>updateQuantity</button>
                <button onClick={() => this.props.removeFromCart(productB.id)}>removeFromCart</button>
                <button onClick={() => this.props.clearCart()}>clearCart</button>

                <br />
                count item: {this.props.getCartItemQuantity}
                <pre>{
                    JSON.stringify(this.props.cart, null, 2)
                }</pre>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    getCartItemQuantity: cartOperations.getCartItemQuantity(state)
});

const mapDispatchToProps = {
    addToCart: cartOperations.addToCart,
    changeQuantity: cartOperations.changeQuantity,
    removeFromCart: cartOperations.removeFromCart,
    clearCart: cartOperations.clearCart,
    setCart: cartOperations.setCart,

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);