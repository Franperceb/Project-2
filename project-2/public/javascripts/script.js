document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!')
}, false)

let likeButton = document.querySelector('.like')

// likeButton.onclick(e) => {
//   console.log('jjijijij')
//   if(likeButton.getAttribute('class') === 'like'){
//     likeButton.setAttribute('class', 'like selected')
//   } else {
//     likeButton.setAttribute('class', 'like')
//   }
// }

 likeButton.onclick = function() {
   likeButton.classList.toggle('selected')
   alert('funciona')
 }



