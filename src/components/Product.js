import { useState, React } from 'react';

const Product = (props) => {
  const [added, setAdded] = useState(false);
  let handleClick = () => {
    setAdded( !added);
    props.countMethod(!added, props.name);
  }
    
  return (
    <div>
      <button onClick={handleClick} className={added ? "outline" : "" }>
        {props.name}
      </button>
    </div>
  )
}
 
export default Product;