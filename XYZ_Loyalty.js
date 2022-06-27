// Name: lau Hong Wei
// Class: DCITP/1A/05
// Adm: 2241319

var input = require('readline-sync');
var Selection = 0;

//First 5 arrays to store the user information
var Leonardo = ["Leonardo", "Gold", "1 Dec 2019", "1 Jan 1980", 1400];
var Catherine = ["Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", 250];
var Luther = ["Luther", "Gold", "29 Apr 2020", "16 Mar 1992", 3350];
var Bruce = ["Bruce", "Diamond", "3 Jun 2020", "18 Mar 1994", 40200];
var Amy = ["Amy", "Ruby", "5 Jun 2020", "31 May 2000", 500];

//Array to store all user information into an 2D array
var memberList = [Leonardo, Catherine, Luther, Bruce, Amy];

console.log("Welcome to XYZ Membership Loyalty Programme!");

//Prompt user for name until they key in their name
do
{
    var Name = input.question("Please enter your name: ");

    if (Name.length < 1)
    {
        console.log("Sorry, Please enter a name!");
    }
} while(Name.length < 1);

while(Selection != 4)
{
    console.log("Hi " + Name + ", please select your choice:");
    console.log("\t 1. Display all member's information");
    console.log("\t 2. Update points earned");
    console.log("\t 3. Statistics");
    console.log("\t 4. Exit");
    Selection = parseInt(input.question("\t >> "));

    switch(Selection)
    {
        case 1:
            for (var i = 0; i < 5; i++)
            {
                console.log("Name: " + memberList[i][0] + "\n" + "Membership Type: " + memberList[i][1] + "\n" + "Date Joined: " + memberList[i][2] + "\n" + "Date of Birth: " + memberList[i][3] + "\n" + "Points Earned: " + memberList[i][4] + "\n\n");
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

        default:
            console.log("Please enter a valid input.");
            break;
    }
}