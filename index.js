// const {hello, world} = require('./module');
// const http = require("http"); ROUTING NODE JS
// const moment = require('moment/moment'); // ROUTING MURNI NODE JS
// const formidable = require('express-formidable');
// const multer  = require('multer')
// const upload = multer({dest: 'uploads'})
const express = require('express');
const router = require('./router');
const PORT = 2000

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded());
app.use(express.json());
app.use(router);

// SET NOT FOUND
app.use((req, res, next) => {
    res.status(404);
    res.send({
        status: 'Error',
        message: `404 ${req.originalUrl} is Not Found`,
    });
});

app.listen(PORT, () => console.log('Server running at localhost:2000'));


// upload file using Multer library
// app.post('/cover', upload.single('image'), function (req, res, next) {          
//     const {name, age, address, gender} = req.body;
//     const image = req.file;

//     res.json({name, age, address, gender, image});
// });




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