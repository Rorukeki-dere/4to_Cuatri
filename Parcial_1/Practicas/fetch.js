//FETCH


/*
var url = 'http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript';

const responseData = fetch(url).then(response => response.json());
responseData.then(({items, has_more, quota_max, quota_remaining}) => {
    for (const{title, score, owner, link, answer_count}) of items) {

    
    console.log("question Title: ----" + title
    */
/*
var url = "https://jsonplaceholder.typicode.com/users"

var responseData = fetch(url).then(response => response.json());
responseData.then(({username, email})=> {
    for (const{username, email} in promise) {
    console.log("username: " + username + "--- email: " + email000000)
    }
})
*/

/*var url =  "https://jsonplaceholder.typicode.com/users"
fetch(url).then(response => response.json())
    .then(response => {
        for (var key in response) {
            console.log("username: " + response[key].username +
            " --- email:" + response[key].email + " city: " + response[key].address.city + 
            "zipcode:" + response[key].address.zipcode +
            "company: " + response[key].company.name)
        }
        })
    */
   /*var url = "https://jsonplaceholder.typicode.com/albums"
   fetch(url).then(response => response.json())
        .then(response => {
            for (var key in response ){
                console.log("UserId: " + response[key].userId
                + "id: " + response[key].id
                + "title: " + response[key].title)
            }
            
        })*/
       /*var url = "https://jsonplaceholder.typicode.com/albums"
    fetch(url, {
        method: "POST",
        headers: {
            "Content_type": "application/json"
        },
        body: JSON.stringify({
            userId: 101,
            ID: 101,
            tittle: "Foo BAr Title"
        })

    }).then(response => response.json())
        .then(response => console.log(response))*/

