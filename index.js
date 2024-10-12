const http = require("http");
const server = http.createServer((req, res) => {
if (req.url === "/") res.end("Home");
else if (req.url === "/about") res.end(view/isAbsolute.ejs);
else res.end("Page not found");
});
server.listen(8080);



