const UserDataEntry = require('../models').UserDataEntry;


const getUser = (req, res) => {
    UserDataEntry.findAll({})
      .then(entry => {
        return res.status(200).send(entry)
      })
      .catch(err => {
        return res.status(500).send(err)
      });
  };

const createUser = (req, res) => {
  const {name, surname} = req.body;

  UserDataEntry.create({
    name: name,
    surname: surname,
  })
    .then(entry => {
      return res.status(201).send(entry);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
};



module.exports = {
  getUser,  
  createUser
};