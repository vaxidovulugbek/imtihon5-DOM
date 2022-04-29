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
let y = 1
arr.forEach((item) => {
    let li = document.createElement("li");
    li.className = "items";
    li.classList.add(`y_${y}`)
    li.id = `${item.id}`
    li.classList.add(`1`)
    li.innerHTML = `
      <button class="btn"><img class="imgs" src="${item.img}" alt=""></button>
    `;
    y++
    list.appendChild(li);
    // console.log(list);

    // list.forEach((item,index) => {
    //   console.log(item);
    // })
    // for (let i = 0; i < list.length; i++) {
    //   console.log(i);
    // }
});


let items = document.querySelectorAll(".items")
items.forEach(j => {

  console.log(j);
  // if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
  //   d.classList.add("red")
  // }
  // el.addEventListener("click",(e) => {
  //   console.log(e.target.parentElement);
  // })
})








  // for (let i = 0; i < 1; i++) {
  //   console.log(i);
  //   arr.forEach((item) => {
  //     let li = document.createElement("li")
  //     li.className = `items`
  //     li.classList.add(`y_${y}`)
  //     li.classList.add(`1`)
  //     li.innerHTML = `<button class="btn"><img class="imgs" src="${item.img}" alt=""></button>`
  //     list.appendChild(li)
  //   })
  // }











// list.forEach((item,index) => {
//   console.log(item);
//   // item.addEventListener(("click"),(e) => {
//   //   console.log("ok");
//   // })
// })


// list.addEventListener("click",() => {
//   console.log("ok");
// })
// lContentSubitem1.addEventListener("click" ,(s) => {
//   elitem.forEach((itemm, index) => {
//     itemm.addEventListener("mouseover",(j) => {
//       // j.target.innerHTML = `<img class="content__subimg simg" src="../img/ot.svg">`
//       // j.target.style.backgroundImage = "url('../img/ruh.svg')"
//       // j.target.style.backgroundSize = "60px"
//       // j.target.style.backgroundPosition = "center"
//       // j.target.style.backgroundRepeat = "no-repeat"

//       elitem.forEach((d,h)=>{
//         if (j.target.classList[2] ==  d.classList[2]){
//           d.classList.add("red")
//           itemm.addEventListener("click",() => {
//             console.log(itemm);
//              itemm.innerHTML = `<img class="content__subimg" src="img/ruh.svg" alt="ruh">`
//              console.log(a);
//           })
//         }
//         if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
//           d.classList.add("red")
//         }
//       }) 
//     })
//   })

//   elitem.forEach((itemm, index) => {
//     itemm.addEventListener("mouseout",(j) => {
//       // j.target.innerHTML = ``

//       elitem.forEach((d,h)=>{
//         if (j.target.classList[2] ==  d.classList[2])   {
//           d.classList.remove("red")
//           // j.target.style.backgroundImage = "url('../img/white.jpg')"
//           // j.target.style.backgroundSize = "0px"
//         }
//         if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
//           d.classList.remove("red")
//         }
//       }) 
//     })
//   })
// })












