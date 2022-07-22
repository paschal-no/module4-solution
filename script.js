(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if("j" === firstLetter) {
      byeSpeaker.sayGoodBye(names[i])
    } 
    else {
      helloSpeaker.sayHello(names[i])
    }
  }
  
})();
