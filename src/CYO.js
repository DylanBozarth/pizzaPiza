import React, { useState, useEffect } from "react";

const CYO = () => {
  const [pizzaSize, setPizzaSize] = useState(null);
  const [toppings, setToppings] = useState([]);

  const [startPrice, setStartPrice] = useState(0);
  // const [toppingPrice, setToppingPrice] = useState(0)
  const changePizza = (e) => {
    setPizzaSize(e.target.name);
    setStartPrice(parseInt(e.target.value));
  };
  const changeToppings = (e) => {
    setToppings([...toppings, e.target.value]);
  };
  const countToppings = () => {
    console.log("aa");
  };
  let toppingPrice = toppings.length * 1.5;
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
            }}
          >
            Large
          </button>
          <button
            type="button"
            value="15"
            name="Large"
            onClick={(event) => {
              changePizza(event);
            }}
          >
            Extra Large
          </button>
          <h3>Toppings</h3>
          <button
            type="button"
            value="Peperoni "
            onClick={(event) => {
              changeToppings(event);
              countToppings();
            }}
          >
            Pepperoni
          </button>
          <button
            type="button"
            value="Sausage"
            onClick={(event) => {
              changeToppings(event);
              countToppings();
            }}
          >
            Sausage
          </button>
          <button
            type="button"
            value="Beef"
            onClick={(event) => {
              changeToppings(event);
              countToppings();
            }}
          >
            Beef
          </button>
          <button
            type="button"
            value="Salami"
            onClick={(event) => {
              changeToppings(event);
              countToppings();
            }}
          >
            Salami
          </button>
          <button
            type="button"
            value="Bacon"
            onClick={(event) => {changeToppings(event) 
            countToppings()}}
          >
            Bacon
          </button>
          <p>Price: {price}</p>
        </div>
      </div>
    </div>
  );
};
export default CYO;
