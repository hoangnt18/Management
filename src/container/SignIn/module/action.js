import {POST_SIGN_IN_REQUEST,
POST_SIGN_IN_SUCCESS,
POST_SIGN_IN_FAILED} 
from './constant'

import Axios from 'axios'
// import firebase from "firebase/app";
// import "firebase/auth";


// export const PostSignInAPI = (user,history) =>{
//     return dispatch =>{
//         let db = firebase.firestore();
//         dispatch(PostSignInRequest())
//         firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//         .then((user) => {
//             dispatch(PostSignInSuccess(user))
//             history.push("/")
//             console.log("12345",user)
//             localStorage.setItem("user",JSON.stringify(user.user.email))
//             localStorage.setItem("accessToken",JSON.stringify(user.user.uid))
//             document.cookie =  `userSignIn = ${user.user.uid}  ; max-age = 90000`
//         })
//         db.collection("collectUser").get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 console.log(`${doc.id} => ${doc.data()}`);
//             });
//         })
//         .catch((err) => {
//             dispatch(PostSignInFalied(err));

//         })
//     }
// }












export const PostSignInAPI = (user,history) =>{
    return dispatch =>{
        dispatch(PostSignInRequest())
        Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data:user
        })
        .then(result =>{
            dispatch(PostSignInSuccess(result.data))
            history.push("/")
            console.log("12345",result.data)
            localStorage.setItem("user",JSON.stringify(result.data.hoTen))
            localStorage.setItem("accessToken",JSON.stringify(result.data.accessToken))

        })
        .catch(err =>{
            dispatch(PostSignInFalied(err))
           
           
        })
    }
}

export const PostSignInRequest = () =>{
    return{
        type:POST_SIGN_IN_REQUEST
    }
}

export const PostSignInSuccess = data =>{
    return{
        type:POST_SIGN_IN_SUCCESS,
        data
    }
}

export const PostSignInFalied = err =>{
    return{
        type:POST_SIGN_IN_FAILED,
        err
    }
}