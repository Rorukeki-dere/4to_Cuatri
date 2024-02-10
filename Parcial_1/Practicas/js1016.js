var l = 89
var w = 23
var h = 12

function prism(l) {
    return function(w) {
        return function(h) {
            return l*w*h;
        }
    }
}
console.log("sexo"+prism(l)(w)(h))