var input = require('readline-sync');

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

class MemberGroup 
{
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

    SpecificMemberOnly()
    {
        try
        {
            let exists = false;
            let membernameint = -1;
            var Areyouthere = input.question("Please enter member's name: ");

            for (var i = 0; i < this.MemberArray.length; i++)
            {
                if (Areyouthere.toUpperCase() == this.MemberArray[i].name.toUpperCase())
                {
                    exists = true;
                    membernameint = i;
                }
            }

            if(exists == true)
            {
                console.log("\nName: " + this.MemberArray[membernameint].name + "\nRank: " + this.MemberArray[membernameint].rank + "\nDate Joined: " + this.MemberArray[membernameint].Date_Joined + "\nDate of Birth: " + this.MemberArray[membernameint].DOB + "\nPoints: " + this.MemberArray[membernameint].points);
            }
            else
            {
                console.log(MemberArray[membernameint].name + " does not exist.");
            }
        }
        catch (err)
        {
            console.error("Invalid input");
        }
    }
    
}

var memberlist = new MemberGroup;
memberlist.SpecificMemberOnly();