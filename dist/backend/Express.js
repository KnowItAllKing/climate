"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const indexRouter = require('./routes/Index');
const searchRouter = require('./routes/Search');
class WebServer {
    constructor(port) {
        this.port = port;
        this.app = express();
        this.app.engine('hbs', hbs({
            extname: 'hbs',
            defaultLayout: 'layout'
        }));
        this.app.set('views', path.resolve('../src/frontend/views'));
        this.app.set('view engine', 'hbs');
        this.app.use(express.static(path.resolve('../src/frontend/public')));
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(flash());
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use('/', indexRouter);
        this.app.use('/search', searchRouter);
        this.server = this.app.listen(this.port, () => console.log(`Listening on port ${this.port}...`));
    }
    ;
}
exports.WebServer = WebServer;
;
