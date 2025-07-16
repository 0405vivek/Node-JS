const exprss = require('express');
const server = exprss();

server.get('/', (req, res) => {
    res.send('Hello World');
});




server.listen(8000, () => {
    console.log('Server is running at http://localhost:8000/');
});