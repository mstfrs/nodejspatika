const http=require('http')

const server=http.createServer((req, res)=>{
const url=req.url;
if (url==="/") {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>INDEX SAYFASI</h1>")
}else if(url==="/hakkimda"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>HAKKIMDA SAYFASI</h1>")
}else if(url==="/iletisim"){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>İLETİŞİM SAYFASI</h1>")
}else {
    res.writeHead(404,{"Content-Type":"text/html"});
    res.write("<h1>404 HATA SAYFASI</h1>")
}   
    res.end()
    
})

const port=5000;

server.listen(port,()=>{
    console.log(`Sunucu port ${port} de başlatıldı`)
})