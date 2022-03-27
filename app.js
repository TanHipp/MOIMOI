const loadingBar = document.querySelector('.loading')
const processBar = document.querySelector('.process')
const precent = loadingBar.offsetWidth / 100
var index = 1

const start = setInterval(() => {
  let width = processBar.offsetWidth + precent
  processBar.style.width = width + 'px'
  index++
  if (index == 101) {
    clearInterval(start)
  }
}, 200)