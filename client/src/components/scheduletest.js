var hasBeenPromoted = [];
var datesBool = [];
//var maxPerGroup = 3; //this is number of people per group

//This can return a key based on the value that you want (keys are the dates, values are the preference number)
Object.prototype.getKey = function (value) {
    for (var key in this) {
        if (this[key] === value) {
            return key;
        }
    }
    return null;
};

/** unused, turned off
function swap(json) { //swap function, doesn't work properly
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}
*/

//empty arrays for testing purposes
var dates = []; //2D array, each row will represent a person
//var firstperson = [];
var keys = [];
//var personVals = [];
var vals = [];

function findDate(keys,sumArray,boolArray,dates,names)
{
    //might make it remove an arbitrary amount of dates
    var lowestSum;
    var lowestSumDate;
    var arrayPosition;
    var datePosition;
    // boolArray = [];
    lowestSum = sumArray[0];
    lowestSumDate = keys[2];
    for (var i = 0; i < keys.length; i++)
    {
        if (sumArray[i] < lowestSum && boolArray[i] !== true)
        {
            lowestSum = sumArray[i];
            lowestSumDate = keys[i + 2];
            datePosition = i + 2;
            arrayPosition = i;
        }
    }
    boolArray[arrayPosition] = true;
    //console.log("position is: " + datePosition);
    removeDate(keys, boolArray);
    promoteOption(keys,boolArray,dates,names)
    return datePosition;
}

function removeDate(array,boolArray)
{
    var dateToRemove;
    for (var i = 0; i < array.length; i++)
    {
        if (boolArray[i] === true)
        {
            dateToRemove = i + 2;
            //console.log("Date at: " + dateToRemove + " needs to be removed");
        }
    }
    return dateToRemove;
}
function promoteOption(keys,boolArray,dates,names)
{
   // var hasBeenPromoted = [];
    for (var i = 2; i < keys.length; i++)
    {
        if (boolArray[i-2] === true) //bool is offset from the keys array by 2
        {
            //console.log("BOOL IS TRUE");
            //console.log("Date at: " + dateToRemove + " needs to be removed");
            for (var j = 0; j < dates.length; j++)
            {
                if (dates[j][i] < 900 && hasBeenPromoted[i] !== true)
                {
                   // console.log("I is: "+i);
                    hasBeenPromoted[i] = true;
                    //console.log(keys[i]);
                    //console.log(names[j]);
                    //console.log(j + " " + i);
                  //  console.log("Person is row: " + j);
                    for (var k = 0; k < keys.length; k++)
                    {
                        if (dates[j][k] > 1 && dates[j][k] < 900)
                        {
                            //console.log(dates[j][k]);
                            dates[j][k] = dates[j][k] - 1;
                            console.log(dates[j][k]);
                           // hasBeenPromoted[i] = true;
                        }
                    }
                }
            }
        }
    }
}

