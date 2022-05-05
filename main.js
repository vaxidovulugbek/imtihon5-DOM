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

let winshot = document.querySelector("#winshot")
let sum = 0
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

let x = 1
let y = 1
arr.forEach((item) => {
  if (x > 10) {
    x = 1
    y++
  }
  let li = document.createElement("li");
  // let span = document.createElement("span")
  // span.innerHTML = `<span class="zero">${item.id}</span>`
  li.className =  `items x-${y} y-${x} ${item.id}`
  li.id = `${item.id}`
  li.innerHTML = `
    <span class="zero "></span>
    <button class="btn"><img class="imgs" src="${item.img}" alt=""></button>
  `;
  // li.appendChild(span)
  list.appendChild(li);
  x++
  // console.log(li);
})


let items = document.querySelectorAll(".items")
let count = 2
let count2 = 2
let count3 = 2
let count4 = 2
let f 
let k = 0
let c = 0
let l = 0
let h = 0
let bg
// ========================================
let f2 
let k2 = 0
let c2 = 0
let l2 = 0
let h2 = 0
let bg2
// =======================================
let f3 
let k3 = 0
let c3 = 0
let l3 = 0
let h3 = 0
let bg3
// =======================================
let f4 
let k4 = 0
let c4 = 0
let l4 = 0
let h4 = 0
let bg4

// ======================================
let verticalpasetarget
let verticalpas = 0
let verticalpasclasslist = 0
let verticalpasbg

// ======================================
let verticaltepaetarget
let verticaltepa = 0
let verticaltepaclasslist = 0
let verticaltepabg

// ======================================
let gorizintalchaptarget
let gorizontalchap = 0
let gorizontalchapclasslist = 0
let gorizontalchapbg

// ======================================
let gorizintalongtarget
let gorizontalong = 0
let gorizontalongclasslist = 0
let gorizontalongbg

// ====================================

let buXkordinata = 0
let buYcordinatadclaslistidagi = 0
let buYcordinataetarget = 0
let buYdclaslistdagicord = 0


// eng tepadagi elemtnt bir xilligi1 ulugbek ================================
let target01
// let target2
let target02niclasslisti = 0
let target01niclasslisti = 0
let target01bg


// bitta tepadagi elemtnt bir xilligi2 ulugbek ================================
let target1
// let target2
let target2niclasslisti = 0
let target1niclasslisti = 0
let target1bg

// bitta tepadagi elemtnt bir xilligi2 ulugbek ================================
let target11
let target22ni1 = 0
let target22ni2 = 0
let target22niclasslisti = 0
let target11niclasslisti = 0
let target11bg

// bitta tepadagi elemtnt bir xilligi2 ulugbek ================================
let target111
let target222ni1 = 0
let target222ni2 = 0
let target222niclasslisti = 0
let target111niclasslisti = 0
let target111bg

// bitta pasdan element bir xilligi
let targetpas1
let targetpas2
let targetpas1classlist
let targetpas2classlisti
let targetpas1bg


// ================================================================================================================================================================
// ================================================= tepadan pasdagi elementlarni tekshirib kelish ==================================================================
// ==========================================================================================================================================================================
let tepa11pas2
let tepa11pas22classlisti = 0
let tepa11pas21classlisti = 0
let tepa11pas2bg

// ==========================================================

let tepa12pas2
let tepa12pas22classlisti = 0
let tepa12pas21classlisti = 0
let tepa12pas2bg

// ==========================================================

let tepa13pas2
let tepa13pas22classlisti = 0
let tepa13pas21classlisti = 0
let tepa13pas2bg

// ==================================================================================
let qator03_4target
let qator03_4claslist = 0
let qator03_4claslist2 = 0
let qator03_4bg

let qator3_4target
let qator3_4claslist = 0
let qator3_4claslist2 = 0
let qator3_4bg

// ==================================================================================
let qator03_5target
let qator03_5claslist = 0
let qator03_5claslist2 = 0
let qator03_5bg

let qator3_5target
let qator3_5claslist = 0
let qator3_5claslist2 = 0
let qator3_5bg

// ==================================================================================
let qator03_6target
let qator03_6claslist = 0
let qator03_6claslist2 = 0
let qator03_6bg

let qator3_6target
let qator3_6claslist = 0
let qator3_6claslist2 = 0
let qator3_6bg

// ==================================================================================

let qator4_5target
let qator4_5claslist = 0
let qator4_5claslist2 = 0
let qator4_5bg

// ==================================================================================

let qator4_6target
let qator4_6claslist = 0
let qator4_6claslist2 = 0
let qator4_6bg
// ==================================================================================

let qator05_6target
let qator05_6claslist = 0
let qator05_6claslist2 = 0
let qator05_6bg

let qator5_6target
let qator5_6claslist = 0
let qator5_6claslist2 = 0
let qator5_6bg

// ==============================================================
// ==============================================================

let ustun1_target
let ustun1_clalist
let ustun1_clalist2
let ustun1_bg



let a = 111
let a1 = 111
let b = 111
let s = 111
let b1 = 111
let s1 = 111

let b3 = 111
let s3 = 111
let b31 = 111
let s31 = 111
let b0111 = 111

let b4 = 111
let s4 = 111
let d4 = 111
let b41 = 111
let s41 = 111
let d41 = 111

let b5 = 111
let s5 = 111
let d5 = 111
let e5 = 111
let b51 = 111
let s51 = 111
let d51 = 111
let e51 = 111

let b6 = 111
let s6 = 111
let d6 = 111
let e6 = 111
let b61 = 111
let s61 = 111
let d61 = 111
let e61 = 111
// ============


let b01 = 111
let s01 = 111
let b011 = 111
let s011 = 111


let b03 = 111
let s03 = 111
let d03 = 111
let b031 = 111
let s031 = 111
let d031 = 111

let bb4 = 111
let ss4 = 111
let dd4 = 111
let ee4 = 111
let bb41 = 111
let ss41 = 111
let dd41 = 111
let ee41 = 111

// ===========

let aa = 111
let aa1 = 111
let bb = 111
let ss = 111
let bb1 = 111
let ss1 = 111

let bb3 = 111
let ss3 = 111
let dd3 = 111
let ee3 = 111
let bb31 = 111
let ss31 = 111
let dd31 = 111
let ee31 = 111

// =============
let aaa = 111
let aaa1 = 111
let bbb = 111
let sss = 111
let ddd = 111
let bbb1 = 111
let sss1 = 111
let ddd1 = 111


// =================== a qotorlar =============== 
let a01 = 111
let a001 = 111
let b001 = 111


// ===================== chiziq chiqishi tepadan pasga ======================================
let chiziq1 = " "
let chiziq2 = " "
// ===================== chiziq chiqishi pasdan tepaga ===============================
let chiziq3 = " "
let chiziq4 = " "
// ===================== chiziq chiqishi chapdan ongga ===============================
let chiziq5 = " "
let chiziq6 = " "
// ===================== chiziq chiqishi chapdan chapga ===============================
let chiziq7 = " "
let chiziq8 = " "

// window load
// const listBtn = document.querySelectorAll('.list__btn')

items.forEach(el => {
  el.addEventListener('click', () => {
    items.forEach(item => {
      item.classList.remove('active')
    })
    el.classList.add('active')
  })
})

let sum2 = 1

