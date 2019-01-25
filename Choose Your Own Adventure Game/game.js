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
        var prison = prompt("You wake up, head pounding. After pacing for a bit, your vision clears. It appears you are a prison, though the reason why is unclear to you. /n - look around /n - go back to sleep /n - taunt the guard").toLowerCase();
        
        if (prison == "look around" || prison == "look") {
            var prisonLook = prompt("The cell is small, dirty, and damp. A rat scurries into a small hole in the corner. There is a barred window to the back, the bars so close together that there might have not been a window at all. There is an bed occupied by a snoring stranger to your right. The locked door to the front is being guarded by an armored soldier. The empty bed you woke up in is to your left. The corner of the room has a lumpy, moldy rug.");
        }
        
        else if (prison == "go back to sleep" || prison == "sleep") {
            alert("You fall back to sleep in your dirty cot. You dream of the outside world and long forgottem memories.");
            var resume = confirm("Do you wish to continue?");
            
            if (resume) {
                Prison();
            }
            else {
                alert("Game Over");
            }
            
        }
    }
    
    
    
}