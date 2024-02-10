
function personSay(person, ...msg){
    msg.forEach(arg => {
        console.log(person + "say: " + arg)
    })   
}
personSay("Foo", "hello", "world", "ete sech", "el pepe", "cake", "react")