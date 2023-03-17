import { foodItem } from "./fooditem.js";
// console.log(foodItem);

function displayItems(){
var biryani=document.getElementById('biryani')
var chicken=document.getElementById('chicken')
var chinese=document.getElementById('chinese')
var SouthIndian=document.getElementById('south-indian')
var momo=document.getElementById('momo')
var paneer=document.getElementById('paneer')

const biryaniData=foodItem.filter(item=>item.category=='biryani');
console.log(biryaniData);
const chickenData=foodItem.filter(item=>item.category=='chicken');
console.log(chickenData);
const chineseData=foodItem.filter(item=>item.category=='chinese');
console.log(chineseData);
const SouthIndianData=foodItem.filter(item=>item.category=='SouthIndian');
console.log(SouthIndianData);
const momoData=foodItem.filter(item=>item.category=='momo');
console.log(momoData);
const paneerData=foodItem.filter(item=>item.category=='paneer');
console.log(paneerData);

biryaniData.map(item=>{
    var itemCard=document.createElement('div');
itemCard.setAttribute('id','item-card');

var cardTop=document.createElement('div')
cardTop.setAttribute('id','card-top')

var star=document.createElement('i')
star.setAttribute('class','fa fa-star')
star.setAttribute('id','rating')
star.innerText=''+item.rating;

var heart=document.createElement('i')
heart.setAttribute('class','fa fa-heart-o add-to-cart')
heart.setAttribute('id',item.id)

cardTop.appendChild(star);
cardTop.appendChild(heart);

var img=document.createElement('img')
img.src=item.img;

var itemName=document.createElement('p')
itemName.setAttribute('id','item-name')
itemName.innerText=item.name

var itemPrice=document.createElement('p')
itemPrice.setAttribute('id','item-price')
itemPrice.innerText='Price : $ ' + item.price

itemCard.appendChild(cardTop)
itemCard.appendChild(img)
itemCard.appendChild(itemName)
itemCard.appendChild(itemPrice)

biryani.appendChild(itemCard)

})
chickenData.map(item=>{
    var itemCard=document.createElement('div');
itemCard.setAttribute('id','item-card');

var cardTop=document.createElement('div')
cardTop.setAttribute('id','card-top')

var star=document.createElement('i')
star.setAttribute('class','fa fa-star')
star.setAttribute('id','rating')
star.innerText=''+item.rating;

var heart=document.createElement('i')
heart.setAttribute('class','fa fa-heart-o add-to-cart')
heart.setAttribute('id',item.id)

cardTop.appendChild(star);
cardTop.appendChild(heart);

var img=document.createElement('img')
img.src=item.img;

var itemName=document.createElement('p')
itemName.setAttribute('id','item-name')
itemName.innerText=item.name

var itemPrice=document.createElement('p')
itemPrice.setAttribute('id','item-price')
itemPrice.innerText='Price : $ ' + item.price

itemCard.appendChild(cardTop)
itemCard.appendChild(img)
itemCard.appendChild(itemName)
itemCard.appendChild(itemPrice)

chicken.appendChild(itemCard)

})

chineseData.map(item=>{
    var itemCard=document.createElement('div');
itemCard.setAttribute('id','item-card');

var cardTop=document.createElement('div')
cardTop.setAttribute('id','card-top')

var star=document.createElement('i')
star.setAttribute('class','fa fa-star')
star.setAttribute('id','rating')
star.innerText=''+item.rating;

var heart=document.createElement('i')
heart.setAttribute('class','fa fa-heart-o add-to-cart')
heart.setAttribute('id',item.id)

cardTop.appendChild(star);
cardTop.appendChild(heart);

var img=document.createElement('img')
img.src=item.img;

var itemName=document.createElement('p')
itemName.setAttribute('id','item-name')
itemName.innerText=item.name

var itemPrice=document.createElement('p')
itemPrice.setAttribute('id','item-price')
itemPrice.innerText='Price : $ ' + item.price

itemCard.appendChild(cardTop)
itemCard.appendChild(img)
itemCard.appendChild(itemName)
itemCard.appendChild(itemPrice)

chinese.appendChild(itemCard)

})
SouthIndianData.map(item=>{
    var itemCard=document.createElement('div');
itemCard.setAttribute('id','item-card');

var cardTop=document.createElement('div')
cardTop.setAttribute('id','card-top')

var star=document.createElement('i')
star.setAttribute('class','fa fa-star')
star.setAttribute('id','rating')
star.innerText=''+item.rating;

var heart=document.createElement('i')
heart.setAttribute('class','fa fa-heart-o add-to-cart')
heart.setAttribute('id',item.id)

cardTop.appendChild(star);
cardTop.appendChild(heart);

var img=document.createElement('img')
img.src=item.img;

var itemName=document.createElement('p')
itemName.setAttribute('id','item-name')
itemName.innerText=item.name

var itemPrice=document.createElement('p')
itemPrice.setAttribute('id','item-price')
itemPrice.innerText='Price : $ ' + item.price

itemCard.appendChild(cardTop)
itemCard.appendChild(img)
itemCard.appendChild(itemName)
itemCard.appendChild(itemPrice)

SouthIndian.appendChild(itemCard)

})
momoData.map(item=>{
    var itemCard=document.createElement('div');
itemCard.setAttribute('id','item-card');

var cardTop=document.createElement('div')
cardTop.setAttribute('id','card-top')

var star=document.createElement('i')
star.setAttribute('class','fa fa-star')
star.setAttribute('id','rating')
star.innerText=''+item.rating;

var heart=document.createElement('i')
heart.setAttribute('class','fa fa-heart-o add-to-cart')
heart.setAttribute('id',item.id)

cardTop.appendChild(star);
cardTop.appendChild(heart);

var img=document.createElement('img')
img.src=item.img;

var itemName=document.createElement('p')
itemName.setAttribute('id','item-name')
itemName.innerText=item.name

var itemPrice=document.createElement('p')
itemPrice.setAttribute('id','item-price')
itemPrice.innerText='Price : $ ' + item.price

itemCard.appendChild(cardTop)
itemCard.appendChild(img)
itemCard.appendChild(itemName)
itemCard.appendChild(itemPrice)

momo.appendChild(itemCard)

})

paneerData.map(item=>{
    var itemCard=document.createElement('div');
itemCard.setAttribute('id','item-card');

var cardTop=document.createElement('div')
cardTop.setAttribute('id','card-top')

var star=document.createElement('i')
star.setAttribute('class','fa fa-star')
star.setAttribute('id','rating')
star.innerText=''+item.rating;

var heart=document.createElement('i')
heart.setAttribute('class','fa fa-heart-o add-to-cart')
heart.setAttribute('id',item.id)

cardTop.appendChild(star);
cardTop.appendChild(heart);

var img=document.createElement('img')
img.src=item.img;

var itemName=document.createElement('p')
itemName.setAttribute('id','item-name')
itemName.innerText=item.name

var itemPrice=document.createElement('p')
itemPrice.setAttribute('id','item-price')
itemPrice.innerText='Price : $ ' + item.price

itemCard.appendChild(cardTop)
itemCard.appendChild(img)
itemCard.appendChild(itemName)
itemCard.appendChild(itemPrice)

paneer.appendChild(itemCard)

})
}

displayItems();

const categoryListData=[...new Map(foodItem.map(item=>[item['category'],item]
    )).values()]
    console.log(categoryListData);