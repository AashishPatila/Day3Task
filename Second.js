// TASK 1. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is odd or even, and display a message in the terminal.
var a=0
for (; a<=20; a++) 
{
    if (a === 0) 
    {
        console.log(a +  " is even");
    }
    else if (a % 2 === 0) 
    {
        console.log(a + " is even");   
    }
    else {
            console.log(a + " is odd");
    }
}

//TASK 2 Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is odd or even, and display a message in the terminal.

function add(a,b)
{
    console.log("Sub of a and b is : ",a+b)

}
add(2,2);

//TASK 3 Write a JavaScript program to sum the multiples of 3 and 5 under 1000 using loops and functions concept.

function Add(a,b)
{
    var sum =0;
    let no;
    for(no = 0; no <1000 ; no++)
    {
        if(no % a=== 0 || no % b === 0)
        {
            sum = sum + no
        }
    }
console.log(sum);
}
Add(3,5);

//TASK 4 Explore the startswith, endswith and includes function of a string.

let name = "AashishPatil"
console.log(name.startsWith("Aashih"))
console.log(name.endsWith("Patil"))

//TASK 5 Display the number amount from the below sentence 👇
//"This house is sold for 2500000 this morning"

let sentance ="This house is sold for 2500000 this morning"
let i
for(i = 0; i<sentance.length;i++)
{
       if (sentance[i] >= '0' && sentance[i] <= '9')
       {
        console.log(sentance[i]);
       }
}

// TASK 6 Try to change the 5th character in a given string 👉 "abcdefgh". Were you able to change it ?

let str = "abcdefgh"
let str2 = str.replace('e','a')
console.log(str2);

//TASK 7 Is the length of the escape sequence character counts when we counts the length of entire string? ( for example "abc\t" what will be the length of the given string ).

let m = "abc\t"
console.log(m.length)

//TASK 8 Explore why to use Array.from function and try to use it .

let From = "Aashish";
console.log(Array.from(From));

//TASK 9 . Add the values in the array when the user inputs at the run time.

//const prompt = require ("prompt-sync")({sigint:true});

// var array = [4]
// for(let i=0;i<4;i++)
// {
//     array[i]=prompt("Enter array element",+(i+1));
// }
// console.log(array);

//TASK 10 . Add the values in the array when the user inputs at the run time.

function fun()
 {
        let name1 = ['Ram','Sham' ];
        //Pushing the element into the array
        name1.push('Mohan',1,2);
                console.log(name1);
      
}
fun()


//TASK 11 From the  array, display the multiples of 3 and display the values in new array.

let array1 = [10,20,30,40,50]
 let array2 =[];
 for(let i=0;i<array1.length;i++)
 {
    if(array1[i] % 3 === 0)
    {
        array2[i]= array1[i];
    }
 }
 for(let i=0 ; i<array2.length;i++)
 {
    console.log(array2[i]);
 }

 //TASK 12 Create an array of cube of 5 different numbers 
var n = [1,2,3,4,5];
for (var j = 0; i < n.length;j++) 
{
n[j] = n[j]*n[j]*n[j];
}
console.log(n);