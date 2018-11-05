var form = document.querySelector('#addForm')
var itemList = document.querySelector('#items')
var newItem = document.querySelector('#item')
// document.querySelector('input[type="text"]') won't work because there are more than one type is text
form.addEventListener('submit', addItem)

// remove button event listener
itemList.addEventListener('click', removeItem)

function addItem(e){
  e.preventDefault()
  // console.log(e)
  // console.log(e.type)
  // console.log(e.target.value) // console.log is asynchronous



  var li = document.createElement('li')
  li.className = 'list-group-item'
  var newItemText = document.createTextNode(newItem.value)
  li.appendChild(newItemText)
  // console.log(li)
  itemList.appendChild(li)

  var deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
  var buttonText = document.createTextNode('X')
  deleteBtn.appendChild(buttonText)
  li.appendChild(deleteBtn)
  console.log(li)
}


function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm("are you sure?")){
      var li = e.target.parentElement
      itemList.removeChild(li)
    }
  }
}
