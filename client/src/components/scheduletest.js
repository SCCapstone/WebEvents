import React from "react";
import XLSX from "xlsx";
import _ from 'lodash';


//This can return a key based on the value that you want (keys are the dates, values are the preference number)
Object.prototype.getKey = function (value) {
    for (var key in this) {
        if (this[key] == value) {
            return key;
        }
    }
    return null;
};

function swap(json) { //swap function, doesn't work properly 
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}

//empty arrays for testing purposes
var dates = []; //2D array, each row will represent a person
var firstperson = [];
var keys = [];
var personVals = [];
var vals = [];



function Test(props) {

    keys = Object.keys(props[1]);
    vals = [keys.length][keys.length];
    console.log(keys);
    for (var i = 0; i < props.length; i++)
    {
 
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
    var numOfPeople = 0;
    var names = []; //array of everyones names for reference
    var preference = 1;
    for (var h = 0; h < dates.length; h++)
    {
        names[h] = dates[h][0];
        groups[h] = [];
        hasGroup[h] = false;
    }
    console.log(dates.length);
    for (var row = 0; row < dates.length; row++)
    {
        //console.log(dates[row][0]);
        //console.log(names[row]);
        for (var column = 2; column < dates.length; column++)
        {
            pointer++;
            groups[row] = [];
            //sum += dates[column][row];
            if (dates[row][column] <= 5 && hasGroup[row] == false)
            {
                console.log("Lead of group is: " + names[row]);
                console.log("Date is: " + dates[0][column]);
               // groups[1] = names[row];
               // hasGroup[row] = true;
                //console.log(dates[row][0] + " prefers " + keys[column]);
                //var other = row + 1;
                for (var other=0; other < dates.length; other++)
                {
                    
                    console.log(other);
                    if (dates[other][column] <= 8 && other !== row && counter <= 4 && hasGroup[other] == false) //person has similar preference, group isn't too big, and they don't already have a group
                    {      
                         //sets first name as first index of array, dates as second
                        groups[0] = keys[column];
                        groups[1] = names[row];
                       // console.log("There is a match with: " + dates[other][0]);
                        //hasGroup[other] = true;
                        groups[counter + 2] = names[other];      //starts to set other name into array
                        console.log(groups);
                        sum = sum + dates[other][column];
                        if (counter == 3 && sum < 20 || (column == dates.length && other == dates.length)) //if group is full
                        {
                            for (var k = 0; k < dates.length; k++)
                            {
                                for (var l = 0; l < dates.length; l++)
                                {
                                    if (groups[k] == names[l])
                                    {
                                        console.log("Person is: " + names[l]); //checks if name is in group, makes true if so
                                        hasGroup[l] = true;
                                    }
                                }
                            }
                            console.log("Pushing array");
                            finalGroups[cursor] = groups; //push it into final array
                           // console.log(finalGroups[cursor]);
                            groups = []; 
                            cursor++;
                            counter = 0;
                            preference = 1;
                            sum = 0;
                            numOfGroups++;
                            break;
                        }
                        else if(pointer == dates.length-1 && counter < 3) //reaches end, but group isn't maxed (need to fix this, as it never reaches this statement)
                        {
                            console.log("AFADFAFDDSFA");
                            for (var o = 0; o < dates.length; o++) {
                                for (var p = 0; p < dates.length; p++) {
                                    if (groups[o] == names[p]) {
                                        console.log("Person is: " + names[p]);
                                        hasGroup[p] = true;
                                    }
                                }
                            }

                            finalGroups[cursor] = groups;
                            //other++;
                            groups = [];
                            cursor++;
                            counter = 0;
                            //other++;
                            break;
                        }
                        counter++;
                    }
                }
                groups = []; //reset all the stuff
                sum = 0;
                counter = 0;
                preference = 1;
            }
        }
        //console.log(keys[row]);
        //console.log(sum);
        console.log(numOfGroups);
        sum = 0;
    }
    var num;
    groups[0] = "No group"
    for (var k = 0; k < names.length; k++)
    {
        if (hasGroup[k] == false)
        {
            console.log(names[k]);
            groups.push(names[k]);
        }
    }
    console.log(groups);
    finalGroups[cursor+1] = groups;

    return finalGroups;
};
export default Test;