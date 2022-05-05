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

// bitta tepadagi elemtnt bir xilligi1 ulugbek ================================
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



        if (e.target.parentElement.parentElement.classList[1].slice(2) == 2) {
          if (count % 2 == 0) {
            if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
              // console.log(d.classList);
              if (d.classList[4] == "yoq") {
                // console.log("ureee");
                target1 = e.target
                // k2 = d.classList[3]
                target1niclasslisti = e.target.parentElement.parentElement.classList[3]
                target1bg = e.target.parentElement
              }
            }
          }

          else if (count % 2 != 0) {
            if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
              // console.log(d.classList);
              if (d.classList[4] == "yoq") {
                target2niclasslisti = e.target.parentElement.parentElement.classList[3]
                if (target2niclasslisti == target1niclasslisti) {
                  target1.style.display = "none"
                  e.target.style.display = "none"
                  console.log("afsus");
                  e.target.parentElement.classList.add("bg")
                  target1bg.classList.add("bg")    
                  e.target.parentElement.parentElement.classList.add("yoq") 
                  target1.parentElement.parentElement.classList.add("yoq") 
                  // winshot.textContent+=100
                  sum += 100
                  winshot.textContent = sum
                }
              }
            }
          }
         
          }
        else if (buXkordinata !=  buYcordinatadclaslistidagi){
          d.classList.remove("red")
        }
// ===========================================    2    ============================================================================================================

       
        if (e.target.parentElement.parentElement.classList[1].slice(2) == 3) {
          if (count % 2 == 0) {
            if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
              // console.log(d.classList[4] );
              if (d.classList[4] == "yoq") {
                target11 = e.target
                target22ni1 = d.classList
                target11niclasslisti = e.target.parentElement.parentElement.classList[3]
                target11bg = e.target.parentElement
              }
              // d.classList.add("red")
            
            }
            if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
              if (d.classList[4] == "yoq") {
                target22ni1 = d.classList
                target11niclasslisti = e.target.parentElement.parentElement.classList[3]
                target11bg = e.target.parentElement
              }
              // d.classList.add("red")
            }
          }

          else if (count % 2 != 0) {
            if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
              // console.log(d.classList);
              if (d.classList[4] == "yoq") {
                target22niclasslisti = e.target.parentElement.parentElement.classList[3]
                if (target22niclasslisti == target11niclasslisti) {
                  target11.style.display = "none"

                  e.target.style.display = "none"
                  console.log("afsus");
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

// =========================================== 4 ========================================================================================================================================================================================================
          

        
      if (e.target.parentElement.parentElement.classList[1].slice(2) == 4) {
        if (count % 2 == 0) {
          if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            // console.log(d.classList[4] );
            if (d.classList[4] == "yoq") {
              target111 = e.target
              target222ni1 = d.classList
              target111niclasslisti = e.target.parentElement.parentElement.classList[3]
              target111bg = e.target.parentElement
            }
            // d.classList.add("red")
          
          }
          if (e.target.parentElement.parentElement.classList[1].slice(2)-0-2 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            if (d.classList[4] == "yoq") {
              target222ni1 = d.classList
              target111niclasslisti = e.target.parentElement.parentElement.classList[3]
              target111bg = e.target.parentElement
            }
            // d.classList.add("red")
          }

          if (e.target.parentElement.parentElement.classList[1].slice(2)-0-3 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            if (d.classList[4] == "yoq") {
              target222ni1 = d.classList
              target111niclasslisti = e.target.parentElement.parentElement.classList[3]
              target111bg = e.target.parentElement
            }
            // d.classList.add("red") 
          }
        }

        else if (count % 2 != 0) {
          if (e.target.parentElement.parentElement.classList[1].slice(2)-0-1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            // console.log(d.classList);
            if (d.classList[4] == "yoq") {
              target222niclasslisti = e.target.parentElement.parentElement.classList[3]
              if (target222niclasslisti == target111niclasslisti) {
                target11.style.display = "none"

                e.target.style.display = "none"
                console.log("afsus");
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





// ============================================= 1 pasdan kelishim ================================================================

// let target1
// // let target2
// let target2niclasslisti = 0
// let target1niclasslisti = 0
// let target1bg


// let targetpas1
// let targetpas2
// let targetpas1classlist = 0
// let targetpas2classlisti = 0
// let targetpas1bg


      if (e.target.parentElement.parentElement.classList[1].slice(2) == 5) {
        if (count % 2 == 0) {
          if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            // console.log(d);
            if (d.classList[4] == "yoq") {
              // console.log("ureee");
              targetpas1 = e.target
              // k2 = d.classList[3]
              targetpas2classlisti = e.target.parentElement.parentElement.classList[3]
              targetpas1bg = e.target.parentElement
            }
          }
        }

        else if (count % 2 != 0) {
          if (e.target.parentElement.parentElement.classList[1].slice(2)-0+1 == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
            // console.log(d.classList);
            if (d.classList[4] == "yoq") {
              targetpas1classlist = e.target.parentElement.parentElement.classList[3]
              if (targetpas1classlist == targetpas2classlisti) {
                targetpas1.style.display = "none"
                e.target.style.display = "none"
                console.log("afsus");
                e.target.parentElement.classList.add("bg")
                targetpas1bg.classList.add("bg")    
                e.target.parentElement.parentElement.classList.add("yoq") 
                targetpas1.parentElement.parentElement.classList.add("yoq") 
                // winshot.textContent+=100
                sum += 100
                  winshot.textContent = sum
              }
            }
          }
        }
      
        }


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
    // ===============================================================================================================
  //  function ong () {
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

            // console.log(e.target.parentElement.parentElement.classList);
            // console.log(f3.parentElement.parentElement.classList);
            // console.log(e.target.parentElement.parentElement.classList);

        }
      }
    }
  //  }
  //  =====================================================================================================================

//  function chap () {
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

        //  console.log(e.target.parentElement.parentElement.classList);
        //  console.log(f4.parentElement.parentElement.classList);
        //  console.log(e.target.parentElement.parentElement.classList);

     }
    }
  }
