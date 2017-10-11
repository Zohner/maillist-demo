var fs = require('fs');
var formidable = require('formidable');
var dbManager = require('./lib/dbManager');

var express = require('express');

var app = express();

// 设置handlebars视图引擎
var handlebars = require('express-handlebars')
        .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(require('body-parser').urlencoded({extended:false})); // for 上传
// app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require('express-session')({ 
        secret: 'xxxxx_anbank_maillist',
        cookie: { maxAge: 60000 }, 
        resave: true, 
        saveUninitialized: true }));  // for session

// 增
app.post('/save_user', function (req, res) {
    dbManager.insert('INSERT INTO maillist SET ?', req.body, (rows)=>{
        res.send(JSON.stringify(req.body));
    });
});

// 删
app.post('/destroy_user', function (req, res) {
    var id = 0;
    try {
        id = parseInt(req.body["id"]);
    } catch (e) {
        res.send(JSON.stringify({"success":false}));
        return;
    }
    var sql = `DELETE FROM maillist WHERE id=${id}`;
    dbManager.delete(sql, (result)=>{
        res.send(JSON.stringify({"success":true}));
    });
});

// 改
app.post('/update_user', function (req, res) {
    var id = req.query["id"];
    var sql = 'UPDATE maillist SET ';
    var arr = Object.keys(req.body);
    for (var i = 0; i < arr.length; i ++) {
        if (i > 0) sql += ',';
        var k = arr[i];
        var v = req.body[k];
        sql += `${k}="${v}"`;
    }
    sql += ` WHERE id=${id}`;
    var body = req.body;
    body.id = id;
    dbManager.update(sql, (result)=>{
        res.send(JSON.stringify(body));
    });
});

// 查
app.post('/get_users', function (req, res) {
    var startIdx, searchNum;
    try {
        startIdx = (parseInt(req.body["page"]) -1) * 10;
        searchNum = parseInt(req.body["rows"]);
    } catch (e) {
        startIdx = 0;
        searchNum = 10;
    }
    var midSql = "";
    ["name", "telephone", "company", "email", "mgroup", "comments"].forEach((q)=>{
        if (req.body[q] != null && req.body[q].length > 0) {
            var v = req.body[q];
            midSql += ` and ${q} like '%${v}%'`;
        }
    });
    dbManager.select('select count(*) from maillist', (result)=>{
        var count = result[0]["count(*)"];
        dbManager.select(`select * from maillist WHERE 1=1` + midSql + ` limit  ${startIdx},${searchNum}`, (result)=>{
            res.send(JSON.stringify({
                total: count,
                rows: result
            }));
        });
    });
});

// 首页
app.get('/', function (req, res) {
    res.render('home');
});

// 定制404页面
app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

// 定制500页面
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to termanate.');
});