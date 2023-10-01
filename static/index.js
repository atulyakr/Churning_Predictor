var age=document.getElementById('age');
var sub_length=document.getElementById('sub_length');
var monthly_bill=document.getElementById('monthly_bill');
var total_usage=document.getElementById('total_usage');


var arr=[]

function predictor()
{

    var a=Number(age.value)
    var g=Number(document.querySelector("input[name='Gender']:checked").value);
    var s=Number(sub_length.value)
    var m=Number(monthly_bill.value)
    var t=Number(total_usage.value)
    arr[0]=a
    arr[1]=g
    arr[2]=s
    arr[3]=m 
    arr[4]=t
    var c=document.querySelector("input[name='city']:checked").value;  
            if(c=='1000')
            {
                arr[5]=1
                arr[6]=0
                arr[7]=0
                arr[8]=0

            }
            if(c=='0100')
            {
                arr[5]=0
                arr[6]=1
                arr[7]=0
                arr[8]=0

            }
            if(c=='0010')
            {
                arr[5]=0
                arr[6]=0
                arr[7]=1
                arr[8]=0

            }
            if(c=='0001')
            {
                arr[5]=0
                arr[6]=0
                arr[7]=0
                arr[8]=1

            }
            if(c=='0000')
            {
                arr[5]=0
                arr[6]=0
                arr[7]=0
                arr[8]=0
            }
   //alert(arr)
    // In your JavaScript file
    fetch('/output')
    .then(response => response.json())
    .then(data => {
        console.log(data); // This will log the array to the console
    });

}