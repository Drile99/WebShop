import Reac, {useRef} from 'react';
import { useParams, Link } from 'react-router-dom';

const Single = ({items, cart, setCart}) => {

  let params = useParams();
  const qty = useRef(0);

  const addToCart = () => {
    let newCartItem = {
      id: items[params.singleId].id,
      title: items[params.singleId].title,
      price: items[params.singleId].price,
      desc: items[params.singleId].desc,
      qty: qty.current.value,
      img: items[params.singleId].img
    };
    //let temp =[...cart];
    setCart((prev) => {
      return [...prev, newCartItem];
    })
    
  }

  let options = [];
  for (let i = 1; i <= items[params.singleId].qty; i++) {
    
    options.push(<option key={i} value={i}>{i}</option>)
    
  }

  return (
    <>
    
      {/* <!-- shop heading --> */}
      <section className="shopHeading text-center bg-light py-5">
          <h2 className="fw-bolder">Single product page</h2>
          <p className="fw-lighter">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </section>

      {/* <!-- single  --> */}
      <section className="single py-5">
        <article className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={'../' + items[params.singleId].img} alt="" className="img-fluid border shadow-lg"/>
            </div>
            <div className="col-md-6">
              <div className="price d-flex justify-content-between">
                <h5 className="card-title">{items[params.singleId].title}</h5>
                <h5>${items[params.singleId].price}</h5>
              </div>
              <select ref={qty} className="form-select" aria-label="Default select example">
                {options}
                  {/* <option selected>Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option> */}
              </select>
              <p className="card-text">{items[params.singleId].desc}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa facere illo magni similique unde ut,repudiandae reiciendis sit recusandae. </p>
              <Link onClick={addToCart} className="button" to="/">Add to cart</Link>
            </div> 
          </div>
        </article>
      </section>
    </>
  )
}

export default Single