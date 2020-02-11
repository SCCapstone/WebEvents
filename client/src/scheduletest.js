import React from "react";
import XLSX from "xlsx";
import _ from 'lodash';


//This can return a key based on the value that you want
Object.prototype.getKey = function (value) {
    for (var key in this) {
        if (this[key] == value) {
            return key;
        }
    }
    return null;
};

function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}

//empty arrays for testing purposes
var dates = []; //2D array, each row will represent a person
var firstperson = [];
var values = [];


function Test(props) {

      /*  var result = Object.keys(props[i]).map(function (key) {
            return [String(key), props[i][key]];
        });
    console.log(result);
    */
    //console.log(props);
    //console.log(Object.keys(props[1]));
    for (var i = 0; i < props.length; i++)
    {
        dates[i] = [];
        //console.log(Object.values(props[i]));
        //console.log(props[i]["First name"]);
        dates[i][0] = (props[i]["First name"]);
        //dates[i][1] = (props[i]["Last name"]);
        //console.log(Object.values(props[i]))
        for (var j = 1; j < 6; j++) //testing getting the first 5 options
        {
            dates[i][j] = [];
            var num = j.toString();
            //console.log(num);
            var key = props[i].getKey(num);
            //console.log(key);
            //dates.push(key);
            dates[i][j] = key;
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
        console.log(dates[0][one]);
    }

};
export default Test;