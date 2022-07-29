// Name: lau Hong Wei
// Class: DCITP/1A/05
// Adm: 2241319

var input = require('readline-sync');
var Selection = 0;

class Member {
    constructor(name, rank, Date_Joined, DOB, points) 
    {
        this.name = name;
        this.rank = rank;
        this.Date_Joined = Date_Joined;
        this.DOB = DOB;
        this.points = points;
    }
}

class MemberGroup {
    constructor() //Contains MemberArray
    {
        //First 5 Objects to store user's info
        this.MemberArray = [];  //class property
        this.MemberArray.push(new Member("Leonardo", "Gold", "1 Dec 2019", "1 Jan 1980", 1400));
        this.MemberArray.push(new Member("Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", 250));
        this.MemberArray.push(new Member("Luther", "Gold", "29 Apr 2020", "16 Mar 1992", 3350));
        this.MemberArray.push(new Member("Bruce", "Diamond", "3 Jun 2020", "18 Mar 1994", 40200));
        this.MemberArray.push(new Member("Amy", "Ruby", "5 Jun 2020", "31 May 2000", 500));
    }

    DisplayMembersArray() //For option 1 (Works)
    {
        for (var i = 0; i < this.MemberArray.length; i++)
        {
            var Display = console.log("Name: " + this.MemberArray[i].name + "\nRank: " + this.MemberArray[i].rank + "\nDate Joined: " + this.MemberArray[i].Date_Joined + "\nDate of Birth: " + this.MemberArray[i].DOB + "\nPoints: " + this.MemberArray[i].points + "\n");
        }
        return Display;
    }
    
    SpecificMemberOnly() //For option 2 (Works)
    {
        var membernameint = -1;
        var memberFound = false;
        
        var memberName = input.question("Please enter member's name: ");

        for (var i = 0; i < this.MemberArray.length; i++)
        {
            if (memberName.toUpperCase() == this.MemberArray[i].name.toUpperCase())
            {
                memberFound = true;
                membernameint = i;
            }
        }

        if(memberFound == true)
        {
            console.log("\nName: " + this.MemberArray[membernameint].name + "\nRank: " + this.MemberArray[membernameint].rank + "\nDate Joined: " + this.MemberArray[membernameint].Date_Joined + "\nDate of Birth: " + this.MemberArray[membernameint].DOB + "\nPoints: " + this.MemberArray[membernameint].points + "\n");
        }
        else
        {
            console.log("Member does not exist.\n");
        }
    }

    AddNewUser() //For option 3 (Works)
    {
        var memberFound = false;
        
        var addMember = input.question("Please enter member's name: ");

        for (var i = 0; i < this.MemberArray.length; i++)
        {
            if (addMember.toUpperCase() == this.MemberArray[i].name.toUpperCase())
            {
                memberFound = true;
            }
        }

        while (memberFound == true)
            {
                var addMember = input.question("Member's name exists in database. Please enter a new name.\nPlease enter member's name: ");
                memberFound = false;
            }

            if (memberFound == false)
            {
                const date = new Date();
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                        
                switch(month)
                {
                    case 0:
                        month = "Jan";
                        break;
                    case 1:
                        month = "Feb";
                        break;
                    case 2:
                        month = "Mar";
                        break;
                    case 3:
                        month = "Apr";
                        break;
                    case 4:
                        month = "May";
                        break;
                    case 5:
                        month = "Jun";
                        break;
                    case 6:
                        month = "Jul";
                        break;
                    case 7:
                        month = "Aug";
                        break;
                    case 8:
                        month = "Sep";
                        break;
                    case 9:
                        month = "Oct";
                        break;
                    case 10:
                        month = "Nov";
                        break;
                    case 11:
                        month = "Dec";
                        break;
                }

                var combinedDate = day + " " + month + " " + year;
                var newDOB = input.question("Please enter member's date of birth: ");
                return this.MemberArray.push(new Member(addMember, "Ruby", combinedDate, newDOB, 0));
            }
    }

