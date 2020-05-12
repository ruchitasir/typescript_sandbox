var fun = "Hello world";
console.log('fun', fun);
var myInt = 3;
var myFloat = 6.4;
var myHex = 0xf00d;
var truefale = true;
var myAny = 6;
var always = true;
var whatever = 'whatever works';
var indecisive = 5;
var indecisive1 = null;
var indecisive2 = undefined;
var myStrings = ['Hello', 'world!'];
var myStringArray = ['hwwe', 'weare'];
var myNumArray = [4, 5, 6, 7, 8];
var myNums = [3, 9, 5, 'hello', 'whatsapp'];
var myArr = [2, '5', true, false, 'hello jello'];
var sayHello = function (word, num) {
    console.log("SAYHELLO", num);
    return "hello " + word + " and " + num;
};
var sayHi = function (word, num) {
    console.log('word ', word + num);
};
var sayStringOrNum = function (word, num) {
    return num;
};
// comments
/* const sayStringOrNum=(arg:string, arg2:number): string|number=>{
    return arg2
 } */
// const functionName = (arguments: argumentType): returnType => { your code here }
sayHello('Samo', 3);
var colorChoice = 'Green';
var isGoodDog = function (dog) {
    var name = dog.name, age = dog.age, isGood = dog.isGood; // Object destructuring is neat!
    var message = name + " is " + age + " and is very good!" + (dog.wagsTail ? ' wag, wag, wag' : '');
    if (!isGood) {
        console.log('How dare you! All dogs are good dogs!!');
        dog.isGood = true;
    }
    console.log(message);
    return true;
};
var oneGoodBoy = {
    name: 'Harley Muffinhead',
    age: 7,
    isGood: true,
    wagsTail: true
};
isGoodDog(oneGoodBoy);
