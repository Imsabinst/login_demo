/* "email": "eve.holt@reqres.in",
"password": "cityslicka" */
let btnLogout = "Logout";
onLoad();
function login() {
  let data = {
    email: document.getElementById("user-email").value,
    password: document.getElementById("user-pass").value,
  };

  let url = "https://reqres.in/api/login";
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Authorization", "Bearer " + "QpwL5tke4Pnpja7X4");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //setLocalStorage(this.responseText);
      setSessionStorage(this.responseText); //this.responseText = token
      onLoad();
    }
  };
  xhr.send(JSON.stringify(data));
  /* stops the default submit action of the form */
  return false;
}
function onLoad() {
  if (sessionStorage.getItem("token") != null) {
    //window.location.href = "home.html";
    // alert("Token already exists!");
    let el = document.getElementById("myForm");
    el = `<p>You are logged in!</p> <p>Welcome to the dashboard!!!</p><button onclick=removeToken()>${btnLogout}</button>`;
    document.getElementById("myForm").innerHTML = el;
  }
}
//if function needs value, pass parameter
function setSessionStorage(item) {
  sessionStorage.setItem("token", item);
}
function removeToken() {
  window.sessionStorage.clear();
}

/* for local storage */
// function onLoad() {
//   if (localStorage.getItem("token") != null) {
//     //alert("Token already exists!");
//     let el = document.getElementById("myForm");
//     el = `<p>Logged in</p><button onclick=removeToken()>${btnLogout}</button>`;
//     document.getElementById("myForm").innerHTML = el;
//   }
// }

// function for remoToken - local storage
/*function removeToken() {
  window.localStorage.clear();
} */

/* function setLocalStorage(item) {
  localStorage.setItem("token", item);
}
function getLocalStorage() {
  localStorage.getItem("token");
} */
