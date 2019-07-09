document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!')
}, false)

let likeButtons = document.querySelectorAll('.like')

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

document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);



  //pasword  hide and show

  function showpass(){
    let password = document.getElementById('pass')
    
    if(password.type == "text")
      password.type = "password"
      else{
        password.type = "text"
      }
  
  }
  