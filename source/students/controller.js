const pool = require('../../db');
const queries = require('./queries'); //give connection to queries page

const getStudents = (req, res) => {
    //pool.query("SELECT * FROM students",(error, results) => {
    pool.query(queries.getStudents,(error, results) => { //references the queries page
        if(error) throw error;
        res.status(200).json(results.rows);  //status(200) CHECKS if its all good
    });
};

const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById,[id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const addStudents = (req, res) => {
    const { name, email, age} = req.body;
    pool.query(queries.checkEmailExist,[email],(error, results) => {
        if(results.rows.length){
            res.send("Email already exist in system");
        }
        
        //add new student
        pool.query(queries.addStudents,[name,email,age],(error, results) => {
            if(error) throw error;
                res.status(201).send("Student Created Successfully"); //Status(201) is good on post
            }
        );
    });
};

const updateStudents = (req, res) => {
    const id = parseInt(req.params.body)
    const { name } = req.body;
    pool.query(queries.getStudentsById,[id],(error, results) => {
        if(results.rows.length){
            res.send("Value already exist in system");
        }

    pool.query(queries.updateStudents, [name,id],(error, results) => {
        if(error) throw error;
            res.send("Student updated");
    });
    });
}

const deleteStudents = (req, res) => {
    const del = parseInt(req.params.id);
    pool.query(queries.deleteStudents,[del],(error, results) => {
        if(!del){
            return res.staus(404).send("This value is not found");
        }

    });
}

module.exports = {
    getStudents,
    getStudentsById,
    addStudents, 
    updateStudents,
    deleteStudents,  //allows the others pages to communicate with it
};