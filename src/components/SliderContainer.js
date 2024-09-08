import { useState, useEffect, Children } from "react";
import React from "react";

export default function Slider({ slideToShow = 0, ...props }) {
  const [margin, setMargin] = useState(slideToShow);

  props.slidePerScreen = props.slidePerScreen ? props.slidePerScreen : 1;
  props.timer = props.timer ? props.timer : 2000;
  props.transitionTime = props.transitionTime ? props.transitionTime : 200;
  props.dir = props.dir ? props.dir : "ltr";

  const slidePerScreen = 100 / props.slidePerScreen;

  const childrnArray = Children.toArray(props.children);

  const margins = childrnArray.map((_, i) => {
    if (i === 0) return 0;
    if (i === childrnArray.length - 1)
      return i * slidePerScreen * -1 + (100 - slidePerScreen);
    return i * slidePerScreen * -1 + (100 - slidePerScreen) / 2;
  });

  const nextSlide = () => {
    if (margin === margins.length - 1) setMargin(0);
    else setMargin(margin + 1);
  };

  useEffect(() => {
    if (props.beforeTransition && typeof props.beforeTransition === "function")
      props.beforeTransition();

    setMargin(slideToShow);
  }, [slideToShow]);

  useEffect(() => {
    if (props.onChange && typeof props.onChange === "function") {
      const swiper = {
        current: margin,
        next: margin === margins.length - 1 ? 0 : margin + 1,
        prev: margin === 0 ? margins.length - 1 : margin - 1,
        length: margins.length,
      };

      props.onChange(swiper);
    }
  }, [margin]);

  useEffect(() => {
    if (props.timer === 0) return;

    const timer = setTimeout(() => {
      if (
        props.beforeTransition &&
        typeof props.beforeTransition === "function"
      ) {
        props.beforeTransition();
      }

      nextSlide();
    }, props.timer);

    return () => clearTimeout(timer);
  }, [margin]);

  return (
    <div
      dir={props.dir}
      style={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transition: `${
            props.dir === "ltr" ? "margin-left" : "margin-right"
          } ${props.transitionTime}ms`,
          [props.dir === "ltr"
            ? "marginLeft"
            : "marginRight"]: `${margins[margin]}%`,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          {childrnArray?.map((child, i) => (
            <div
              key={`slide-${i}`}
              style={{ width: `${slidePerScreen}%`, flexShrink: "0" }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
