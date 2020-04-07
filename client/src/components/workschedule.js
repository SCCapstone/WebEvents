/*this will create an average week long schedule for a small business.
  input will be a spreadsheet of all shifts in the schedule as columns
   and the employees names and what shifts they would perfer to work.
   output a spreadsheet with all shifts populated and employees evenly
   distributed so no one employee is not schedule or over schedule
   -assumeing no overtime*/
function workschedule(props) {
    var workweek = [];  //spreadsheet
    var keys = [];  //dates/shifts
    var vals = [];   //employee prefences
    var shift = []; //groups
    var employee = []; 
    var counter = 0;
    var shiftfull = []; //bool shift has max amount of employees
    //var shiftmin = 2; //least amount of employees per shift default 2
    var shiftmax = 8; //amount of employees for shift to be full 
    //for now ^ will be 8, should be input
    var maxShifts = 5; //max amount of shifts an employee can have in one workweek maxHours/lengthofShifts default 40/8
    var shiftworked = []; //tracker of how meny shifts a employee has been scheduled for
    var finalShift = [];
    var index = 0;
    var pref = 1;

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
        employee[l] = workweek[l][0];
        shift[l] = [];
        shiftworked[l] = 0;
    }

    for (var k = 0; k < keys.length; k++)
    {
        shiftfull[k] = false;
    }
    var r;
    var c;
    //give employees their preferences first
    for (r = 1; r < workweek.length; r++)
    {
        for (c = 1; c < keys.length; c++)
        {
            shift[r] = [];
            if (workweek[r][c] <= pref && shiftworked[r] < maxShifts && shiftfull[c] == false)
            {
                shiftworked[r] += 1;
                counter = counter + 1;
                if (counter >= shiftmax)
                {
                    shiftfull[c] = true;
                }
                shift[0] = keys[c];
                shift[1] = employee[r];
                shift[2] = workweek[r][c];
                finalShift[index] = shift;
                shift = [];
                index++;
                break;
            }
            
        }
        pref++
    }

    //fill the shift that are empty 
    for (c = 1; c < keys.length; c++)
    {
        for (r = 1; r < workweek.length; r++)
        {
            if (shiftfull[c] != true && shiftworked[r] < maxShifts)
            {
                shiftworked[r] += 1;
                counter = counter + 1;
                if (counter >= shiftmax) {
                    shiftfull[c] = true;
                }
                shift[0] = keys[c];
                shift[1] = employee[r];
                shift[2] = workweek[r][c];
                finalShift[index] = shift;
                shift = [];
                index++;
                break; 
            }
        }
    }

    return finalShift;
}
export default workschedule;