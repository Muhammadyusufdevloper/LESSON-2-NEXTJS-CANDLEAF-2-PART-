"use client"
import React from "react";
import "./hero.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/lib/features/counter/counterSlice";

const Hero = () => {
  let count = useSelector(state => state.counter.value)
  let dispatch = useDispatch()
  return (
    <div className="hero">
      <div className="hero__card">
        <span>🌱</span>
        <h3 className="header__card__title">The nature candle</h3>
        <p>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>
        <button>Discovery our collection</button>
        <div style={{ display: "flex", alignItems: "center", margin: "30px 0 0 0 " }}>
          <button onClick={() => dispatch(increment())}>Inc</button>
          <p>{count}</p>
          <button disabled={count <= 0} onClick={() => dispatch(decrement())}>Dec</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
