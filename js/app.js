//? Cached Elements
const btnSubmit = document.getElementById('submit-button')
const inp = document.getElementById('input-to-do')
const ulElement = document.getElementById('todo-list')
const btnReset = document.getElementById('reset-button')
//todo create new <li>, set <li> text to be input value

btnSubmit.addEventListener('click', function(){
  if(inp.value === ''){return}
  let li = document.createElement('li')
  li.innerHTML = inp.value
  inp.value = ""
  ulElement.appendChild(li)
  li.addEventListener('click',function(){
    li.remove()
  })
})
btnReset.addEventListener('click',function(){
  ulElement.innerHTML =''

})