items.forEach(ell => {
  ell.addEventListener("click",(e) => {
    items.forEach(d => {
      buXkordinata = e.target.parentElement.parentElement.classList[1].slice(2)
      buYcordinatadclaslistidagi = d.classList[1].slice(2)
      buYcordinataetarget = e.target.parentElement.parentElement.classList[2].slice(2)
      buYdclaslistdagicord = d.classList[2].slice(2)

        // if (buXkordinata ==  buYcordinatadclaslistidagi){ // X OQI  BOSHI  
        //   d.classList.add("red")
        //   if (d.classList[4] == "yoq") {
        //     console.log("youqqq");
        //   }
        // }
        // if (buYcordinataetarget == buYdclaslistdagicord) { // Y OQI
        //   // d.classList.add("red")
        //   if (d.classList[4] == "yoq") {
        //     console.log("youqqq");
        //   }
        // } 
        // else if (buXkordinata !=  buYcordinatadclaslistidagi){
        //   d.classList.remove("red")
        // } // RUH YURUSHI TUGADI
        
        // if (buXkordinata ==  buYcordinatadclaslistidagi){ // X OQI  BOSHI  
        //   d.classList.add("red")
        //   if (d.classList[4] == "yoq") {
        //     console.log("youqqq");
        //   }
        // }


// ================================================ 1 yolak tepadan =========================================================

if (count4 % 2 == 0) {
  if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
    e.target.classList.add("takrorlanma")
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
      verticaltepaetarget = e.target
      verticaltepabg = e.target.parentElement
      verticaltepa = e.target.parentElement.parentElement.classList[3]
    }

  }
}
else if (count4 % 2 != 0) {
  if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
    // e.target.parentElement.parentElement.classList.add("border")
    if (e.target.classList[1] != "takrorlanma") {
      if (e.target.parentElement.parentElement.classList[1].slice(2) == 1){
        verticaltepaclasslist = d.classList[3]
        if (verticaltepa == verticaltepaclasslist) {
          verticaltepaetarget.style.display = "none"
          e.target.style.display = "none"
          e.target.parentElement.classList.add("bg")
          verticaltepabg.classList.add("bg")  
          e.target.parentElement.parentElement.classList.add("yoq") 
          verticaltepaetarget.parentElement.parentElement.classList.add("yoq") 
          sum += 100
          winshot.textContent = sum
          
        }

      }
    }
  }
}
//============================== teskariga ==================
if (count4 % 2 == 0) {
  if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
    e.target.classList.add("takrorlanma")
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
      verticaltepaetarget = e.target
      verticaltepabg = e.target.parentElement
      verticaltepa = e.target.parentElement.parentElement.classList[3]
    }

  }
}
else if (count4 % 2 != 0) {
  if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
    // e.target.parentElement.parentElement.classList.add("border")
    if (e.target.classList[1] != "takrorlanma") {
      if (e.target.parentElement.parentElement.classList[1].slice(2) == 6){
        verticaltepaclasslist = d.classList[3]
        if (verticaltepa == verticaltepaclasslist) {
          verticaltepaetarget.style.display = "none"
          e.target.style.display = "none"
          e.target.parentElement.classList.add("bg")
          verticaltepabg.classList.add("bg")  
          e.target.parentElement.parentElement.classList.add("yoq") 
          verticaltepaetarget.parentElement.parentElement.classList.add("yoq") 
          sum += 100
          winshot.textContent = sum
          
        }

      }
    }
  }
}

// ================================================ 2 yolak tepadan ===========================================================

        if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
          if (count % 2 == 0) {
            if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
              if (d.classList[4] == "yoq") {
                e.target.classList.add("takrorlanma")
                // console.log(e.target);
                target1 = e.target
                target1niclasslisti = e.target.parentElement.parentElement.classList[3]
                target1bg = e.target.parentElement
              }
            }
          }

          else if (count % 2 != 0) {
            if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
              // console.log(d.classList);
              if (d.classList[4] == "yoq") {
                if (e.target.classList[1] != "takrorlanma") { 
                  target2niclasslisti = e.target.parentElement.parentElement.classList[3]
                   if (target2niclasslisti == target1niclasslisti) {
                  target1.style.display = "none"
                  e.target.style.display = "none"
                  // console.log("afsus");
                  e.target.parentElement.classList.add("bg")
                  target1bg.classList.add("bg")    
                  e.target.parentElement.parentElement.classList.add("yoq") 
                  target1.parentElement.parentElement.classList.add("yoq") 

                  sum += 100
                  winshot.textContent = sum
                }
                }
              
              }
            }
          }
         
          }
//============================== teskariga ==================
if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        // console.log(e.target);
        target1 = e.target
        target1niclasslisti = e.target.parentElement.parentElement.classList[3]
        target1bg = e.target.parentElement
      }
    }
  }

  else if (count % 2 != 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // console.log(d.classList);
      if (d.classList[4] == "yoq") {
        if (e.target.classList[1] != "takrorlanma") { 
          target2niclasslisti = e.target.parentElement.parentElement.classList[3]
           if (target2niclasslisti == target1niclasslisti) {
          target1.style.display = "none"
          e.target.style.display = "none"
          // console.log("afsus");
          e.target.parentElement.classList.add("bg")
          target1bg.classList.add("bg")    
          e.target.parentElement.parentElement.classList.add("yoq") 
          target1.parentElement.parentElement.classList.add("yoq") 

          sum += 100
          winshot.textContent = sum
        }
        }
      
      }
    }
  }
 
  }
// // ===========================================    3    ============================================================================================================

       
     if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
       if (count % 2 == 0) {
         if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
           if (d.classList[4] == "yoq") {
            e.target.classList.add("takrorlanma")
             target11 = e.target
             target22ni1 = d.classList
             target11niclasslisti = e.target.parentElement.parentElement.classList[3]
             target11bg = e.target.parentElement
           }
         }
         if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
           if (d.classList[4] == "yoq") {
             target22ni1 = d.classList
             target11niclasslisti = e.target.parentElement.parentElement.classList[3]
             target11bg = e.target.parentElement
           }
         }
       }
       else if (count % 2 != 0) {
          if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            // console.log(e.target.classList);
            if (d.classList[4] == "yoq") {
              if (e.target.classList[1] != "takrorlanma") {
                target22niclasslisti = e.target.parentElement.parentElement.classList[3]
                if (target22niclasslisti == target11niclasslisti) {
                  target11.style.display = "none"
                  e.target.style.display = "none"
                  // console.log("afsus");
                  e.target.parentElement.classList.add("bg")
                  target11bg.classList.add("bg")    
                  e.target.parentElement.parentElement.classList.add("yoq") 
                  target11.parentElement.parentElement.classList.add("yoq") 
                  // winshot.textContent+=100
                  sum += 100
                  winshot.textContent = sum
                }

              }
            }
          }
          }
        }
//============================== teskariga ==================
if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
       e.target.classList.add("takrorlanma")
        target11 = e.target
        target22ni1 = d.classList
        target11niclasslisti = e.target.parentElement.parentElement.classList[3]
        target11bg = e.target.parentElement
      }
    }
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        target22ni1 = d.classList
        target11niclasslisti = e.target.parentElement.parentElement.classList[3]
        target11bg = e.target.parentElement
      }
    }
  }
  else if (count % 2 != 0) {
     if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
       // console.log(e.target.classList);
       if (d.classList[4] == "yoq") {
         if (e.target.classList[1] != "takrorlanma") {
           target22niclasslisti = e.target.parentElement.parentElement.classList[3]
           if (target22niclasslisti == target11niclasslisti) {
             target11.style.display = "none"
             e.target.style.display = "none"
             // console.log("afsus");
             e.target.parentElement.classList.add("bg")
             target11bg.classList.add("bg")    
             e.target.parentElement.parentElement.classList.add("yoq") 
             target11.parentElement.parentElement.classList.add("yoq") 
             // winshot.textContent+=100
             sum += 100
             winshot.textContent = sum
           }

         }
       }
     }
     }
   }
