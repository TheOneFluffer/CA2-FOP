// Name: lau Hong Wei
// Class: DCITP/1A/05
// Adm: 2241319

var input = require('readline-sync');
var Selection = 0;

class Member
{
    constructor(name, rank, Date_Joined, DOB, points)
    {
        this.name = name;
        this.rank = rank;
        this.Date_Joined = Date_Joined;
        this.DOB = DOB;
        this.points = points;
        
        //Returning elements
        getMembers()
        {
            return this.name + ", " + this.rank + ", " + this.Date_Joined + ", " + this.DOB + ", " + this.points;
        }
    }
}
var user1 = ("Jenny", "Gold", "20 July 2020", "" )
console.log("")
class MemberGroup
{
    constructor(Leonardo, Catherine, Luther, Bruce, Amy)
    {
        //First 5 arrays to store the user information
        this.Leonardo = ["Leonardo", "Gold", "1 Dec 2019", "1 Jan 1980", 1400];
        this.Catherine = ["Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", 250];
        this.Luther = ["Luther", "Gold", "29 Apr 2020", "16 Mar 1992", 3350];
        this.Bruce = ["Bruce", "Diamond", "3 Jun 2020", "18 Mar 1994", 40200];
        this.Amy = ["Amy", "Ruby", "5 Jun 2020", "31 May 2000", 500];
    }
    appendMemberGroup()
    {

    }
}
var Leonardo = 
{
    name: "Leonardo",
    rank: "Gold",
    Date_Joined: "1 Dec 2019",
    DOB: "1 Jan 1980",
    points: 1400,
}

var Catherine = 

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

while(Selection != 6)
{
    console.log("Hi " + Name + ", please select your choice:");
    console.log("\t 1. Display all member's information");
    console.log("\t 2. Display member information");
    console.log("\t 3. Add new user");
    console.log("\t 4. Update points earned");
    console.log("\t 5. Statistics");
    console.log("\t 6. Exit");
    Selection = parseInt(input.question("\t >> "));

    switch(Selection)
    {
        //Show all member's information
        case 1:
            for (var i = 0; i < 5; i++)
            {
                console.log("Name: " + memberList[i][0] + "\n" + "Membership Type: " + memberList[i][1] + "\n" + "Date Joined: " + memberList[i][2] + "\n" + "Date of Birth: " + memberList[i][3] + "\n" + "Points Earned: " + memberList[i][4] + "\n\n");
            }
            break;
        //Show only selected member's information
        case 2:
            console.log("Sorry, work in progress!");
            break;
        //Adding new user
        case 3:
            console.log("UwU");
            break;
        //Updating points earned:
        case 4:
            console.log("Sorry, work in progress!");
            break;
        //Statistics
        case 5:
            console.log("Sorry, work in progress!");
            break;
        //Break code
        case 6:
            console.log("Thank you & goodbye!");
            break;

        default:
            console.log("Please enter a valid input.");
            break;
    }
}