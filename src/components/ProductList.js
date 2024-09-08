import React, { Component, useState } from "react";
import Product from "./Product";
import Title from "./Title";
import Slider from "./SliderContainer";
import { ProductConsumer } from "../context";
import { detailProduct } from "../data";
import Glass from "../Glass.gif";
import Hadron from "../hadron.gif";
import PB from "../powerbank.webp";
import Kolah from "../kolah.webp";
import Gardanband from "../gardanband.webp";
import Shuyande from "../shuyande.webp";

export default function ProductList() {
  const [slide, setSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);

  return (
    <React.Fragment>
      <div className="py-5 px-2">
        <div className="container">
          <h1 style={{ fontSize: "20px" }} className="farsi text-right">
            محصولات جدید
          </h1>
          <Slider
            // dir="rtl"
            timer={2000}
            slidePerScreen={1.2}
            transitionTime={200}
            slideToShow={slide}
            onChange={setSwiper}
          >
            <div
              style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}
            >
              <div
                style={{
                  borderRadius: "0.5rem",
                }}
              >
                <img
                  style={{
                    borderRadius: "0.5rem",
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                  src={Hadron}
                  alt="image"
                />
              </div>
            </div>
            <div
              style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}
            >
              <div
                style={{
                  borderRadius: "0.5rem",
                }}
              >
                <img
                  style={{
                    borderRadius: "0.5rem",
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                  src={PB}
                  alt="image"
                />
              </div>
            </div>
            <div
              style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}
            >
              <div
                style={{
                  borderRadius: "0.5rem",
                }}
              >
                <img
                  style={{
                    borderRadius: "0.5rem",
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                  src={Glass}
                  alt="image"
                />
              </div>
            </div>
          </Slider>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            {/* <button
              style={{
                fontSize: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "0.5px solid black",
                padding: "2px",
                background: "transparent",
                color: "black",
                borderRadius: "0.3rem",
                width: "20px",
                height: "20px",
              }}
              onClick={() => setSlide(swiper.prev)}
            >
              {"<"}
            </button> */}
            {swiper && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                {Array.from({ length: swiper.length }).map((l, i) => (
                  <div
                    key={"s_" + i}
                    style={{
                      borderRadius: "1000px",
                      background: `${swiper.current === i ? "black" : "gray"}`,
                      margin: "5px",
                      width: "5px",
                      height: "5px",
                    }}
                  ></div>
                ))}
              </div>
            )}
            {/* <button
              style={{
                fontSize: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "0.5px solid black",
                padding: "2px",
                background: "transparent",
                color: "black",
                borderRadius: "0.3rem",
                width: "20px",
                height: "20px",
              }}
              onClick={() => setSlide(swiper.next)}
            >
              {">"}
            </button> */}
          </div>

          <h1
            style={{ fontSize: "20px", marginTop: "20px" }}
            className="farsi text-right"
          >
            تخفیف دارها
          </h1>
          <div
            className="row"
            style={{ background: "rgb(227, 239, 243)", borderRadius: "0.5rem" }}
          >
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
          <h1
            style={{ fontSize: "20px", marginTop: "20px" }}
            className="farsi text-right"
          >
            محصولات جدید
          </h1>
          <Slider
            // dir="rtl"
            timer={2000}
            slidePerScreen={1.2}
            transitionTime={200}
            slideToShow={slide}
            onChange={setSwiper}
          >
            <div
              style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}
            >
              <div
                style={{
                  borderRadius: "0.5rem",
                }}
              >
                <img
                  style={{
                    borderRadius: "0.5rem",
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                  src={Shuyande}
                  alt="image"
                />
              </div>
            </div>
            <div
              style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}
            >
              <div
                style={{
                  borderRadius: "0.5rem",
                }}
              >
                <img
                  style={{
                    borderRadius: "0.5rem",
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                  src={Glass}
                  alt="image"
                />
              </div>
            </div>
            <div
              style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}
            >
              <div
                style={{
                  borderRadius: "0.5rem",
                }}
              >
                <img
                  style={{
                    borderRadius: "0.5rem",
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                  src={PB}
                  alt="image"
                />
              </div>
            </div>
          </Slider>
          <h1
            style={{ fontSize: "20px", marginTop: "20px" }}
            className="farsi text-right"
          >
            محصولات دیجیتال
          </h1>
          <div
            className="row"
            style={{ background: "rgb(227, 239, 243)", borderRadius: "0.5rem" }}
          >
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
          <h1
            style={{ fontSize: "20px", marginTop: "20px" }}
            className="farsi text-right"
          >
            زنگ تخفیف
          </h1>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%", padding: "10px" }}>
              <img
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                }}
                src={Kolah}
                alt="image"
              />
            </div>
            <div style={{ width: "50%", padding: "10px" }}>
              <img
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                }}
                src={Gardanband}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
