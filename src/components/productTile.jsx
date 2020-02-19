import React from "react"
export default function productTile(addToCart,product){
    return(
      <div className="col-md-4 col-lg-3 col-sm-12" key={product.id}>
      <div className="card mb-3" style={{"maxWidth": "540px", "color": "red"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.image} className="card-img" width="100%" height="100%" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" id="#first-title">{product.title}</h5>
              <h5 className="card-title" id="#first-title">{product.price}</h5>
              
              <div>
                <button className="btn btn-primary add-btn"
                onClick={()=>{ addToCart(product)}}
                >add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    )
  }