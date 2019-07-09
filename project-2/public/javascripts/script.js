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
