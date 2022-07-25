// Name: lau Hong Wei
// Class: DCITP/1A/05
// Adm: 2241319

var input = require('readline-sync');
var Selection = 0;

var Names = ["Leonardo", "Catherine", "Luther", "Bruce", "Amy"];
var Upper = [];
Names.forEach(Element =>
    {
        Upper.push(Element.toUpperCase());
    });

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
        this.Ranks = ["Ruby", "Gold", "Platinum", "Diamond"]
        this.MemberArray.push(new Member("Leonardo", "Gold", "1 Dec 2019", "1 Jan 1980", 1400));
        this.MemberArray.push(new Member("Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", 250));
        this.MemberArray.push(new Member("Luther", "Gold", "29 Apr 2020", "16 Mar 1992", 3350));
        this.MemberArray.push(new Member("Bruce", "Diamond", "3 Jun 2020", "18 Mar 1994", 40200));
        this.MemberArray.push(new Member("Amy", "Ruby", "5 Jun 2020", "31 May 2000", 500));
    }

    DisplayMembersArray()
    {
        for (var i = 0; i < this.MemberArray.length; i++)
        {
            var Display = console.log("\nName: " + this.MemberArray[i].name + "\nRank: " + this.MemberArray[i].rank + "\nDate Joined: " + this.MemberArray[i].Date_Joined + "\nDate of Birth: " + this.MemberArray[i].DOB + "\nPoints: " + this.MemberArray[i].points);
        }
        return Display;
    }
    
    SpecificMemberOnly()
    {
        var LookingForMe = input.question("Please enter member's name: ");
        for (var i = 0; i < this.MemberArray.length; i++)
        {
            if (this.MemberArray.name != LookingForMe.toLowerCase())
            {
                return "Member does not exist.";
            }
            else
            {
                for (var i = 0; i < this.MemberArray.length; i++)
                {
                    var Info = console.log("\nName: " + this.MemberArray[i].name + "\nRank: " + this.MemberArray[i].rank + "\nDate Joined: " + this.MemberArray[i].Date_Joined + "\nDate of Birth: " + this.MemberArray[i].DOB + "\nPoints: " + this.MemberArray[i].points);
                }
                return Info;
            }
        }
    }

    AddNewUser() //For option 3 
    {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = day + " " + month + " " + year;
        var newName = input.question("Please enter member's name: ");
        var newDOB = input.question("Please enter member's date of birth: ");
        
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
        this.MemberArray.push(new Member(newName, "Ruby", currentDate, newDOB, 0));
        Names.push(Names);
    }

    getNumberofMembers()
    {
        return this.MemberArray.length();
    }
}

//Main program
console.log("Welcome to XYZ Membership Loyalty Programme!");

var memberlist = new MemberGroup;

//Prompt user for name until they key in their name
do {
    var Name = input.question("Please enter your name: ");
    var regexstr = /^[a-zA-Z]+$/;
    var regex = new RegExp(regexstr);

    if (regex.test(Name) == false) {
        console.log("Sorry, Please enter a valid name!");
    }
} while (regex.test(Name) == false);

while (Selection != 6) {
    console.log("Hi " + Name + ", please select your choice:");
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
            memberlist.SpecificMemberOnly();
            break;

        case 3://Adding new user
            memberlist.AddNewUser();
            break;

        case 4://Updating points earned:
            memberlist.UpdatePoints();

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
                        function MembershipType()
                        {

                        }
                        break;

                    case 2: //Display the name of the youngest and oldest member in the system.
                        function NewToOld()
                        {

                        }
                        break;

                    case 3: //Display the name of members with the highest and lowest points earned.
                        function HighToLow()
                        {

                        }
                        break;

                    case 4: //Display total number of members in each membership type.
                        function NumberofMembers()
                        {

                        }
                        break;

                    case 5: //Display the total points in each membership type.
                        function TotalPoints()
                        {
                            console.log("Ruby: " + "\nGold: " + "\nPlatinum: " + "\nDiamond");
                        }
                        break;

                    case 6: //Display the total amount of users.
                        function TotalUsers()
                        {

                        }
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
