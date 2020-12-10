import React, { useState} from "react";

const CYO = () => {
  const [pizzaSize, setPizzaSize] = useState('Choose your Pizza Size');
  
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
 
  let toppingPrice = toppings.length * 1.5;
  let price = startPrice + toppingPrice;

  return (
    <div className="container">
      <h1 className="text-center">Create your own pizza</h1>
      <div className="row">
        <div className="col-sm-8">
          <p>{pizzaSize}</p>
          <p>Price: ${price}</p>
          <img src="./pizza.png" className="img-fluid pizza" alt="Pizza"></img>
          <p>Your Toppings:  <br />{toppings}</p>
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
            name="Extra Large"
            onClick={(event) => {
              changePizza(event);
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
              
            }}
          >
            Pepperoni
          </button>
          <button
            type="button"
            value="Sausage "
            onClick={(event) => {
              changeToppings(event);
              
            }}
          >
            Sausage
          </button>
          <button
            type="button"
            value="Beef "
            onClick={(event) => {
              changeToppings(event);
             
            }}
          >
            Beef
          </button>
          <button
            type="button"
            value="Salami "
            onClick={(event) => {
              changeToppings(event);
              
            }}
          >
            Salami
          </button>
          <button
            type="button"
            value="Bacon "
            onClick={(event) => {changeToppings(event) 
           }}
          >
            Bacon
          </button>
          <h4>Veggies</h4>
          <button
            type="button"
            value="Green Peppers "
            onClick={(event) => {changeToppings(event) 
           }}
          >
            Green Peppers
          </button>
          <button
            type="button"
            value="Onions "
            onClick={(event) => {changeToppings(event) 
           }}
          >
            Onions
          </button>
        </div>
      </div>
    </div>
  );
};
export default CYO;