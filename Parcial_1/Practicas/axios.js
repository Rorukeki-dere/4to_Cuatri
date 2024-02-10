const axios = require("axios");

var url = "https://jsonplaceholder.typicode.com/posts"
/*axios.get(url).then((data}) => {
    for (const key in data) {
        console.log(data[key].title)
    }

}).catch((err)=>{
    console.log(err)
});*/

/*axios.post(url, {
    userId: 2,
    title: "lorem ipsum etc etc"
}).then(({data}) => console.log(data))*/

axios.post(url, {
    userId: 2,
    title: "lorem ipsum etc etc"
}).then(({data}) => console.log(data))

