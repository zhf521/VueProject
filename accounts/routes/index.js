var express = require('express');
var router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname+'/../data/db.json')

const db = low(adapter)

const shortid = require('shortid')

// 记账本的列表
router.get('/account', function (req, res, next) {
  let accounts = db.get('accounts').value()
  res.render('list',{accounts:accounts})
});

//添加记录
router.get('/account/create', function (req, res, next) {
  res.render('create')
})

//新增记录
router.post('/account', (req, res) => {
  let id = shortid.generate()
  //获取请求体数据
  console.log(req.body)
  db.get('accounts').unshift({ id:id,...req.body}).write()
  res.render('success',{msg:'添加成功~~~',url:'/account'})
})

router.get('/account/:id', (req, res) => {
  let id = req.params.id
  db.get('accounts').remove({ id: id }).write()
  res.render('success', { msg: '删除成功~~~', url: '/account' })
})

module.exports = router;
