const hello = () => {
    return "Hello";
}

const world = () => {
    return "World";
}

console.log(hello(), "ini dari module");

module.exports = {
    hello,
    world
}