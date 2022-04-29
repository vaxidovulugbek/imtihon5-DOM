const pokemons = [
  {
    id:1,
    img: "https://www.serebii.net/pokemongo/pokemon/001.png"
  },
  {
    id:2,
    img: "https://www.serebii.net/pokemongo/pokemon/013.png"
  },
  {
    id:3,
    img: "https://www.serebii.net/pokemongo/pokemon/002.png"
  },
  {
    id:4,
    img: "https://www.serebii.net/pokemongo/pokemon/014.png"
  },
  {
    id:5,
    img: "https://www.serebii.net/pokemongo/pokemon/004.png"
  },
  {
    id:6,
    img: "https://www.serebii.net/pokemongo/pokemon/015.png"
  },
  {
    id:7,
    img: "https://www.serebii.net/pokemongo/pokemon/005.png"
  },
  {
    id:8,
    img: "https://www.serebii.net/pokemongo/pokemon/016.png"
  },
  {
    id:9,
    img: "https://www.serebii.net/pokemongo/pokemon/006.png"
  },
  {
    id:10,
    img: "https://www.serebii.net/pokemongo/pokemon/017.png"
  },
  {
    id:11,
    img: "https://www.serebii.net/pokemongo/pokemon/007.png"
  },
  {
    id:12,
    img: "https://www.serebii.net/pokemongo/pokemon/025.png"
  },
  {
    id:13,
    img: "https://www.serebii.net/pokemongo/pokemon/008.png"
  },
  {
    id:14,
    img: "https://www.serebii.net/pokemongo/pokemon/019.png"
  },
  {
    id:15,
    img: "https://www.serebii.net/pokemongo/pokemon/009.png"
  },
]


// const Arraypocemon = pokemons.sort((a, b) => 0.5 - Math.random());
// // console.log(Arraypocemon);
// let list = document.querySelector("#list")
//   for (let j = 0; j < 4; j++) {
//     for (let i = 0; i < Arraypocemon.length; i++) {
//       let li = document.createElement("li")
//       li.classList = "items"
//       li.innerHTML = `<button class="btn"><img class="imgs" src="${pokemons[i].img}" alt=""></button>`
//       list.appendChild(li)
//     }
//     console.log(list);
// }




let arr = []
for (let i = 0; i < 4; i++) {
    pokemons.forEach((item) => {
        arr.push(item)
    })
}
let arr_length = 60
for (let i = 0; i < 100; i++) {
    const idx1 = Math.floor(Math.random() * arr_length);
    const idx2 = Math.floor(Math.random() * arr_length);

    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
let mass = [];
for(let i = 1; i <= 6; i++) {
  for(let j = 1; j <= 10; j++){
    let obj = {
      x: i,
      y: j,
    }
    mass.push(obj);
  }
}
let imgs = []


arr.forEach((elem)=>{
  imgs.push(elem.id)
})

let x = 0
let y = 0  

let listi = document.querySelector('#list')
mass.forEach((el,i )=> {
    imgs.forEach((item)=>{
      let li = document.createElement("li")
      // li.className = `items y_${el.y} x_${el.x} ${i} `
      li.id = item
      listi.appendChild(li)
    })
});


let items = document.querySelectorAll('.items')
items.forEach((elem)=>{
  pokemons.forEach((item)=>{
    // if (elem.id == item.id) {
   elem.innerHTML=`<img src="${item.img}" alt="imgs">`
    // }
  })
})




