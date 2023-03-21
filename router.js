const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200);
    res.send({
        status: 'succesfully',
        message: 'welcome to express js'
    });
});

router.get('/about', (req, res) => {
    res.status(200);
    res.send({
        status: 'successfully',
        title: 'Express JS',
        body: 'Express JS is a framework consist of several middleware.',
        slogan: 'All in one framework'
    })
})

// DYNAMIC ROUTE QUERY -- CALL IT WITH localhost:2000/home?page=1&data=2
router.get('/home', (req, res) => {
    const {page, data} = req.query;
    res.status(200);
    res.send({
        status: 'succesfully',
        message: 'DYNAMIC ROUTE WITH QUERY',
        page,
        data,   
    });
});

// DYNAMIC ROUTE PARAMS
router.get('/product/:id', (req, res) => {
    res.status(200);     
    res.json({
        id: req.params.id,
        name: `Juice`,
        price: `10.000`,
        type: `Cold`
    });
});

// DYNAMIC ROUTE 2 PARAMS USING VARIABLE TO REQUEST
router.get('/:category/:tag', (req, res) => {          
    const {category, tag} = req.params;
    res.status(200);
    res.json({category, tag});
});


module.exports = router;


// REQUEST BODY TO POSTMAN
// router.post('/body/', (req, res) => {          
//     res.json(req.body);
// });