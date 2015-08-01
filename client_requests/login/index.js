

module.exports = function(app, mongoose, db){

  var userStr = 'User';

  var userSchema = new mongoose.Schema({
    userName: String,
    password: String,
  });

  var User = mongoose.model(userStr, userSchema);

  app.post('/newuser', function(request, response){


    console.log('request body')
    console.log(request.body)

    var user = new User({
      userName: 'moo',
      password: 'poo'
    })

    user.save(function(err, user){
      var sendBack;
      var responseCode;
      if(err){
        responseCode = 500;
        sendBack = {
          message: 'user not saved'
        };

      }else{
        responseCode = 200;
        console.log('user');
        console.log(user)
        sendBack = {
          message: 'user saved'
        };
      }

      response.status(responseCode).send(sendBack)

    });


  });


  app.post('/login', function(request, response){
    
    console.log('login called');
    User.find({}, function(err, user){

      if(err){
        response.status(400).send('not found');
      }else{

        console.log('user');
        console.log(user)
        response.status(200).send('found')

      }
    })



  });

}