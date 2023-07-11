//variables
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
let toTop = document.querySelector('.toTop');


//Apparitions au defilement
const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio,
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (s) {
  observer.observe(s)
})
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r)
})
