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