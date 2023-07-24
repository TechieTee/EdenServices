// Function to change button color and navigate to home page
  function navigateToHome() {
    document.getElementById("homeButton").style.backgroundColor = "#2E8B57";
    setTimeout(function() {
      document.getElementById("homeButton").style.backgroundColor = "#03A84E";
    }, 300);
    window.location.href = "home.html";
  }
  
// Function to navigate to profileCompleted page
function navigateToProfileCompletedx() {
  document.getElementById("indexButton").style.backgroundColor = "#2E8B57";
  setTimeout(function() {
    document.getElementById("indexButton").style.backgroundColor = "#03A84E";
  }, 300);
  window.location.href = "profileCompleted.html";
}

// tab function
const tabby = document.querySelector('.tabby')
const tabs = Array.from(tabby.querySelectorAll('.tab'))
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    const target = tab.dataset.target
    const tabContent = tabby.querySelector('#' + target)

    // Selects a tab
    tabs.forEach(t => t.classList.remove('is-selected'))
    tab.classList.add('is-selected')

    // Selects the corresponding tab content
    tabContents.forEach(c => c.classList.remove('is-selected'))
    tabContent.classList.add('is-selected')
  })
})


// modal
const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')

modalButton.addEventListener('click', _ => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
})


const modalButton2 = document.querySelector('.jsModalButton2')
const modalCloseButton2 = document.querySelector('.jsModalClose2')

modalButton2.addEventListener('click', _ => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton2.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
})

