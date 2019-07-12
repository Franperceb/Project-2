let likeButtons = document.querySelectorAll('.like')
let recipes = document.querySelectorAll('.recipe')

//Change button style with likes
likeButtons.forEach(button => {
  button.onclick = (e) => {
  if(button.getAttribute('class') === 'like'){
    button.setAttribute('class', 'like selected')
  } else {
    button.setAttribute('class', 'like')
  }
    console.log('si funciona')
  }
})

//Password  hide and show
function showpass(){
  let password = document.getElementById('pass')
  
  if(password.type == "text")
    password.type = "password"
    else{
      password.type = "text"
    }
}

//Add ingredient in edit page
// const addRecipe= document.querySelector('.addIngredient')
// const ingredientList = document.querySelector('.ingredientsList')

//   addRecipe.onclick = e => {
//   const li = document.createElement("li")
//   let input = document.createElement("input")
//   input.type = "text"
//   input.name = "ingredients"
//   input.required = true
//   input.className = "cardText ingredientInput"
//   li.appendChild(input)
//   ingredientList.appendChild(li)
// }

//delete ingredients in edit page
const remove = document.querySelector('.deleteLi')

remove.onclick = e => {
  
}



// Password strength
function passwordStrength(){


}