    UpdatePoints() //For option 4 (Works)
    {
        var membernameint = -1;
        var memberFound = false;
        var addMember = input.question("Please enter member's name: ");

        for (var i = 0; i < this.MemberArray.length; i++)
        {
            if (addMember.toUpperCase() == this.MemberArray[i].name.toUpperCase())
            {
                memberFound = true;
                membernameint = i;
            }
        }
        
        if (memberFound != true)
        {
            return console.log("Member does not exist.\n");
        }
        
        else
        {
            var totalPoints = 0;
            var amountSpent = input.questionFloat("Please enter the amount spent: $");
            if (amountSpent <= 50)
            {
                this.MemberArray[membernameint].points += 10;
            }
            else if (50.01 < amountSpent && amountSpent < 100)
            {
                this.MemberArray[membernameint].points += 50;
            }
            else if (100.01 < amountSpent && amountSpent < 200)
            {
                this.MemberArray[membernameint].points += 100;
            }
            else if (200.01 < amountSpent && amountSpent < 500)
            {
                this.MemberArray[membernameint].points += 200;
            }
            else if (500.01 < amountSpent && amountSpent < 1000)
            {
                this.MemberArray[membernameint].points += 500;
            }
            else if (1000.01 < amountSpent && amountSpent < 2500)
            {
                this.MemberArray[membernameint].points += 1000;
            }
            else if (2500.01 < amountSpent)
            {
                this.MemberArray[membernameint].points += 2000;
            }


        }

        this.UpdateRank(membernameint);
    }

    UpdateRank(index) // Continue from option 4 (Works)
    {
        var points2rank = this.MemberArray[index].points;
        if (points2rank > 20000)
        {
            this.MemberArray[index].rank = "Diamond";
        }
        else if (points2rank > 5000)
        {
            this.MemberArray[index].rank = "Platinum";
        }
        else if (points2rank > 500)
        {
            this.MemberArray[index].rank = "Gold";
        }
        else
        {
            this.MemberArray[index].rank = "Ruby";
        }
    }

    MembershipType() // For sub menu 1 (Works)
    {
        var rankFound = false;
        var checkRank = input.question("Enter Membership Type: ");
        var String ="Member(s) of membership type " + checkRank.toLowerCase() + ": "

        for (var i = 0; i < this.MemberArray.length; i++)
        {
            if (checkRank.toUpperCase() == this.MemberArray[i].rank.toUpperCase())
            {
                String += this.MemberArray[i].name + " ";
                rankFound = true;
            }
            
            else
            {
                rankFound = false;
            }
        }

        if (rankFound == true)
        {
            console.log(String);
        }

        while (rankFound == false)
        {
            console.log("Please enter a valid membership type.");
        }
    }

    NewToOld() // For sub menu 2 (Works)
    {
        var Youngest = new Date(this.MemberArray[0].DOB);
        var Oldest = new Date(this.MemberArray[0].DOB);
        var YoungestMember = this.MemberArray[0].name;
        var OldestMember = this.MemberArray[0].name;

        for (var i = 0; i < this.MemberArray.length; i++)
        {
            var x = new Date(this.MemberArray[i].DOB);
            if (x > Youngest)
            {
                Youngest = new Date(this.MemberArray[i].DOB);
                YoungestMember = this.MemberArray[i].name;
            }
        }
        console.log("Youngest Member: " + YoungestMember);

        for (var o = 0; o < this.MemberArray.length; o++)
        {
            var x = new Date(this.MemberArray[o].DOB);
            if (x < Oldest)
            {
                Oldest = new Date(this.MemberArray[o].DOB);
                OldestMember = this.MemberArray[o].name;
            }
        }
        console.log("Oldest Member: " + OldestMember);
    }
    
    HighToLow() // For sub menu 3 (Works)
    {
        var Highest = this.MemberArray[0].points;
        var Lowest = this.MemberArray[0].points;
        var HighestMember = this.MemberArray[0].name;
        var LowestMember = this.MemberArray[0].name;

        for (var i = 0; i < this.MemberArray.length; i++)
        {
            var x = this.MemberArray[i].points;
            if (x > Highest)
            {
                Highest = this.MemberArray[i].points;
                HighestMember = this.MemberArray[i].name;
            }
        }
        console.log("Highest Member: " + HighestMember);

        for (var o = 0; o < this.MemberArray.length; o++)
        {
            var x = this.MemberArray[o].points;
            if (x < Lowest)
            {
                Lowest = this.MemberArray[o].points;
                LowestMember = this.MemberArray[o].name;
            }
        }
        console.log("Lowest Member: " + LowestMember);
    }

