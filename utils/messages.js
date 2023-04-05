const messages = (res, code, message, data) => {
    let result = {
        code,
        message,
        data
    };

    res.status(code).send(result);
}

module.exports = messages;