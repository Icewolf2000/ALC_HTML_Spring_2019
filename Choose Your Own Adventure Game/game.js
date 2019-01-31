// Single line comment
/*

Multiline comment

*/

Game();

function Game() {
    document.write("Symphony of Monsters");
    var pc = prompt("What is your name?");
    alert("Welcome to the land of " + pc);
    
    Prison();
    
    function Prison() {
        var prison = prompt("You wake up, head pounding. After pacing for a bit, your vision clears. It appears you are a prison, though the reason why is unclear to you. What will you do? \n -look around \n -go back to sleep \n -taunt the guard").toLowerCase();
        
        if (prison == "look around" || prison == "look") {
            var prisonLook = prompt("The cell is small, dirty, and damp. A rat scurries into a small hole in the corner. There is a barred window to the back, the bars so close together that there might have not been a window at all. There is an bed occupied by a snoring stranger to your right. The locked door to the front is being guarded by an armored lacertillian soldier. The lizard-like creature is at least a foot taller than you, and is sharpening a large axe. The empty bed you woke up in is to your left. The corner of the room has a lumpy, moldy rug. \n -wake stranger \n -look out window \n -look under rug \n -look in hole in corner");
            
            if (prisonLook == "look out window"){
                var windowLook = prompt("You can barely see out the window, but it looks like the cell is up very high. It is impossible to tell where you are in the world. \n -continue to look out window \n -leave window");
                
                if (windowLook == "continue to look out window" || windowLook == "continue"){
                    alert("You continue to look out the window. What is out there? How could you escape? Even if you did manage to, you wouldn't know were to go. Maybe it is better to just stay here, where you are safe. Yes, staying here is what you will do.")
                }
                else {
                    Prison();
                }
            }
            else if (prisonLook == "wake stranger"){
                
            }
        }
        
        else if (prison == "go back to sleep" || prison == "sleep") {
            alert("You manage fall back to sleep in your dirty cot. You dream of the outside world and adventures untold.");
            var resume = confirm("Do you wish to continue?");
            
            if (resume) {
                Prison();
            }
            else {
                alert("Game Over");
            }
            
        }
        
        else if (prison == "taunt the guard" || prison == "taunt guard"){
            alert("You say something snarky to the guard. His tail twitches and he tells you to be quiet. It is clear from his tone that he is annoyed.");
            var botherGuard = confirm("Do you want to bother him more?")
            
            if (botherGuard) {
                alert("The guard opens the door and slashes at you with his axe, killing you. I suppose you should have checked if he was armed first... Your journey is over before it had even begun.");
            }
            else {
                Prison();
            }
            
        }    
        
        else {
            alert("I don't understand "+prison);
        }
    }
    
    function Swamp() {
        var swampEnv = prompt("Muddy, misquito infested swamp. \n - follow path \n - swim");
        
        if (swampEnv == "follow" || swampEnv == "follow path") {
            var swampPath = propmt("You enter on the swamp path, heading north. Probably the safer choice. As you walk, you see a hut in the distance. As you approach it, you see light in the windows. \n -enter hut \n -burn down hut");
            if(swampPath == "enter" || swampPath == "enter hut") {
                
            }
            else if (swampPath == "burn down hut" || swampPath == "burn hut down" || swampPath == "burn hut") {
                alert("You burn down the house, feeling much to happy about it to be a normal human. I sure hope there wasn't anyone inside. ...Maybe you were in prison for a reason.");
            }
        }
        else if (swampEnv == "Swim") {
            alert("You barely wade in the muddy water before being eaten by a voltfin. Honestly, what were you expecting?");
        }
        else{
            alert("I don't understand "+swampEnv);
            Swamp();
        }
        
        
    }
    
}