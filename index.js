const http=require('http');
const fs=require('fs');
const hostName=process.env.HOSTNAME;
const port=process.env.PORT;

const server=http.createServer((req, res)=>{
    if(req.url=='/'){
        fs.readFile('index.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);

            res.end();
        });
    }
    else if(req.url=='/about'){
        fs.readFile('about.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);

            res.end();
        });
    }
    else if(req.url=='/contact-me'){
        fs.readFile('contact-me.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);

            res.end();
        });
    }
    else{
        fs.readFile('404.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);

            res.end();
        });
    }
});
server.listen(port,()=>{
    console.log(`Server is running at ${port} and ${hostName}`);
})


