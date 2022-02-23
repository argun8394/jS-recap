// window.onload=function() {
//     setTimeout(fillFormInput, 1000)
// };

// const fillFormInput =()=> {
//     let email = document.getElementById('email').value="eve.holt@reqres.in";
//     let password = document.getElementById('password').value="pistol";
//     localStorage.setItem("email", email);//email i localStorage a set ettik
// }

// //XMLHTTPREQUEST------>Fetch ve Axios un ilk hali
// const apiRegister=()=> {
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     const bodyData={
//         email: email,
//         password: password
//     }
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "http://reqres.in/api/register");
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify(bodyData));
//     xhr.onload=function(){
//         console.log(xhr.responseText);
//         let data=JSON.parse(xhr.responseText);
//         if(data.id !="0"){
//             console.log(data);
//         }
//     }
// }






