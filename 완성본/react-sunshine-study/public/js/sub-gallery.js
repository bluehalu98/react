{
  const fnMotion = () => {
    let figureArr  = document.querySelectorAll('.section-gallery ul li figure')
    figureArr.forEach((v)=>{
      let clientReact = v.getBoundingClientRect()
      let y = clientReact.top //브라우저 상단으로 부터의 거리
      let h = clientReact.height
      let meta = 0 + (winh*0.5 - (y+h*0.5)) *0.1
      let img = v.children[0]
      img.style.transform = `translateY(${meta}px) scale(1.4)`
    })

  }
  fnMotion()
  window.addEventListener('scroll', ()=>{
    fnMotion()
  })
  window.addEventListener('resize', ()=>{
    fnMotion()
  })
}