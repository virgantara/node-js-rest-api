module.exports = function(app) {

  var ctrl = require('./controller')
  
  app.route('/mahasiswa/create').post(ctrl.create)

  app.route('/mahasiswa/list').get(ctrl.list)

  app.route('/mahasiswa/update').put(ctrl.update)

  app.route('/mahasiswa/delete').delete(ctrl.delete)
}