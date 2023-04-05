const multer = require('multer');
const messages = require('../utils/messages');
const path = require('path');
const file_size = 1;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = `user_${Date.now()}${path.extname(file.originalname)}`;
      cb(null, uniqueSuffix)
    }
});

const uploading = multer({
    storage: storage,
    limits: { fileSize: file_size * 1024 * 1024 },
    fileFilter: (req, file, callback) => {
        const type = path.extname(file.originalname).toLowerCase();
        if ([".png", ".jpg", "jpeg"].includes(type)) callback(null, true);
        else callback (
            { error: "Extention image must be png/jpg/jpeg", code: "wrongtype" },
            false
        );
    }
});

const uploadingImage = (req, res, next) => {
    const upload = uploading.single('image_url'); //name

    if(upload) {
        upload(req, res, (err) => {
            if(err) {
                if(err.code == 'Limit File Size') {
                    messages(res, 413, `Maximum file size ${file_size}mb`);
                } else if (err.code == 'wrongtype') {
                    messages(res, 400, err);
                } else {
                    messages(res, 500, 'Something wrong when uploading image');
                };
            } else {
                next();
            };
        });
    } else {
        next();
    };
};

module.exports = uploadingImage;