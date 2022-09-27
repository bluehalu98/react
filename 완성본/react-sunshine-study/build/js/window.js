let scrt
let winh

const fnWindow = () =>{
  scrt = window.scrollY
  winh = window.innerHeight
}
fnWindow()
window.addEventListener('scroll', ()=>{
  fnWindow()
})
window.addEventListener('resize', ()=>{
  fnWindow()
})