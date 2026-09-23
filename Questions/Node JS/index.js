// creating the server
// const http=require('http');
// const port=3000;

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/plain'});
//     res.end();
// })

// server.listen(port,()=>{
//     console.log(`Running on the port ${port}`);
// })

// const fs=require('fs');
// fs.readFile("example.txt","utf-8",(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log("the content is :",data)
// })

// all file manipulation
const fs=require('fs');
const {Transform,Duplex}=require('stream');

// transform used for modify data , Duplex used for read+writable stream

const readableStream=fs.createReadStream('example.txt','utf8');
const transformStram=new Transform();

transformStram._transform=function(chunk,encoding,callback)
{
    const upper=chunk.toString().toUpperCase();
    callback(null,upper);
}

const writableStream = fs.createWriteStream('result.txt');
const duplexStream =new Duplex({
    read(size){},
    write(chunk,encoding,callback){
        console.log("Processing",chunk.toString());
        this.push(chunk);
        callback();
    }
});

readableStream.pipe(duplexStream).pipe(transformStram).pipe(writableStream).on('finish',()=>{
    console.log("Done");
})

// example.txt
//    ↓
// Readable Stream
//    ↓
// Duplex Stream (logs data)
//    ↓
// Transform Stream (UPPERCASE)
//    ↓
// Writable Stream → result.txt


console.log("Start");

process.nextTick(()=>{
    console.log("NextTixk has been called");
})

setImmediate(()=>{
    console.log("SetImmediate has been called");
})
console.log("End")