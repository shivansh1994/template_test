//all the provided keys are examples, go to Amazon Cognito and get yours


var poolData = {
    UserPoolId : 'us-east-1_hf55tYn7d', // your user pool id here
    ClientId : '1btr59fu35sckravjg2reo8a0a' // your client id here
};

var identityPoolId = 'us-east-1:b89f752d-8f45-4929-9998-7232c932a09b'; //go to AWS Cognito Federated Identites

var userAttributes = ['email', 'phone_number']; //the standard attributes you require in AWS Cognito

var MFARequired = true; //do you require your clients to use MFA?

alert("updated");

AWS.config.update({
    accessKeyId: "AKIAJKVYZBLLAAZWI5DQ",
    secretAccessKey: "WBPuSu44/WW/xthNgd4DIq1PlXey4e/UboqxfiP5",
    region: "us-east-1"
});


AWS.config.update({
  region: "us-east-1",
  endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "Pentair_Dev_Data";

var params = {
    TableName: table,
    Key:{
        "Sr_No": "PS0002",
        "Timestamp": "1495087585791"
    }
};

AWS.config.update({region:'us-east-1'});

AWS.config.apiVersions = {
  iotdata: '2015-05-28',
  // other service API versions
};

var params1 = {
  thingName: 'PS0002' /* required */
};


console.log("Scanning DEVICES table1.");
docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Database succeeded:", data);
    }



function GenerateTable() {

    console.log("Scanning DEVICES table1.");
    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Database succeeded:", data);
            var attrib = new Array();
            attrib.push(["Sr_No", "Properties", "Values"]);
            attrib.push([1, "Pump Status", data.Item.Pump_State]);
            attrib.push([2, "Pump Total RunTime(min)", ""]);
            attrib.push([3, "Pump Last RunTime(sec)", ""]);
            attrib.push([4, "Pump Cycles", ""]);
            attrib.push([5, "Temprature(F)", ""]);
            attrib.push([6, "Pressure(psi)", ""]);
            attrib.push([7, "Motor Current(mA)", ""]);
            //Create a HTML Table element.
            var table = document.createElement("TABLE");
            table.border = "1";

            //Get the count of columns.
            var columnCount = attrib[0].length;

            //Add the header row.
            var row = table.insertRow(-1);
            for (var i = 0; i < columnCount; i++) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML = attrib[0][i];
                row.appendChild(headerCell);
            }

            //Add the data rows.
            for (var i = 1; i < attrib.length; i++) {
                row = table.insertRow(-1);
                for (var j = 0; j < columnCount; j++) {
                    var cell = row.insertCell(-1);
                    cell.innerHTML = attrib[i][j];
                }
            }

            var dvTable1 = document.getElementById("dvTable1");
            dvTable1.innerHTML = "";
            dvTable1.appendChild(table);

        }
    });
    //Build an array containing Customer records.




}


function  GenerateTable1() {


    AWS.config.update({
        accessKeyId: "AKIAJKVYZBLLAAZWI5DQ",
        secretAccessKey: "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"
    });


    AWS.config.update({
        region: "us-east-1",
        endpoint: "https://dynamodb.us-east-1.amazonaws.com"
    });

var x;
    var iotdata = new AWS.IotData({endpoint: 'a2emk67m3gszl9.iot.us-east-1.amazonaws.com'});
    iotdata.getThingShadow(params1, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     {
            x = JSON.parse(data.payload.toString());
            console.log("IOT succeeded: ", x.state );           // successful response
            //document.getElementById('textarea2').innerHTML= data.state.desired.Temprature;


            var attrib1 = new Array();
            attrib1.push(["Sr_No", "Settings", "Value"]);
            attrib1.push([1, "Over Pressure(psi)", x.state.reported.Pressure]);
            attrib1.push([2, "Motor Over Current(mA)", ""]);
            attrib1.push([3, "Low Temp Lim(F)", ""]);
            attrib1.push([4, "Drp Run Protection Enable", ""]);
            attrib1.push([5, "Drp Run Protect Detection Time(sec)", ""]);
            attrib1.push([6, "Max RunTime Limit(min)", ""]);
            attrib1.push([7, "Pump Control", ""]);
            attrib1.push([7, "Pump Control", ""]);
            attrib1.push([8, "Under Pressure Setpoint(psi)", ""]);
            attrib1.push([9, "Lower Pressure Setpoint(psi)", ""]);
            //Create a HTML Table element.
            var table1 = document.createElement("TABLE");
            table1.border = "1";

            //Get the count of columns.
            var columnCount1 = attrib1[0].length;

            //Add the header row.
            var row1 = table1.insertRow(-1);
            for (var i1 = 0; i1 < columnCount1; i1++) {
                var headerCell1 = document.createElement("TH");
                headerCell1.innerHTML = attrib1[0][i1];
                row1.appendChild(headerCell1);
            }

            //Add the data rows.
            for (var i1 = 1; i1 < attrib1.length; i1++) {
                row1 = table1.insertRow(-1);
                for (var j1 = 0; j1 < columnCount1; j1++) {
                    var cell1 = row1.insertCell(-1);
                    cell1.innerHTML = attrib1[i1][j1];
                }
            }

            var dvTable1 = document.getElementById("dvTable1");
            dvTable1.innerHTML = "";
            dvTable1.appendChild(table1);



        }
    });

}

function GenerateStats(){
    var but1=document.getElementById("but1");
    var but2=document.getElementById("but2");

    var prop1 = document.getElementById("properties1");
    var set1 = document.getElementById("settings1");
    var prop2 = document.getElementById("properties2");
    var set2 = document.getElementById("settings2");
    but1.onclick = function() {
        prop1.style.visibility = "visible";
        set1.style.visibility= "visible";
        prop2.style.visibility = "hidden";
        set2.style.visibility= "hidden";
    }
    but2.onclick = function() {
        prop2.style.visibility = "visible";
        set2.style.visibility= "visible";
        prop1.style.visibility = "hidden";
        set1.style.visibility= "hidden";
    }


}