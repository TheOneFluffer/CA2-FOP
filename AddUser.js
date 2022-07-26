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

    DisplayMembersArray() //For option 1
    {
        for (var i = 0; i < this.MemberArray.length; i++)
        {
            var Display = console.log("Name: " + this.MemberArray[i].name + "\nRank: " + this.MemberArray[i].rank + "\nDate Joined: " + this.MemberArray[i].Date_Joined + "\nDate of Birth: " + this.MemberArray[i].DOB + "\nPoints: " + this.MemberArray[i].points + "\n");
        }
        return Display;
    }

    AddNewUser() //For option 3 
    {
        const date = new Date();
        var YesNo = false;
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var combinedDate = day + " " + month + " " + year;
        var newName = input.question("Please enter member's name: ");
        
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

        for (var i = 0; i < this.MemberArray.length; i++)
        {
            if (newName.toUpperCase() == this.MemberArray[i].name.toUpperCase())
            {
                YesNo = true;
            }
        }

        if (YesNo == true)
        {
            console.log("Member's name exists in database. Please enter a new name. \n");
        }
        while(YesNo == false)
        {
            var newDOB = input.question("Please enter member's date of birth: ");
            return this.MemberArray.push(new Member(newName, "Ruby", combinedDate, newDOB, 0));
        }
        return this.MemberArray.push(new Member(newName, "Ruby", day + " " + month + " " + year, newDOB, 0));
    }
}

var memberlist = new MemberGroup;

memberlist.AddNewUser();
memberlist.DisplayMembersArray();