// // =========================================== 4 ========================================================================================================================================================================================================         
        
      if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
        if (count % 2 == 0) {
          if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            if (d.classList[4] == "yoq") {
              e.target.classList.add("takrorlanma")
              target111 = e.target
              target222ni1 = d.classList
              target111niclasslisti = e.target.parentElement.parentElement.classList[3]
              target111bg = e.target.parentElement
            }   
          }
          if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            if (d.classList[4] == "yoq") {
              target222ni1 = d.classList
              target111niclasslisti = e.target.parentElement.parentElement.classList[3]
              target111bg = e.target.parentElement
            }
          }
          if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            if (d.classList[4] == "yoq") {
              target222ni1 = d.classList
              target111niclasslisti = e.target.parentElement.parentElement.classList[3]
              target111bg = e.target.parentElement
            }
          }
        }

        else if (count % 2 != 0) {
          if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            if (d.classList[4] == "yoq") {
              if (e.target.classList[1] != "takrorlanma") {
                target222niclasslisti = e.target.parentElement.parentElement.classList[3]
                if (target222niclasslisti == target111niclasslisti) {
                  target11.style.display = "none"
  
                  e.target.style.display = "none"
                  // console.log("afsus");
                  e.target.parentElement.classList.add("bg")
                  target111bg.classList.add("bg")    
                  e.target.parentElement.parentElement.classList.add("yoq") 
                  target111.parentElement.parentElement.classList.add("yoq") 
                  // winshot.textContent+=100
                  sum += 100
                    winshot.textContent = sum
  
                }

              }
            }
          }
        }
  }

//============================== teskariga ==================
if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        target111 = e.target
        target222ni1 = d.classList
        target111niclasslisti = e.target.parentElement.parentElement.classList[3]
        target111bg = e.target.parentElement
      }   
    }
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        target222ni1 = d.classList
        target111niclasslisti = e.target.parentElement.parentElement.classList[3]
        target111bg = e.target.parentElement
      }
    }
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        target222ni1 = d.classList
        target111niclasslisti = e.target.parentElement.parentElement.classList[3]
        target111bg = e.target.parentElement
      }
    }
  }

  else if (count % 2 != 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        if (e.target.classList[1] != "takrorlanma") {
          target222niclasslisti = e.target.parentElement.parentElement.classList[3]
          if (target222niclasslisti == target111niclasslisti) {
            target11.style.display = "none"

            e.target.style.display = "none"
            // console.log("afsus");
            e.target.parentElement.classList.add("bg")
            target111bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            target111.parentElement.parentElement.classList.add("yoq") 
            // winshot.textContent+=100
            sum += 100
              winshot.textContent = sum

          }

        }
      }
    }
  }
}

// ============================================== 5 tepadan  ============================================================

  if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
    if (count % 2 == 0) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          e.target.classList.add("takrorlanma")
          target111 = e.target
          target222ni1 = d.classList
          target111niclasslisti = e.target.parentElement.parentElement.classList[3]
          target111bg = e.target.parentElement
        }   
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          target222ni1 = d.classList
          target111niclasslisti = e.target.parentElement.parentElement.classList[3]
          target111bg = e.target.parentElement
        }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          target222ni1 = d.classList
          target111niclasslisti = e.target.parentElement.parentElement.classList[3]
          target111bg = e.target.parentElement
        }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          target222ni1 = d.classList
          target111niclasslisti = e.target.parentElement.parentElement.classList[3]
          target111bg = e.target.parentElement
        }
      }
    }

    else if (count % 2 != 0) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          if (e.target.classList[1] != "takrorlanma") {
            target222niclasslisti = e.target.parentElement.parentElement.classList[3]
            if (target222niclasslisti == target111niclasslisti) {
              target11.style.display = "none"

              e.target.style.display = "none"
              // console.log("afsus");
              e.target.parentElement.classList.add("bg")
              target111bg.classList.add("bg")    
              e.target.parentElement.parentElement.classList.add("yoq") 
              target111.parentElement.parentElement.classList.add("yoq") 
              // winshot.textContent+=100
              sum += 100
                winshot.textContent = sum

            }

          }
        }
      }
    }
}


//============================== teskariga ==================
if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        target111 = e.target
        target222ni1 = d.classList
        target111niclasslisti = e.target.parentElement.parentElement.classList[3]
        target111bg = e.target.parentElement
      }   
    }
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        target222ni1 = d.classList
        target111niclasslisti = e.target.parentElement.parentElement.classList[3]
        target111bg = e.target.parentElement
      }
    }
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        target222ni1 = d.classList
        target111niclasslisti = e.target.parentElement.parentElement.classList[3]
        target111bg = e.target.parentElement
      }
    }
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        target222ni1 = d.classList
        target111niclasslisti = e.target.parentElement.parentElement.classList[3]
        target111bg = e.target.parentElement
      }
    }
  }

  else if (count % 2 != 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {
        if (e.target.classList[1] != "takrorlanma") {
          target222niclasslisti = e.target.parentElement.parentElement.classList[3]
          if (target222niclasslisti == target111niclasslisti) {
            target11.style.display = "none"

            e.target.style.display = "none"
            // console.log("afsus");
            e.target.parentElement.classList.add("bg")
            target111bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            target111.parentElement.parentElement.classList.add("yoq") 
            // winshot.textContent+=100
            sum += 100
              winshot.textContent = sum

          }

        }
      }
    }
  }
}




// // ============================================= 1 pasdan kelishim ================================================================

  // if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
  // if (count4 % 2 == 0) {
  //   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
  //       e.target.classList.add("takrorlanma")
  //       verticalpasetarget = e.target
  //       verticalpasbg = e.target.parentElement
  //       verticalpas = e.target.parentElement.parentElement.classList[3]
  //   }
  // }
  // else if (count4 % 2 != 0) {
  //   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
  //     // e.target.parentElement.parentElement.classList.add("border")
  //     if (e.target.classList[1] != "takrorlanma") {
  //       verticalpasclasslist = d.classList[3]
  //       if (verticalpas == verticalpasclasslist) {
  //         verticalpasetarget.style.display = "none"
  //         e.target.style.display = "none"
  //         e.target.parentElement.classList.add("bg")
  //         verticalpasbg.classList.add("bg") 
  //         e.target.parentElement.parentElement.classList.add("yoq") 
  //         verticalpasetarget.parentElement.parentElement.classList.add("yoq") 
  //         sum += 100
  //         winshot.textContent = sum
  //       }
  //     }
  //   }
  // }
  // }


// ================================================================================================================================================================
// ================================================= tepadan pasdagi elementlarni tekshirib kelish ==================================================================
// ===================================================================================================================================================

if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        // console.log(d.classList[1].slice(2));
        tepa11pas2 = e.target
        tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
        tepa11pas2bg = e.target.parentElement
      // }
    }
  }
}

  else if (count % 2 != 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // console.log(d.classList[4]);
      // console.log(e.target.parentElement.parentElement.classList[1].slice(2));
      if (d.classList[4] == "yoq") {
        if (e.target.classList[1] != "takrorlanma") { 
          if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
            tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
             if (tepa11pas22classlisti == tepa11pas21classlisti ) {
            tepa11pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa11pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
            sum += 100
            winshot.textContent = sum
          }
          }
        }
      }
    }
  }
 
 
// ======================================================================================================================================

if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      if (d.classList[4] == "yoq") {

        e.target.classList.add("takrorlanma")
        // console.log(d.classList[1].slice(2));
        tepa11pas2 = e.target
        tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
        tepa11pas2bg = e.target.parentElement
      }
    }
  }
}
  else if (count % 2 != 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // console.log(d.classList[4]);
      // console.log(e.target.parentElement.parentElement.classList[1].slice(2));
      // if (d.classList[4] == "yoq") {
        if (e.target.classList[1] != "takrorlanma") { 
          if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
            tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
             if (tepa11pas22classlisti == tepa11pas21classlisti) {
            tepa11pas2.style.display = "none"
            e.target.style.display = "none"
            // console.log("afsus");
            e.target.parentElement.classList.add("bg")
            tepa11pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
            sum += 100
            winshot.textContent = sum
          }
          }
        // }
      
      }
    }
  }
 
// ========================================================3etap====================================================================================
// ============================================================================================================================================

