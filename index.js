// const {hello, world} = require('./module');
// const http = require("http"); ROUTING NODE JS
// const moment = require('moment/moment'); // ROUTING MURNI NODE JS
// const formidable = require('express-formidable');

const express = require('express');
const logger = require('morgan');
const PORT = 2001;
const app = express();
const cors = require('cors');
const router = require('./routers/router');


app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/api/v2", (req, res) => {  
    res.send({
        message: "API V2"
    })
})

app.use("/api/v2", router);
app.use("api/v2/image/", express.static('/public'));

// SET NOT FOUND
// app.use((req, res, next) => {
//     res.status(404);
//     res.send({
//         status: 'Error',
//         message: `404 ${req.originalUrl} is Not Found`,
//     });
// });

app.listen(PORT, () => console.log('Server running at localhost:2001'));


















// console.log(hello(), world());

// DIBAWAH INI ADALAH CARA ROUTING MURNI MENGGUNAKAN NODE JS
// const server = http.createServer((req, res)=> {
//     switch (req.url) {
//         case '/data': data(res); break;
//         case '/' : home(res); break;
//         default: page404(res); break;
//     }
// });

// const data = res => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/json');
//     res.write(JSON.stringify ({
//         status: "Successfully",
//         message: "This is the usage from Node Backend",
//         study: "Node JS",
//         loginAt: moment()
//     }));
//     res.end();
// }

// const home = res => {
//     res.statusCode = 200;
//     res.end('<h1>HOME PAGE</h1>');
// }

// const page404 = res => {
//     res.statusCode = 404;
//     res.end('<h1>Not Found</h1>');
// }

// server.listen(PORT, () => console.log('Server running at localhost:2000'));