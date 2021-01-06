import americano from "./images/아메리카노.jpeg";
import latte from "./images/카페라떼.jpeg";
import mocha from "./images/카페모카.jpeg";

const allMenu = [
  {
    id: 1,
    name: "아메리카노",
    price: "3500",
    photo: americano,
    size: ["large", "medium"],
    quantity: 1,
    modal: false,
  },
  {
    id: 2,
    name: "카페라떼",
    price: "4000",
    photo: latte,
    size: ["large", "medium"],
    quantity: 0,
    modal: false,
  },
  {
    id: 3,
    name: "카페모카",
    price: "4000",
    photo: mocha,
    size: ["large", "medium"],
    quantity: 0,
    modal: false,
  },
];

export default allMenu;
