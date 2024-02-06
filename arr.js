class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
            
        <h1 class="tl">APARTMENTS</h1>
        <nav class="n">
            
            <ul>
                <li><a href = "index.html">HOME</a></li>
                <li><a href = "gal.html">GALLERY</a></li>
                <li><a href = "interest.html">ENQUIRE</a></li>
                <li><a href = "arr.html">3D VISUALISER</a></li>
            </ul>
        </nav>
      `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
            
        <footer>©The Apartments</footer>
      `;
  }
}

customElements.define("my-footer", MyFooter);

if (window.attachEvent) {
  window.attachEvent("onresize", function () {
    if (window.innerWidth < 760)
      document.getElementById("nav").classList.add("n1");
    else console.log("More than 760");
  });
} else if (window.addEventListener) {
  window.addEventListener(
    "resize",
    function () {
      if (window.innerWidth < 760)
        cdocument.getElementById("nav").classList.add("n1");
    },
    true
  );
}

let user = document.getElementById("i1");

let last = document.getElementById("i2");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (last.value.length < 3) {
    last.style.color = "red";
    alert("Your username must have more than 3 letters.");
  }
});

bt1.onclick = function () {
  pn = 1;
  pic.src = "img1" + pn + ".jpg";
};
