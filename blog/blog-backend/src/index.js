const Koa = require('koa');

const App = new Koa();

App.use((ctx, next) => {
  console.log(1);
  next().then(() => {
    console.log('bye');
  });
});

App.use((ctx, next) => {
  console.log(2);
  next();
});

App.use((ctx) => {
  ctx.body = 'hello world';
});

App.listen(4000, () => {
  console.log('listning to port 4000');
});