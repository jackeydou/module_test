var path = require("path");
module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        path: path.join(__dirname, 'output'),
        filename: 'index.js'
    },
    mode: "development",
    devtool: false
};