// if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
//   if (count % 2 == 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       // if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         // console.log(d.classList[1].slice(2));
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       // }
//     }
//   }
// }

  // else if (count % 2 != 0) {
  //   if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
  //     if (d.classList[4] == "yoq") {
  //       if (e.target.classList[1] != "takrorlanma") { 
  //         if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
  //           tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
  //            if (tepa11pas22classlisti == tepa11pas21classlisti ) {
  //           tepa11pas2.style.display = "none"
  //           e.target.style.display = "none"
  //           // console.log("afsus");
  //           e.target.parentElement.classList.add("bg")
  //           tepa11pas2bg.classList.add("bg")    
  //           e.target.parentElement.parentElement.classList.add("yoq") 
  //           tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
  //           sum += 100
  //           winshot.textContent = sum
  //         }
  //         }
  //       }
  //     }
  //   }
  //   else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
  //     if (d.classList[4] == "yoq") {
  //       if (e.target.classList[1] != "takrorlanma") { 
  //         if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
  //           tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
  //            if (tepa11pas22classlisti == tepa11pas21classlisti ) {
  //           tepa11pas2.style.display = "none"
  //           e.target.style.display = "none"
  //           // console.log("afsus");
  //           e.target.parentElement.classList.add("bg")
  //           tepa11pas2bg.classList.add("bg")    
  //           e.target.parentElement.parentElement.classList.add("yoq") 
  //           tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
  //           sum += 100
  //           winshot.textContent = sum
  //         }
  //         }
  //       }
  //     }
  //   }
  // }
// //  ================================================================================================================================

// if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
//   if (count % 2 == 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         console.log(d.classList[1].slice(2));
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         console.log(d.classList[1].slice(2));
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//   }
// }
//   else if (count % 2 != 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       // if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
      
//       // }
//     }
//   }

// // ========================================================4etap====================================================================================
// // ============================================================================================================================================


// if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
//   if (count % 2 == 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       // if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       // }
//     }
//   }
// }

//   else if (count % 2 != 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//   }

// // ===================================================================================================================================

// if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
//   if (count % 2 == 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//    else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//   }
// }
//   else if (count % 2 != 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       // if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
      
//       // }
//     }
//   }

// // ========================================================5etap====================================================================================
// // ============================================================================================================================================



// if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
//   if (count % 2 == 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       // if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       // }
//     }
//   }
// }

//   else if (count % 2 != 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//   }

// // ======================================================================================================================

// if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
//   if (count % 2 == 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//    else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//   }
// }
//   else if (count % 2 != 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       // if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
      
//       // }
//     }
//   }



  
// // ========================================================6etap====================================================================================
// // ============================================================================================================================================

// if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
//   if (count % 2 == 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       // if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       // }
//     }
//   }
// }

//   else if (count % 2 != 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-5 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti ) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
//       }
//     }
//   }


// // // ======================================================================================================================

// // if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
//   if (count % 2 == 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//   }

//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
      
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//   }
//    else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
      
//     if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//   }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//   if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
      
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//   }
//     else if (e.target.parentElement.parentElement.classList[1].slice(2)-0-5 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
      
//       if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa11pas2 = e.target
//         tepa11pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa11pas2bg = e.target.parentElement
//       }
//     }
//   }
// }
//   else if (count % 2 != 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       // if (d.classList[4] == "yoq") {
//         if (e.target.classList[1] != "takrorlanma") { 
//           if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
//             tepa11pas22classlisti = e.target.parentElement.parentElement.classList[3]
//              if (tepa11pas22classlisti == tepa11pas21classlisti) {
//             tepa11pas2.style.display = "none"
//             e.target.style.display = "none"
//             // console.log("afsus");
//             e.target.parentElement.classList.add("bg")
//             tepa11pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa11pas2.parentElement.parentElement.classList.add("yoq") 
  
//             sum += 100
//             winshot.textContent = sum
//           }
//           }
//         }
      
//       // }
//     }
//   }

// =========================================                         =================================
// ======================================== CHAPDAN ONGGA TEKSHIRISH =================================
// ========================================                          =================================



if (count % 2 == 0) {
  if (e.target.parentElement.parentElement.classList[2].slice(2) == 1) {
      if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
          e.target.classList.add("takrorlanma")
          tepa12pas2 = e.target
          tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
          tepa12pas2bg = e.target.parentElement
      }
    }
  }
  
  else if (count % 2 != 0) {
    // let a01 = 111
      if (e.target.parentElement.parentElement.classList[2].slice(2) == 3) {
        if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)-0-1 == d.classList[2].slice(2)){
          if (d.classList[4] == "yoq") {
            a01 = 2
        }
      }
        if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
          if (d.classList[4] == "yoq") { 
            b01 = 3
         }
        }
       }
       if (a01 == 2 && b01 == 3 ) {
        if (e.target.classList[1] != "takrorlanma") { 
          console.log("chiqdi 4");
          tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
           if (tepa12pas22classlisti == tepa12pas21classlisti ) {
              tepa12pas2.style.display = "none"
              e.target.style.display = "none"
              e.target.parentElement.classList.add("bg")
              tepa12pas2bg.classList.add("bg")    
              e.target.parentElement.parentElement.classList.add("yoq") 
              tepa12pas2.parentElement.parentElement.classList.add("yoq") 
              sum += 100
              winshot.textContent = sum
      }
      }
    }
  }
  













































//  bu yer boshlanishi






// ================================================================================================================================================================
// ================================================= tepadan pasdagi elementlarni tekshirib kelish 2 qator  ==================================================================
// ===================================================================================================================================================


if (count % 2 == 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        tepa12pas2 = e.target
        tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
        tepa12pas2bg = e.target.parentElement
      // }
    }
  }
}

else if (count % 2 != 0) {
  // let a01 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a01 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b01 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (a01 == 2 && b01 == 3 ) {
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
         if (tepa12pas22classlisti == tepa12pas21classlisti ) {
            tepa12pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa12pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa12pas2.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
  }
}

// ========================================================================================================================================
if (count % 2 == 0) {
  // let a01 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a001 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b001 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (a001 == 2 && b001 == 3 ) {
      e.target.classList.add("takrorlanma")
      tepa12pas2 = e.target
      tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
      tepa12pas2bg = e.target.parentElement
  }
}
else if (count % 2 != 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
       
      // }
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
         if (tepa12pas22classlisti == tepa12pas21classlisti ) {
             tepa12pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa12pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa12pas2.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
    }
  }
}

// // ===================================================================================================================================
// // ===================================================================================================================================
if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        tepa12pas2 = e.target
        tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
        tepa12pas2bg = e.target.parentElement
      // }
    }
  }
}
else if (count % 2 != 0) {
  // let a = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
       else {
         b = 111
       }
      }
     }
     if (a == 2 && b == 3 ) {
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
         if (tepa12pas22classlisti == tepa12pas21classlisti ) {
             tepa12pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa12pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa12pas2.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
  }
}

// // ============================================================================================================================

if (count % 2 == 0) {
  // let a1 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a1 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b1 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
       else {
         b1 = 111
       }
      }
     }
     if (a1 == 2 && b1 == 3 ) {
      e.target.classList.add("takrorlanma")
      tepa12pas2 = e.target
      tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
      tepa12pas2bg = e.target.parentElement
  }
}
else if (count % 2 != 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
       
      // }
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
         if (tepa12pas22classlisti == tepa12pas21classlisti ) {
             tepa12pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa12pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa12pas2.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
    }
  }
}

// // ====================================================================================================================
// // ====================================================================================================================

if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        tepa12pas2 = e.target
        tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
        tepa12pas2bg = e.target.parentElement
      // }
    }
  }
}
else if (count % 2 != 0) {
  // let aa = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          aa = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          bb = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ss = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (aa == 2 && bb == 3 && ss == 4) {
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
         if (tepa12pas22classlisti == tepa12pas21classlisti ) {
             tepa12pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa12pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa12pas2.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
  }
}

// // =================================================================================================================================

if (count % 2 == 0) {
  // let aa1 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          aa1 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          bb1 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ss1 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (aa1 == 2 && bb1 == 3 && ss1 == 4 ) {
      e.target.classList.add("takrorlanma")
      tepa12pas2 = e.target
      tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
      tepa12pas2bg = e.target.parentElement
  }
}
else if (count % 2 != 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
       
      // }
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
         if (tepa12pas22classlisti == tepa12pas21classlisti ) {
             tepa12pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa12pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa12pas2.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
    }
  }
}


