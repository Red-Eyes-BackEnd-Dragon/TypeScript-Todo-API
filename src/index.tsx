import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
});

server.listen(3000, () => {
    console.log(`Listening on port: ${PORT}`);
});