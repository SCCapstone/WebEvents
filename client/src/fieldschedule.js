//schedule a single team at a field, at various times. Each team will be assigned a single time
import React from "react";
import XLSX from "xlsx";
function fieldscheduler(props)
{
    var spreadsheet = [];
    var keys = [];
    var vals = [];
    var teams = [];
    var hasGroup = [];
    var dateTaken = [];
    var finalDate = [];
    var dates = [];
    var cursor = 0;
    var finalGroups = [];
    var prefLimit = 1;

    keys = Object.keys(props[1]);
    vals = [keys.length][keys.length];
    console.log(keys);
    console.log(vals);
    for (var i = 0; i < props.length; i++) {

        spreadsheet[i] = []; //initialize the array
        for (var j = 0; j < keys.length; j++) 
        {
            //vals[i][j] = [];
            spreadsheet[i][j] = [];
            vals = Object.values(props[i]);
            spreadsheet[i][j] = vals[j]; 
            //firstperson.push(key);
            //values[j] = j;
        }
        //dates[i] = key;
        //values[i] = "1";
    }
    console.log(spreadsheet);
    for (var h = 0; h < spreadsheet.length; h++) {
        teams[h] = spreadsheet[h][0];
        finalDate[h] = [];
        hasGroup[h] = false;
        console.log(teams[h]);
    }
    for (var o = 0; o < keys.length; o++)
    {
        dateTaken[o] = false;
    }
    for (var row = 0; row < spreadsheet.length; row++)
    {
        //console.log(dates[row][0]);
        console.log(teams[row]);
        for (var column = 1; column < keys.length; column++) { //more columns then rows
            finalDate[row] = [];
            console.log("COL IS: " + column);
            //sum += dates[column][row];
            
            console.log("Pref value is: " + spreadsheet[row][column]);
            if (spreadsheet[row][column] <= prefLimit && hasGroup[row] == false &&  dateTaken[column] == false)
            {
                dateTaken[column] = true;
                hasGroup[row] = true;
                finalDate[0] = keys[column];
               // console.log("Dates is: "+keys[column]);
                finalDate[1] = teams[row];  
                finalDate[2] = "Preference value is: "+spreadsheet[row][column];
                console.log("Pushing array");
                finalGroups[cursor] = finalDate; //push it into final array
                // console.log(finalGroups[cursor]);
                finalDate = [];
                cursor++;
                break;
            }
           
        }
        prefLimit++;
    }
    console.log(finalGroups);
    console.log(dateTaken);
    return finalGroups;
}
export default fieldscheduler;