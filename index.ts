#! /usr/bin/env node

import inquirer from "inquirer"  ;

let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number",
        }
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");

    let operationAns = await inquirer.prompt (
    [
        {
            name:"operation",
            message:"please select option",
            type: "list",
            choices:["withdraw","fastcash","checkbalance"]
        }
    ]
);

 if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
        [
          {
               name:"amount",
               message: "Enter your amount",
               type: "number"
          }
        ]
    ) ;
    if (amountAns.amount > myBalance){
      console.log("Insufficient amount")
    } 
    else {
    myBalance -= amountAns.amount 
        console.log(`Your remaining balance is ${myBalance}`) 
    }
}
else if (operationAns.operation === "fastcash"){
    let fast = await inquirer.prompt(
        [
            {
                name:"fastcash",
                message: "Select the amount which you withdrawal",
                type:"list",
                choices:[1000, 2000, 5000, 10000] 
            }
        ]
    );
    myBalance -= fast.fastcash;
    console.log(`You have succesfully withdrawal ${fast.fastcash} \n Your remaining balance is ${myBalance}`)
}
   else if (operationAns.operation === "checkbalance"){
    console.log(`Your remaining balance is: ${myBalance}`)
}
 }
    else {
         console.log  ("InCorrect pin code!")
    };

