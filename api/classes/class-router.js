const express = require('express');
const router = express.Router();
const Classes = require('./class-model.js');

// GET all classes
router.get('/', (req, res, next) => {
  Classes.get
    .then((classes) => res.status(200).json(classes))
    .catch(next);
});

// GET class by Id
router.get('/:classId', (req, res, next) => {
  const {classId} = req.params;
  
  Classes.getById(classId)
    .then((foundClass) => res.status(200).json(foundClass))
    .catch(next);
})

// POST new class
router.post('/', (req, res, next) => {
  const newClass = req.body;

  Classes.add(newClass)
    .then((createdClass) => res.status(201).json(createdClass))
    .catch(next);
})

// PUT update class
router.put('/:classId', (req, res, next) => {
  const {classId} = req.params;
  const classData = req.body;

  Classes.update(classId, classData)
    .then((updatedClass) => res.status(200).json(updatedClass))
    .catch(next);
})

module.exports = router;
