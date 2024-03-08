let image = document.querySelector(".image");
let shoeName = document.querySelector(".shoe-name");
let shoeSize = document.querySelector(".shoe-size");
let shoeCost = document.querySelector(".shoe-cost");

let button = document.querySeelcotr (".button");

button.onclick = function() {


let shoe1 = {
image:"https://cdn.flightclub.com/TEMPLATE/315867/1.jpg",
name: "Travis Scott 1 Low",
size: "10W",
cost: "$500"
};


let shoe2 = {
image: "https://cdn.clothbase.com/uploads/c652959f-4339-4b48-861e-41e928a65ad0/burgundy-adidas-originals-edition-samba-sneakers.jpg",
name:"Wales Bonner Maroon Sambas",
size:"9.5W",
cost:"$250"
};


let shoe3 = {
image: "https://uk.bape.com/cdn/shop/files/001FWJ801053I_BEI_C_7026b1a2-334c-4cf9-b574-65cdaeac15b3.jpg?v=1702556555&width=1200",
name: "Cream Bapestas",
size: "11W",
cost:"$200"
};

let allShoes = [shoe1,shoe2,shoe3];


let userImage = image.value;
let userShoeName = shoeName.value;
let userShoeSize = shoeSize.value;
let userShoeCost = shoeCost.value;

let newShoes = {
    image:userImage,
    name: userShoeName,
    size:userShoeSize,
    cost:userShoeCost
    };

    allShoes.push(newShoes);

function emptyDisplay(){
display.innerHTML = "";

}




};

