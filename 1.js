function leap()
{
    var a=document.getElementById("year").value;

    if(a%4==0 && a%100!=0 || a%400==0)
    {
        document.getElementById("ans").innerText="this is a leap year"
    }
    else{
        document.getElementById("ans").innerText="this is a not a leap year"
    }
}

function vote()
{
    var a=document.getElementById("age").value;

    if(a>=18)
    {
        document.getElementById("ans").innerText="you are eligible for vote";
        console.log("you are eligible for vote");
    }
    else
    {
        document.getElementById("ans").innerText="you are not eligible for vote";
        console.log("you are not");
    }
}

function temperature()
{
    var b=document.getElementById("temper").value;

    if(b<=25)
        {
            document.getElementById("answer").innerHTML="its is moderate";
        }
    else
        {
            document.getElementById("answer").innerHTML="it is hot";
        }
}

function maxnumber()
{
    var a=document.getElementById("fn").value;
    var b=document.getElementById("sn").value;
    var c=document.getElementById("tn").value;

    if(a>b && a>c)
        {
            document.getElementById("a").innerText="a has largest value";
        }
    else if(b>c)
        {
            document.getElementById("a").innerText="b has a largest value";
        }
    else 
        {
            document.getElementById("a").innerText="c has a largest value";
        }
}

function even()
{
    var number=document.getElementById("number").value;

    if(number%2==0)
        {
            document.getElementById("an").innerText="this number is even";
        }
    else
    {
        document.getElementById("an").innerHTML="this number is odd";
    }
}

function interset()
{
    var p=document.getElementById("principal").value;
    var r=document.getElementById("rate").value;
    var t=document.getElementById("time").value;

    var total=(p*r*t)/100;

    if(total>=0)
        {
             document.getElementById("checks").innerText="its works";
        }
    else
        {
            document.getElementById("checks").innerText="error its not work";
        }

}



function vowel()
{
    var number=document.getElementById("vowe").value;

    if(number=='a' || number=='e'  || number=='i' || number=='o' || number=='u')
        {
            document.getElementById("check").innerText="the given letter is vowel";
        }
    else
        {
            document.getElementById("check").innerText="the given letter is consonant"
        }
}

function  restriction()
{
    var res=document.getElementById("age").value;

    if(res>13)
        {
            document.getElementById("asd").innerText="Your age is granted";
        }
    else
        {
            document.getElementById("asd").innerHTML="sorry you can't get access";
        }

}


function divisble()
{
    var va=document.getElementById("nu").value;

    if(va%3==0 && va%5==0)
        {
            document.getElementById("di").innerText="the number is divisible by both";
        }
    else
        {
            document.getElementById("di").innerText="the number is not divisible by both";
        }
}