//  }
// =================================================  vertica gorozontal tekshirish PASTGI QISM =================================================================================================

  if (count4 % 2 == 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
      // e.target.parentElement.parentElement.classList.add("border")
      // console.log(d.classList[1].slice(2) == 6);
      // console.log(e.target.parentElement.parentElement.classList[1].slice(2));
      if (e.target.parentElement.parentElement.classList[1].slice(2) == 6) {
        // console.log("6ga tenggg");
        verticalpasetarget = e.target
        verticalpasbg = e.target.parentElement
        verticalpas = e.target.parentElement.parentElement.classList[3]
      }

    }
  }
  else if (count4 % 2 != 0) {
    if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
      // e.target.parentElement.parentElement.classList.add("border")
      verticalpasclasslist = d.classList[3]
      if (verticalpas == verticalpasclasslist) {
        verticalpasetarget.style.display = "none"
        e.target.style.display = "none"
        e.target.parentElement.classList.add("bg")
        verticalpasbg.classList.add("bg") 
        e.target.parentElement.parentElement.classList.add("yoq") 
        verticalpasetarget.parentElement.parentElement.classList.add("yoq") 
        // winshot.textContent+=100
        sum += 100
        winshot.textContent = sum

        // console.log(e.target.parentElement.parentElement.classList);
        // console.log(verticalpasetarget.parentElement.parentElement.classList);
        // console.log(e.target.parentElement.parentElement.classList);

      }
    }
  }

// ============================================= vertica gorozontal tekshirish TEPA QISM =================================================================================================

