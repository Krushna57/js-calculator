


//function for calculator tab

function calculator()
{
    val = 1;
    with(document.calForm)
    {
        number_box.style.display="block";
        
        exchange_label.style.border="none";
        unit_label.style.border="none";
        calculator_label.style.border="";

        exchange_label.style.color="gray";
        unit_label.style.color="gray";
        calculator_label.style.color="rgb(141, 217, 236)";

        document.getElementById('exchange-rate-section').style.display="none";
        document.getElementById("calculator-section").style.display="block";

        unit_box.style.display="none";

        document.getElementById('length-page-section').style.display="none";
        document.getElementById('volume-page-section').style.display="none";
        document.getElementById("data-conversion-section").style.display="none";



    }
}

var calculationHistory = [];
var i=0;
var expression="";
function displayKey(key)   // display the kyes typed by the user in the textfield
{
    navigator.vibrate(50);
    if(expression.length < 16)
    {
        document.getElementById("expressionField").value+=key;
        expression =  document.getElementById("expressionField").value;
        expressionCalculation();
    }
}

var val;
function backBtn()   // common backBtn function for all keyboards
{    
    navigator.vibrate(50);
    if(val==1)
    {
        expression = expression.substring(0,expression.length-1);
        document.getElementById("expressionField").value=expression;
        expressionCalculation();
    }
    else if(val==2)
    {
        exchangeValue = exchangeValue.substring(0,exchangeValue.length-1);
        document.getElementById("exchangeField2").value = exchangeValue;
        exchangeCurrency();
    }
    else if(val==3)
    {
        lengthValue = lengthValue.substring(0,lengthValue.length-1);
        document.getElementById("lengthField2").value=lengthValue;
        lengthConverter();
    }
    else if(val==4)
    {
        volumeValue = volumeValue.substring(0,volumeValue.length-1);
        document.getElementById("volumeField2").value=volumeValue;
        volumeConverter();
    }
    else if(val==5)
    {
        dataValue = dataValue.substring(0,dataValue.length-1);
        document.getElementById("dataField2").value=dataValue;
        dataConverter();
    }
}

//calculate the expression
function expressionCalculation()
{
    if(expression != "")
    {
        if(expression.charAt(0)=="."||expression.charAt(0)=="+"||expression.charAt(0)=="*"||expression.charAt(0)=="/"||expression.charAt(0)=="%" ||expression.charAt(expression.length-1)=="."|| expression.charAt(expression.length-1)=="+"|| expression.charAt(expression.length-1)=="-"|| expression.charAt(expression.length-1)=="*"|| expression.charAt(expression.length-1)=="/"|| expression.charAt(expression.length-1)=="%")
        {
            document.getElementById("resultField").value="";
        }
        else
        {
            document.getElementById("resultField").value=eval(expression);
        }
    }
    else
    {
        document.getElementById("resultField").value="";
    }
}

//display the the result in textfield and calling a function to write history
function displayRes()
{
    navigator.vibrate(50);
    if(expression != "")
    {
        if(resultField.value != "")
        {
           writeHistory();
        } 
        document.getElementById("expressionField").value=eval(expression);
        expression = document.getElementById("expressionField").value;
        document.getElementById("resultField").value="";
    }
}

//write history 

function writeHistory()
{
    calculationHistory.push(expression+" = "+eval(expression));  
    document.getElementById("writeHistory").innerHTML += calculationHistory[i]+"<br><br>";
    i++;
}

// delete the history
function deleteHistory()
{
    navigator.vibrate(50);
    for(i=calculationHistory.length;i>0;i--)
    {
        calculationHistory.pop();
    }
    
    document.getElementById("writeHistory").innerHTML = "";
    i=0;
}

