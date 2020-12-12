import React, { useState } from "react";
import ButtonClickable from './button'
import ButtonClickable2 from "./button2";
const CYO = () => {
  const [pizzaSize, setPizzaSize] = useState("Choose your Pizza Size");

  const [toppings, setToppings] = useState([]);
  const [startPrice, setStartPrice] = useState(0);
  // const [toppingPrice, setToppingPrice] = useState(0)
  const addPizza = (e) => {
    setPizzaSize(e.target.name);
    setStartPrice(parseInt(e.target.value));
  };
  
   
const CheckSize = () => {
  if (pizzaSize === "Choose your Pizza Size") {
    alert('You must choose a pizza size')
  }
  else if (toppings.length === 0 ) {
    alert ("Are you sure you don't want toppings?")
  }
  else {
    alert("Sorry, this isn't a real pizza place.")
  }
}
const ToppingPlusMinus = (e) => {
  const { value } = e.target;
  const position = toppings.indexOf(value);

  if (position !== -1) {
    return removeTopping(value);
    
  }

  return addTopping(value);
  
};

const removeTopping = (value) => {
  // We need to filter out the value from the array and return the expected new value
  setToppings(toppings.filter((topping) => topping !== value));
  //handleToggle();
};

const addTopping = (value) => {
  setToppings([...toppings, value]);
 // handleToggle();
};

  let toppingPrice = toppings.length * 1.5;
  let price = startPrice + toppingPrice;

  return (
    <div className="container CYO">
      <h2 className="text-center">Create your own pizza</h2>
      <div className="row">
        <div className="col-sm-8">
          <div className="">
            <img
              src="./pizza.png"
              className="img-fluid pizza"
              alt="Pizza"
            ></img>
          </div>
          <h3>{pizzaSize}</h3>
          <p>
            Your Toppings: <br />
            {toppings}
          </p>
        </div>
        <div className="col-sm-4">
          <h3>Pizza size</h3>
          <button
            type="button"
            value="10"
            name="Medium"
            className="button btn fourth"
            onClick={(event) => {
              addPizza(event);
            }}
          >
            Medium
          </button>
          <button
            type="button"
            value="12"
            name="Large"
            className="button btn fourth"
            onClick={(event) => {
              addPizza(event);
            }}
          >
            Large
          </button>
          <button
            type="button"
            value="15"
            name="Extra Large"
            className="button btn fourth"
            onClick={(event) => {
              addPizza(event);
            }}
          >
            Extra Large
          </button>
          <br />
          <h3>Toppings</h3>

          <h4>Meats</h4>
           <ButtonClickable onClick={(event) => {ToppingPlusMinus(event)}}  name="Pepperoni" value="Pepperoni, " ></ButtonClickable> 
           <ButtonClickable onClick={(event) => {ToppingPlusMinus(event)}}  name="Sausage" value="Sausage, " ></ButtonClickable> 
           <ButtonClickable onClick={(event) => {ToppingPlusMinus(event)}}  name="Beef" value="Beef, " ></ButtonClickable> 
           <ButtonClickable onClick={(event) => {ToppingPlusMinus(event)}}  name="Salami" value="Salami, " ></ButtonClickable> 
           <ButtonClickable onClick={(event) => {ToppingPlusMinus(event)}}  name="Bacon" value="Bacon, " ></ButtonClickable> 
          
          <h4>Veggies</h4>
          <ButtonClickable2 onClick={(event) => {ToppingPlusMinus(event)}}  name="Green Peppers" value="Green Peppers, " ></ButtonClickable2> 
          <ButtonClickable2 onClick={(event) => {ToppingPlusMinus(event)}}  name="Onions" value="Onions, " ></ButtonClickable2>
          <ButtonClickable2 onClick={(event) => {ToppingPlusMinus(event)}}  name="Tomatoes" value="Tomatoes, " ></ButtonClickable2>
          <ButtonClickable2 onClick={(event) => {ToppingPlusMinus(event)}}  name="Artichokes" value="Artichokes, " ></ButtonClickable2>
          <ButtonClickable2 onClick={(event) => {ToppingPlusMinus(event)}}  name="Mushrooms" value="Mushrooms, " ></ButtonClickable2>
          <br /><button  className="checkout button btn fourth" onClick={CheckSize}>Checkout</button>
        </div>

        <div className="pricefooter">
          <p>Price: ${price}</p>

        </div>
      </div>
    </div>
  );
};
export default CYO;
