const URL = "https://restcountries.com/v3.1/all"

const myreq = new XMLHttpRequest();

myreq.open("GET", URL)
myreq.send()

myreq.addEventListener("load",function(){
const object = JSON.parse(this.response)

let totalPoulation = object.reduce(function(acc,val){
    return acc + val.population
},0)
console.log(`The total population of The Countries are : ${totalPoulation}`)
})