if (count4 % 2 == 0) {
  if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
    // e.target.parentElement.parentElement.classList.add("border")
    // console.log(d.classList[1].slice(2) == 6);
    // console.log(e.target.parentElement.parentElement.classList[1].slice(2));
    if (e.target.parentElement.parentElement.classList[1].slice(2) == 1) {
      // console.log("1ga tenggg");
      verticaltepaetarget = e.target
      verticaltepabg = e.target.parentElement
      verticaltepa = e.target.parentElement.parentElement.classList[3]
    }

  }
}
else if (count4 % 2 != 0) {
  if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
    // e.target.parentElement.parentElement.classList.add("border")
    verticaltepaclasslist = d.classList[3]
    if (verticaltepa == verticaltepaclasslist) {
      verticaltepaetarget.style.display = "none"
      e.target.style.display = "none"
      e.target.parentElement.classList.add("bg")
      verticaltepabg.classList.add("bg")  
      e.target.parentElement.parentElement.classList.add("yoq") 
      verticaltepaetarget.parentElement.parentElement.classList.add("yoq") 
      // winshot.textContent+=100
      sum += 100
      winshot.textContent = sum

      // console.log(e.target.parentElement.parentElement.classList);
      // console.log(verticaltepaetarget.parentElement.parentElement.classList);
      // console.log(e.target.parentElement.parentElement.classList);
      
    }
  }
}


// ============================================= vertica gorozontal tekshirish CHAP QISM =================================================================================================

if (count4 % 2 == 0) {
  if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
    // e.target.parentElement.parentElement.classList.add("border")
    // console.log(d.classList[2].slice(2));
    // console.log(d.classList[1].slice(2) == 6);
    // console.log(e.target.parentElement.parentElement.classList[2].slice(2));
    // console.log(e.target.parentElement.parentElement.classList[1].slice(2));
    if (e.target.parentElement.parentElement.classList[2].slice(2) == 1) {
      // console.log("1ga tenggg chappp");
      gorizintalchaptarget = e.target
      gorizontalchapbg = e.target.parentElement
      gorizontalchap = e.target.parentElement.parentElement.classList[3]
    }

  }
}
else if (count4 % 2 != 0) {
  if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
    // e.target.parentElement.parentElement.classList.add("border")
    gorizontalchapclasslist = d.classList[3]
    if (gorizontalchap == gorizontalchapclasslist) {
      gorizintalchaptarget.style.display = "none"
      e.target.style.display = "none"
      e.target.parentElement.classList.add("bg")
      gorizontalchapbg.classList.add("bg") 
      e.target.parentElement.parentElement.classList.add("yoq") 
      gorizintalchaptarget.parentElement.parentElement.classList.add("yoq") 
      // winshot.textContent+=100
      sum += 100
      winshot.textContent = sum

      // console.log(e.target.parentElement.parentElement.classList);
      // console.log(gorizintalchaptarget.parentElement.parentElement.classList);
      // console.log(e.target.parentElement.parentElement.classList);

    }
  }
}


// ============================================= vertica gorozontal tekshirish ONG QISM =================================================================================================

if (count4 % 2 == 0) {
  if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2)== d.classList[2].slice(2)){
    // e.target.parentElement.parentElement.classList.add("border")
    // console.log(d.classList[2].slice(2));
    // console.log(d.classList[1].slice(2) == 6);
    // console.log(e.target.parentElement.parentElement.classList[2].slice(2));
    // console.log(e.target.parentElement.parentElement.classList[1].slice(2));
    if (e.target.parentElement.parentElement.classList[2].slice(2) == 10) {
      // console.log("1ga tenggg chappp");
      gorizintalongtarget = e.target
      gorizontalongbg = e.target.parentElement
      gorizontalong = e.target.parentElement.parentElement.classList[3]
    }
  }
}
else if (count4 % 2 != 0) {
  if (e.target.parentElement.parentElement.classList[1].slice(2) == d.classList[1].slice(2) && e.target.parentElement.parentElement.classList[2].slice(2) == d.classList[2].slice(2)){
    // e.target.parentElement.parentElement.classList.add("border")
    gorizontalongclasslist = d.classList[3]
    if (gorizontalong == gorizontalongclasslist) {
      gorizintalongtarget.style.display = "none"
      e.target.style.display = "none"
      e.target.parentElement.classList.add("bg")
      gorizontalongbg.classList.add("bg")  
      e.target.parentElement.parentElement.classList.add("yoq") 
      gorizintalongtarget.parentElement.parentElement.classList.add("yoq") 
      // winshot.textContent+=100
      sum += 100
      winshot.textContent = sum
      
      // console.log(e.target.parentElement.parentElement.classList);
      // console.log(gorizintalongtarget.parentElement.parentElement.classList);
      // console.log(e.target.parentElement.parentElement.classList);

    }
  }
}


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












