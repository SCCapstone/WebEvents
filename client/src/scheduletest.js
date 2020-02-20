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

      /*  var result = Object.keys(props[i]).map(function (key) {
            return [String(key), props[i][key]];
        });
    console.log(result); //
    */
    //console.log(props); //this will just log all of the objects
    //console.log(Object.keys(props[0]));
    keys = Object.keys(props[1]);
    vals = [keys.length][keys.length];
    console.log(keys);
    for (var i = 0; i < props.length; i++)
    {
 
        dates[i] = []; //initialize the array
        //vals[i] = [];
        //console.log(Object.keys(props[i]));
        //console.log(props[i]["First name"]);
        //dates[i][0] = (props[i]["First name"]); //sets first name as the first element of each row
        //dates[i][1] = (props[i]["Last name"]);
        //console.log(Object.values(props[i]))
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
    for (var k = 0; k < dates.length; k++) {
        //console.log(props[k]["First name"]);
        //console.log(dates[k]);
        //console.log(values[k]);
    }


    //testing stuff
   /* for (var first = 0; first < dates.length; first++)
    {
        for (var second = 0; second < dates.length; second++)
            if (dates[first] == dates[second]) {
                console.log(dates[first]);
            }
    }*/
    for (var one = 0; one < dates.length; one++) {
        //console.log("Person: "+one);
        for (var two = 0; two < dates.length; two++) {
            //console.log("Number: "+two)
            //console.log(dates[one][two]);
        }
    }
    var sum = 0;
    var groups = [];
    var finalGroups = [];
    var hasGroup = []; //this is a bool array that indicates if each person is already in a group
    var counter = 0; //this will be used to count how many people are in each group
    var cursor = 0; //will be used to control placement into array
    for (var h = 0; h < dates.length; h++)
    {
        groups[h] = [];
        hasGroup[h] = false;
    }
    for (var row = 0; row < dates.length; row++)
    {
        //console.log(dates[row][0]);
        for (var column = 2; column < dates.length; column++)
        {
            groups[row] = [];
            //sum += dates[column][row];
            if (dates[row][column] == 1 && hasGroup[row] == false)
            {
                //hasGroup[column] = true;
                //console.log(dates[row][0] + " prefers " + keys[column]);
                //var other = row + 1;
                for (var other=0; other < dates.length; other++)
                {
                    if (dates[other][column] <= 10 && other !== row && counter <= 4 && hasGroup[other] == false) //person has similar preference, group isn't too big, and they don't already have a group
                    {                      
                         //sets first name as first index of array
                        groups[0] = keys[column]; //sets date as first index of array
                       // console.log("There is a match with: " + dates[other][0]);
                        hasGroup[other] = true;
                        groups[counter + 1] = dates[other][0];      //starts to set other name into array
                        if (counter == 4) //if group is full
                        {
                            console.log(cursor);
                            finalGroups[cursor] = groups; //push it into final array
                            groups = [];
                            cursor++;
                            counter = 0;
                        }
                        else if (other == dates.length-1)
                        {
                            console.log(cursor);
                            finalGroups[cursor] = groups; //push it into final array
                            groups = [];
                            cursor++;
                            counter = 0;
                        }
                        counter++;
                    }
                }
                //counter = 0;
            }
        }
        //console.log(keys[row]);
        //console.log(sum);
        sum = 0;
    }



    for (var i = 0; i < hasGroup.length; i++)
        console.log(hasGroup[i]);


        console.log(finalGroups);
    return finalGroups;
};
export default Test;