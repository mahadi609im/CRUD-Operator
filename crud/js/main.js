let inputBox = document.getElementById('inputBox')
let liContainer = document.getElementById('list_container')

document.getElementById('addBtn').addEventListener("click", ()=>{
   let li = document.createElement('li')
   li.innerHTML = `
      <div id='list'>
         ${inputBox.value}
      </div>
      <div id='btns'>
         <button id="editBtn" type="submit">Edit</button>
         <button id="dltBtn" type="submit">Delete</button>
      </div>
   `
   liContainer.appendChild(li)
})