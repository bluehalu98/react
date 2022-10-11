import React from 'react';
import { fbCreateUserDoc, fbRegister, fbUploadUserImg, fbUpdateUserDocImgURL } from '../../store/fbRegister';

const CompRegister = () => {

  /* 회원가입 절차 프로세스---------------------------------------- */
  const fnRegisterHandler = async () => {
    let email = document.querySelector('.section-register .email').value
    let password = document.querySelector('.section-register .password').value
    let nickname = document.querySelector('.section-register .nickname').value
    let file = document.querySelector('.section-register .file').files[0]
    if (!email || !password || !nickname) {
      alert('이메일 비밀번호 닉네임은 필수로 입력하셔야 합니다')
      return false
    }
    let user = await fbRegister(email, password) //일단 등록하면 사용자 정보(uid)가 리턴됨
    console.log('회원등록완료')
    await fbCreateUserDoc('member', user.uid , nickname)//member 컬렉션에 회원uid 이름으로 문서등록 하기
    console.log('문서등록완료')
    if(file) {//이미지를 선택했다라면
      let fileNameArr = file.name.split('.') // a.b.c.jpg -> [a, b, c, jpg]
      let fileExtenstion = fileNameArr[fileNameArr.length - 1] //fileNameArr[4 - 1]
      let filename = user.uid + Date.now() + '.' + fileExtenstion//파일이름
      let filepath = `userimg/${filename}`
      let urls = await fbUploadUserImg(file,filepath)//이미지 업로드후 경로를 객체로 반환
      console.log('이미지업로드완료');
      await fbUpdateUserDocImgURL('member', user.uid, urls.downloadURL, urls.storageURL)//업로드된 이미지의 저장된경로, 다운로드경로를 회원문서에 기록
      console.log('이미지경로저장'); 
    }//if file

  }//fnRegisterHandler

  return (
    <section className='section-register'>
      <h2>회원등록</h2>
      <p>
        <input className='email' type="text" placeholder='사용하실 이메일 주소 입력' />
      </p>
      <p>
        <input className='password' type="password" placeholder='6자리이상 영문 또는 숫자' />
      </p>
      <p>
        <input className='nickname' type="text" placeholder='사용하실 닉네임을 입력' />
      </p>
      <p>
        <input className='file' type="file" accept='image/jpeg, image/png, image/gif' placeholder='회원이미지를 업로드' />
      </p>
      <p>
        <button onClick={fnRegisterHandler}>회원가입하기</button>
      </p>
    </section>
  );
};

export default CompRegister;