import QuantityPicker from './quantityPicker';
import './item.css'
import { useState } from 'react';

const Item = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        console.log("Adding to cart");
    }

    const handleQuantityChange = (val) => {
        console.log("quantity change", val);
        setQuantity(val)
    };

    const getControls = () => {
        return (
            <div className="controls">
                <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
                <button onClick={handleAdd} className="btn btn-sm btn-primary">Add to cart</button>
            </div>
        )
    }

    const getTotal = () => {
        let price = 10;
        return price * quantity;
    }

    return (
        <div className="item">
            <img src="https://picsum.photos/200/280" alt="placeholder"></img>

            <h5>{props.title}</h5>

            <div className="prices d-flex justify-content-around">
                <label>Price: ${props.price}</label>
                <label>Total: ${getTotal()}</label>
            </div>
            
            {getControls()}
        </div>
    );
};

export default Item;