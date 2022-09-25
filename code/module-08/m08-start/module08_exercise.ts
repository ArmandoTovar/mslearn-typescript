namespace AllGreetings

{namespace Greetings{
  export function returnGreeting (greeting:string){
    console.log(`the message from namespace Greetings is ${greeting}.`)
  }
}
export namespace GreetingsWithLength{
  export  function returnGreeting(greeting:string){
        let greetingLength = getLength(greeting)
        console.log(`the message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength}`)


    }
    function getLength(message:string):number{
        return message.length
    }
}
Greetings.returnGreeting('hola')
GreetingsWithLength.returnGreeting('hoa')

}

AllGreetings.GreetingsWithLength.returnGreeting('hola')


import greet = AllGreetings.GreetingsWithLength;
greet.returnGreeting('hola')