import React, { useState } from 'react';

const App = () => {
  const [_arr,_setArr] = useState(['가','나','다'])

  const fnAddarr = () => {
    let arr = [..._arr]
    arr.push('라')
    _setArr(arr)
  }

  return (//return 다음에는 태그를 사용할수 있다, {}안에서는 태그를 사용할 수 없다. 하지만 {} 안에 return 이 있으면 태그사용가능
    <>
      <ul>
        {
          _arr.map( (v, i) => <li key={i}>{v}</li>)//key값은 변수가 바뀌여도 변하지 않는 값을 갖는게 좋은 key이다
        }
      </ul>
      <button onClick={fnAddarr}>배열추가</button>
    </>
  );
};

export default App;