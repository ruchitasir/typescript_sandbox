var fun:string = "Hello world"
console.log('fun',fun)

let myInt:number =3
let myFloat:number =6.4
let myHex:number = 0xf00d

let truefale:boolean = true

let myAny:any = 6
let always:any = true
let whatever:any = 'whatever works'

let indecisive:string|number = 5
let indecisive1:string|number = null
let indecisive2:string|number = undefined

let myStrings:string[] = ['Hello','world!']
let myStringArray: Array<string>= ['hwwe','weare']
let myNumArray:Array<number> = [4,5,6,7,8]
let myNums: Array<number | string> = [3,9,5,'hello','whatsapp']
let myArr: Array<any> = [2,'5',true,false,'hello jello']

const sayHello=(word:string, num:number):string=>{
    console.log("SAYHELLO",num)
    return `hello ${word} and ${num}`
}

const sayHi=(word:string, num:number):void=>{
   console.log('word ',word + num)
}

const sayStringOrNum=(word:string, num:number): string|number=>{ 
   return num
}

// comments
/* const sayStringOrNum=(arg:string, arg2:number): string|number=>{
    return arg2
 } */

// const functionName = (arguments: argumentType): returnType => { your code here }

sayHello('Samo',3) 

type color = 'Green' | 'Red' | 'Blue'

let colorChoice: color = 'Green'

interface DogObject {
    name: string;
    age: number;
    isGood: boolean;
    wagsTail?: boolean; // the '?' means that wagsTail is optional
}

const isGoodDog = (dog:DogObject):boolean=>{
    let {name, age, isGood} = dog; // Object destructuring is neat!
    let message = `${name} is ${age} and is very good!${dog.wagsTail ? ' wag, wag, wag' : ''}`
    if (!isGood) {
        console.log('How dare you! All dogs are good dogs!!')
        dog.isGood = true
    }
    console.log(message)
    return true
 }

 let oneGoodBoy: DogObject = {
    name: 'Harley Muffinhead',
    age: 7,
    isGood: true,
    wagsTail: true 
}

isGoodDog(oneGoodBoy) 


let myStringNumTuple: [string, number] = ["Hello", 42];
myStringNumTuple =  ["Hello",42] // ☠️ will throw an error at compile time