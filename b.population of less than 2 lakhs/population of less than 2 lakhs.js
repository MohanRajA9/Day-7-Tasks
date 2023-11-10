const URL = "https://restcountries.com/v3.1/all"

const myreq = new XMLHttpRequest()

myreq.open("GET", URL)
myreq.send()

myreq.addEventListener("load",function(){

    const object = JSON.parse(this.response)

const  ispopulation = (value) => {if(value.population<200000)
                                           {return value}}
let sortedCountries = object.filter(ispopulation)

for(let ind in sortedCountries){
    console.log(`Name : ${sortedCountries[ind].name.common}`)
}
}
)
