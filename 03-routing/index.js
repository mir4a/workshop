
var koa = require('koa');

var app = module.exports = koa();

app.use(function* (next) {
  if ('/' !== this.request.path) return yield next;

  this.response.body = 'hello world';
});

app.use(function* (next) {
  if ('/404' !== this.request.path) return yield next;

  this.response.body = 'page not found';
});

app.use(function* () {
  if ('/500' !== this.request.path) return yield next;

  this.response.body = 'internal server error';
});
