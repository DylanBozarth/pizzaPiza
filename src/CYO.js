import React, { useState } from "react";

const CYO = () => {
  const [pizzaSize, setPizzaSize] = useState(null);
  const [toppings, setToppings] = useState([]);
  const [price, setPrice] = useState(0);
  const changePizza = (e) => {
    setPizzaSize(e.target.value);
  };
  const changeToppings = (e) => {
    setToppings([...toppings, e.target.value]);
  };
  const changePrice = () => {
    setPrice(price + 1)

  }
  return (
    <div className="container">
      <h1 className="text-center">Create your own pizza</h1>
      <div className="row">
        <div className="col-sm-8">
          <p>{pizzaSize}</p>
          <p>{toppings}</p>
        </div>
        <div className="col-sm-4">
          <h3>Pizza size</h3>
          <button
            type="button"
            value="Medium"
            onClick={(event) => changePizza(event)}
          >
            Medium
          </button>
          <button
            type="button"
            value="Large"
            onClick={(event) => changePizza(event)}
          >
            Large
          </button>
          <h3>Toppings</h3>
          <button
            type="button"
            value="Peperoni "
            onClick={(event) => changeToppings(event)}
          >
            Pepperoni
          </button>
          <button
            type="button"
            value="Sausage "
            onClick={(event) => changeToppings(event)}
          >
            Sausage
          </button>
          <button
            type="button"
            value="Spinach "
            onClick={(event) => changeToppings(event)}
          >
            Spinach
          </button>
          <button
            type="button"
            value="Mushrooms "
            onClick={(event) => changeToppings(event)}
          >
            Mushrooms
          </button>
          <button
            type="button"
            value="Artichoke Hearts "
            onClick={(event) => changeToppings(event)}
          >
            Artichoke Hearts
          </button>
          <button
            type="button"
            value="Ground Beef "
            onClick={(event) => changeToppings(event)}
          >
            Ground Beef
          </button>
          <button
            type="button"
            value="Olives "
            onClick={(event) => changeToppings(event)}
          >
            Olives
          </button>
          <button
            type="button"
            value="Tomatoes "
            onClick={(event) => changeToppings(event)}
          >
            Tomatoes
          </button>
        <p>Price: {price}</p>
        </div>
        
      </div>
    </div>
  );
};
export default CYO;
