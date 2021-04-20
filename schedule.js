$(document).ready(function (){
    $("form#week").on("change", schedule);
});

function schedule(event)
{
    event.preventDefault();

    let checkedDay = $("input[name=day]:checked")

    let dayChosen = "";

    checkedDay.each(function (){
        dayChosen += $(this).val()
    })

    if (dayChosen === "monday"){
        $("#eventOutput").text("work")
        $("#timeOutput").text("10:30am - 4:00pm")
        $("#eventOutput2").text("school")
        $("#timeOutput2").text("6:00pm - 8:00pm")
    }
    else if(dayChosen === "tuesday")
    {
        $("#eventOutput").text("free time")
        $("#timeOutput").text("9:30am - 12:00pm")
        $("#eventOutput2").text("school")
        $("#timeOutput2").text("2:00pm - 5:00pm")
    }
    else if(dayChosen === "wednesday"){
        $("#eventOutput").text("exercise")
        $("#timeOutput").text("7:30am - 9:30am")
        $("#eventOutput2").text("work")
        $("#timeOutput2").text("12:00pm - 5:00pm")
    }
    else if (dayChosen === "thursday"){
        $("#eventOutput").text("yoga")
        $("#timeOutput").text("7:30am - 9:30am")
        $("#eventOutput2").text("work")
        $("#timeOutput2").text("12:00pm - 5:00pm")
    }
    else if(dayChosen === "friday"){
        $("#eventOutput").text("exercise")
        $("#timeOutput").text("7:30am - 9:30am")
        $("#eventOutput2").text("work")
        $("#timeOutput2").text("4:00pm - 9:00pm")
    }
    else if(dayChosen === "saturday"){
        $("#eventOutput").text("yoga")
        $("#timeOutput").text("7:30am - 9:30am")
        $("#eventOutput2").text("work")
        $("#timeOutput2").text("4:00pm - 11:30pm")
    }
    else if(dayChosen === "sunday"){
        $("#eventOutput").text("exercise")
        $("#timeOutput").text("7:30am - 9:30am")
        $("#eventOutput2").text("work")
        $("#timeOutput2").text("4:00pm - 11:30pm")
    }
}