function Test(props,size) {

    keys = Object.keys(props[1]);
    vals = [keys.length][keys.length];
    console.log(keys);
    for (var i = 0; i < props.length; i++) {

        dates[i] = []; //initialize the array
        for (var j = 0; j < 35; j++) //testing getting the first 9 options
        {
            //vals[i][j] = [];
            dates[i][j] = [];
            //var num = j.toString();
            //console.log(num);
            //var vals = props[i].getKey(num);
            vals = Object.values(props[i]);
            //console.log(vals);
            //console.log(key);
            //dates.push(key);
            dates[i][j] = vals[j]; //will put the persons first 9 preferrred dates as the next 9 elements of the array. If they don't have that many options, it will leave them empty
            //firstperson.push(key);
            //values[j] = j;
        }
        //dates[i] = key;
        //values[i] = "1";

    }


    var colSum = 0;
    var sumArr = [];

    for (var col = 2; col < keys.length; col++)
    {
        for (var ro = 0; ro < dates.length; ro++)
        {
            if (dates[ro][col] < 1000)
            {
               // console.log("Value is: " + dates[col][ro]);
                colSum++;
            }
        }
       // console.log("column sum is: " + colSum);
        sumArr[col - 2] = colSum;
        colSum = 0;
    }



    for (var one = 0; one < dates.length; one++) {
        //console.log("Person: "+one);
        for (var two = 0; two < dates.length; two++) {
            //console.log("Number: "+two)
            //console.log(dates[one][two]);
        }
    }
    var sum = 0;
    var pointer = 0;
    var numOfGroups = 0;
    var groups = [];
    var finalGroups = [];
    var hasGroup = []; //this is a bool array that indicates if each person is already in a group
    var counter = 0; //this will be used to count how many people are in each group
    var cursor = 0; //will be used to control placement into array
    //var numOfPeople = 0;
    var names = []; //array of everyones names for reference
    var preference = 1;
    var sumRange = 10;
    for (var h = 0; h < dates.length; h++)
    {
        names[h] = dates[h][0]+" "+dates[h][1];
        groups[h] = [];
        hasGroup[h] = false;
    }

    /*  findDate(keys, sumArr, datesBool, dates, names);
    console.log("1-----------------");
    findDate(keys, sumArr, datesBool, dates, names);
    console.log("2-----------------");
    findDate(keys, sumArr, datesBool, dates, names);
    console.log("3----------------");
    findDate(keys, sumArr, datesBool, dates, names);
    console.log("4----------------");
    findDate(keys, sumArr, datesBool, dates, names);
    console.log("5----------------");
    findDate(keys, sumArr, datesBool, dates, names);*/

    //seminarScheduler(keys, sumArr, datesBool, dates, names);

    //console.log(dates.length);

    findDate(keys, sumArr, datesBool, dates, names);

   // while (numOfGroups < 3) {
        console.log("NUM OF GROUPS IS: " + numOfGroups);
        for (var row = 0; row < names.length; row++) {
            //console.log(dates[row][0]);
            //console.log(names[row]);
            for (var column = 2; column < keys.length; column++) {
                pointer++;
                findDate(keys, sumArr, datesBool, dates, names);
                // groups[row] = [];
                //sum += dates[column][row];
                console.log("values is: " + dates[row][column]);
                console.log(preference);
                if (dates[row][column] <= preference  && hasGroup[row] === false) {
                     console.log("Lead of group is: " + names[row]);
                    // console.log("Date is: " + dates[0][column]);
                    // groups[1] = names[row];
                    // hasGroup[row] = true;
                    //console.log(dates[row][0] + " prefers " + keys[column]);
                    //var other = row + 1;
                    for (var other = 0; other < dates.length; other++) {
                        //  console.log(other);
                        if (dates[other][column] <= preference && other !== row && counter <= 4 && hasGroup[other] === false) //person has similar preference, group isn't too big, and they don't already have a group
                        {
                            //sets first name as first index of array, dates as second
                            groups[0] = keys[column];
                            groups[1] = names[row];
                             console.log("There is a match with: " + dates[other][0]);
                            //hasGroup[other] = true;
                            groups[counter + 2] = names[other];      //starts to set other name into array
                            console.log(groups);
                            sum = sum + dates[other][column];

                            if ((counter === size-3 && sum < sumRange && preference > names.length / 2) || (column === dates.length && other === dates.length)) //if group is full
                            {
                                for (var k = 0; k < dates.length; k++) {
                                    for (var l = 0; l < dates.length; l++) {
                                        if (groups[k] === names[l]) {
                                            //   console.log("Person is: " + names[l]); //checks if name is in group, makes true if so
                                            hasGroup[l] = true;
                                        }
                                    }
                                }
                                console.log("Pushing array");
                                finalGroups[cursor] = groups; //push it into final array
                                console.log(finalGroups[cursor]);
                                groups = [];
                                cursor++;
                                counter = 0;
                                // preference = 1;
                                sum = 0;
                                console.log("ADDING TO NUM OF GROOPS");
                                numOfGroups++;
                                console.log("NEW NUM OF GROOPS IS:" + numOfGroups);
                                break;
                            }

                            if ((counter === size-2 && sum < sumRange) || (column === dates.length && other === dates.length)) //if group is full
                            {
                                for (var kj = 0; kj < dates.length; kj++) {
                                    for (var lj = 0; lj < dates.length; lj++) {
                                        if (groups[kj] === names[lj]) {
                                            //   console.log("Person is: " + names[l]); //checks if name is in group, makes true if so
                                            hasGroup[lj] = true;
                                        }
                                    }
                                }
                                console.log("Pushing array");
                                finalGroups[cursor] = groups; //push it into final array
                                console.log(finalGroups[cursor]);
                                groups = [];
                                cursor++;
                                counter = 0;
                                // preference = 1;
                                sum = 0;
                                console.log("ADDING TO NUM OF GROOPS");
                                numOfGroups++;
                                console.log("NEW NUM OF GROOPS IS:" + numOfGroups);
                                break;
                            }
                            //  preference++;
                            counter++;
                        }
                    }
                    groups = []; //reset all the stuff
                    sum = 0;
                    counter = 0;
                    //preference = 1;
                    findDate(keys, sumArr, datesBool, dates, names);
                }
            }
            sum = 0;
            preference++;
            sumRange++;
            console.log("PREF IS: " + preference);
        }
    //}
    console.log(hasGroup);
    //var num;
    groups[0] = "No group"
    for (var kjj = 0; kjj < names.length; kjj++)
    {
        if (hasGroup[kjj] === false)
        {
           // console.log(names[k]);
            groups.push(names[kjj]);
        }
    }
    //console.log(groups);
    finalGroups[cursor+1] = groups;
    //yep
    return finalGroups;
};
export default Test;