//history container-  show and hide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ` show and hide
var isHistoryVisible = false;
function showHistory()
{
    navigator.vibrate(50);
    if(!isHistoryVisible)
    {
        document.getElementById("historyContainer").style.height="93.5%";
        isHistoryVisible = true;
        calculator_label.style.display="none";
        exchange_label.style.display="none";
        unit_label.style.display="none";
    }
    else
    {
        document.getElementById("historyContainer").style.height="0%";
        isHistoryVisible = false;
        calculator_label.style.display="block";
        exchange_label.style.display="block";
        unit_label.style.display="block";
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var keyPadNo;
function exchange_rate()
{
    keyPadNo=1;
    with(document.calForm)
    {
        number_box.style.display="none";

        calculator_label.style.border="none";
        unit_label.style.border="none";
        exchange_label.style.border="";

        exchange_label.style.color="rgb(141, 217, 236)";
        unit_label.style.color="gray";
        calculator_label.style.color="gray";

        document.getElementById("exchange-rate-section").style.display="";
        document.getElementById("calculator-section").style.display="none";


        unit_box.style.display="none";
        exchange_box.style.display="block";
        document.getElementById('length-page-section').style.display="none";
        document.getElementById('volume-page-section').style.display="none";
        document.getElementById("data-conversion-section").style.display="none";


    }
}

//exchange rate tab functions
var exchangeValue=0;
var lengthValue=0;
var volumeValue=0;
var dataValue=0;
function keyPad(key)
{
    navigator.vibrate(100);
    if(keyPadNo == 1)
    {
        val =2;
        exchangeValue =  document.getElementById("exchangeField2").value;
        if(exchangeValue.length<15) 
        {
            document.getElementById("exchangeField2").value+=key;
            exchangeValue =  document.getElementById("exchangeField2").value;
            exchangeCurrency();
        }
    }
    else if(keyPadNo == 2)
    {
        val=3;
        lengthValue = document.getElementById('lengthField2').value;
        if(lengthValue.length<12)
        {
            document.getElementById('lengthField2').value+=key;
            lengthValue = document.getElementById('lengthField2').value;
            lengthConverter();
        }
    }
    else if(keyPadNo == 3)
    {
        val=4;
        volumeValue = document.getElementById('volumeField2').value;
        if(volumeValue.length<12)
        {
            document.getElementById('volumeField2').value+=key;
            volumeValue = document.getElementById('volumeField2').value;
            volumeConverter();
        }
    }
    else if(keyPadNo == 4)
    {
        val=5;
        dataValue = document.getElementById('dataField2').value;
        if(dataValue.length<12)
        {
            document.getElementById('dataField2').value+=key;
            dataValue = document.getElementById('dataField2').value;
            dataConverter();
        }
    }

}


//convert currency
function exchangeCurrency()
{
    with(document.calForm)
    {
        if(exchangeValue!="")
        {
            if(secondOptionList.value == 1)
            {
                if(firstOptionList.value == 1)
                {
                    exchangeField1.value = exchangeValue;
                }
                else if(firstOptionList.value == 2)
                {
                    exchangeField1.value = eval(exchangeValue*8.8347/10);
                }
                else if(firstOptionList.value == 3)
                {
                    exchangeField1.value = eval(exchangeValue*74.6993/100);
                }
                else
                {
                    exchangeField1.value = eval(exchangeValue*75.0035);
                }                
            }
            else if(secondOptionList.value == 2)
            {
                if(firstOptionList.value == 1)
                {
                    exchangeField1.value =  eval(exchangeValue*1.1319);
                }
                else if(firstOptionList.value == 2)
                {
                    exchangeField1.value = exchangeValue;
                }
                else if(firstOptionList.value == 3)
                {
                    exchangeField1.value = eval(exchangeValue*0.8455);
                }
                else
                {
                    exchangeField1.value = eval(exchangeValue*84.8965);
                }                
            }
            else if(secondOptionList.value == 3)
            {
                if(firstOptionList.value == 1)
                {
                    exchangeField1.value =  eval(exchangeValue*1.3387);
                }
                else if(firstOptionList.value == 2)
                {
                    exchangeField1.value = eval(exchangeValue*1.1827);
                }
                else if(firstOptionList.value == 3)
                {
                    exchangeField1.value = exchangeValue;
                }
                else
                {
                    exchangeField1.value = eval(exchangeValue*100.407);
                }                
            }
            else
            {
                if(firstOptionList.value == 1)
                {
                    exchangeField1.value =  eval(exchangeValue*0.0133);
                }
                else if(firstOptionList.value == 2)
                {
                    exchangeField1.value = eval(exchangeValue*0.118);
                }
                else if(firstOptionList.value == 3)
                {
                    exchangeField1.value = eval(exchangeValue*0.996/10);
                }
                else
                {
                    exchangeField1.value = exchangeValue;
                }                
            }
        }
        else
        {
            exchangeField1.value = "";
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function unit_converter()
{
   with(document.calForm)
   {
        number_box.style.display="none";

        calculator_label.style.border="none";
        exchange_label.style.border="none";
        unit_label.style.border="";

        exchange_label.style.color="gray";
        unit_label.style.color="rgb(141, 217, 236)";
        calculator_label.style.color="gray";

        document.getElementById("exchange-rate-section").style.display="none";
        document.getElementById("calculator-section").style.display="none";

        unit_box.style.display="";
        exchange_box.style.display="";

        document.getElementById('length-page-section').style.display="block";
        document.getElementById('volume-page-section').style.display="none";
        document.getElementById("data-conversion-section").style.display="none";

   }
}

//unit converter- length page
function lengthPage()
{
    keyPadNo=2;
    document.getElementById('unit_box').style.display="none";
    document.getElementById('exchange-rate-section').style.display="none";
    document.getElementById('calculator-section').style.display="none";
    document.getElementById('volume-page-section').style.display="none";
    document.getElementById("data-conversion-section").style.display="none";


}
//length converter
function lengthConverter()
{
    with(document.calForm)
    {
        if(lengthValue !="")
        {
            if(lenthOptionList2.value==1)
            {
                if(lenthOptionList1.value==1)
                {
                    lengthField1.value = lengthValue;
                }
                else if(lenthOptionList1.value==2)
                {
                    lengthField1.value = eval(lengthValue*0.000001);
                }
                else if(lenthOptionList1.value==3)
                {
                    lengthField1.value = eval(lengthValue*0.1);
                }
                else 
                {
                    lengthField1.value = eval(lengthValue*0.001);
                }
            }
            if(lenthOptionList2.value==2)
            {
                if(lenthOptionList1.value==1)
                {
                    lengthField1.value = eval(lengthValue*1000000);
                }
                else if(lenthOptionList1.value==2)
                {
                    lengthField1.value = lengthValue;
                }
                else if(lenthOptionList1.value==3)
                {
                    lengthField1.value = eval(lengthValue*100000);
                }
                else 
                {
                    lengthField1.value = eval(lengthValue*1000);
                }
            }
            if(lenthOptionList2.value==3)
            {
                if(lenthOptionList1.value==1)
                {
                    lengthField1.value = eval(lengthValue*10);
                }
                else if(lenthOptionList1.value==2)
                {
                    lengthField1.value = eval(lengthValue*0.00001);
                }
                else if(lenthOptionList1.value==3)
                {
                    lengthField1.value = lengthValue;
                }
                else 
                {
                    lengthField1.value = eval(lengthValue*0.01);
                }
            }
            if(lenthOptionList2.value==4)
            {
                if(lenthOptionList1.value==1)
                {
                    lengthField1.value = eval(lengthValue*1000);
                }
                else if(lenthOptionList1.value==2)
                {
                    lengthField1.value = eval(lengthValue*0.001);
                }
                else if(lenthOptionList1.value==3)
                {
                    lengthField1.value = eval(lengthValue*100);
                }
                else 
                {
                    lengthField1.value = lengthValue;
                }
            }
        }
        else
        {
            lengthField1.value = "";
        }
    }
}


//unit converter- volume page

function volumePage()
{
    keyPadNo=3;
    document.getElementById('volume-page-section').style.display="";

    exchange_label.style.color="gray";
    unit_label.style.color="rgb(141, 217, 236)";

    exchange_label.style.border="none";

    document.getElementById('length-page-section').style.display="none";
    document.getElementById('unit_box').style.display="none";
    document.getElementById('exchange-rate-section').style.display="none";
    document.getElementById('calculator-section').style.display="none";
    document.getElementById("data-conversion-section").style.display="none";

}

//volume-converter
function volumeConverter()
{
    with(document.calForm)
    {
        if(volumeValue !="")
        {
            if(volumeOptionList2.value==1)
            {
                if(volumeOptionList1.value==1)
                {
                    volumeField1.value = volumeValue;
                }
                else if(volumeOptionList1.value==2)
                {
                    volumeField1.value = eval(volumeValue*0.1);
                }
                else if(volumeOptionList1.value==3)
                {
                    volumeField1.value = eval(volumeValue*0.01);
                }
                else 
                {
                    volumeField1.value = eval(volumeValue*10);
                }
            }
            if(volumeOptionList2.value==2)
            {
                if(volumeOptionList1.value==1)
                {
                    volumeField1.value = eval(volumeValue*0.1);
                }
                else if(volumeOptionList1.value==2)
                {
                    volumeField1.value = volumeValue;
                }
                else if(volumeOptionList1.value==3)
                {
                    volumeField1.value = eval(volumeValue*0.01);
                }
                else 
                {
                    volumeField1.value = eval(volumeValue*10);
                }
            }
            if(volumeOptionList2.value==3)
            {
                if(volumeOptionList1.value==1)
                {
                    volumeField1.value = eval(volumeValue*10);
                }
                else if(volumeOptionList1.value==2)
                {
                    volumeField1.value = eval(volumeValue*100);
                }
                else if(volumeOptionList1.value==3)
                {
                    volumeField1.value = volumeValue;
                }
                else 
                {
                    volumeField1.value = eval(volumeValue*1000);
                }
            }
            if(volumeOptionList2.value==4)
            {
                if(volumeOptionList1.value==1)
                {
                    volumeField1.value = eval(volumeValue*0.01);
                }
                else if(volumeOptionList1.value==2)
                {
                    volumeField1.value = eval(volumeValue*0.1);
                }
                else if(volumeOptionList1.value==3)
                {
                    volumeField1.value = eval(volumeValue*0.001);
                }
                else 
                {
                    volumeField1.value = volumeValue;
                }
            }
        }
        else
        {
            volumeField1.value = "";
        }
    }
}

// data conversion function

function dataConversionPage()
{
    keyPadNo=4;
    document.getElementById("data-conversion-section").style.display="";
    document.getElementById('volume-page-section').style.display="none";
    document.getElementById('volume-page-section').style.display="none";

    exchange_label.style.color="gray";
    unit_label.style.color="rgb(141, 217, 236)";

    exchange_label.style.border="none";

    document.getElementById('length-page-section').style.display="none";
    document.getElementById('unit_box').style.display="none";
    document.getElementById('exchange-rate-section').style.display="none";
    document.getElementById('calculator-section').style.display="none";
}

// data converter

function dataConverter()
{
    with(document.calForm)
    {
        if(dataValue !="")
        {
            if(dataOptionList2.value==1)
            {
                if(dataOptionList1.value==1)
                {
                    dataField1.value = dataValue;
                }
                else if(dataOptionList1.value==2)
                {
                    dataField1.value = eval(dataValue/1024);
                }
                else if(dataOptionList1.value==3)
                {
                    dataField1.value = eval(dataValue*0.0009765625/1024);
                }
                else if(dataOptionList1.value==4)
                {
                    dataField1.value = eval(dataValue*0.000931322575/1000000);
                }
                else if(dataOptionList1.value==5)
                {
                    dataField1.value = eval(dataValue*0.000909494702/1000000000);
                }
                else
                {
                    dataField1.value = eval(dataValue*0.00088817842/1000000000000);
                }
            }
            if(dataOptionList2.value==2)
            {
                if(dataOptionList1.value==1)
                {
                    dataField1.value = eval(dataValue*1024);
                }
                else if(dataOptionList1.value==2)
                {
                    dataField1.value = dataValue;
                }
                else if(dataOptionList1.value==3)
                {
                    dataField1.value = eval(dataValue/1024);
                }
                else if(dataOptionList1.value==4)
                {
                    dataField1.value = eval(dataValue*0.0009765625/1024);
                }
                else if(dataOptionList1.value==5)
                {
                    dataField1.value = eval(dataValue*0.000931322575/1000000);
                }
                else
                {
                    dataField1.value = eval(dataValue*0.000909494702/1000000000);
                }
            }
            if(dataOptionList2.value==3)
            {
                if(dataOptionList1.value==1)
                {
                    dataField1.value = eval(dataValue*1048576);
                }
                else if(dataOptionList1.value==2)
                {
                    dataField1.value = eval(dataValue*1024);
                }
                else if(dataOptionList1.value==3)
                {
                    dataField1.value = dataValue;
                }
                else if(dataOptionList1.value==4)
                {
                    dataField1.value = eval(dataValue*0.0009765625);
                }
                else if(dataOptionList1.value==5)
                {
                    dataField1.value = eval(dataValue*0.000953674316/1000);
                }
                else
                {
                    dataField1.value = eval(dataValue*0.000931322575/1000000);
                }
            }
            if(dataOptionList2.value==4)
            { 
                if(dataOptionList1.value==1)
                {
                    dataField1.value = eval(dataValue*107374182/0.1);
                }
                else if(dataOptionList1.value==2)
                {
                    dataField1.value = eval(dataValue*1048576);
                }
                else if(dataOptionList1.value==3)
                {
                    dataField1.value = eval(dataValue*1024);
                }
                else if(dataOptionList1.value==4)
                {
                    dataField1.value = dataValue;
                }
                else if(dataOptionList1.value==5)
                {
                    dataField1.value = eval(dataValue*0.0009765625);
                }
                else
                {
                    dataField1.value = eval(dataValue*0.000953674316/1000);
                }
            }
            if(dataOptionList2.value==5)
            { 
                if(dataOptionList1.value==1)
                {
                    dataField1.value = eval(dataValue*109951163/0.0001);
                }
                else if(dataOptionList1.value==2)
                {
                    dataField1.value = eval(dataValue*107374.182/0.0001);
                }
                else if(dataOptionList1.value==3)
                {
                    dataField1.value = eval(dataValue*1048.576/0.001);
                }
                else if(dataOptionList1.value==4)
                {
                    dataField1.value = eval(dataValue*1024);
                }
                else if(dataOptionList1.value==5)
                {
                    dataField1.value =dataValue;
                }
                else
                {
                    dataField1.value = eval(dataValue*0.0009765625);
                }
            }
            if(dataOptionList2.value==6)
            { 
                if(dataOptionList1.value==1)
                {
                    dataField1.value = eval(dataValue*112589991/0.0000001);
                }
                else if(dataOptionList1.value==2)
                {
                    dataField1.value = eval(dataValue*109951163/0.0001);
                }
                else if(dataOptionList1.value==3)
                {
                    dataField1.value = eval(dataValue*107374182/0.1);
                }
                else if(dataOptionList1.value==4)
                {
                    dataField1.value = eval(dataValue*1048576);
                }
                else if(dataOptionList1.value==5)
                {
                    dataField1.value =eval(dataValue*1024);
                }
                else
                {
                    dataField1.value = dataValue;
                }
            }

        }
        else
        {
            dataField1.value = "";
        }
    }
}

