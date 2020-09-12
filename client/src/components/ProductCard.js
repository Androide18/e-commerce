import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn } from "mdbreact";
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch } from 'react-redux';


function ProductCard(props) {
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  //const dispatch = useDispatch();

  //  useEffect(() => {
  //    dispatch(detailsProduct(props.match.params.id));
  //    return () => {
  //      //
  //    };
  //  }, [])

  const handleAddtoCart = () => {
    props.history.push("/carrito/" + props.match.params.id + "?qty=" + qty)
  }

  return (
    <div>
      {loading ? <div>Cargando...</div> :
        error ? <div>{error}</div> :
          (
            <MDBCard className="m-2" style={{ width: "18rem" }} cascade ecommerce wide>
              <Link to={'/products/' + props.id}>
                <MDBCardImage
                  cascade
                  top
                  src={`http://localhost:3001/static/${props.image}`}
                  waves
                  style={{ height: '15rem' }}
                />
              </Link>
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle tag="h5">{props.brand}</MDBCardTitle>
                <MDBCardTitle>
                  <Link to={'/products/' + props.id}>
                    <strong>{props.name}</strong>
                  </Link>
                </MDBCardTitle>
                {/* <MDBCardText  style={{ overflow: "hidden", width: "50%", height: "1rem" }} >
                  {props.description}
                </MDBCardText> */}
                <MDBCardFooter>
                  <span className="float-left">${props.price}</span>
                  {/* <li>
              Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
              {[Array(props.stock).keys()].map(x=>
              <option value={x+1}>{x+1}</option>
              )}
              </select>
            </li> */}
                  <span className="float-right">
                    <IconButton color="primary" aria-label="add to shopping cart">
                      <AddShoppingCartIcon />
                      {props.stock > 0 ? <button onClick={handleAddtoCart} />
                        :
                        <div>Sin Stock</div>}
                    </IconButton>
                    <MDBTooltip placement="top">
                      <MDBBtn tag="a" href="" target="_blank"
                        color="transparent" size="lg"
                        className="p-1 m-0 mr-2 z-depth-0" >
                        <MDBIcon icon="share-alt" />
                      </MDBBtn>
                      <div>Compartir</div>
                    </MDBTooltip>
                    <MDBTooltip placement="top">
                      <MDBBtn tag="a" color="transparent" size="lg"
                        className="p-1 m-0 z-depth-0" >
                        <MDBIcon icon="heart" className="red-text" />
                      </MDBBtn>
                      <div>Añadir a Favoritos</div>
                    </MDBTooltip>
                  </span>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          )
      }
    </div>
  )
}
export default ProductCard;

