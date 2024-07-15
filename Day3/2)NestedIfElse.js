// Activity 2: Nested If-Else Statements


// Task 3: Write a program to find the largest of three numbers using nested if-else statements.


const GreatestAmongThreeUsingNestedIfElse = (number1,number2,number3)=>{
    if(number1>=number2){
        if(number1>=number3){
            console.log("Number 1 is Greatest , Number1 is : ", number1)
        }else{
            console.log("Number 3 is Greatest , Number3 is : ", number3)
        }
    }else{
        if(number2>=number3){
            console.log("Number 2 is Greatest , Number2 is : ", number2)
        }else{
            console.log("Number 3 is Greatest , Number3 is : ", number3)
        }
    }
}

GreatestAmongThreeUsingNestedIfElse(1,2,3)
GreatestAmongThreeUsingNestedIfElse(1,3,2)
GreatestAmongThreeUsingNestedIfElse(2,1,3)
GreatestAmongThreeUsingNestedIfElse(2,3,1)
GreatestAmongThreeUsingNestedIfElse(3,1,2)
GreatestAmongThreeUsingNestedIfElse(3,2,1)