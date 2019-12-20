require('dotenv').config()
const cors = require('cors')

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
// app.use(cors({credentials: true}));
const path = require('path')
const cookieParser = require('cookie-parser');
const { Fighter, Season, Fight } = require("./server/models");


const https = require('https');
const db = require('./server/models/index')
if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, 'client/build')))

    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname + '/client/build/index.html'))
    // })
};


app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    })
    next();
});
app.use(logger('dev'));

// Season.populateSeasons();

Fighter.amassNames();


const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
// app.use(customAuthMiddleWare);









db.sequelize.sync().then(() => {

    app.listen(port, () => {
        console.log(`App listening on PORT ${port}`)
    })
});
module.exports = app;