    SpecificNumberofMembers() // For sub menu 4 (Works)
    {
        var RubyCount = 0;
        var GoldCount = 0;
        var PlatinumCount = 0;
        var DiamondCount = 0;
        for (var Ruby = 0; Ruby < this.MemberArray.length; Ruby++)
        {
            if ("RUBY" == this.MemberArray[Ruby].rank.toUpperCase())
            {
                RubyCount++;
            }
        }
        console.log("ruby: " + RubyCount);

        for (var Gold = 0; Gold < this.MemberArray.length; Gold++)
        {
            if ("GOLD" == this.MemberArray[Gold].rank.toUpperCase())
            {
                GoldCount++;
            }
        }
        console.log("gold: " + GoldCount);

        for (var Platinum = 0; Platinum < this.MemberArray.length; Platinum++)
        {
            if ("PLATINUM" == this.MemberArray[Platinum].rank.toUpperCase())
            {
                PlatinumCount++;
            }
        }
        console.log("platinum: " + PlatinumCount);

        for (var Diamond = 0; Diamond < this.MemberArray.length; Diamond++)
        {
            if ("DIAMOND" == this.MemberArray[Diamond].rank.toUpperCase())
            {
                DiamondCount++;
            }
        }
        console.log("diamond: " + DiamondCount);
    }
    TotalPoints() // For sub menu 5 (Works)
    {
        var RubyCount = 0; //Take all of ruby user's points and add them up together
        var GoldCount = 0; //Take all of gold user's points and add them up together
        var PlatinumCount = 0; //Take all of platinum user's points and add them up together
        var DiamondCount = 0; //Take all of diamond user's points and add them up together
        for (var Ruby = 0; Ruby < this.MemberArray.length; Ruby++)
        {
            if ("RUBY" == this.MemberArray[Ruby].rank.toUpperCase())
            {
                RubyCount+= this.MemberArray[Ruby].points;
            }
        }
        console.log("ruby: " + RubyCount);

        for (var Gold = 0; Gold < this.MemberArray.length; Gold++)
        {
            if ("GOLD" == this.MemberArray[Gold].rank.toUpperCase())
            {
                GoldCount+= this.MemberArray[Gold].points;;
            }
        }
        console.log("gold: " + GoldCount);

        for (var Platinum = 0; Platinum < this.MemberArray.length; Platinum++)
        {
            if ("PLATINUM" == this.MemberArray[Platinum].rank.toUpperCase())
            {
                PlatinumCount+= this.MemberArray[Platinum].points;;
            }
        }
        console.log("platinum: " + PlatinumCount);

        for (var Diamond = 0; Diamond < this.MemberArray.length; Diamond++)
        {
            if ("DIAMOND" == this.MemberArray[Diamond].rank.toUpperCase())
            {
                DiamondCount+= this.MemberArray[Diamond].points;;
            }
        }
        console.log("diamond: " + DiamondCount);
    }

    getNumberofMembers() // For sub menu 6
    {
        console.log(this.MemberArray.length);
    }

    RemoveUsers()// Extra feature to remove user.
    {
        var membernameint = -1;
        var memberFound = false;
        
        var removeMember = input.question("Please enter member's name you wish to remove: ");

        for (var i = 0; i < this.MemberArray.length; i++)
        {
            if (removeMember.toUpperCase() == this.MemberArray[i].name.toUpperCase())
            {
                memberFound = true;
                membernameint = i;
            }
        }

        if(memberFound == true)
        {
            this.MemberArray.splice(membernameint, 1);
            console.log("Removing User...");
        }
        else
        {
            console.log("Member does not exist.\n");
        }
    } 
}

//Main program
console.log("Welcome to XYZ Membership Loyalty Programme!");

var memberlist = new MemberGroup;
//var memberFound = false;
//var membernameint = -1;

//Prompt user for name until they key in their name
do {
    var NamePrompt = input.question("Please enter your name: ");
    var regexstr = /^[a-zA-Z]+$/;
    var regex = new RegExp(regexstr);

    if (regex.test(NamePrompt) == false) {
        console.log("Sorry, Please enter a valid name!");
    }
} while (regex.test(NamePrompt) == false);

