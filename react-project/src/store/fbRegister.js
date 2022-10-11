import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


/* 사용자등록-------------------------------------- */
export const fbRegister = (email, password) => {
  return new Promise((resolve) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      let user = result.user
      resolve(user)
    }).catch((error) => {
      alert(error.message)
    })
  })//promise
}//fbRegister

/* 회원정보문서등록---------------------------------------- */
export const fbCreateUserDoc = (collectionName, uid, nickname) => {
  return new Promise((resolve) => {
    const db = getFirestore();
    setDoc(doc(db, collectionName, uid), {
      uid: uid,
      nickname: nickname,
    }).then((doc) => {
      resolve()
    })
  })//promise
}//fbCreateUserDoc

/* 회원이미지 등록 -------------------------------------------*/
export const fbUploadUserImg = (file, filepath) => {
  return new Promise((resolve) => {
    const storage = getStorage();
    const storageRef = ref(storage, filepath);//삭제할때 사용되는 url (파일명을 중복되지 않도록 생성해야 함)
    uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then((url) => {//출력될때 사용되는 url (파이어베이스에서 자동으로 생성됨)
        let urls = {
          downloadURL: url,
          storageURL: filepath,
        }
        resolve(urls)
      })//getDownloadURL then
    }).catch((error) => {
      alert(`이미지 업로드중 오류가 발생했습니다\n${error.message}`)
      resolve()
    })//uploadBytes then catch
  })//promise
}//fbUploadUserImg

/* 회원 문서에 이미지 출력경로 및 저장경로 기록---------------- */
export const fbUpdateUserDocImgURL = (collectionName, uid, downloadURL, storageURL) => {
  return new Promise((resolve) => {
    const db = getFirestore();
    const docRef = doc(db, collectionName, uid);
    updateDoc(docRef, {
      downloadURL: downloadURL,
      storageURL: storageURL,
    }).then((doc) => {
      resolve()
    })//updateDoc then
  })//promise
}//fbUpdateUserDocImgURL

/* 인증메일보내기 ---------------------------------------------*/
export const fbSendMail = () => {
  return new Promise((resolve) => {

  })//promise
}//fbSendMail