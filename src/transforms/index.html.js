module .exports = function (x) {
    return x
        .split ("<script src='cordova.js'></script>")
        .join (
            "<script src='cordova.js'></script>" + '\n' +
            "<script src='js/init.js'></script>" + '\n' +
            '<link rel="stylesheet" type="text/css" href="css/style.css">')
}