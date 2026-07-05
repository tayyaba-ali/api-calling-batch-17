// Fetch API

// API ---> Application programming interface


// const products = []

// fetch("https://dummyjson.com/products")
//     .then(response => response.json())
//     .then(data => products.push(...data.products))
//     .catch(error => console.error('Error:', error));

// console.log(products)

// let container = document.querySelector("#main")

// function showLoader() {
//     let loader = document.querySelector(".loader")
//     loader.style.display = "block"
// }
// function hideLoader() {
//     let loader = document.querySelector(".loader")
//     loader.style.display = "none"
// }

// showLoader()

// setTimeout(() => {
//     hideLoader()
//     for (let i = 0; i < products.length; i++) {
//         console.log(products[i])
//         let product = products[i]
//         container.innerHTML += `<div class="card" style="width: 18rem;">

//   <img src=${product?.images[0] || "images/burger.png"} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${product.title}</h5>
//     <p class="card-text">${product.description}</p>

//   </div>
// </div>`

//     }
// }, 2000)




// Weather api 

let APIkey = "18196adb736a0ff23b9fa214ca394629";

let url = `https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=${APIkey}&units=metric`


fetch(url).then(res => res.json()).then((data) => console.log(data)).catch(error => console.error('Error:', error));
