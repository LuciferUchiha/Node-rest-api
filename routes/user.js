const express = require('express')
const router = express.Router()
const getConnection = require('../db.js')

router.get("/user", (req, res) => {
    const connection = getConnection()

    const queryString = "SELECT * FROM user"
    connection.query(queryString, (err, results, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err)
            res.sendStatus(500)
            return
        }
        res.json(results)
    })
})

router.post('/user', (req, res) => {
    const connection = getConnection()

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const queryString = "INSERT INTO user (firstName, lastName) VALUES (?, ?)"
    connection.query(queryString, [firstName, lastName], (err, results, fields) => {
        if (err) {
            console.log("Failed to insert new user: " + err)
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new user with id: ", results.insertId);
        const user = { userid: results.insertId, firstName: firstName, lastName: lastName }
        res.json(user)
    })
})

router.get('/user/:id', (req, res) => {
    const connection = getConnection()

    const idUser = req.params.id
    const queryString = "SELECT * FROM user WHERE idUser = ?"
    connection.query(queryString, [idUser], (err, results, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err)
            res.sendStatus(500)
            return
        }
        const user = results.map((row) => {
            return { firstName: row.firstName, lastName: row.lastName }
        })

        res.json(user)
    })
})

router.put('/user/:id', (req, res) => {
    const connection = getConnection()

    const idUser = req.params.id
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const queryString = "UPDATE user SET firstName = ?, lastName = ? WHERE idUser = ?"
    connection.query(queryString, [firstName, lastName, idUser], (err, results, fields) => {
        if (err) {
            console.log("Failed to update user: " + err)
            res.sendStatus(500)
            return
        }
        console.log("Updated user with id: ", idUser);
        const user = { userid: idUser, firstName: firstName, lastName: lastName }
        res.json(user)
    })
})

router.delete('/user/:id', (req, res) => {
    const connection = getConnection()

    const idUser = req.params.id
    const queryString = "DELETE FROM user WHERE idUser = ?"
    connection.query(queryString, [idUser], (err, results, fields) => {
        if (err) {
            console.log("Failed to delete user: " + err)
            res.sendStatus(500)
            return
        }
        console.log("Deleted user with id: ", idUser);
        res.end()
    })
})

module.exports = router