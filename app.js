const button = document.querySelector("button")
const paragraphe = document.querySelector(".pr")
const title = document.querySelector(".title")
const cardContainer = document.querySelector(".card-container")

///// sychronous ::: 

// button.addEventListener("click",function(){
//     alert("set text")
//     paragraphe.textContent = "hello there ..."
// })

////////// asynchronous :::: 

// button.addEventListener("click",function(){
//     setTimeout(function(){
//   paragraphe.textContent = "hello there"
//     },5000)

//     setTimeout (function(){
// title.textContent = "welcome"
//     },3000)
// })



const getCountry = async function (country){
try {
    const response = await fetch(`https://restcountries.com/v2/name/${country}`)
    const [data] = await response.json()  
    console.log(data)
    const html = `
     <div class="card">
     <img height="200px" src="${data.flag}" alt=".....">
     <div class="card-information">
     <h1>${data.name}</h1>
     <h3>${data.region}</h3>
     <p>🧑‍🤝‍🧑 ${data.population}</p>
     <p>🗣️ ${data.languages[0].nativeName}</p>
     <p>💰 ${data.currencies[0].name}</p>
     </div>
    </div>
    
    `
  cardContainer.insertAdjacentHTML("afterbegin",html)
  

}catch(err){
 console.log("hhhhhhhhhhhhhhhhhhhhhh")
}
}


getCountry("spain")
getCountry("portugal")
getCountry("tunisia")