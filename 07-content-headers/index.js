
var koa = require('koa');

var app = module.exports = koa();

app.use(function* (next) {
  if (this.request.is('application/json')) {
    this.response.type = 'application/json';
    this.response.body = {message: 'hi!'}
  } else {
    this.response.type = 'text';
    this.response.body = 'ok';
  }
});
