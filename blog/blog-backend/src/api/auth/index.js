const Router = require('koa-router');

const auth = new Router();
const authCrtl = require('./auth.crtl');

auth.post('/login', authCrtl.login);
auth.get('/check', authCrtl.check);
auth.post('/logout', authCrtl.logout);

module.exports = auth;