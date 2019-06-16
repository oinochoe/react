const Koa = require('koa');

const App = new Koa();

App.use((ctx) => {
  ctx.body = 'hello world';
});

App.listen(4000, () => {
  console.log('listning to port 4000');
});