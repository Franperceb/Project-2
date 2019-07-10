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

// //Recipe click
// recipes.forEach(recipe => {
//   recipe.onclick = (e) => {
//     let id = recipe.querySelector('.id').innerText
    
//   }
// })

//Password  hide and show
function showpass(){
  let password = document.getElementById('pass')
  
  if(password.type == "text")
    password.type = "password"
    else{
      password.type = "text"
    }
}
  