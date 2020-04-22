var hasBeenPromoted = [];
var datesBool = [];
var carry = false;
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
                            //console.log(dates[j][k]);
                           // hasBeenPromoted[i] = true;
                        }
                    }
                }
            }
        }
    }
}
var emptyRowCounter = 0;

function findError(dates, keys, names)
{ carry = 0;
    console.log("FINDING ROW WITH NO PREFERENCES");
    var value = false;
    for (var row = 1; row < dates.length; row++)
    {
        for (var column = 2; column < keys.length; column++)
        {
            console.log(dates[row][column]);
            if (dates[row][column] < 500)
            {
                value = true; //this means it has at least one entry
                break;
            }
        }
        if (value != true) {
            console.log("AFDAGFAFDAFADFA");
            console.log("PERSON IS:  " + names[row]);
            carry = 1;
            emptyRowCounter++;
        }
        value = false;
    }
    return carry;
}

function findRepeat(dates, keys, names)
{  console.log("FINDING REPEATS");
    carry = 0;
    var value = false;
    for (var row = 0; row < dates.length; row++) {
        for (var column = 2; column < keys.length; column++)
        {
            for (var other = column + 1; other < dates.length; other++)
            {
                if (dates[row][column] == dates[row][other] && dates[row][other] != 999999 && dates[row][column] != 999999) {
                    console.log("THERE ARE REPEATS with: " + names[row]);
                    console.log("1st value is: " + dates[row][column]);
                    console.log("2nd vale is: " + dates[row][other]);
                    carry = 2;
                    console.log("What is carry in repeat" + carry);
                }
            }
        }
    }
    return carry;
}


