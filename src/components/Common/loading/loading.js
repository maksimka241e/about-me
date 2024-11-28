import IconsB1 from "../image/loading/icons-green.png";
import IconsB2 from "../image/loading/icons-pink.png";
import IconsB3 from "../image/loading/icons-yellow.png";
import IconsB4 from "../image/loading/icons-blue.png";
import IconsB5 from "../image/loading/icons-emerald.png";
import IconsB6 from "../image/loading/icons-dark-green.png";

import { colors } from "../../../hooks/DateSlise";

import "./loading.css";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export function Loading() {
  const FillColor = useSelector(colors);
  const [showSpinner, SetShowSpinner] = useState(true);
  const [showBackground, SetShowBackground] = useState(true);
  const [bk, SetBk] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      SetShowSpinner(false);
      setTimeout(() => {
        SetShowBackground(false);
        setTimeout(() => {
          SetBk(false);
        }, 500);
      }, 700);
    }, 3000);
  });

  return (
    <div className={`Loading ${bk === false ? "Loading__none" : ""}`}>
      <section
        className={`Loading__section1 ${showBackground === false ? "Loading__none1" : ""} background-${FillColor}`}
      ></section>
      {showSpinner && (
        <img
          src={
            FillColor === "green"
              ? IconsB1
              : FillColor === "pink"
                ? IconsB2
                : FillColor === "yellow"
                  ? IconsB3
                  : FillColor === "blue"
                    ? IconsB4
                    : FillColor === "emarald"
                      ? IconsB5
                      : FillColor === "dark_green"
                        ? IconsB6
                        : ""
          }
          alt="LoadingIcons"
          className="LoadingIcons"
        />
      )}
      <section
        className={`Loading__section2 ${showBackground === false ? "Loading__none2" : ""}   background-${FillColor}`}
      ></section>
    </div>
  );
}
