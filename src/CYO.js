import React, { useState } from "react";
import ButtonClickable from "./button";
import ButtonClickable2 from "./button2";
const CYO = () => {
  const [pizzaSize, setPizzaSize] = useState("Choose your Pizza Size");
  const [toppings, setToppings] = useState([]);
  const [startPrice, setStartPrice] = useState(0);

  const [btnStatus, setBtnStatus] = useState({
    isActive: true,
    isActive2: true,
    isActive3: true
  });

  const addPizza = (e) => {
    setPizzaSize(e.target.name);
    setStartPrice(parseInt(e.target.value));

    const currentActive = e.target.id;

    if (currentActive === "isActive") {
      setBtnStatus({ isActive: true, isActive2: false, isActive3: false });
      console.log("1");
    }
    if (currentActive === "isActive2") {
      setBtnStatus({ isActive: false, isActive2: true, isActive3: false });
      console.log("2");
    }
    if (currentActive === "isActive3") {
      setBtnStatus({ isActive: false, isActive2: false, isActive3: true });
      console.log("3");
    }

    console.log(btnStatus);
  };

  const CheckSize = () => {
    if (pizzaSize === "Choose your Pizza Size") {
      alert("You must choose a pizza size");
    } else if (toppings.length === 0) {
      alert("Are you sure you don't want toppings?");
    } else {
      alert("Sorry, this isn't a real pizza place.");
    }
  };
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
      <h2 className="text-center white">Create your own pizza</h2>
      <div className="row">
        <div className="col-sm-8">
          <div className="">
            <img
              src="./pizza.png"
              className="img-fluid pizza"
              alt="Pizza"
            ></img>
          </div>
          <h3 className="white">{pizzaSize}</h3>
          <p className="white">
            Your Toppings: <br />
            <div className="col-lg-12">
              {toppings
                .filter((x) => x.name !== "")
                .map((toppings) => (
                  <img
                    src={toppings}
                    alt="topping"
                    width="100px"
                    height="100px"
                  ></img>
                ))}
            </div>{" "}
          </p>
        </div>

        <div className="col-sm-4">
          <h3 className="white">Pizza size</h3>
          <p className="white">Medium $10, Large $15, Extra Large $20</p>
          <button
            name="Medium"
            className={
              btnStatus.isActive
                ? "button btn fourthActive"
                : "button btn fourth"
            }
            value="10"
            onClick={addPizza}
            id="isActive"
          >
            Medium
          </button>
          <button
            name="Large"
            className={
              btnStatus.isActive2
                ? "button btn fourthActive"
                : "button btn fourth"
            }
            value="15"
            onClick={addPizza}
            id="isActive2"
          >
            Large
          </button>
          <button
            name="Extra Large"
            className={
              btnStatus.isActive3
                ? "button btn fourthActive"
                : "button btn fourth"
            }
            value="20"
            onClick={addPizza}
            id="isActive3"
          >
            Extra large
          </button>

          <br />
          <h3 className="white">Toppings</h3>
          <p className="white">Toppings are $1.50 each</p>
          <h4 className="white">Meats</h4>
          <ButtonClickable
            onClick={(event) => {
              ToppingPlusMinus(event);
            }}
            name="Pepperoni"
            value="./toppings/pepperoni.png"
          ></ButtonClickable>
          <ButtonClickable
            onClick={(event) => {
              ToppingPlusMinus(event);
            }}
            name="Sausage"
            value="./toppings/sausage.png"
          ></ButtonClickable>
          <ButtonClickable
            onClick={(event) => {
              ToppingPlusMinus(event);
            }}
            name="Beef"
            value="./toppings/beef.png"
          ></ButtonClickable>
          <ButtonClickable
            onClick={(event) => {
              ToppingPlusMinus(event);
            }}
            name="Salami"
            value="./toppings/salami.png"
          ></ButtonClickable>
          <ButtonClickable
            onClick={(event) => {
              ToppingPlusMinus(event);
            }}
            name="Bacon"
            value="./toppings/bacon.png"
          ></ButtonClickable>

          <h4 className="white">Veggies</h4>
          <ButtonClickable2
            onClick={(event) => {
              ToppingPlusMinus(event);
            }}
            name="Green Peppers"
            value="./toppings/greenpeppers.png"
          ></ButtonClickable2>
          <ButtonClickable2
            onClick={(event) => {
              ToppingPlusMinus(event);
            }}
            name="Onions"
            value="./toppings/onions.png"
          ></ButtonClickable2>
          <ButtonClickable2
            onClick={(event) => {
              ToppingPlusMinus(event);
            }}
            name="Tomatoes"
            value="./toppings/tomatoes.png"
          ></ButtonClickable2>
          <ButtonClickable2
            onClick={(event) => {
              ToppingPlusMinus(event);
            }}
            name="Artichokes"
            value="./toppings/artichokes.png"
          ></ButtonClickable2>
          <ButtonClickable2
            onClick={(event) => {
              ToppingPlusMinus(event);
            }}
            name="Mushrooms"
            value="./toppings/mushrooms.png"
          ></ButtonClickable2>
          <br />
        </div>

        <div className="pricefooter">
          <p className="price">Price: ${price}</p>
        </div>
        <div className="pricefooter2">
          <button className="checkout button btn fourth" onClick={CheckSize}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default CYO;
