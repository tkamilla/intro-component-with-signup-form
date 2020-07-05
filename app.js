const inputs = [...document.querySelectorAll('.category input')];

window.addEventListener('submit', (e) => {
  
  inputs.forEach(input => {
    let value = input.value;
    let category = input.parentElement;
    
    
    if (value === ''){
      e.preventDefault();
      showError(category, input);
    } 
  })
})

function showError(category, input){
  let span = document.createElement('span')
  span.classList.add('error')
  span.innerHTML = `<img src="./images/icon-error.svg">`
  category.insertBefore(span, input.nextSibling);
  
  let errorText = span.nextElementSibling;
  errorText.classList.replace('hidden', 'show');
}