//밀 -> 밀가루 -> 빵

function 밀생산(){
  return new Promise(function(resolve){
    console.log('밀생산');
    resolve(밀)
  })
}
function 밀가루생산(밀){
  return new Promise(function(resolve){
    console.log('밀가루생산');
    resolve(밀가루)
  })
}
function 빵생산(밀가루){
  return new Promise(function(resolve){
    console.log('빵생산');
    resolve(빵)
  })
}
function 빵판매(빵){
  return new Promise(function(resolve){
    console.log('빵판매');  
    resolve()
  })
  
}
function 수입정산(){

}
/* promise then */
밀생산().then(function(밀){
  밀가루생산(밀).then(function(밀가루){
    빵생산(밀가루).then(function(빵){
      빵판매(빵)
    })
  })
})

/* async await */
async function 밀생산부터빵판매까지(){
  let 밀 = await 밀생산()
  let 밀가루 = await 밀가루생산(밀)
  let 빵 = await 빵생산(밀가루)
  빵판매(빵)
}
밀생산부터빵판매까지()

/* 주의사항  
1. promise 함수 안에 await이 들어가면 안된다.(promise then은 가능)

function 잘못된비동기함수(){
  return new Promise(async function(){
    await 밀생산부터빵판매까지()
  })
}

2. await을 포함한 함수를 await할 수 없다
  async function 잘못된예시2(){
    await 밀생산부터빵판매까지()
    await 수입계산()
  }
*/