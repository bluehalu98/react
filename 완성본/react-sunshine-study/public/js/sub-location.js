{


  new daum.roughmap.Lander({
    "timestamp" : "1664169339928",
    "key" : "2btv2",
    "mapWidth" : "640",
		"mapHeight" : "360"
  }).render();

  let btnArr = document.querySelectorAll('.section-location .tab-menu button')
  btnArr.forEach(v=>{
    v.addEventListener('click',()=>{
      document.querySelectorAll('.section-location .tab-menu button').forEach(v=>{
        v.classList.remove('active')
        v.parentNode.nextSibling.classList.remove('active')
        v.parentNode.nextSibling.nextSibling.classList.remove('active')
      })
      v.classList.add('active')
      let map = v.getAttribute('data-map')
      if(map==='google'){
        v.parentNode.nextSibling.classList.add('active')
      }else{
        v.parentNode.nextSibling.nextSibling.classList.add('active')
      }
    })
  })
}