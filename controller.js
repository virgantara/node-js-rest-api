var Mahasiswa = require('./model.js')

var response = require('./res.js')

exports.create = function(req, res) {
    Mahasiswa.create(req.body, function(err, values) {    
      if (err)
         res.send(err);
      response.ok(values, res);
    })
}

exports.list = function(req, res) {
    Mahasiswa.list(function(err, values) {    
      if (err)
         res.send(err);
      response.ok(values, res);
    })
}

exports.update = function(req, res) {
    Mahasiswa.update(req.body, function(err, values) {    
      if (err)
         res.send(err);
      response.ok(values, res);
    })
}

exports.delete = function(req, res) {
    Mahasiswa.delete(req.body, function(err, values) {    
      if (err)
         res.send(err);
      response.ok(values, res);
    })
}