// // =====================================================================================================================
// // =====================================================================================================================

if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        tepa12pas2 = e.target
        tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
        tepa12pas2bg = e.target.parentElement
      // }
    }
  }
}
else if (count % 2 != 0) {
  // let aaa = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          aaa = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          bbb = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          sss = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ddd = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (aaa == 2 && bbb == 3 && sss == 4 && ddd == 5) {
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
         if (tepa12pas22classlisti == tepa12pas21classlisti ) {
             tepa12pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa12pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa12pas2.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
  }
}

// // =================================================================================================================================
if (count % 2 == 0) {
  // let aaa1 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          aaa1 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          bbb1 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          sss1 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ddd1 = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (aaa1 == 2 && bbb1 == 3 && sss1 == 4 && ddd1 == 5) {
      e.target.classList.add("takrorlanma")
      tepa12pas2 = e.target
      tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
      tepa12pas2bg = e.target.parentElement
  }
}
else if (count % 2 != 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
       
      // }
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
         if (tepa12pas22classlisti == tepa12pas21classlisti ) {
             tepa12pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa12pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa12pas2.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
    }
  }
}


// // ================================================================================================================================================================
// // ================================================= tepadan pasdagi elementlarni tekshirib kelish 3 qator  ==================================================================
// // ===================================================================================================================================================

if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        qator03_4target = e.target
        qator03_4claslist = e.target.parentElement.parentElement.classList[3]
        qator03_4bg = e.target.parentElement
      // }
    }
  }
}
else if (count % 2 != 0) {
  let a3 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a3 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b3 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          c3 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (a3 == 2 && b3 == 3 && c3 == 4) {
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        qator03_4claslist2 = e.target.parentElement.parentElement.classList[3]
         if (qator03_4claslist2 ==  qator3_4claslist) {
          qator03_4target.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            qator03_4bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            qator03_4target.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
  }
}

// // =====================================================================================================================

if (count % 2 == 0) {
  let a0111 = 111
  
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
    //   if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
    //     if (d.classList[4] == "yoq") {
    //       a0111 = 2
    //   }
    // }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b0111 = 3
       }
      }
     }
     if (a0111 == 2 && b0111 == 3 ) {
      e.target.classList.add("takrorlanma")
      qator3_4target = e.target
      qator3_4claslist = e.target.parentElement.parentElement.classList[3]
      qator3_4bg = e.target.parentElement
    
  }
}
else if (count % 2 != 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
       
      // }
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        qator3_4claslist2 = e.target.parentElement.parentElement.classList[3]
         if (qator3_4claslist2 ==  qator3_4claslist) {
          qator3_4target.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            qator3_4bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            qator3_4target.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
    }
  }
}

// // ===================================================================================================================================
// // ===================================================================================================================================
if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        qator03_5target = e.target
        qator03_5claslist = e.target.parentElement.parentElement.classList[3]
        qator03_5bg = e.target.parentElement
      // }
    }
  }
}
else if (count % 2 != 0) {
  let a03 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a03 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b03 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          s03 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          d03 = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (a03 == 2 && b03 == 3 && s03 == 4 && d03 == 5) {
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        qator03_5claslist2  = e.target.parentElement.parentElement.classList[3]
        if (qator03_5claslist2  == qator03_5claslist ) {
         qator03_5target.style.display = "none"
           e.target.style.display = "none"
           e.target.parentElement.classList.add("bg")
           qator03_5bg.classList.add("bg")    
           e.target.parentElement.parentElement.classList.add("yoq") 
           qator03_5target.parentElement.parentElement.classList.add("yoq") 
           sum += 100
           winshot.textContent = sum
   }
    }
  }
}


// // // ========================================================================================================================================
if (count % 2 == 0) {
  let a031 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a031 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b031 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          s031 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          d031 = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (a031 == 2 && b031 == 3 && s031 == 4 && d031 == 5) {
      e.target.classList.add("takrorlanma")
      qator3_5target = e.target
      qator3_5claslist = e.target.parentElement.parentElement.classList[3]
      qator3_5bg = e.target.parentElement
  }
}
else if (count % 2 != 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
       
      // }
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        qator3_5claslist2  = e.target.parentElement.parentElement.classList[3]
         if (qator3_5claslist2  == qator3_5claslist ) {
          qator3_5target.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            qator3_5bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            qator3_5target.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
    }
  }
}

// // ===================================================================================================================================
// // ===================================================================================================================================
if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        qator03_6target = e.target
        qator03_6claslist = e.target.parentElement.parentElement.classList[3]
        qator03_6bg = e.target.parentElement
      // }
    }
  }
}
else if (count % 2 != 0) {
  let aa3 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          aa3 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          bb3 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ss3 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          dd3 = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-5 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ee3 = 6
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (aa3 == 2 && bb3 == 3 && ss3 == 4 && dd3 == 5 && ee3 == 6) {
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        qator03_6claslist2  = e.target.parentElement.parentElement.classList[3]
        if (qator03_6claslist2  == qator03_6claslist ) {
         qator03_6target.style.display = "none"
           e.target.style.display = "none"
           e.target.parentElement.classList.add("bg")
           qator03_6bg.classList.add("bg")    
           e.target.parentElement.parentElement.classList.add("yoq") 
           qator03_6target.parentElement.parentElement.classList.add("yoq") 
           sum += 100
           winshot.textContent = sum
   }
    }
  }
}

// // ========================================================================================================================================
if (count % 2 == 0) {
  let aa31 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          aa31 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          bb31 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ss31 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          dd31 = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ee31 = 6
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (aa31 == 2 && bb31 == 3 && ss31 == 4 && dd31 == 5 && ee31 == 6) {
      e.target.classList.add("takrorlanma")
      qator3_6target = e.target
      qator3_6claslist = e.target.parentElement.parentElement.classList[3]
      qator3_6bg = e.target.parentElement
  }
}
else if (count % 2 != 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
       
      // }
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        qator3_6claslist2  = e.target.parentElement.parentElement.classList[3]
        if (qator3_6claslist2  == qator3_6claslist ) {
         qator3_6target.style.display = "none"
           e.target.style.display = "none"
           e.target.parentElement.classList.add("bg")
           qator3_6bg.classList.add("bg")    
           e.target.parentElement.parentElement.classList.add("yoq") 
           qator3_6target.parentElement.parentElement.classList.add("yoq") 
           sum += 100
           winshot.textContent = sum
   }
    }
    }
  }
}



// // ================================================================================================================================================================
// // ================================================= tepadan pasdagi elementlarni tekshirib kelish 4 qator  ==================================================================
// // ===================================================================================================================================================

if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        tepa12pas2 = e.target
        tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
        tepa12pas2bg = e.target.parentElement
      // }
    }
  }
}
else if (count % 2 != 0) {
  let a4 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a4 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b4 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          c4 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          d4 = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (a4 == 2 && b4 == 3 && c4 == 4 && d4 == 5) {
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
         if (tepa12pas22classlisti == tepa12pas21classlisti ) {
             tepa12pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa12pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa12pas2.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
  }
}

// // =====================================================================================================================

if (count % 2 == 0) {
  let a41 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a41 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b41 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          s41 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          d41 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (a41 == 2 && b41 == 3 &&  s41 == 3 &&  d41 == 3) {
      e.target.classList.add("takrorlanma")
      qator4_5target = e.target
      qator4_5claslist = e.target.parentElement.parentElement.classList[3]
      qator4_5bg = e.target.parentElement
  }
}
else if (count % 2 != 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
       
      // }
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        qator4_5claslist2  = e.target.parentElement.parentElement.classList[3]
        if (qator4_5claslist2  == qator4_5claslist ) {
         qator4_5target.style.display = "none"
           e.target.style.display = "none"
           e.target.parentElement.classList.add("bg")
           qator4_5bg.classList.add("bg")    
           e.target.parentElement.parentElement.classList.add("yoq") 
           qator4_5target.parentElement.parentElement.classList.add("yoq") 
           sum += 100
           winshot.textContent = sum
   }
    }
    }
  }
}

