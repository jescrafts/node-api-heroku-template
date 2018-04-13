const User = require('../models/User');

module.exports = app => {

  app.get('/api/self', (req, res) => {
    var user = new User();
    res.send(user.getSelf());
  });

};