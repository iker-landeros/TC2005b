const express = require('express');
const router = express.Router();
const {getAlumno, updateAlumno, saveAlumno} = require('../controllers/alumno.controller')

router.get('/alumno', getAlumno);

router.put('/alumno', updateAlumno);

router.post('/alumno', saveAlumno);

module.exports = router