import React, { useState, useEffect } from "react";

const CYO = () => {
  const [pizzaSize, setPizzaSize] = useState(null);
  const [toppings, setToppings] = useState([]);
const [toppingPrice, setToppingPrice] = useState(0)
  const [startPrice, setStartPrice] = useState(0);
  const changePizza = (e) => {
    setPizzaSize(e.target.name);
    setStartPrice(parseInt(e.target.value));
  };
  const changeToppings = (e) => {
    setToppings([...toppings, e.target.value]);
  };

  const setPrice = () => {
    if (pizzaSize === "Medium") {
      setToppingPrice(toppings.length * 1);
    }
    if (pizzaSize === "Large") {
      setToppingPrice(toppings.length * 1.5);
    }
    if (pizzaSize === "Extra Large") {
      setToppingPrice(toppings.length * 2);
    }
  };

  let price = startPrice + toppingPrice;

  
 
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
            value="10"
            name="Medium"
            onClick={(event) => {
              changePizza(event);
              setPrice();
            }}
          >
            Medium
          </button>
          <button
            type="button"
            value="12"
            name="Large"
            onClick={(event) => {
              changePizza(event);
              setPrice();
            }}
          >
            Large
          </button>
          <button
            type="button"
            value="15"
            name="Extra Large"
            onClick={(event) => {
              changePizza(event);
              setPrice();
            }}
          >
            Extra Large
          </button>
          <br />
          <h3>Toppings</h3>

          <h4>Meats</h4>
          <button
            type="button"
            value="Peperoni "
            onClick={(event) => {
              changeToppings(event);
              setPrice();
            }}
          >
            Pepperoni
          </button>
          <button
            type="button"
            value="Sausage "
            onClick={(event) => {
              changeToppings(event);
              setPrice();
            }}
          >
            Sausage
          </button>
          <button
            type="button"
            value="Beef "
            onClick={(event) => {
              changeToppings(event);
              setPrice();
            }}
          >
            Beef
          </button>
          <button
            type="button"
            value="Salami "
            onClick={(event) => {
              changeToppings(event);
              setPrice();
            }}
          >
            Salami
          </button>
          <button
            type="button"
            value="Bacon "
            onClick={(event) => {
              changeToppings(event);
              setPrice();
            }}
          >
            Bacon
          </button>
          <h4>Veggies</h4>
          <p>Price: {price}</p>
        </div>
      </div>
    </div>
  );
};
export default CYO;
