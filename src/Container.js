import React, { useState } from "react";
import { connect } from "react-redux";
import { Cakes } from "./cakes/actions/CakeAction";
import { Chocolates } from "./chocolates/action/ChocolateAction";
import { iceCreams } from "./iceCreams/actions/IcecreamAction";
const Container = (props) => {
  const [cakeEnteredValue, setCakeEnteredValue] = useState("");
  const [chocolateEnteredValue, setChocolateEnteredValue] = useState("");
  const [iceCreamEnteredValue, setIceCreamEnteredValue] = useState("");

  const buyCakeHandler = () => {
    console.log(cakeEnteredValue);
    if (cakeEnteredValue > -1) {
      if (props.cake_Reducer.No_of_cakes >= cakeEnteredValue)
        props.buyCake(cakeEnteredValue);
      else alert("no enough cakes are available");
    } else {
      alert("please enter +ve number");
    }
  };
  const buyChocolateHandler = () => {
    if (chocolateEnteredValue > -1) {
      if (props.chocolate_Reducer.No_of_Chocolates >= chocolateEnteredValue) {
        props.buyChocolate(chocolateEnteredValue);
      } else {
        alert("no enough chocolates are available");
      }
    } else {
      alert("please enter +ve number");
    }
  };
  const buyIceCreamHandler = () => {
    if (iceCreamEnteredValue > -1) {
      if (props.iceCream_Reducer.No_of_IceCream >= iceCreamEnteredValue) {
        props.buyIceCream(iceCreamEnteredValue);
      } else {
        alert("no enough iceCreams are available");
      }
    } else {
      alert("please enter +ve number");
    }
  };
  return (
    <div>
      <div>
        <h2>Initial No. of Cakes in store:10</h2>
        <h4>No.of cakes left: {props.cake_Reducer.No_of_cakes}</h4>
        <div>
          <input
            type="number"
            placeholder="enter quantity"
            value={cakeEnteredValue}
            min="0"
            onChange={(e) => setCakeEnteredValue(Number(e.target.value))}
          />
          <button onClick={buyCakeHandler}>buy Cake</button>
        </div>
      </div>

      <div>
        <h2>Initial No. of Chocolates in store:10</h2>
        <h4>No.of Chocolates : {props.chocolate_Reducer.No_of_Chocolates}</h4>
        <div>
          <input
            type="number"
            placeholder="enter quantity"
            onChange={(e) => setChocolateEnteredValue(Number(e.target.value))}
          />
          <button onClick={buyChocolateHandler}>buy Chocolates</button>
        </div>
      </div>

      <div>
        <h2>Initial No. of IceCreams in store:10</h2>
        <h4>No.of IceCreams : {props.iceCream_Reducer.No_of_IceCream}</h4>
        <div>
          <input
            type="number"
            placeholder="enter quantity"
            onChange={(e) => setIceCreamEnteredValue(Number(e.target.value))}
          />
          <button onClick={buyIceCreamHandler}>buy IceCreams</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps");
  return {
    buyCake: (e) => dispatch(Cakes(e)),
    buyChocolate: (e) => dispatch(Chocolates(e)),
    buyIceCream: (e) => dispatch(iceCreams(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
