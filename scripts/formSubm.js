const info = document.getElementById("info");
const subBtn = document.querySelector(".submit-btn");
const inputs = document.querySelectorAll("#form-con input");
const formError = Array.from(document.querySelectorAll(".form-error"));
const formSucces = document.querySelector(".form-succes");
let myTimeOut;

const details = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  subject: "",
  info: "",
};

const inputOnChange = (e) => {
  details[`${e.target.id}`] = e.target.value;
};

const infoOnChange = (e) => {
  details.info = e.target.value;
};

const submitForm = (e) => {
  e.preventDefault();
  formError.forEach((el) => {
    el.style.display = "none";
  });

  clearTimeout(myTimeOut);

  const check =
    details.fname == "" &&
    details.lname == "" &&
    details.email == "" &&
    details.phone == "";

  if (details.fname === "") {
    formError[0].style.display = "block";
    formError[0].innerHTML = "<span>Please provide a name</span>";
  }

  if (details.lname === "") {
    formError[1].style.display = "block";
    formError[1].innerHTML = "<span>Please provide a last name</span>";
  }

  if (details.email === "") {
    formError[2].style.display = "block";
    formError[2].innerHTML = "<span>Please provide an email</span>";
  }

  if (details.phone === "") {
    formError[3].style.display = "block";
    formError[3].innerHTML = "<span>Please provide a phone number</span>";
  }

  if (isNaN(details.phone)) {
    formError[3].style.display = "block";
    formError[3].innerHTML =
      "<span>Please provide a correct phone number</span>";
  }

  if (details.email !== "" && details.email.indexOf("@") == -1) {
    formError[2].style.display = "block";
    formError[2].innerHTML = "<span>Please provide a correct email</span>";
  }

  if (!check && details.email.indexOf("@") !== -1 && !isNaN(details.phone)) {
    formSucces.style.display = "block";
    formSucces.style.color = "green";
    formSucces.innerHTML = "<span>Message succesfuly sent</span>";
    myTimeOut = setTimeout(() => {
      formSucces.style.display = "none";
    }, 5000);
  } else {
    formSucces.style.display = "block";
    formSucces.style.color = "red";
    formSucces.innerHTML = "<span>Please provide information</span>";
    myTimeOut = setTimeout(() => {
      formSucces.style.display = "none";
    }, 5000);
  }

  inputs.forEach((el) => {
    el.value = "";
  });
  for (let key in details) {
    details[key] = "";
  }
};

subBtn.addEventListener("click", (e) => {
  submitForm(e);
});

inputs.forEach((el) => {
  el.addEventListener("change", (e) => inputOnChange(e));
});

info.addEventListener("change", (e) => infoOnChange(e));

// db.collection("user").add({
//     first: details.fname,
//     last: details.lname,
//     email: details.email,
//     phone: details.phone,
//     subject: details.subject,
//     info: details.info
//   })
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });
