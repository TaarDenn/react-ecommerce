import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } =
            value.detailProduct;
          return (
            <div className="container py-5 farsi">
              {/*title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}

              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div
                  className="col-10 mx-auto col-md-6 my-3 text-capitalize"
                  dir="rtl"
                >
                  <h2>مدل : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    سازنده :{" "}
                    <span
                      style={{ fontSize: "16px" }}
                      className="text-uppercase"
                    >
                      {company}
                    </span>
                  </h4>
                  <h4
                    className="text-blue"
                    style={{ fontSize: "16px" }}
                    dir="rtl"
                  >
                    <strong>
                      قیمت : <span>ریال </span>
                      {price}
                    </strong>
                  </h4>
                  <p
                    className="text-capitalize font-weight-bold mt-3 mb-0"
                    dir="rtl"
                  >
                    توضیحات بیشتر :
                    <p className="text-muted lead text-justify" style={{fontSize:'16px'}}>{info}</p>
                    <div>
                      {/* for buttons */}
                      <Link to="/">
                        <ButtonContainer>صفحه محصولات</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);

                          //3.07
                        }}
                      >
                        {inCart ? "افزوده شده" : "افزودن به سبد"}
                      </ButtonContainer>
                    </div>
                  </p>
                </div>
              </div>
              {/* end of product info */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
