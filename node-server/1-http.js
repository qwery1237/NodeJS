const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // reqest information
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  const url = req.url;

  // res.write
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
  } else if (url === '/courses') {
    res.write('Courses');
    // res.end

    res.end();
  } else {
    res.write('Not Found');
    res.end();
  }
});

server.listen(8080);
