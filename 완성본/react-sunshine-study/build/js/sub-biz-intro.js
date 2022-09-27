{//getbound는 브라우저기준으로 y값을 출력하기때문에 winh와 같을때 모션적용
  let el = document.querySelectorAll('.section-biz-intro figure figcaption, .section-biz-intro figure div')
  let div = document.querySelectorAll('.section-biz-intro figure div')

  const motion = () => {
    el.forEach((v)=>{
      let y = v.getBoundingClientRect().y
      if(y <= winh){
        v.classList.add('active')
      }else{
        v.classList.remove('active')
      }
    })

    div.forEach((v)=>{
      let y = v.getBoundingClientRect().y
      let h = v.getBoundingClientRect().height
      let meta = 0 + (winh*0.5 - (y+h*0.5)) * 0.1
      v.children[0].style.transform = `scale(1.3) translateY(${meta}px)`
    })
  }
  motion()
  window.addEventListener('scroll',()=>{
    motion()
  })
  window.addEventListener('resize',()=>{
    motion()
  })
}
