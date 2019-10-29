var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    request('https://jsonplaceholder.typicode.com/users',
        function(error, response, body) {
            let userList = JSON.parse(body);

            res.render('index', { title: 'usersCards', userList });

        });
});

/* GET post page */
router.get('/posts', function(req, res, next) {
    request('https://jsonplaceholder.typicode.com/posts',

        function(error, response, body) {
            let userPosts = JSON.parse(body);
            /* console.log(userPosts); */


            res.render('posts', { userPosts });

        });
});
module.exports = router;