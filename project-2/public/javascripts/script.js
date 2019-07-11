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
// Password strength
pass.addEventListener('keyup',function(){
  strengthBar()
})
function strengthBar(){
let value = document.getElementById('pass').value
let status = document.getElementById('length')
let counter= 0

if(value!=""){
if(value.length <= 2)
counter=1
if(value.length > 4 &&  value.length <= 8)
counter=2
if(value.length > 8 &&  value.length <= 12)
counter=3

if(counter ==1){
  status.innerHTML ="Weak";
  status.style.background="#fa6775"
  status.style.color ="#ffffff"
}

if(counter ==2){
  status.innerHTML ="Good";
  status.style.background="#FFE437"
  status.style.color ="#ffffff"
}

if(counter ==3){
  status.innerHTML ="Excellent";
  status.style.background="#89da59"
  status.style.color ="#ffffff"
}

}
}