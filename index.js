const titres = document.querySelectorAll("h3");
const iframes = document.querySelectorAll("iframe");
const hrs = document.querySelectorAll("hr");
const checkbox = document.querySelector("#flexSwitchCheckDefault");
const checkboxLabel = document.querySelector(".form-check-label")
const body = document.querySelector("body");
const navbar = document.querySelector("nav");
const logoText = document.querySelector("a");


checkbox.addEventListener('click', function() {
  if (this.checked) {
    body.classList.add("darkmode");
    checkboxLabel.classList.add("darkmode");
    navbar.classList.add("darkmode");
    logoText.classList.add("darkmode");
    titres.forEach(titre=>{
        titre.classList.add("darkmode");
    })
    iframes.forEach(iframe=>{
        iframe.classList.add("darkmode");
    })
    hrs.forEach(hr=>{
        hr.classList.add("darkmode");
    })


  } else {
    body.classList.remove("darkmode");
    checkboxLabel.classList.remove("darkmode");
    navbar.classList.remove("darkmode");
    logoText.classList.remove("darkmode");
    titres.forEach(titre=>{
        titre.classList.remove("darkmode");
    })
    iframes.forEach(iframe=>{
        iframe.classList.remove("darkmode");
    })
    hrs.forEach(hr=>{
        hr.classList.remove("darkmode");
    })

  }
});
