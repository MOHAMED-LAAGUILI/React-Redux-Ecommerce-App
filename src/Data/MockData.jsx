// Services Icons
import {  FaTruck, FaHeadset, FaLock, FaTag, FaMoneyBillWave } from "react-icons/fa6";

// Special Categories images
import baby from "/src/assets/images/baby.jpg"
import man from "/src/assets/images/man.jpg"
import woman from "/src/assets/images/woman.jpg"
import kids from "/src/assets/images/kids.jpg"


// Products images
import smartphone from "/src/assets/images/smartphone.jpg"
import smartwatch from "/src/assets/images/smartwatch.jpg"
import sweater_and_sweatshirt from "/src/assets/images/sweater-and-sweatshirt.jpg"
import Heater from "/src/assets/images/Heater.jpg"
import headset from "/src/assets/images/headset.jpg"





export const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Home & Kitchen" },
  { id: 4, name: "Beauty & Personal Care" },
  { id: 5, name: "Sports & Outdoors" },
];


export const specialCategories = [
    { id: 1, name: "Mens", imageUrl:man},
    { id: 2, name: "Womens", imageUrl:woman},
    { id: 3, name: "Kids", imageUrl:kids },
    { id: 4, name: "Babies", imageUrl:baby },
  ];

export const productsData = [
  { id: 1, name: "smartphone", price: 9.99, image: smartphone },
  { id: 2, name: "smartwatch", price: 14.99, image: smartwatch },
  { id: 3, name: "sweater_and_sweatshirt", price: 19.99, image: sweater_and_sweatshirt },
  { id: 4, name: "Heater", price: 23.99, image: Heater },
  { id: 5, name: "headset", price: 23.99, image: headset },
];

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
