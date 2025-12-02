import laptop from "./laptop.jpeg";
import shoes from "./shoes.jpeg";
import samsung from "./samsung.jpeg";
import cosmus from "./cosmus.jpeg";
import wildcraft from "./wildcraft.jpeg";
import boat from "./boat.jpeg";


const PRODUCT_DATA = [
    {
        id:"P656" ,
        name:"HP laptop", 
        description:"HP 14-inch laptop with Intel i5,8GB RAM and 512GB SSD.",
        image: laptop },  

    {
        id:"P644" ,
        name:"Adidas Shoes",
        description:"Lightweight Adidas shoes with breathable mesh and strong grip." ,
        image:shoes},
    {
        id:"P027" ,
        name:"Samsung s24",
        description:"6.5-inch display, fast charging and triple camera setup." ,
        image:samsung},
    {
        id:"P874" ,
        name:"Wildcraft travelling bag", 
        description:"45L waterproof bag with padded straps and multiple pockets" ,
        image:wildcraft},
    {
        id:"P119" ,
        name:"Cosmus Bag",
        description:"Stylish bag with premium fabric, large space and modern design." ,
        image:cosmus},
    {
        id:"P975" ,
        name:"Boat Wireless Headphones",
        description:"Boat Bluetooth wireless headphones with powerful basslong batery life and noise solation.",
        image:boat}
];

export {PRODUCT_DATA}