while (Selection != 7) 
{
    console.log("Hi " + NamePrompt + ", please select your choice:");
    console.log("\t 1. Display all member's information");
    console.log("\t 2. Display member information");
    console.log("\t 3. Add new user");
    console.log("\t 4. Update points earned");
    console.log("\t 5. Statistics");
    console.log("\t 6. Remove existing user")
    console.log("\t 7. Exit");
    Selection = parseInt(input.question("\t >> "));

    switch (Selection) {
        case 1://Show all member's information
            memberlist.DisplayMembersArray();
            break;

        case 2://Show only selected member's information
            memberlist.SpecificMemberOnly(); //search for member if member exist, print
            break;

        case 3://Adding new user
            memberlist.AddNewUser();
            break;

        case 4://Updating points earned:
            memberlist.UpdatePoints();
            break;

        case 5://Statistics
            while (Selection != 7) {
                console.log("\t Please select an option from the sub-menu:");
                console.log("\t 1. Display names of (all) a certain type of members only.");
                console.log("\t 2. Display the name of the youngest and oldest member in the system.");
                console.log("\t 3. Display the name of members with the highest and lowest points earned.");
                console.log("\t 4. Display total number of members in each membership type.");
                console.log("\t 5. Display the total points in each membership type.");
                console.log("\t 6. Display the total amount of users.");
                console.log("\t 7. Return to main-menu");
                Selection = parseInt(input.question("\t >> "));
                switch (Selection) {
                    case 0:
                        while (Selection != 2) {
                            console.log("\t Welcome to the secret menu!!");
                            console.log("\t Please select an option from the secret-menu:");
                            console.log("\t ♥1. Credits.♥");
                            console.log("\t ♥2. Return to sub-menu.♥");
                            Selection = parseInt(input.question("\t >> "));
                            switch (Selection) {
                                case 1:
                                    console.log(".-=~=-.                                                                 .-=~=-.");
                                    console.log("(__  _)-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-(__  _)");
                                    console.log("( _ __) Property of FlufCorp  Property of FlufCorp  Property of FlufCorp( _ __)");
                                    console.log("(__  _)                                                                 (__  _)");
                                    console.log("(_ ___)                   ♥Welcome to the credits page♥                 (_ ___)");
                                    console.log("(__  _)                    This segment is made by                      (__  _)");
                                    console.log("( _ __)                    Hong Wei from DCITP/1A/05                    ( _ __)");
                                    console.log("(__  _)                   CEO of FlufCorp Pte Ltd 2022                  (__  _)");
                                    console.log("(_ ___)   I will like to take my time to thank the reader for finding   (_ ___)");
                                    console.log("(__  _)   this hidden menu and a big shoutout to Mr Daryl for all the   (__  _)");
                                    console.log("( _ __)    help that I received during these lessons during the past    ( _ __)");
                                    console.log("(__  _)                    few lessons. Therefore...                    (__  _)");
                                    console.log("(_ ___)                                                                 (_ ___)");
                                    console.log("(__  _)                                                                 (__  _)");
                                    console.log("( _ __)                                                                 ( _ __)");
                                    console.log("(__  _)                                                                 (__  _)");
                                    console.log("(_ ___)                     Thank you for reading!!                     (_ ___)");
                                    console.log("(__  _)         From the up and coming ethical hacker/programmer        (__  _)");
                                    console.log("( _ __)                                                                 ( _ __)");
                                    console.log("(__  _)                                                                 (__  _)");
                                    console.log("( _ __)                                                                 ( _ __)");
                                    console.log("(__  _) Property of FlufCorp  Property of FlufCorp  Property of FlufCorp(__  _)");
                                    console.log("(_ ___)-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-(_ ___)");
                                    console.log("`-._.-'                                                                 `-._.-'");
                                    break;

                                case 2:
                                    console.log("Returning back to sub-menu....");
                                    break;

                                default:
                                    console.log("Please enter a valid input.");
                                    break;
                            }
                        }
                        break;

                    case 1: //Display names of a certain type of members only.
                        memberlist.MembershipType();
                        break;

                    case 2: //Display the name of the youngest and oldest member in the system.
                        memberlist.NewToOld();
                        break;

                    case 3: //Display the name of members with the highest and lowest points earned.
                        memberlist.HighToLow();
                        break;

                    case 4: //Display total number of members in each membership type.
                        memberlist.SpecificNumberofMembers();
                        break;

                    case 5: //Display the total points in each membership type.
                        memberlist.TotalPoints();
                        break;

                    case 6: //Display the total amount of users.
                        memberlist.getNumberofMembers();
                        break;

                    case 7:
                        console.log("Returning back to menu....");
                        break;

                    default:
                        console.log("Please enter a valid input.");
                        break;
                }
            }
            break;

        case 6:
            memberlist.RemoveUsers();
            break;

        case 7://Break code
            console.log("Thank you & goodbye!");
            break;

        default:
            console.log("Please enter a valid input.");
            break;
    }
}
