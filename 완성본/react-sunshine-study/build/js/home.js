{
  let figureArr = document.querySelectorAll('.home-section-1 figcaption')
  let anchorArr = document.querySelectorAll('.home-section-1 li a')
  let sectionArr = document.querySelectorAll('.home-section-2 section')
  const fnMotion = () => {
    anchorArr.forEach(v=>{
      let y = v.getBoundingClientRect().y
      let h = v.getBoundingClientRect().height
      let meta = 0 + (winh*0.5 -(y+h*0.5))*0.1
      if(meta>0){meta=0}
      v.children[0].style.transform = `rotateY(${meta}deg) rotateX(${meta}deg)`
    })


    figureArr.forEach(v=>{
      let y = v.getBoundingClientRect().y
      if(y<=winh*0.8){
        v.classList.add('active')
      }else{
        v.classList.remove('active')
      }
    })

    sectionArr.forEach(v=>{
      let y = v.getBoundingClientRect().y
      if(y <= winh*0.8){
        v.classList.add('active')
      }else{
        v.classList.remove('active')
      }
    })
  }
  fnMotion()
  window.addEventListener('scroll',()=>{
    fnMotion()
  })
  window.addEventListener('resize',()=>{
    fnMotion()
  })
}