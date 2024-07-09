const path = require('path');

const Principal = (req, res, next) => {
    const filePath = path.join(__dirname, '../../public/view/index.html');
    res.sendFile(filePath);
};

module.exports = {
    Principal
};
