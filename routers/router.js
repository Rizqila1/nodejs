const {
  detailUser,
  newUser,
  editUser,
  allData,
  deleteUser,
} = require("../controllers/users");

const uploadingImage = require("../middleware/upload_img");
const router = require("express").Router();

router.get("/users/:id", detailUser);
router.post("/users", uploadingImage, newUser);
router.put("/users/update/:id", uploadingImage, editUser);
router.get("/users", allData);
router.delete("/users/:id", deleteUser);

module.exports = router;

// const connection = require('../../config/mysql.js')
// const multer  = require('multer')
// const upload = multer({dest: 'uploads'})

// router.get('/about', (req, res) => {
//     res.status(200);
//     res.send({
//         status: 'successfully',
//         title: 'Express JS',
//         body: 'Express JS is a framework consist of several middleware.',
//         slogan: 'All in one framework'
//     })
// })

// DYNAMIC ROUTE QUERY -- CALL IT WITH localhost:2000/home?page=1&data=2
// router.get('/home', (req, res) => {
//     const {page, data} = req.query;
//     res.status(200);
//     res.send({
//         status: 'succesfully',
//         message: 'DYNAMIC ROUTE WITH QUERY',
//         page,
//         data,
//     });
// });

// // DYNAMIC ROUTE PARAMS
// router.get('/product/:id', (req, res) => {
//     res.status(200);
//     res.json({
//         id: req.params.id,
//         name: `Juice`,
//         price: `10.000`,
//         type: `Cold`
//     });
// });

// // DYNAMIC ROUTE 2 PARAMS USING VARIABLE TO REQUEST
// router.get('/:category/:tag', (req, res) => {
//     const {category, tag} = req.params;
//     res.status(200);
//     res.json({category, tag});
// });

// router.post('/cover', upload.single('image'), function (req, res, next) {
//     const {name, age, address, gender} = req.body;
//     const image = req.file;
//     console.log(image);
//     res.json({name, age, address, gender, image});
// });

// REQUEST BODY TO POSTMAN
// router.post('/body/', (req, res) => {
//     res.json(req.body);
// });
