const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/posts";

// muestra lo registros existentes en el url de acuerdo sus datos
axios.get(url).then(({data})=> {
    for(const key in data) {
        console.log("")
        console.log("")
        console.log("user id:" + data[key].userId)
        console.log("id:" + data [key].Id)
        console.log("title:" + data[key].title)
    }
}).catch((err)=>{
console.log(err)})


// Agregar un nuevo registro
axios.post(url, {
  userId: 2,
  Id: 10,
  title: "lorem ipsum etc etc"
})