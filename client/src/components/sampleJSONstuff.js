function Test(data) {
    console.log(data);
   // console.log(Object.keys(data));
   // console.log(Object.values(data));
    //console.log(data);
    console.log(Object.entries(data));
    //console.log(data[0]["February 28 8-10 AM"]);
    var newdata = data[0];
    console.log(Object.entries(newdata));
    console.log(newdata["Last name"]);
    return data;
}
export default Test;