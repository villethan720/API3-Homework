const { Router } = require('express');
const controller = require('./controller');


const router = Router();

router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentsById);
router.post('/', controller.addStudents);
router.put('/', controller.updateStudents);
router.delete('/', controller.deleteStudents);

/*
router.get('/', (req, res) => {
    res.send("Using API route");
});
*/

module.exports = router;