const express = require ('express')
const { route } = require('express/lib/application')
const router = express.Router()

const usercontroller = require('../router/controllers/user')




  router.get('/datasiswa', usercontroller.index)

  router.get('/siswa/:id', usercontroller.show)

  router.post('/tambahsiswa', usercontroller.store)
    
  router.put('/editsiswa/:id', usercontroller.update)
  
  router.delete('/hapussiswa/:id', usercontroller.delete)
  module.exports = router