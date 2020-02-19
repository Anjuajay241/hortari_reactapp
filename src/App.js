import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import productTile from './components/productTile';



class App extends React.Component {
  componentDidMount()
{ this.loadProducts()
this.initCart();
 }

  constructor(props) {
    super(props);
    this.state = {
      cartcount: 0,
      alertOncartcount: 10,
      products: [],
      cart: []
    }
  }
  initCart()
  { let myCart = localStorage.getItem('cart')
myCart = JSON.parse(myCart)
this.setState({
  cart: myCart || []
})
}

viewCart()
{
  console.log(this.state.cart)
}
  addToCart(product)
  {
    const newCart = this.state.cart;
    newCart.push(product);
   localStorage.setItem('cart',JSON.stringify(newCart))
   this.setState({
      cart: newCart
    })
  }
  

  loadProducts() {
    let url = 'https://my-json-server.typicode.com/shiyasvp92/sample_products/products'
    let options = {
      method: 'GET'
    }

    fetch(url, options)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          products: data
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  render() {
    const productsList = this.state.products.map((product) => {
      return productTile(this.addToCart.bind(this), product)
    })

    
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <a className="navbar-brand" href="#">Navbar</a>
          <Link to="/cart">
          <button  className="right" type="button" onClick={()=>{this.viewCart();}}>
            Cart({this.state.cart.length})
        </button>
        </Link>
        </nav>
        <div className="container">
          <div className="row">
            <h2>Products</h2>
          </div>
          <div className="row">
            {productsList}
          </div>
          <div className="row d-flex justify-content-end">
            <button className="btn btn-primary" id="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;