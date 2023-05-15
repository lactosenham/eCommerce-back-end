const app = require("./src/app");

const PORT = 4000

const server = app.listen(4000, () => {
    console.log(`eCommerce start with ${PORT}`)
})

process.on('SIGINT', () =>{
    server.close(() => console.log(`Exit server`))
    // notify.send(CRASHHHHHHHH)
})