hour=document.getElementById("hour"); 
minute=document.getElementById("minute");
second=document.getElementById("second");
start=document.getElementById("start")
reset=document.getElementById("reset") 
pause=document.getElementById("pause");
work=document.getElementById("work");
tracker=document.getElementById("tracker");
tracker.style.whiteSpace="pre";
var countdown;
start.addEventListener("click", function clicked() { 
    clearInterval(countdown);
    countdown = setInterval(function() { 
        if (second.textContent!="59") {
            let new_second=Number(second.textContent)+1;
            second.textContent=new_second; 
    }
        else { 
            second.textContent="00"; 
            if (minute.textContent!="59") { 
                let new_minute=Number(minute.textContent)+1;
                minute.textContent=new_minute;
        }
            else { 
                minute.textContent="00";
                let new_hour=Number(hour.textContent)+1; 
                hour.textContent=new_hour;
            }
        }
    }, 1000)
}, false);
pause.addEventListener("click", function() { 
    clearInterval(countdown);
})
reset.addEventListener("click",function() { 
    clearInterval(countdown);
    if (!work.value.trim().length) { 
        tracker.textContent+= hour.textContent + " hours " + minute.textContent + " minutes " + second.textContent + " seconds" + "\r\n";
    }
    else { 
        tracker.textContent+= work.value; 
        tracker.textContent+= " for ";
        tracker.textContent+= hour.textContent + " hours " + minute.textContent + " minutes " + second.textContent + " seconds" + "\r\n";
    }
    second.textContent="00"; 
    minute.textContent="00"; 
    hour.textContent="00";
})






