/* 1. Write a function that combines two arrays by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].  */

let a= ['a','b','c']
let b= [1,2]

function mergeArrays(a: Array<any>, b: Array<any>):Array<any> {
  let result: Array<any> = []
  while (a.length && b.length) {
    result.push(a.shift(), b.shift())
  }
  console.log('results final',result.concat(a, b) )
  return result.concat(a, b)
}

mergeArrays(b,a)

/* 2. Write a function that returns the elements on odd positions in an array.  */

let newArr = [0,1,2,3,4,5,6,7]

function oddPos(arr: Array<any>): Array<any>{
  let oddElement: Array<any> =[]
  
  for(let i: number =0;i<arr.length;i++){
    if(i%2 !=0){
      oddElement.push(arr[i])
    }
  }
  console.log(oddElement)
  return oddElement
}

oddPos(newArr)

/* 3. Write a function that tests whether a string is a palindrome. (Try to solve this without the built-in .reverse() function!) */

function checkPalindrome(str: string):boolean{

    let len: number = str.length;
    let mid:number
    if(len>1)
    {
        if(len%2==0)  mid= len/2
        else  mid = Math.floor(len/2)

        let j:number = len-1
        for(let i:number =0; i< mid; i++)
        {   console.log('i , j ',i, j)
             if(str.charAt(i)!= str.charAt(j)){
                return false
             }
            j--;
        }
        console.log("Palindrome str",str)
        return true
    } 
    else  return false
}

let isPalindrome: boolean = checkPalindrome("kaybguitdiugbyak")

console.log("isPalindrome ",isPalindrome)

let isPalindrome1: boolean = checkPalindrome("kaybguitiugbyak")

console.log("isPalindrome ",isPalindrome1)


//  Some examples of palindromic words are redivider, deified, 
//civic, radar, level, rotor, kayak, reviver, racecar, madam, and refer.