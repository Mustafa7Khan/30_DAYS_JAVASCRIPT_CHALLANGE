// EVENT HANDLING

// 01 : Basic Event Handling

// const button = document.getElementById("button");
// const para = document.getElementsByTagName("p")[0];

// button.addEventListener("click", event => {
//     para.innerHTML = "para has changed";
// });

// const img = document.getElementById("img");
// img.addEventListener("dblclick", event => {
//    img.style.visibility = (img.style.visibility === "hidden") ? "visible" : "hidden";
// })

// 02 : Mouse Events

// button.addEventListner("mouserover", event => {
//     button.style.backgroundColor = "blue"
// })

// button.addEventListener("mouseout", event => {
//     button.style.backgroundColor = originalColor;
// });

// 03 : Keyboard Events

// const input = document.getElementById("input");
// input.addEventListener("keydown", event => {
//     console.log(event.key)
// });

// const para = document.getElementsByTagName("p")[0];

// input.addEventListener("keyup", event => {
//     const value = input.value;
//     para.textContent = `Current value: ${value}`;
// });


// 04 : Form Events

// const form = document.getElementById("form");
// form.addEventListener("submit", event => {
//     event.preventDefault();
//     const formData = new FormData(form);

//     const formObject = {};

//     form.forEach((value, key) => {
//         formObject[key] = value;
//     });
//     console.log(formObject);
// });


// 05 : Event Delegation

// const list = document.getElementById("list");
// list.forEach(item => {
//     list.addEventListener("click", event => {
//         console,log(event.target.innerText)
//     })
// });


// const parent = document.getElementById("parent");
// const addChild = document.getElementById("addChild");

// parent.addEventListener('click', event => {
//     if (event.target && event.target.classList.contain("child")) {
//         console.log(`clicked ${event.target.textContent}`)
//     }
// });
// addChild.addEventListener('click',() => {
//     const newElement = document.createElement('button');
//     newElement.textContent = `Button ${parent.children.length+1}`;
//     newElement.classList.add("child");

//     parent.appendChild(newElement);
// });