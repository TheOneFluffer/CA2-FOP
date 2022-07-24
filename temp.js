class Member {
    constructor(name, rank, Date_Joined, DOB, points) {
        this.name = name;
        this.rank = rank;
        this.Date_Joined = Date_Joined;
        this.DOB = DOB;
        this.points = points;
    }
}

class MemberGroup {
    
}

function createMembersArray()
    {
        var len;
        var sqArray = [];
        var Leonardo = { name: "Leonardo", rank: "Gold", Date_Joined: "1 Dec 2019", DOB: "1 Jan 1980", points: 1400};
        var Catherine = {name: "Catherine", rank: "Ruby", Date_Joined: "14 Jan 2020", DOB: "28 Oct 1985", points: 250};
        var Luther = {name: "Luther", rank: "Gold", Date_Joined: "29 Apr 2020", DOB: "16 Mar 1992", points: 3350};
        var Bruce = {name: "Bruce", rank: "Diamond", Date_Joined: "3 Jun 2020", DOB: "18 Mar 1994", points: 40200};
        var Amy = {name: "Amy", rank: "Ruby", Date_Joined: "5 Jun 2020", DOB: "31 May 2000", points: 500};
    
        for (var i = 0; i < 5; i++)
        {
            Name = [Leonardo.name, Catherine.name, Luther.name, Bruce.name, Amy.name];
            rank = [Leonardo.rank, Catherine.rank, Luther.rank, Bruce.rank, Amy.rank];
            Date_Joined = [Leonardo.Date_Joined, Catherine.Date_Joined, Luther.Date_Joined, Bruce.Date_Joined, Amy.Date_Joined];
            DOB = [Leonardo.DOB, Catherine.DOB, Luther.DOB, Bruce.DOB, Amy.DOB];
            points = [Leonardo.points, Catherine.points, Luther.points, Bruce.points, Amy.points];
            sqArray.push(new MemberGroup(len));
        }
        return sqArray;
    }
function printMembersArray()
{
    for (var i = 0; i < 5; i++)
    {
        console.log(myArray[i]);
    }
}

var myArray = createMembersArray();
printMembersArray(myArray);