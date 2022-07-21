var input = require("readline-sync");
var Leonardo = 
{
    name: "Leonardo",
    rank: "Gold",
    Date_Joined: "1 Dec 2019",
    DOB: "1 Jan 1980",
    points: 1400,
}

function updatePoints()
{
    var newpoints = input.questionFloat("Add new points: ");
    return Leonardo.points + newpoints;
}

console.log("Congrats, your updated points are: " + updatePoints());