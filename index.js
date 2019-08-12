var countdown= prompt("Enter 1 to count down. Enter 2 to count up. Press q to quit");
var quit="q";
valid=true

 if(countdown==="1")
    {
        var countdownvar=prompt("What number do you want to count down to?");
        var x=0;
        while (countdownvar>=x)
        {
            console.log(countdownvar);
            countdownvar--
        }

    }
    if (countdown==="2")
    {
        var countup=parseInt(prompt("what number do you want to count up to?"))
        x=0;

        while(x<countup)
        {
            console.log(x);
            x++
        }
    }
    else(countdown===quit)
{
        valid
}


    // }
    // else if( countdown==="2")
    // {
    //     var countupvar=prompt("What number do you want to count up to?")
    //     while (countupvar<=0);
    //     {
    //         countupvar++;
    //         console.log(countupvar)
    // }
    // }

