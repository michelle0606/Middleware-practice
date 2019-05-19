const express = require('express')
const app = express()
const port = 3000

const { showReq } = {
  showReq: (req, res, next) => {
    const url = req.url
    const method = req.method
    const date = new Date()
    console.log(
      `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${method} from ${url}`
    )
    next()
  }
}

app.get('/', showReq, (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', showReq, (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', showReq, (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', showReq, (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', showReq, (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
