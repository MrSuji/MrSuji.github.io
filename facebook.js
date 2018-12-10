var database = [{
  username: "sujoy",
  password: "abcabc"
}, {
  username: "sayer",
  password: "123"
}, {
  username: "votka",
  password: "999"
}];
var newsfeed = ["here is your newsfeed", {
  name: "Bobby",
  post: "hello everyone!!!!"
}, {
  name: "Joey",
  post: "Just completed javascript!!!!"
}, {
  name: "Alex",
  post: "Good morning everyone!!!!",
}, {
  name: "Susy",
  post: "learning javascript!!!",
}];
alert("here is something i made like Facebook.If you type the username \"sujoy\" and password \"abcabc\" ,the console will show you a newsfeed!! \n hope you will enjoy!");
var user1 = prompt("Type Your username:");
var pass1 = prompt("Type Your password:");
alert("press F12 for opening console!");

function validuser(user, pass) {
  for (i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (validuser(user, pass)) {
    console.log(newsfeed);
  } else {
    alert("Sorry!!!!!! \nThe username or password is incorrect!");
  }
}
signIn(user1, pass1);
