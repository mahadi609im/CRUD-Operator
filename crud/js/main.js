let inputBox = document.getElementById('inputBox')
let liContainer = document.getElementById('list_container')

document.getElementById('addBtn').addEventListener("click", ()=>{
   let li = document.createElement('li')
   li.innerHTML = `
      Hello
   `
   liContainer.appendChild(li)
})