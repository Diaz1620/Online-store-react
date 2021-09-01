import React, {useState} from "react";
import "./quantityPicker.css"

function QuantityPicker () {
    const [quantity, setQuantity] = useState(0)

    const handleIncrease = () => {
        // console.log("Increase button clicked");
        setQuantity(quantity + 1);
    }

    const handleDecrease = () => {
        // console.log("Decrease button clicked");
        if(quantity > 0){
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className="quantity-picker">
            <button className="btn btn-dark" onClick={handleIncrease}>+</button>
            <label>{quantity}</label>
            <button className="btn btn-dark" disabled={quantity === 0} onClick={handleDecrease}>-</button>
        </div>
    )
}

export default QuantityPicker;