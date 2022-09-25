var AllGreetings;
(function (AllGreetings) {
    var Greetings;
    (function (Greetings) {
        function returnGreeting(greeting) {
            console.log("the message from namespace Greetings is ".concat(greeting, "."));
        }
        Greetings.returnGreeting = returnGreeting;
    })(Greetings || (Greetings = {}));
    var GreetingsWithLength;
    (function (GreetingsWithLength) {
        function returnGreeting(greeting) {
            var greetingLength = getLength(greeting);
            console.log("the message from namespace GreetingsWithLength is ".concat(greeting, ". It is ").concat(greetingLength));
        }
        GreetingsWithLength.returnGreeting = returnGreeting;
        function getLength(message) {
            return message.length;
        }
    })(GreetingsWithLength = AllGreetings.GreetingsWithLength || (AllGreetings.GreetingsWithLength = {}));
    Greetings.returnGreeting('hola');
    GreetingsWithLength.returnGreeting('hoa');
})(AllGreetings || (AllGreetings = {}));
AllGreetings.GreetingsWithLength.returnGreeting('hola');
var greet = AllGreetings.GreetingsWithLength;
greet.returnGreeting('hola');
