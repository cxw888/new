// const { write } = require('fs')
// let http = require('http')
// let server = http.createServer(
//     function (req, res) {
//         // 这是响应头 200是状态 文件类型html 字符编码UTF-8
//         res.writeHead(200, { 'content-type': 'application/json;charset=UTF-8' })
//         // req是请求,res是响应
//         let data = [
//             { "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" }
//             , {
//                 "title": "qui est esse"
//             }]
//         // write里写响应内容
//         res.write(JSON.stringify(data))
//         res.end()
//     }
// )
// server.listen(3000, '127.0.0.1')
// // 3000是端口号
2.
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         // 检查请求的路径  
//         if (req.url === '/') {
//             // 对于根路径的请求，返回一段简单的文本  
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             let data = [
//                 { "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" }
//                 , {
//                     "title": "qui est esse"
//                 }]
//             res.end(JSON.stringify(data));
//         } else {
//             // 对于其他路径的请求，返回 404 错误  
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Not Found\n');
//         }
//     } else {
//         // 如果不是 GET 请求，返回 405 错误（方法不允许）  
//         res.writeHead(405, { 'Content-Type': 'text/plain' });
//         res.end('Method Not Allowed\n');
//     }
// });
// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const cors = require('cors');
const app = express();

// 使用 CORS 中间件   CORS（跨源资源共享）
// app.use(cors()); 这一行代码的作用是全局启用CORS，允许来自任何来源的跨域请求。这意味着，
// 任何域名下的网页都可以向您的Express服务器发送AJAX请求（或其他类型的HTTP请求），而不会被浏览器的同源策略所阻止。
app.use(cors());

// 设置路由处理函数  
app.get('/', (req, res) => {
    let data = [
        { "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" },
        { "title": "qui est esse" }
    ];
    res.status(200).json(data); // 直接发送 JSON 响应  
    // 1.res.status(200)：设置 HTTP 响应的状态码为 200。HTTP 状态码 200 表示请求已成功处理。
    // 2.json(data)：这是一个链式调用
    // ，它告诉 Express 将 data 数组序列化为 JSON 格式，并将其作为响应体发送给客户端。
});

// 对于所有其他 GET 请求，返回 404 错误  
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

// 对于所有非 GET 请求，返回 405 错误（方法不允许）  
app.all('*', (req, res) => {
    res.status(405).send('Method Not Allowed');
});

app.listen(3000, '127.0.0.1')
// http://127.0.0.1:3000/
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// http://localhost:3000/