// // ====================================================================================================================================
// // ====================================================================================================================================

if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        tepa12pas2 = e.target
        tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
        tepa12pas2bg = e.target.parentElement
      // }
    }
  }
}
else if (count % 2 != 0) {
  let aa4 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          aa4 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          bb4 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          cc4 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          dd4 = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ee4 = 6
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (aa4 == 2 && bb4 == 3 && cc4 == 4 && dd4 == 5 && ee4 == 6) {
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
         if (tepa12pas22classlisti == tepa12pas21classlisti ) {
             tepa12pas2.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            tepa12pas2bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            tepa12pas2.parentElement.parentElement.classList.add("yoq") 
            sum += 100
            winshot.textContent = sum
    }
    }
  }
}

// // =====================================================================================================================

if (count % 2 == 0) {
  let aa41 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          aa41 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          bb41 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ss41 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          dd41 = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-5 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          ee41 = 6
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (aa41 == 2 && bb41 == 3 &&  ss41 == 4 &&  dd41 == 5 && ee41 == 6) {
      e.target.classList.add("takrorlanma")
      qator4_6target = e.target
      qator4_6claslist = e.target.parentElement.parentElement.classList[3]
      qator4_6bg = e.target.parentElement
  }
}
else if (count % 2 != 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
       
      // }
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        qator4_6claslist2  = e.target.parentElement.parentElement.classList[3]
        if (qator4_6claslist2  == qator4_6claslist ) {
         qator4_6target.style.display = "none"
           e.target.style.display = "none"
           e.target.parentElement.classList.add("bg")
           qator4_6bg.classList.add("bg")    
           e.target.parentElement.parentElement.classList.add("yoq") 
           qator4_6target.parentElement.parentElement.classList.add("yoq") 
           sum += 100
           winshot.textContent = sum
   }
    }
    }
  }
}


// // ================================================================================================================================================================
// // ================================================= tepadan pasdagi elementlarni tekshirib kelish 5 qator  ==================================================================
// // ===================================================================================================================================================

if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
  if (count % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
        e.target.classList.add("takrorlanma")
        qator05_6target = e.target
        qator05_6claslist = e.target.parentElement.parentElement.classList[3]
        qator05_6bg = e.target.parentElement
      // }
    }
  }
}
else if (count % 2 != 0) {
  let a5 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a5 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b5 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          c5 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          d5 = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-5 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          e5 = 6
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (a5 == 2 && b5 == 3 && c5 == 4 && d5 == 5 && e5 == 6) {
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        qator05_6claslist2  = e.target.parentElement.parentElement.classList[3]
        if (qator05_6claslist2  == qator05_6claslist ) {
         qator05_6target.style.display = "none"
           e.target.style.display = "none"
           e.target.parentElement.classList.add("bg")
           qator05_6bg.classList.add("bg")    
           e.target.parentElement.parentElement.classList.add("yoq") 
           qator05_6target.parentElement.parentElement.classList.add("yoq") 
           sum += 100
           winshot.textContent = sum
   }
    }
  }
}

// // =====================================================================================================================

if (count % 2 == 0) {
  let a51 = 111
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") {
          a51 = 2
      }
    }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          b51 = 3
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          s51 = 4
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-4 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          d51 = 5
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
      if (e.target.parentElement.parentElement.classList[1].slice(2)-0-5 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        if (d.classList[4] == "yoq") { 
          e51= 6
          if (e.target.classList[1] != "takrorlanma") { 
            // if (k == 2 && b == 3 ) {
            //   // console.log(a,b);
            //   console.log("chiqdi 4");
            // }
        }
       }
      }
     }
     if (a51 == 2 && b51 == 3 &&  s51 == 4 &&  d51 == 5 && e51 == 6) {
      e.target.classList.add("takrorlanma")
      qator5_6target = e.target
      qator5_6claslist = e.target.parentElement.parentElement.classList[3]
      qator5_6bg = e.target.parentElement
  }
}
else if (count % 2 != 0) {
if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // if (d.classList[4] == "yoq") {
       
      // }
      if (e.target.classList[1] != "takrorlanma") { 
        console.log("chiqdi 4");
        qator5_6claslist2  = e.target.parentElement.parentElement.classList[3]
        if (qator5_6claslist2  == qator5_6claslist ) {
         qator5_6target.style.display = "none"
           e.target.style.display = "none"
           e.target.parentElement.classList.add("bg")
           qator5_6bg.classList.add("bg")    
           e.target.parentElement.parentElement.classList.add("yoq") 
           qator5_6target.parentElement.parentElement.classList.add("yoq") 
           sum += 100
           winshot.textContent = sum
   }
    }
    }
  }
}







// bu yer tugashi












// ================================================================================================================================================================
// ================================================= tepadan pasdagi elementlarni tekshirib kelish 6 qator  ==================================================================
// ===================================================================================================================================================

// if (count % 2 == 0) {
//   let a61 = 111
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
//       if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//         // if (d.classList[4] == "yoq") {
//           a61 = 2
//         // }
//         if (a61 == 2) {
//           e.target.classList.add("takrorlanma")
//           tepa12pas2 = e.target
//           tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
//           tepa12pas2bg = e.target.parentElement
//         }
//       }
//     }
// }
// else if (count % 2 != 0) {
// if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
//   if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//     // console.log(e.target.parentElement.parentElement.classList[1].slice(2)-0-1);
//     if (d.classList[4] == "yoq") {
//       if (e.target.classList[1] != "takrorlanma") { 
//         console.log("chiqdi 6");
//         tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
//          if (tepa12pas22classlisti == tepa12pas21classlisti ) {
//              tepa12pas2.style.display = "none"
//             e.target.style.display = "none"
//             e.target.parentElement.classList.add("bg")
//             tepa12pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa12pas2.parentElement.parentElement.classList.add("yoq") 
//             sum += 100
//             winshot.textContent = sum
//     }
//     }
   
//   }
// }
//   }
// }

// // ==============================================================================================================================

// if (count % 2 == 0) {
//   let a611 = 111
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
//       if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//         if (d.classList[4] == "yoq") {
//           a611 = 2
//         }
//         if (a611 == 2) {
//           e.target.classList.add("takrorlanma")
//           tepa12pas2 = e.target
//           tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
//           tepa12pas2bg = e.target.parentElement
//         }
//       }
//     }
// }
// else if (count % 2 != 0) {
// if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
//   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//     // console.log(e.target.parentElement.parentElement.classList[1].slice(2)-0-1);
//     // if (d.classList[4] == "yoq") {
//       if (e.target.classList[1] != "takrorlanma") { 
//         console.log("chiqdi 6");
//         tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
//          if (tepa12pas22classlisti == tepa12pas21classlisti ) {
//              tepa12pas2.style.display = "none"
//             e.target.style.display = "none"
//             e.target.parentElement.classList.add("bg")
//             tepa12pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa12pas2.parentElement.parentElement.classList.add("yoq") 
//             sum += 100
//             winshot.textContent = sum
//     }
//     }
   
//   // }
// }
//   }
// }

// // ==============================================================================================================================
// // ==============================================================================================================================

// if (count % 2 == 0) {
//   let a62 = 111
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
//       if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//         // if (d.classList[4] == "yoq") {
//           a62 = 2
//         // }
//         if (a62 == 2) {
//           e.target.classList.add("takrorlanma")
//           tepa12pas2 = e.target
//           tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
//           tepa12pas2bg = e.target.parentElement
//         }
//       }
//     }
// }
// else if (count % 2 != 0) {
//   let b62 = 111
//   let c62 = 111
// if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
//   if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//     if (d.classList[4] == "yoq") {
//       b62 = 2
//       }
//     }
//     if (e.target.parentElement.parentElement.classList[1].slice(2)-0+2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         c62 = 3
//         }
//       }
//   }

