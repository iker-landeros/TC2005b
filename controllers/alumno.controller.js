const pool = require('../helpers/mysql-config');

// Función para método HTTP GET
const getAlumno = (req, res) => {
    // res.json({
    //     message : "Hola mundo!"
    // });

    const sql = 'SELECT * FROM alumno';
    pool.query(sql, (err,results,fields) => {
        if(err)
            res.json(err);
        res.json(results);
    })
}

const saveAlumno = (req, res) => {
    console.log(req.body);
    const sql = 'INSERT INTO alumno (nombre, paterno, materno, nacimiento) VALUES (?,?,?,?)';
    const body = req.body;
    pool.query(sql, [body.nombre, body.paterno, body.materno, body.nacimiento], (err,results,fields) => {
        if(err)
            res.json(err);
        if(results.affectedRows > 0)
        {
            res.json({message: "Se insertó el alumno correctamente"});
        }
        res.json({message: "No se insertó el alumno"});
        res.json(results);
    })

}

// Función para método HTTP PUT
const updateAlumno = (req, res) =>
{
    // res.json({
    //     message : "Entraste por PUT"
    // })
    const sql = 'UPDATE alumno SET nombre = ?, paterno = ?, materno = ?, nacimiento = ? WHERE id = ?';
    const body = req.body;
    pool.query(sql, [body.nombre, body.paterno, body.materno, body.nacimiento, body.id], (err,results,fields) => {
        if(err)
            res.json(err);
        if(results.affectedRows === 0)
        {
            res.json({message: "No se encontró el alumno"});
        }
        if(results.changedRows === 0)
        {
            res.json({message: "No se realizó ningún cambio"});
        }
        if(results.affectedRows > 0 && results.changedRows > 0)
        {
            res.json({message: "Se actualizó la información del alumno correctamente"});
        }
        res.json(results);
    
    })
    
}

module.exports = {
    getAlumno,
    updateAlumno,
    saveAlumno
}