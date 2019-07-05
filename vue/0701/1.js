const express = require('express')
const app = express()

app.get('/asc', (req, res) => res.send('我的服务器出来吧哈哈哈!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
