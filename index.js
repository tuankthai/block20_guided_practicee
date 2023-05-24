const div = document.querySelector("#root")
console.log(div)

const h1 = document.createElement("h1");
h1.textContent = "Mona Lisa"
div.append(h1)

const img = document.createElement("img")
img.src = "./mona_lisa.jpg"
div.append(img)

const p = document.createElement("p")
// p.textContent = "The Mona Lisa is a famous painting. "
p.innerText = "The Mona Lisa is a famous painting. "
div.append(p)