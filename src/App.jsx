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
import { Calculate } from "@mui/icons-material";
import BetterOptionCard from "./BetterOptionCard";

const data = [
  {
    id: uuid(),
    optionName: "Individual",
    price: 19.95,
    priceColor: "#FF6600",
    saveAmount: 12,
    saveMessage: "Save $12/mo.** on your favorite content and iCloud+ storage.",
    hasSharing: false,
    services: [
      { name: "iCloud+", badge: "50GB", price: 0.99 },
      { name: "tv+", price: 12.99 },
      { name: "Music", price: 10.99 },
      { name: "Arcade", price: 6.99 },
    ],
    originalPrice: 31.96,
  },
  {
    id: uuid(),
    optionName: "Family",
    price: 25.95,
    priceColor: "#FF0000",
    saveAmount: 14,
    saveMessage:
      "Save $14/mo.** on even more iCloud+ storage and content for the whole family.",
    hasSharing: true,
    services: [
      { name: "iCloud+", badge: "200GB", price: 2.99 },
      { name: "tv+", price: 12.99 },
      { name: "Music", price: 16.99 },
      { name: "Arcade", price: 6.99 },
    ],
    originalPrice: 39.96,
  },
  {
    id: uuid(),
    optionName: "Premier",
    price: 37.95,
    priceColor: "#A033FF",
    saveAmount: 32,
    saveMessage:
      "Save $32/mo.** on all six Apple subscriptions and 2TB of iCloud+ storage.",
    hasSharing: true,
    services: [
      { name: "iCloud+", badge: "2TB", price: 9.99 },
      { name: "tv+", price: 12.99 },
      { name: "Music", price: 16.99 },
      { name: "Arcade", price: 6.99 },
      { name: "Fitness+", price: 9.99 },
      { name: "News+", price: 12.99 },
    ],
    originalPrice: 69.94,
  },
];
export default function App() {
  return (
    <>
      <CssBaseline />
      <OptionsLayout data={data} />
    </>
  );
}
