const URL = "https://restcountries.com/v3.1/all"
const myreq = new XMLHttpRequest()

myreq.open("GET", URL)
myreq.send()

myreq.addEventListener("load",function(){
    const object = JSON.parse(this.response)
    function isUSD (obj) {         
            return obj?.currencies?.USD              
    } 
    let countries = object.filter(isUSD)
      
    for(let index in countries){
        console.log(`Name : ${countries[index].name.common}`)
    }
})