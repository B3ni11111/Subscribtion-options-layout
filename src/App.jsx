import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { v4 as uuid } from "uuid";
import OptionCard from "./OptionCard";
import { CssBaseline } from "@mui/material";
import OptionsLayout from "./OptionsLayout";
import gif1 from "./assets/img/gif1.gif";
import gif2 from "./assets/img/gif2.gif";
import gif3 from "./assets/img/gif3.gif";
import gif4 from "./assets/img/gif4.gif";

const data = [
  {
    id: uuid(),
    optionName: "Free",
    info: ['The "BennyBar Free"', 'The "BennyBar Free"', 'The "BennyBar Free"'],
    price: 0,
    gif: gif1,
  },
  {
    id: uuid(),
    optionName: "Gold",
    info: ['The "BennyBar Gold"', 'The "BennyBar Gold"', 'The "BennyBar Gold"'],
    price: 10,
    gif: gif2,
  },
  {
    id: uuid(),
    optionName: "Premium",
    info: [
      'The "BennyBar Premium"',
      'The "BennyBar Premium"',
      'The "BennyBar Premium"',
    ],
    price: 20,
    gif: gif3,
  },
  {
    id: uuid(),
    optionName: "Unlimited",
    info: ["Unlimited", "Unlimited", "Unlimited"],
    price: 70,
    gif: gif4,
  },
];
export default function App() {
  return (
    <>
      <CssBaseline />
      <h1>Subscribtion Options</h1>
      <OptionsLayout data={data} />
    </>
  );
}
