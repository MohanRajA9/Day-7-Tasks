const URL = "https://restcountries.com/v3.1/all"
const myreq = new XMLHttpRequest()

myreq.open("GET", URL)
myreq.send()

myreq.addEventListener("load",function(){

const object = JSON.parse(this.response)

function isInAsia (value) {
    
if(value.region=="Asia"){
     return value  }
}

let asiancountries = object.filter(isInAsia)  //filter() method is used extract the countries in Asia

for(let name in asiancountries)
console.log(`Name : ${object[name].name.common}`)
})



