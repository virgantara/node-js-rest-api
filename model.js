var sql = require('./db.js');
var Mahasiswa = function(task){
    
};

function createMahasiswa(data, callback){
    let params = [data.nim, data.nama, data.alamat, data.jk]
    let txt = "INSERT INTO mahasiswa VALUES(?,?,?,?) "
    sql.query(txt,params,function(err, res){
        if(err){
        	console.log(err)
            callback(err, null)
        }
        callback(null, res)
    })
}

function listMahasiswa(callback){
    
    let txt = "SELECT * FROM mahasiswa "
    sql.query(txt,[],function(err, res){
        if(err){
        	console.log(err)
            callback(err, null)
        }
        callback(null, res)
    })
}

function updateMahasiswa(data, callback){
    let params = [data.nama, data.alamat, data.jk, data.nim]
    let txt = "UPDATE mahasiswa SET nama = ?, alamat = ?, jk = ? WHERE nim = ? "
    sql.query(txt,params,function(err, res){
        if(err){
        	console.log(err)
            callback(err, null)
        }
        callback(null, res)
    })
}

function deleteMahasiswa(data, callback){
    let params = [data.nim]
    let txt = "DELETE FROM mahasiswa WHERE nim = ? "
    sql.query(txt,params,function(err, res){
        if(err){
        	console.log(err)
            callback(err, null)
        }
        callback(null, res)
    })
}

Mahasiswa.delete = deleteMahasiswa
Mahasiswa.update = updateMahasiswa
Mahasiswa.list = listMahasiswa
Mahasiswa.create = createMahasiswa


module.exports = Mahasiswa