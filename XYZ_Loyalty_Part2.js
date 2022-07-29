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
        var membernameint = -1;
        var memberFound = false;
        
        var addMember = input.question("Please enter member's name: ");

        for (var i = 0; i < this.MemberArray.length; i++)
        {
            if (addMember.toUpperCase() == this.MemberArray[i].name.toUpperCase())
            {
                memberFound = true;
                //membernameint = i;
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

    UpdatePoints(amountSpent) //For option 4 (Need fixing)
    {
        let YesNo = false;
        let membernameint = -1;
       

        for (var i = 0; i < this.MemberArray.length; i++)
        {
            if (memberName.toUpperCase() == this.MemberArray[i].name.toUpperCase())
            {
                YesNo = true;
                membernameint = i;
            }
        }

        if(YesNo == true)
        {
            var accumulatedpoints = 0;
            //var amountSpent = input.questionFloat("Please enter the amount spent: $");
            if (newPoints <= 50)
            {
                totalPoints = this.MemberArray.points + 10;
                return RankUp(totalPoints);
            }
            else if (50.01 < newPoints < 100)
            {
                totalPoints = this.MemberArray.points + 50;
                return RankUp(totalPoints);
            }
            else if (100.01 < newPoints < 200)
            {
                totalPoints = this.MemberArray.points + 100;
                return RankUp(totalPoints);
            }
            else if (200.01 < newPoints < 500)
            {
                totalPoints = this.MemberArray.points + 200;
                return RankUp(totalPoints);
            }
            else if (500.01 < newPoints < 1000)
            {
                totalPoints = this.MemberArray.points + 500;
                return RankUp(totalPoints);
            }
            else if (1000.01 < newPoints < 2500)
            {
                totalPoints = this.MemberArray.points + 1000;
                return RankUp(totalPoints);
            }
            else if (2500.01 < newPoints)
            {
                totalPoints = this.MemberArray.points + 2000;
                return RankUp(totalPoints);
            }
        }
        else
        {
            return console.log("Member does not exist.\n");
        }
    }

    MembershipType() // For sub menu 1
    {
        do 
        {
            let YesNo = false;
            let membernameint = -1;
            var memberType = input.question("Enter membership Type: ");
            for (var i = 0; i < this.MemberArray.length; i++)
            {
                if (Areyouthere.toUpperCase() == this.MemberArray[i].name.toUpperCase())
                {
                    YesNo = true;
                    membernameint = i;
                }
            }
        }
        
        while (memberType.toUpperCase() != this.rank.toUpperCase());
    }

    NewToOld() // For sub menu 2
    {

    }
    
    HighToLow() // For sub menu 3
    {
        
    }

    NumberofMembers() // For sub menu 4
    {
        
    }
    TotalPoints() // For sub menu 5
    {
        var ruby = 0; //Take all of ruby user's points and add them up together
        var gold = 0; //Take all of gold user's points and add them up together
        var platinum = 0; //Take all of platinum user's points and add them up together
        var diamond = 0; //Take all of diamond user's points and add them up together
        
    }

    getNumberofMembers() // For sub menu 6
    {
        return this.MemberArray.length();
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

while (Selection != 6) 
{
    console.log("Hi " + NamePrompt + ", please select your choice:");
    console.log("\t 1. Display all member's information");
    console.log("\t 2. Display member information");
    console.log("\t 3. Add new user");
    console.log("\t 4. Update points earned");
    console.log("\t 5. Statistics");
    console.log("\t 6. Exit");
    Selection = parseInt(input.question("\t >> "));

    switch (Selection) {
        case 1://Show all member's information
            memberlist.DisplayMembersArray();
            break;

        case 2://Show only selected member's information
            memberlist.SpecificMemberOnly();                            //search for member if member exist, print
            break;

        case 3://Adding new user
            memberlist.AddNewUser();
            break;

        case 4://Updating points earned:
            var memberName = input.question("Please enter member's name: ");
            //var amountSpent = input.questionFloat("Please enter the amount spent: $");
            memberlist.UpdatePoints(memberName);
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
                        memberlist.NumberofMembers();
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

        case 6://Break code
            console.log("Thank you & goodbye!");
            break;

        default:
            console.log("Please enter a valid input.");
            break;
    }
}