//   if (b62 == 2 && c62 == 3) {
//     if (e.target.classList[1] != "takrorlanma") { 
//       console.log("chiqdi 6");
//       tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
//        if (tepa12pas22classlisti == tepa12pas21classlisti ) {
//            tepa12pas2.style.display = "none"
//           e.target.style.display = "none"
//           e.target.parentElement.classList.add("bg")
//           tepa12pas2bg.classList.add("bg")    
//           e.target.parentElement.parentElement.classList.add("yoq") 
//           tepa12pas2.parentElement.parentElement.classList.add("yoq") 
//           sum += 100
//           winshot.textContent = sum
//     }
//     }
//   }
     
// }

// ============================================================================================================
// ============================================================================================================


// ozini bitta tepaelementida va ikkita tepa elementida "yoq" bolsa va ikkinci marta bosganda caunt 2ga bolinmasa ozini tepasini teshir
// let k1 = 111
// let b1 = 111


// if (e.target.parentElement.parentElement.classList[1].slice(2) != 2) {
//   if (count % 2 == 0) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       // if (d.classList[4] == "yoq") {
//         e.target.classList.add("takrorlanma")
//         tepa12pas2 = e.target
//         tepa12pas21classlisti = e.target.parentElement.parentElement.classList[3]
//         tepa12pas2bg = e.target.parentElement
//       // }
//     }
//   }
// }


// else if (count % 2 == 0) {
// if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
//     if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         k1 = 2
//       }
//     }
//     if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//       if (d.classList[4] == "yoq") {
//         b1 = 3
//       }
//     }
//     if (k1 == 2 && b1 == 3) {
//       if (e.target.classList[1] != "takrorlanma") { 
//         console.log("chiqdi 4");
//         tepa12pas22classlisti = e.target.parentElement.parentElement.classList[3]
//          if (tepa12pas22classlisti == tepa12pas21classlisti ) {
//              tepa12pas2.style.display = "none"
//             e.target.style.display = "none"
//             e.target.parentElement.classList.add("bg")
//             tepa12pas2bg.classList.add("bg")    
//             e.target.parentElement.parentElement.classList.add("yoq") 
//             tepa12pas2.parentElement.parentElement.classList.add("yoq") 
//             sum += 100
//             winshot.textContent = sum
//     }
//     }
//     }
//   }
// }













              // console.log(d.classList);
        //       if (d.classList[4] == "yoq") {
        //         // console.log("ureee");
        //         target1 = e.target
        //         // k2 = d.classList[3]
        //         target1niclasslisti = e.target.parentElement.parentElement.classList[3]
        //         target1bg = e.target.parentElement
        //       }
        //     }
        //   }

        //   else if (count % 2 != 0) {
        //     if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
        //       // console.log(d.classList);
        //       if (d.classList[4] == "yoq") {
        //         target2niclasslisti = e.target.parentElement.parentElement.classList[3]
        //         if (target2niclasslisti == target1niclasslisti) {
        //           target1.style.display = "none"
        //           e.target.style.display = "none"
        //           console.log("afsus");
        //           e.target.parentElement.classList.add("bg")
        //           target1bg.classList.add("bg")    
        //           e.target.parentElement.parentElement.classList.add("yoq") 
        //           target1.parentElement.parentElement.classList.add("yoq") 
        //         }
        //       }
        //     }
        //   }
        
        //   }
        // else if (buXkordinata !=  buYcordinatadclaslistidagi){
        //   d.classList.remove("red")
        // }







// ============================================  oldidagilarni tekshirish =================================================================

      // console.log(e.target.parentElement.parentElement.firstElementChild.textContent);
      if (count % 2 == 0) {
        if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
          // e.target.parentElement.parentElement.classList.add("border")
          // sum2++
          // if (sum2 % 3 == 0) {
          //   e.target.parentElement.parentElement.classList.remove("border")
          // }
          
          // PAS
          f = e.target
          k = d.classList[3]
          l = e.target.parentElement.parentElement.classList[3]
          bg = e.target.parentElement
          // console.log(e.target.parentElement.previousElementSibling);
          chiziq1 = e.target.parentElement.previousElementSibling
          // console.log(chiziq1);
          
        }
        // e.target.parentElement.parentElement.classList.remove("border")
      }
      else if (count % 2 != 0) {

        if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
          // e.target.parentElement.parentElement.classList.add("border")
          // sum2++
          // if (sum2 % 3 == 0) {
          //    e.target.parentElement.parentElement.classList.remove("border")
          // }
 
          c = d.classList[3]
          h = e.target.parentElement.parentElement.classList[3]
          if(l == h && k == c) {
            f.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            bg.classList.add("bg")    
            e.target.parentElement.parentElement.classList.add("yoq") 
            f.parentElement.parentElement.classList.add("yoq") 
            // winshot.textContent+=100
            sum += 100
            winshot.textContent = sum
            chiziq2 = e.target.parentElement.previousElementSibling
            chiziq1.classList.add("zeroo")
            chiziq2.classList.add("zeroo")
            // console.log(e.target.parentElement.parentElement.classList);
            // console.log(f.parentElement.parentElement.classList);
         
          }
        }
        // e.target.parentElement.parentElement.classList.remove("border")
      }
      // ===============================================================================================================
// function tepa () {
  
  if (count2 % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // e.target.parentElement.parentElement.classList.add("border")
      // TEPA
      f2 = e.target
      k2 = d.classList[3]
      l2 = e.target.parentElement.parentElement.classList[3]
      bg2 = e.target.parentElement
      chiziq3 = e.target.parentElement.previousElementSibling

      // console.log(d);
    }
  }
  else if (count2 % 2 != 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // e.target.parentElement.parentElement.classList.add("border")
      c2 = d.classList[3]
      // console.log(y);
      h2 = e.target.parentElement.parentElement.classList[3]
      if(l2 == h2 && k2 == c2) {
        f2.style.display = "none"
        e.target.style.display = "none"
        e.target.parentElement.classList.add("bg")
        bg2.classList.add("bg")     
        e.target.parentElement.parentElement.classList.add("yoq") 
        f2.parentElement.parentElement.classList.add("yoq") 
        chiziq4 = e.target.parentElement.previousElementSibling
        chiziq3.classList.add("zeroo")
        chiziq4.classList.add("zeroo")
        // winshot.textContent+=100
        sum += 100
        winshot.textContent = sum

        // console.log(e.target.parentElement.parentElement.classList);
        // console.log(f2.parentElement.parentElement);
        // console.log(e.target.parentElement.parentElement.classList);
      }
    }
  }
// }
//     // ===============================================================================================================
//   //  function ong () {
    if (count3 % 2 == 0) {
      if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)-0+1 == d.classList[2].slice(2)){
        // e.target.parentElement.parentElement.classList.add("border")
        // ONG
        f3 = e.target
        k3 = d.classList[3]
        l3 = e.target.parentElement.parentElement.classList[3]
        bg3 = e.target.parentElement
        chiziq5 = e.target.parentElement.previousElementSibling

      }
    }
    else if (count3 % 2 != 0) {
      if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)-0-1 == d.classList[2].slice(2)){
        //  e.target.parentElement.parentElement.classList.add("border")
         c3 = d.classList[3]
          h3 = e.target.parentElement.parentElement.classList[3]
          if(l3 == h3 && k3 == c3) {
            f3.style.display = "none"
            e.target.style.display = "none"
            e.target.parentElement.classList.add("bg")
            bg3.classList.add("bg") 
            e.target.parentElement.parentElement.classList.add("yoq") 
            f3.parentElement.parentElement.classList.add("yoq")
            chiziq6 = e.target.parentElement.previousElementSibling
            chiziq5.classList.add("zerovertical")
            chiziq6.classList.add("zerovertical")
            // winshot.textContent+=100
            sum += 100
            winshot.textContent = sum

        }
      }
    }
  //  }
