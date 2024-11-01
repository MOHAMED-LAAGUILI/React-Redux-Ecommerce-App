// Services Icons
import {  FaTruck, FaHeadset, FaLock, FaTag, FaMoneyBillWave } from "react-icons/fa6";


import baby from "../assets/images/baby.jpg";
import man from "../assets/images/man.jpg";
import woman from "../assets/images/woman.jpg";
import kids from "../assets/images/kids.jpg";
import smartphone from "../assets/images/smartphone.jpg";
import smartwatch from "../assets/images/smartwatch.jpg";
import sweater_and_sweatshirt from "../assets/images/sweater-and-sweatshirt.jpg";
import Heater from "../assets/images/Heater.jpg";
import headset from "../assets/images/headset.jpg";




// Categories
export const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Home & Kitchen" },
  { id: 4, name: "Beauty & Personal Care" },
  { id: 5, name: "Sports & Outdoors" },
  { id: 6, name: "Entertainment" },
];

// Special Categories
export const specialCategories = [
    { id: 1, name: "Mens", imageUrl:man},
    { id: 2, name: "Womens", imageUrl:woman},
    { id: 3, name: "Kids", imageUrl:kids },
    { id: 4, name: "Babies", imageUrl:baby },
  ];

// Products 
export const productsData = [
  { id: 1, name: "smartphone 1", price: 9.99, image: smartphone },
  { id: 2, name: "smartwatch", price: 14.99, image: smartwatch },
  { id: 3, name: "sweater_and_sweatshirt", price: 19.99, image: sweater_and_sweatshirt },
  { id: 4, name: "Heater 1", price: 23.99, image: Heater },
  { id: 5, name: "headset 1", price: 43.99, image: headset },
  { id: 6, name: "headset 2", price: 13.99, image: headset },
  { id: 7, name: "headset 3", price: 33.99, image: headset },
  { id: 8, name: "headset 4", price: 3.99, image: headset },
  { id: 9, name: "smartphone 2", price: 9.99, image: smartphone },
  { id: 10, name: "Heater 2", price: 53.99, image: Heater },
  { id: 11, name: "sweater_and_sweatshirt 2", price: 39.99, image: sweater_and_sweatshirt },


];

// Services
export const services = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "Free Shipping",
    description: "On orders over $50",
  },
  {
    id: 2,
    icon: <FaHeadset/>,
    title: "24/7 Support",
    description: "We're here to help anytime",
  },
  {
    id: 3,
    icon: <FaLock/>,
    title: "Secure Payments",
    description: "100% secure payment process",
  },
  {
    id: 4,
    icon: <FaTag/>,
    title: "Discounts",
    description: "Exclusive deals and offers",
  },
  {
    id: 5,
    icon: <FaMoneyBillWave/>,
    title: "100% Money Refund",
    description: "30-day money-back guarantee",
  },
];
