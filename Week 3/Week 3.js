function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Our hero starts looking in the bathroom";
        document.getElementById("choice1").innerHTML = "Check Toilet";
        document.getElementById("choice2").innerHTML = "Check shower";
        document.getElementById("choice3").innerHTML = "Think about belly scratches"
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "C'mon I will reward you with belly scratches'";
        document.getElementById("choice1").innerHTML = "Fine I will help";
        document.getElementById("choice2").innerHTML = "If I must";
        document.getElementById("choice3").innerHTML = "Fine just stop begging"
    } else if (choice == 1 && answer1 == "Check Toilet") {
        document.getElementById("story").innerHTML = "Not in there. How did I get in there?";
        document.getElementById("choice1").innerHTML = "Dive in";
        document.getElementById("choice2").innerHTML = "Check Somewhere else";
    } else if (choice == 2 && answer2 == "Check shower") {
        document.getElementById("story").innerHTML = "Not in there? Why does this break out into song when they are in here!";
        document.getElementById("choice1").innerHTML = "Break out in song";
        document.getElementById("choice2").innerHTML = "Check somewhere else";
    } else if (choice == 3 && answer3 == "Think About belly scratches") {
        document.getElementById("story").innerHTML = "I want belly scractches but I will claw who ever touches it. What was I doing again?";
        document.getElementById("choice1").innerHTML = "Think about where to go again";
        document.getElementById("choice2").innerHTML = "Why am I here again?";

    } else if (choice == 1 && answer1 == "Fine I will help") {
        document.getElementById("story").innerHTML = "Great now where is that tail";
        document.getElementById("choice1").innerHTML = "Check the bathroom";
        document.getElementById("choice2").innerHTML = "Look around";
    } else if (choice == 2 && answer2 == "If I must") {
        document.getElementById("story").innerHTML = "Dont give me that tone";
        document.getElementById("choice1").innerHTML = "Get annoyed";
        document.getElementById("choice2").innerHTML = "Yell at hooman";
    } else if (choice == 3 && answer3 == "Fine just stop begging") {
        document.getElementById("story").innerHTML = "What did you say to me!";
        document.getElementById("choice1").innerHTML = "Forget it and walk away";
        document.getElementById("choice2").innerHTML = "Punish for insolence";
    }
    else if (choice == 1 && answer1 == "Dive in") {
        document.getElementById("story").innerHTML = "Now I am wet forget the tail" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Dry off";
        document.getElementById("choice2").innerHTML = "Run away";
    } else if (choice == 2 && answer2 == "Check Somewhere else") {
        document.getElementById("story").innerHTML = "I should check behind me!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "I found it!";
        document.getElementById("choice2").innerHTML = "That's not it";
    } else if (choice == 1 && answer1 == "Break out in song") {
        document.getElementById("story").innerHTML = "MEOOWWWWWWWWWW MEOW MEOW" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Where was I";
        document.getElementById("choice2").innerHTML = "Oops I lost my voice";
    } else if (choice == 2 && answer2 == "Check somewhere else") {
        document.getElementById("story").innerHTML = "Now where is that tail" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Check behind me";
        document.getElementById("choice2").innerHTML = "'forgets what is going on'";
    } else if (choice == 1 && answer1 == "Check the bathroom") {
        document.getElementById("story").innerHTML = "Now where is that tail" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Restart the search";
        document.getElementById("choice2").innerHTML = "Lets go eat";
    } else if (choice == 2 && answer2 == "Look around") {
        document.getElementById("story").innerHTML = "Where to look." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Check behind me. Look I found it!";
        document.getElementById("choice2").innerHTML = "Lets go eat";
    } else if (choice == 1 && answer1 == "Get annoyed") {
        document.getElementById("story").innerHTML = "I will do it myself" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Beg for Forgiveness";
        document.getElementById("choice2").innerHTML = "Ignore";
    } else if (choice == 2 && answer2 == "Yell at hooman") {
        document.getElementById("story").innerHTML = "I AM GOD AMONG BEINGS YOU WILL LISTEN TO ME." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "'Listen to the cat'";
        document.getElementById("choice2").innerHTML = "Ignore";
 

    }


}