const age=document.getElementById('age');
let sub_length=document.getElementById('sub_length');
let monthly_bill=document.getElementById('monthly_bill');
let total_usage=document.getElementById('total_usage');


const arr=[]

function predictor()
{

    const a=Number(age.value)
    let g=Number(document.querySelector("input[name='Gender']:checked").value);
    const s=Number(sub_length.value)
    const m=Number(monthly_bill.value)
    const t=Number(total_usage.value)
    arr[0]=a
    arr[1]=g
    arr[2]=s
    arr[3]=m 
    arr[4]=t
    let c=document.querySelector("input[name='city']:checked").value;  
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

            function getdata(e)
            {
                e.preventDefault();
                let params={user_input:arr}
        
                let xhr=new XMLHttpRequest();
        
                xhr.open('post','../output',true);
                xhr.setRequestHeader('Content-type','application/json');
        
                xhr.onload=function(){
                    console.log('reached')
                }
        
                xhr.send(JSON.stringify(params))
            }
            
            getdata(e)
}