// Name: lau Hong Wei
// Class: DCITP/1A/05
// Adm: 2241319

var input = require('readline-sync');
var Names = ["Leonardo", "Catherine", "Luther", "Bruce", "Amy"];
var Membership = ["Gold", "Ruby", "Gold", "Diamond", "Gold"];
var DateJoined = ["1 Dec 2019", "14 Jan 2020", "29 Apr 2020", "3 Jun 2020", "5 Jun 2020"];
var BirthDate = ["1 Jan 1980", "28 Oct 1985", "16 Mar 1992", "18 Mar 1994", "31 May 2000"];
var Points = [1400, 250, 3350, 40200, 500];

console.log("Welcome to XYZ Membership Loyalty Programme!");

//Prompt user for name until they key in their name

do
{
    var Name = input.question("Please enter your name: ");
    console.log("Sorry, Please enter a name!");
}

while(Name.length < 1);
{
    
}

//Prompt user input from option 1 to 4 in a loop until they input  
do
{
    console.log("Hi " + Name + ", please select your choice:");
    console.log("\t 1. Display all member's information");
    console.log("\t 2. Update points earned");
    console.log("\t 3. Statistics");
    console.log("\t 4. Exit");
    var Selection = parseInt(input.question("\t >> "));
    console.log()
}

while(Selection < 1 || Selection > 4)
{

}

switch(Selection)
{
    case 1:
        for (var i = 0; i < 5; i++)
        {
            console.log("Name: " + Names[i] + "\n" + "Membership Type: " + Membership[i] + "\n" + "Date Joined: " + DateJoined[i] + "\n" + "Date of Birth: " + BirthDate[i] + "\n" + "Points Earned: " + Points[i] + "\n\n")
        }
        break;

    case 2:
        console.log("Sorry, work in progress!");
        break;
    case 3:
        console.log("Sorry, work in progress!");
        break;
    case 4:
        console.log("Thank you & goodbye!");
        break;
}