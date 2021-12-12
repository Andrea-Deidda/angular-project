const DataEngine = require('../routes/dataEntry');
const ErrorsEngine  = require('../engine/errors');
const UserDataEngine = require('../routes/userDataEntry');

module.exports = (app) => {

  const dataPath = '/data';
  const userPath = '/user';

  /********** DATA REST APIs **********/
  app.get(dataPath, DataEngine.getEntry);
  app.post(dataPath, DataEngine.createEntry);
  app.get(`${dataPath}/:id`, DataEngine.getEntryById);
  app.put(`${dataPath}/:id`, DataEngine.editEntry);
  app.delete(`${dataPath}/:id`, DataEngine.deleteEntry);
  
  app.get(`${dataPath}/:genre`, DataEngine.getEntryByGenre);

  app.post(userPath, UserDataEngine.createUser);
  app.get(userPath, UserDataEngine.getUser);

 

  /********** ERROR HANDLER **********/
  app.use(ErrorsEngine.page404);
  app.use(ErrorsEngine.pageError);

};