import React from "react";
import productTile from "../components/productTile";
import {Link} from "react-router-dom";


export default class Cart extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            cart:[]
        }
    }
    componentsDidMount(){
        this.initCart();
    }
    initCart(){
        let myCart=localStorage.getItem('cart')
        myCart=JSON.parse(myCart)
        this.setState({
            cart: myCart || []
        })
    }
    clearCart() {
        localStorage.setItem('cart', JSON.stringify([]))
        this.setState({
            cart: []
        })
    }

    render()
    {
        const productsList=this.state.cart.map((product)=> {
            return productTile(null,product)
        })
        return(
        <div>
           {productsList}
        </div>
        )
    }
}