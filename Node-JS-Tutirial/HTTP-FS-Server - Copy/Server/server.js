// http => creat a basic HTTP server

// const  http = require('http');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// })

// server.listen(8000, () => {
//     console.log('Server is running at http://localhost:8000/');
// });

// http => creat a basic HTTP server

const  http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    let fileName= "";
    switch(req.url) {
        case '/':
            fileName = 'index.html';
            break;
        case '/about':
            fileName = 'about.html';
            break;
        case '/contact':
            fileName = 'contact.html';
            break;
        default:
            fileName = '404.html';
    }
    // let data = fs.writeFileSync(fileName, 'utf-8')
    let data = fs.writeFile(fileName, 'utf-8')
    // let data = fs.readFileSync(fileName, 'utf-8')
    // let data = fs.readFile(fileName, 'utf-8')
    res.end(data)

})    

server.listen(8008, () => {
    console.log('Server is running at http://localhost:8000/');
})