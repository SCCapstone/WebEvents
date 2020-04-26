/*this will create an average week long schedule for a small business.
  input will be a spreadsheet of all shifts in the schedule as columns
   and the employees names and what shifts they would perfer to work.
   output a spreadsheet with all shifts populated and employees evenly
   distributed so no one employee is not schedule or over schedule and no shift 
   is left empty
   -assumeing no overtime*/
function workschedule(props, size) {
    var workweek = [];  //spreadsheet
    var keys = [];  //dates/shifts
    var vals = [];   //employee prefences
    var shift = []; //groups
    var employee = []; //first name and last of employees
    var counter = 0;
    var shiftfull = []; //bool array shift has max amount of employees
    //var shiftmin = 2; //least amount of employees per shift default 2
    var shiftmax = size; //amount of employees for shift to be full, should be groupsize
    //for now ^ will be 8, should be input
    var maxShifts = 2; //max amount of shifts an employee can have in one workweek maxHours/lengthofShifts default 40/8
    var shiftworked = []; //tracker of how meny shifts a employee has been scheduled for
    var finalShift = [];
    var index = 0;
    var pref = 1;
    var check = [];

    keys = Object.keys(props[1]);
    vals = [keys.length][keys.length];
    for (var i = 0; i < props.length; i++)
    {
        workweek[i] = [];   //initialize array
        for (var j = 0; j < keys.length; j++)
        {
            workweek[i][j] = [];
            vals = Object.values(props[i]);
            workweek[i][j] = vals[j];
        }
    }

    for (var l = 0; l < workweek.length; l++)
    {
        employee[l] = workweek[l][0] + " " + workweek[l][1];
        shift[l] = [];
        shiftworked[l] = 0;
    }

    for (var k = 0; k < keys.length; k++)
    {
        shiftfull[k] = false;
    }
    var r;
    var c;
    var x = 0;
    //give employees their preferences first
    for (c = 2; c < keys.length; c++)
    {
        for (r = 0; r < workweek.length; r++)
        {
            //shift[r] = [];
           // console.log(employee[r])
            if (workweek[r][c] <= pref && shiftworked[r] < maxShifts && shiftfull[c] === false)
            {
                shiftworked[r] += 1;
                counter = counter + 1;
                //console.log("r is" + r);
                //console.log('C is ' + c);
                console.log("pref is" + pref);
                //console.log("value" + workschedule[r][c]);
                if (counter >= shiftmax)
                {
                    shiftfull[c] = true;
                }
                shift[0] = keys[c];
                shift[1] = employee[r];
                console.log("shifts worked " + employee[r] + " " + shiftworked[r]);
                for(var r2 = 0; r2 < employee.length; r2++)
                {
                    if(r2 !== r && workweek[r2][c] <= (pref+1) && shiftworked[r2] < maxShifts && shiftfull[c] === false)
                    {
                        counter = counter + 1;
                        shiftworked[r2] = shiftworked[r2] + 1;
                        if(counter >= shiftmax)
                        {
                            shiftfull[c] = true;
                        }
                        //shiftworked[r] += 1;
                        check[x] = r2;
                        x = x + 1;
                        console.log("shifts worked " + employee[r2] + " " + shiftworked[r2]);
                        shift[counter] = employee[r2];
                    }
                }
                console.log("shift is " + shift);
                console.log("sf " + shiftfull[c]);
                //console.log("WWrc" + workweek[r][c]);
                
                if(shiftfull[c] === true)
                {
                    finalShift[index] = shift;
                    console.log("fS is " + finalShift);
                }
                else
                {
                 shiftworked[r] = shiftworked[r] - 1;
                 console.log("shifts worked " + employee[r] + " " + shiftworked[r]);
                 console.log("check is " + check);
                 for(var b = 0; b < x; b++)
                 {
                     //check[b]
                     shiftworked[check[b]] = shiftworked[check[b]] -1;
                 }
                 console.log("shifts worked " + employee[check] + " " + shiftworked[check]);
                 //shiftworked[r2] = shiftworked[r2] - 1;   
                }
                
                shift = [];
                x = 0;
                index++;
                break;
            }
            
        }
        counter = 0;
        pref++
    }

    //fill the shift that are empty 
    for (c = 2; c < keys.length; c++)
    {
        for (r = 0; r < workweek.length; r++)
        {
            if (shiftfull[c] !== true && shiftworked[r] < maxShifts)
            {
                shiftworked[r] += 1;
                counter = counter + 1;
                if (counter >= shiftmax) {
                    shiftfull[c] = true;
                }
                shift[0] = keys[c];
                shift[1] = employee[r];
                //shift[2] = workweek[r][c];
                for(var r3 = 0; r3 < employee.length; r3++)
                {
                    if(r3 !== r && shiftworked[r3] < maxShifts && shiftfull[c] === false)
                    {
                        counter = counter + 1;
                        if(counter >= shiftmax)
                        {
                            shiftfull[c] = true;
                        }
                        shiftworked[r3] += 1;
                        shift[counter] = employee[r3];
                    }
                }

                console.log("empty shift is " + shift);
                finalShift[index] = shift;
                shift = [];
                index++;
                console.log("fS is " + finalShift);
                break; 
            }
        }
        counter = 0;
    }
    
    return finalShift;
}
export default workschedule;