//   //  =====================================================================================================================

// //  function chap () {
  if (count4 % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)-0-1 == d.classList[2].slice(2)){
      // e.target.parentElement.parentElement.classList.add("border")
      // CHAP
      f4 = e.target
      k4 = d.classList[3]
      l4 = e.target.parentElement.parentElement.classList[3]
      bg4 = e.target.parentElement
      chiziq7 = e.target.parentElement.previousElementSibling

    }
  }
  else if (count4 % 2 != 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)-0+1 == d.classList[2].slice(2)){
      // e.target.parentElement.parentElement.classList.add("border")
      c4 = d.classList[3]
      h4 = e.target.parentElement.parentElement.classList[3]
       if(l4 == h4 && k4 == c4) {
         f4.style.display = "none"
         e.target.style.display = "none"
         e.target.parentElement.classList.add("bg")
         bg4.classList.add("bg")
         e.target.parentElement.parentElement.classList.add("yoq") 
         f4.parentElement.parentElement.classList.add("yoq") 
         chiziq8 = e.target.parentElement.previousElementSibling
         chiziq7.classList.add("zerovertical")
         chiziq8.classList.add("zerovertical")
        // winshot.textContent+=100
        sum += 100
        winshot.textContent = sum

     }
    }
  }
//  }
// // =================================================  vertica gorozontal tekshirish PASTGI QISM =================================================================================================

  // if (count4 % 2 == 0) {
  //   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
  //     // e.target.parentElement.parentElement.classList.add("border")
  //     // console.log(d.classList[1].slice(2));
  //     // console.log(e.target.parentElement.parentElement.classList[1].slice(2));
  //     if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
  //       // console.log("6ga tenggg");
  //       verticalpasetarget = e.target
  //       verticalpasbg = e.target.parentElement
  //       verticalpas = e.target.parentElement.parentElement.classList[3]
  //     }

  //   }
  // }
  // else if (count4 % 2 != 0) {
  //   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
  //     // e.target.parentElement.parentElement.classList.add("border")
  //     verticalpasclasslist = d.classList[3]
  //     if (verticalpas == verticalpasclasslist) {
  //       verticalpasetarget.style.display = "none"
  //       e.target.style.display = "none"
  //       e.target.parentElement.classList.add("bg")
  //       verticalpasbg.classList.add("bg") 
  //       e.target.parentElement.parentElement.classList.add("yoq") 
  //       verticalpasetarget.parentElement.parentElement.classList.add("yoq") 
  //       // winshot.textContent+=100
  //       sum += 100
  //       winshot.textContent = sum

  //       // console.log(e.target.parentElement.parentElement.classList);
  //       // console.log(verticalpasetarget.parentElement.parentElement.classList);
  //       // console.log(e.target.parentElement.parentElement.classList);

  //     }
  //   }
  // }

// ============================================= vertica gorozontal tekshirish TEPA QISM =================================================================================================

// if (count4 % 2 == 0) {
//   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
//     // e.target.parentElement.parentElement.classList.add("border")
//     // console.log(d.classList[1].slice(2) == 6);
//     // console.log(e.target.parentElement.parentElement.classList[1].slice(2));
//     if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
//       // console.log("1ga tenggg");
//       verticaltepaetarget = e.target
//       verticaltepabg = e.target.parentElement
//       verticaltepa = e.target.parentElement.parentElement.classList[3]
//     }

//   }
// }
// else if (count4 % 2 != 0) {
//   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//     // e.target.parentElement.parentElement.classList.add("border")
//     verticaltepaclasslist = d.classList[3]
//     if (verticaltepa == verticaltepaclasslist) {
//       verticaltepaetarget.style.display = "none"
//       e.target.style.display = "none"
//       e.target.parentElement.classList.add("bg")
//       verticaltepabg.classList.add("bg")  
//       e.target.parentElement.parentElement.classList.add("yoq") 
//       verticaltepaetarget.parentElement.parentElement.classList.add("yoq") 
//       // winshot.textContent+=100
//       sum += 100
//       winshot.textContent = sum

//       // console.log(e.target.parentElement.parentElement.classList);
//       // console.log(verticaltepaetarget.parentElement.parentElement.classList);
//       // console.log(e.target.parentElement.parentElement.classList);
      
//     }
//   }
// }


// // ============================================= vertica gorozontal tekshirish CHAP QISM =================================================================================================

// if (count4 % 2 == 0) {
//   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
//     // e.target.parentElement.parentElement.classList.add("border")
//     // console.log(d.classList[2].slice(2));
//     // console.log(d.classList[1].slice(2) == 6);
//     // console.log(e.target.parentElement.parentElement.classList[2].slice(2));
//     // console.log(e.target.parentElement.parentElement.classList[1].slice(2));
//     if (e.target.parentElement.parentElement.classList[2].slice(2) == 1) {
//       // console.log("1ga tenggg chappp");
//       gorizintalchaptarget = e.target
//       gorizontalchapbg = e.target.parentElement
//       gorizontalchap = e.target.parentElement.parentElement.classList[3]
//     }

//   }
// }
// else if (count4 % 2 != 0) {
//   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//     // e.target.parentElement.parentElement.classList.add("border")
//     gorizontalchapclasslist = d.classList[3]
//     if (gorizontalchap == gorizontalchapclasslist) {
//       gorizintalchaptarget.style.display = "none"
//       e.target.style.display = "none"
//       e.target.parentElement.classList.add("bg")
//       gorizontalchapbg.classList.add("bg") 
//       e.target.parentElement.parentElement.classList.add("yoq") 
//       gorizintalchaptarget.parentElement.parentElement.classList.add("yoq") 
//       // winshot.textContent+=100
//       sum += 100
//       winshot.textContent = sum

//       // console.log(e.target.parentElement.parentElement.classList);
//       // console.log(gorizintalchaptarget.parentElement.parentElement.classList);
//       // console.log(e.target.parentElement.parentElement.classList);

//     }
//   }
// }


// // ============================================= vertica gorozontal tekshirish ONG QISM =================================================================================================

// if (count4 % 2 == 0) {
//   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
//     // e.target.parentElement.parentElement.classList.add("border")
//     // console.log(d.classList[2].slice(2));
//     // console.log(d.classList[1].slice(2) == 6);
//     // console.log(e.target.parentElement.parentElement.classList[2].slice(2));
//     // console.log(e.target.parentElement.parentElement.classList[1].slice(2));
//     if (e.target.parentElement.parentElement.classList[2].slice(2) == 10) {
//       // console.log("1ga tenggg chappp");
//       gorizintalongtarget = e.target
//       gorizontalongbg = e.target.parentElement
//       gorizontalong = e.target.parentElement.parentElement.classList[3]
//     }
//   }
// }
// else if (count4 % 2 != 0) {
//   if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
//     // e.target.parentElement.parentElement.classList.add("border")
//     gorizontalongclasslist = d.classList[3]
//     if (gorizontalong == gorizontalongclasslist) {
//       gorizintalongtarget.style.display = "none"
//       e.target.style.display = "none"
//       e.target.parentElement.classList.add("bg")
//       gorizontalongbg.classList.add("bg")  
//       e.target.parentElement.parentElement.classList.add("yoq") 
//       gorizintalongtarget.parentElement.parentElement.classList.add("yoq") 
//       // winshot.textContent+=100
//       sum += 100
//       winshot.textContent = sum
      
//       // console.log(e.target.parentElement.parentElement.classList);
//       // console.log(gorizintalongtarget.parentElement.parentElement.classList);
//       // console.log(e.target.parentElement.parentElement.classList);

//     }
//   }
// }


    })
    count++
    count2++
    count3++
    count4++
    // if (e.target.parentElement.parentElement.class)
  })
  // console.log(ell);
})



let reflesh = document.querySelector("#reflesh")
reflesh.addEventListener("click",reset)

function reset() {
  location.reload();
}













