const pokemons = [{
  id: 1,
  img: "https://www.serebii.net/pokemongo/pokemon/001.png"
},
{
  id: 2,
  img: "https://www.serebii.net/pokemongo/pokemon/013.png"
},
{
  id: 3,
  img: "https://www.serebii.net/pokemongo/pokemon/002.png"
},
{
  id: 4,
  img: "https://www.serebii.net/pokemongo/pokemon/014.png"
},
{
  id: 5,
  img: "https://www.serebii.net/pokemongo/pokemon/004.png"
},
{
  id: 6,
  img: "https://www.serebii.net/pokemongo/pokemon/015.png"
},
{
  id: 7,
  img: "https://www.serebii.net/pokemongo/pokemon/005.png"
},
{
  id: 8,
  img: "https://www.serebii.net/pokemongo/pokemon/016.png"
},
{
  id: 9,
  img: "https://www.serebii.net/pokemongo/pokemon/006.png"
},
{
  id: 10,
  img: "https://www.serebii.net/pokemongo/pokemon/017.png"
},
{
  id: 11,
  img: "https://www.serebii.net/pokemongo/pokemon/007.png"
},
{
  id: 12,
  img: "https://www.serebii.net/pokemongo/pokemon/025.png"
},
{
  id: 13,
  img: "https://www.serebii.net/pokemongo/pokemon/008.png"
},
{
  id: 14,
  img: "https://www.serebii.net/pokemongo/pokemon/019.png"
},
{
  id: 15,
  img: "https://www.serebii.net/pokemongo/pokemon/009.png"
},
]
let boxs = [];
let cord = [];
let imgs = [];
let imgs_length = 60;
for (let a = 1; a <= 8; a++) {
for (let b = 1; b <= 12; b++) {
  let boxobj = {
      x: a,
      y: b,
  }
  cord.push(boxobj)
}
}
for (let a = 2; a <= 7; a++) {
for (let b = 2; b <= 11; b++) {
  let boxobj = {
      x: a,
      y: b,
  }
  boxs.push(boxobj)
}
}
for (let i = 0; i < 4; i++) {
pokemons.forEach((item) => {
  imgs.push(item.id)
})
}
for (let i = 0; i < 100; i++) {
let idx1 = Math.floor(Math.random() * imgs_length);
let idx2 = Math.floor(Math.random() * imgs_length);
let temp = imgs[idx1];
imgs[idx1] = imgs[idx2];
imgs[idx2] = temp;
}
imgs.forEach((item, i) => {
boxs[i].i = item
})
let ul = document.querySelector('.game__list')
cord.forEach((item)=>{
let li = document.createElement('li')
li.className = game__items x_${item.x} y_${item.y}
ul.appendChild(li)
})
let elemnts = document.querySelectorAll(".game__items")
elemnts.forEach((item)=>{
boxs.forEach((elem)=>{
  if (item.className.includes(x_${elem.x}) && item.className.includes(y_${elem.y})) {
      let boxchik = document.createElement('div')
      boxchik.className = game__box x_${elem.x} y_${elem.y}
      boxchik.id = elem.i
      item.appendChild(boxchik)
  }
})
})
let boxshik = document.querySelectorAll('.game__box')
boxshik.forEach((imgs)=>{
pokemons.forEach((ings)=>{
  if (imgs.id == ings.id) {
      imgs.innerHTML = <img src="${ings.img}" alt="img">
  }
})
})



boxshik.forEach((item)=>{
item.addEventListener("click",()=>{
  console.log(item.className);
})
})