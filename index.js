const http=require('http');
const fs=require('fs');
const hostName=process.env.HOSTNAME;
const port=process.env.PORT;
function sendHTML(data, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);

    res.end();
}

const server=http.createServer((req, res)=>{
    if(req.url=='/'){
        fs.readFile('index.html',(err,data)=>{
            sendHTML(data,res);
        });
    }
    else if(req.url=='/about'){
        fs.readFile('about.html',(err,data)=>{
            sendHTML(data,res);
        });
    }
    else if(req.url=='/contact-me'){
        fs.readFile('contact-me.html',(err,data)=>{
            sendHTML(data,res);
        });
    }
    else{
        fs.readFile('404.html',(err,data)=>{
            sendHTML(data,res);
        });
    }
});
server.listen(port,()=>{
    console.log(`Server is running at ${port} and ${hostName}`);
})


