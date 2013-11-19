module.exports = config = {
    "db": {
    "port": 53818,
    "host": "ds053818.mongolab.com",
    "username":"test",
    "password":"test"
    },
    "server": {
        "port": 3000,
        "address": "0.0.0.0"
    },
    "accessControl": {
        "allowOrigin": "*",
        "allowMethods": "GET,POST,PUT,DELETE,HEAD,OPTIONS"
    },
    "flavor": "nounderscore",
        "debug": true
}