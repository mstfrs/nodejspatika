const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if (ctx.path==="/") {
        ctx.body = 'Index Sayfası';
    }else if(ctx.path==="/hakkimda"){
        ctx.body = 'Hakkımda Sayfası';
    }else if(ctx.path==="/iletisim"){
        
        ctx.body = 'İletişim Sayfası';
    }else{
        ctx.body = 'Hello Koa';
    }

});

app.listen(3000);