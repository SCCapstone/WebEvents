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

    keys = Object.keys(props[1]);
    vals = [keys.length][keys.length];
    console.log(keys);
    console.log(vals);
    for (var i = 0; i < props.length; i++) {

        spreadsheet[i] = []; //initialize the array
        for (var j = 0; j < props.length; j++) //testing getting the first 9 options
        {
            //vals[i][j] = [];
            spreadsheet[i][j] = [];
            //var num = j.toString();
            //console.log(num);
            //var vals = props[i].getKey(num);
            vals = Object.values(props[i]);
            //console.log(vals);
            //console.log(key);
            //dates.push(key);
            spreadsheet[i][j] = vals[j]; //will put the persons first 9 preferrred dates as the next 9 elements of the array. If they don't have that many options, it will leave them empty
            //firstperson.push(key);
            //values[j] = j;
        }
        //dates[i] = key;
        //values[i] = "1";
    }
    for (var h = 0; h < spreadsheet.length; h++) {
        teams[h] = spreadsheet[h][0];
        finalDate[h] = [];
        hasGroup[h] = false;
        dateTaken[h] = false;
        console.log(dates[h]);
    }
    for (var row = 0; row < spreadsheet.length; row++)
    {
        //console.log(dates[row][0]);
        //console.log(names[row]);
        for (var column = 1; column < spreadsheet.length; column++) {
            finalDate[row] = [];
            //sum += dates[column][row];
            if (spreadsheet[row][column] <= 3 && hasGroup[row] == false)
            {
                finalDate[0] = keys[column];
               // console.log("Dates is: "+keys[column]);
                finalDate[1] = teams[row];  
                finalDate[2] = spreadsheet[row][column];
                for (var k = 0; k < spreadsheet.length; k++)
                {
                    for (var l = 0; l < spreadsheet.length; l++)
                    {
                        if (finalDate[0] == keys[l]) {
                            console.log("Person is: " + teams[l]); //checks if name is in group, makes true if so
                            hasGroup[l] = true;
                        }
                        if (finalDate[1] == keys[l])
                        {
                            console.log("Date is alr")
                        }
                    }
                }
                console.log("Pushing array");
                finalGroups[cursor] = finalDate; //push it into final array
                // console.log(finalGroups[cursor]);
                finalDate = [];
                cursor++;
                //counter = 0;
                //preference = 1;
                //sum = 0;
                //numOfGroups++;
                break;
            }
           
        }
        //console.log(keys[row]);
        //console.log(sum);
    }
    console.log(finalGroups);
}
export default fieldscheduler;