const logArg = (...args) => console.log(args)
const list = [1, 2, 3]

logArg('a', 'b', 'c', ...list)