function Test(props,size,carry1) {

    keys = Object.keys(props[1]);
    vals = [keys.length][keys.length];
    console.log(keys);
    for (var i = 0; i < props.length; i++) {

        dates[i] = []; //initialize the array
        for (var j = 0; j < 35; j++) //testing getting the first 9 options
        {
            dates[i][j] = [];
            vals = Object.values(props[i]);

            dates[i][j] = vals[j]; //will put the persons first 9 preferrred dates as the next 9 elements of the array. If they don't have that many options, it will leave them empty

        }
    }


    var colSum = 0;
    var sumArr = [];

    for (var col = 2; col < keys.length; col++)
    {
        for (var ro = 0; ro < dates.length; ro++)
        {
            if (dates[ro][col] < 1000)
            {
                colSum++;
            }
        }
        sumArr[col - 2] = colSum;
        colSum = 0;
    }



    for (var one = 0; one < dates.length; one++) {
        for (var two = 0; two < dates.length; two++) {
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
    var names = []; //array of everyones names for reference
    var preference = 10;
    var sumRange = 10;
    for (var h = 0; h < dates.length; h++)
    {
        names[h] = dates[h][0]+" "+dates[h][1];
        groups[h] = [];
        hasGroup[h] = false;
    }

   


    let a = findError(dates, keys, names);
    if (carry1 == 1 ){
        return a;
    }
    
    let b = findRepeat(dates, keys, names);
    if (carry1 == 2){
        return b;
    }

    var groupNum = (names.length - emptyRowCounter) % size;
    groupNum = size - groupNum;
    console.log("NEEDS " + groupNum + " SMALL GROUPS");

    var numOfLargeGroups = (names.length - emptyRowCounter) - ((size-1) * (groupNum));
    numOfLargeGroups = (numOfLargeGroups) / (size);
    console.log("LARGE GROUPS: " + numOfLargeGroups);

    findDate(keys, sumArr, datesBool, dates, names);

        console.log("NUM OF GROUPS IS: " + numOfGroups); //switch from row-by-row to column-by-column
        for (var column = 2; column < keys.length; column++) {

            for (var row = 0; row < names.length; row++) {
                pointer++;
                findDate(keys, sumArr, datesBool, dates, names);

               // console.log("values is: " + dates[row][column]);
              //  console.log(preference);
                if (dates[row][column] <= preference  && hasGroup[row] === false) {
                    // console.log("Lead of group is: " + names[row]);

                    for (var other = 0; other < names.length; other++) {
                        //  console.log(other);
                        if (dates[other][column] <= preference && other !== row && counter <= 4 && hasGroup[other] === false) //person has similar preference, group isn't too big, and they don't already have a group
                        {
                            //sets first name as first index of array, dates as second
                            groups[0] = keys[column];
                            groups[1] = names[row];
                             console.log("There is a match with: " + dates[other][0]);
                            //hasGroup[other] = true;
                            groups[counter + 2] = names[other];      //starts to set other name into array
                            //console.log(groups);
                            sum = sum + dates[other][column];

                            if ((counter == size-3 &&  numOfGroups >= numOfLargeGroups) || (column === dates.length && other === dates.length)) //if group is full
                            {
                                for (var k = 0; k < dates.length; k++) {
                                    for (var l = 0; l < dates.length; l++) {
                                        if (groups[k] === names[l]) {
                                            //   console.log("Person is: " + names[l]); //checks if name is in group, makes true if so
                                            hasGroup[l] = true;
                                        }
                                    }
                                }
                              //  console.log("Pushing array");
                                finalGroups[cursor] = groups; //push it into final array
                               // console.log(finalGroups[cursor]);
                                groups = [];
                                cursor++;
                                counter = 0;
                                // preference = 1;
                                sum = 0;
                               // console.log("ADDING TO NUM OF GROOPS");
                                numOfGroups++;
                                //console.log("NEW NUM OF GROOPS IS:" + numOfGroups);
                                break;
                            }

                            if ((counter == size-2) || (column === dates.length && other === dates.length)) //if group is full
                            {
                                for (var kj = 0; kj < dates.length; kj++) {
                                    for (var lj = 0; lj < dates.length; lj++) {
                                        if (groups[kj] === names[lj]) {
                                            //   console.log("Person is: " + names[l]); //checks if name is in group, makes true if so
                                            hasGroup[lj] = true;
                                        }
                                    }
                                }
                                //console.log("Pushing array");
                                finalGroups[cursor] = groups; //push it into final array
                              //  console.log(finalGroups[cursor]);
                                groups = [];
                                cursor++;
                                counter = 0;
                                // preference = 1;
                                sum = 0;
                               // console.log("ADDING TO NUM OF GROOPS");
                                numOfGroups++;
                                //console.log("NEW NUM OF GROOPS IS:" + numOfGroups);
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
           // console.log("PREF IS: " + preference);
        }
    //}
    console.log(hasGroup);
    //var num;
    groups[0] = "No group"
    //cursor = 2;
    var newcount = 2;
    var groupsize = 1;
    console.log(size - 3);
   /* for (var kjj = 0; kjj < names.length; kjj++) //find people who do not have a group, and brute force them into a smaller group that works
    {
        if (hasGroup[kjj] === false)
        {
            console.log(names[kjj]);
            for (var newcol = 2; newcol < keys.length; newcol++)
            {
                if (dates[kjj][newcol] < 15) {
                    console.log(keys[newcol]);
                    console.log(dates[kjj][newcol]);
                    groups[0] = keys[kjj];
                    groups[1] = names[kjj];
                    for (var newrow = 0; newrow < names.length; newrow++)
                    {
                        if (dates[newrow][newcol] <= 15 && newrow !== kjj && hasGroup[newrow] === false && groupsize < (size-2))
                        {
                            groupsize++;
                            newcount++;
                            groups[0] = keys[newcol];
                            groups[1] = names[kjj];
                            console.log("There is a match with: " + dates[newrow][0]);
                            //hasGroup[other] = true;
                            console.log("PUSHING" + names[newrow]);
                            groups[newcount] = names[newrow];      //starts to set other name into array
                            console.log(groups);
                            console.log(size-2);
                            console.log(groupsize);
                            if (groupsize >= (size-2))
                            {
                                console.log("ADFADFAFDADFAFAF");
                                finalGroups[cursor] = groups;
                                console.log("FINAL GROUPS ARE" + finalGroups);

                                for (var k = 0; k < dates.length; k++) {
                                    for (var l = 0; l < dates.length; l++) {
                                        if (groups[k] === names[l]) {
                                            //   console.log("Person is: " + names[l]); //checks if name is in group, makes true if so
                                            hasGroup[l] = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                groupsize = 1;
                groups = [];
            }
            //groups.push(names[kjj]);
        }
    } */
    console.log(groups);
    finalGroups[cursor + 1] = groups;

    groups[0] = "No group";
    for (var o = 0; o < names.length; o++) {
        if (hasGroup[o] === false) {
            // console.log(names[k]);
            groups.push(names[o]);
        }
    }
    return finalGroups;
};
export default Test;
