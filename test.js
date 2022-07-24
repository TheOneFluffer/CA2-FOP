emplyee = {

    name: ['Trump', 'Bernie'],

    age    : [74, 77],

    salary: [100000, 200000],

    sales: [40300, 60500],

}

 

salesCalc(emplyee);

 function salesCalc(ary) {

    for (var i=0; i< ary.name.length; i++) {

        if (ary.sales[i] > 50000) {

            ary.salary[i] *= 1.2

            console.log("Good job! " + ary.name[i] + ", your new salary is : $" + ary.salary[i]);

        }

            else

                console.log(ary.name[i] + ", sorry you miss the sales target");

        }

}