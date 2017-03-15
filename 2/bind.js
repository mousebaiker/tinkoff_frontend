function bind(func, object) {
  var object = object
  var func = func
  function insider() {
    return func.apply(object, arguments)
  }
  return insider
}

function test() {
  var user = {
     uname: 'Вася',
     greet: function (greeting) {
         greeting = (greeting || 'Bac')
         return this.uname + ' приветствует ' + greeting + '!';
     }
  };

  console.log(user.greet('you'));

  var greet = user.greet;

  var admin = {
     uname: 'Одмин',
     greet: greet
  };

  console.log(admin.greet()); // Одмин приветствует Вас!

  var greet = bind(user.greet, user);

  var admin = {
     uname: 'Одмин',
     greet: greet
  };

  console.log(greet());
  console.log(admin.greet('you')); // Вася приветствует Вас!
  console.log(greet('you')); // Вася приветствует Вас!
}

test()
