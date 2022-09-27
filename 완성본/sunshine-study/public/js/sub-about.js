{
  let div = document.querySelector('.section-about figure div')
  for(let i = 1; i<=50;i++){
    let span = document.createElement('span')
    div.append(span)
    span.style.left = Math.random() * 100 + '%'
    let wh = Math.random()*60+20
    span.style.width = wh + 'px'
    span.style.height = wh + 'px'
    span.style.opacity = Math.random()*0.6 +0.1
    let speed = Math.random()*20 +5
    span.style.animation = `drop ${speed}s infinite linear`
  }
}
