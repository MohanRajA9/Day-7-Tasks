const URL = "https://restcountries.com/v3.1/all"
const myreq = new XMLHttpRequest()

myreq.open("GET", URL)
myreq.send()

myreq.addEventListener("load",function(){
    const object = JSON.parse(this.response)

object.forEach((value,ind)=>{
console.log(`${ind+1} Name : ${value.name.common}, Capital : ${value.capital}, Flag : ${value.flags.png}`)
})

})

