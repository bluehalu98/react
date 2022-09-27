{
  let isToggle = true
  let gnb = document.querySelector('.gnb-sm')
  let ulArr = document.querySelectorAll('.gnb-sm>ul>li>ul')
  let btnArr = document.querySelectorAll('.gnb-sm>ul>li>a')
  let timeoutID

  document.querySelector('.mbtn').addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('active')
    btnArr.forEach(v=>{
      v.classList.remove('active')
    })
    ulArr.forEach(v=>{
      v.classList.remove('active')
    })
    if(isToggle){
      gnb.classList.add('active1')
      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        gnb.classList.add('active2')
      }, 1);
    }else{
      gnb.classList.remove('active2')
      timeoutID = setTimeout(() => {
        gnb.classList.remove('active1')
      }, 1000);
    }
    isToggle = !isToggle
  })
}