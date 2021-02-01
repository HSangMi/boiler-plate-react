//back-end 서버가 index.js 부터 시작됨
/*
package.json에 start 스크립트 추가
 "scripts": {
    "start": "node index.js",

- terminal에 npm run start 입력!
- start script인 node index.js가 실행
*/
const express = require('express')
const app = express()
const port = 3000

// 몽구스를 이용하여 app과 db를 연결!
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://han32:han32@react-toy.pktci.mongodb.net/React-Toy?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

