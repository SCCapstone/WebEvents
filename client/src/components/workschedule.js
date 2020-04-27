/*this will create an average work schedule for a small business.
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
    var maxShifts = 2; //2-5 max amount of shifts an employee can have in one workweek maxHours/lengthofShifts default 40/8
    var shiftworked = []; //tracker of how meny shifts a employee has been scheduled for
    var finalShift = []; //the final output
    var index = 0;// index for the final output
    var pref = 1; //preference being searched for
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
        employee[l] = workweek[l][0] + " " + workweek[l][1]; //creates array of all employee names
        shift[l] = [];
        shiftworked[l] = 0;
    }

    for (var k = 0; k < keys.length; k++)
    {
        shiftfull[k] = false;
    }

    /*this check if the amount of employees inputed can fill the 
       all the shifts with the amount of groups requested. if not
       increases the max amount of shifts the each employee works
       in order to fill the shifts, up to 5 shifts for each employee*/ 
    var needed = 0;
    while(maxShifts < 5)    
    {
        needed = ((keys.length - 2) * shiftmax)/maxShifts;
        if(needed < (employee.length + 1))
        {
            break;
        }
        maxShifts = maxShifts + 1;
    }
   
    var r;
    var c;
    var x = 0;
    
    //give employees their preferences first
    for (c = 2; c < keys.length; c++)
    {
        for (r = 0; r < workweek.length; r++)
        {
            if (workweek[r][c] <= pref && shiftworked[r] < maxShifts && shiftfull[c] === false)
            {
                shiftworked[r] += 1;
                counter = counter + 1;

                if (counter >= shiftmax)
                {
                    shiftfull[c] = true;
                }
                shift[0] = keys[c];
                shift[1] = employee[r];
                
                for(var r2 = 0; r2 < employee.length; r2++)
                {
                    if(r2 !== r && workweek[r2][c] <= (pref+1) && shiftworked[r2] < maxShifts && shiftfull[c] === false)
                    {
                        counter = counter + 1;
                        shiftworked[r2] = shiftworked[r2] + 1;
                        if(counter >= shiftmax) //if now full mark it as so
                        {
                            shiftfull[c] = true;
                        }
                        check[x] = r2; 
                        x = x + 1;
                        shift[counter] = employee[r2];
                    }
                }
                
                if(shiftfull[c] === true)
                {
                    finalShift[index] = shift;
                    index++;
                }
                else    //if the shift could not completely fill 
                {
                 shiftworked[r] = shiftworked[r] - 1;
                 
                 for(var b = 0; b < x; b++) 
                 {
                     shiftworked[check[b]] = shiftworked[check[b]] -1;
                 }

                }
                
                shift = [];
                x = 0;
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
                
                for(r2 = 0; r2 < employee.length; r2++)
                {
                    if(r2 !== r && shiftworked[r2] < maxShifts && shiftfull[c] === false)
                    {
                        counter = counter + 1;
                        if(counter >= shiftmax)
                        {
                            shiftfull[c] = true;
                        }
                        shiftworked[r2] += 1;
                        shift[counter] = employee[r2];
                    }
                }

                finalShift[index] = shift;
                shift = [];
                index++;
                break; 
            }
        }
        counter = 0;
    }
    
   //console.log("fS is " + finalShift);
    
   finalShift.sort(); //ensures the output is in the correct order
  
   //console.log("sorted fS is " + finalShift);

    /*outputs a massage if a shift could not be completely filled
      with the amount of employees inputed*/
    for(var p = 2; p < keys.length; p++)
    {
        if(shiftfull[p] !== true)
        {
            shift[0] = keys[p];
            shift[1] = "not full";
            finalShift[index] = shift;
            index++;
        }
    }

    
    return finalShift;
}
export default workschedule;