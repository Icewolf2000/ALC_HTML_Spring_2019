// Single line comment
/*

Multiline comment

*/

//Start of game

Game();

function Game() {
    document.write("Symphony of Monsters");
    var pc = prompt("What is your name?");
    alert("Welcome to the land of , "+pc+".");
    
    var inventory = function(){
        alert("Coins: "+player.inventory.coins+"\n Water: "+player.inventory.water+"\n Bread: "+player.inventory.bread+"\n Fish: "+player.inventory.water+"\n Apples: "+player.inventory.apple+"\n Mutton: "+player.inventory.mutton+"\n Swords: "+player.inventory.sword+"\n Daggers: "+player.inventory.dagger+"\n Axes "+player.inventory.axe+"\n Shield: "+player.inventory.shield+"\n Armor Class: "+player.inventory.armorClass+"\n Prison Keys: "+player.inventory.prison+"\n Castle Keys: "+player.inventory.castle);
    }
    
    
    var player = {
        name:"Rainger",
        race:"Human",
        age:20,
        health:100,
        inventory:{
            coins:200,
            food:{
                water:0,
                bread:0,
                fish:0,
                apple:0,
                mutton:0,
            },
            
            weapons:{
                sword:0,
                dagger:0,
                axe:0, 
            },
              armor:{
                shield:0,
                armorClass:0,
            }, 
            keys:{
                prison:0,
                castle:0,
            },
      
        }
    }
   
    
    function GetRandInt(max){
        var randInt = Math.floor(Math.random()* Math.floor(max));
        
        return randInt;
        
  
    }
    
  Prison();
    
    function Prison() {
        var prison = prompt("You wake up, head pounding. After pacing for a bit, your vision clears. It appears you are a prison, though the reason why is unclear to you. What will you do? \n -look around \n -go back to sleep \n -taunt the guard").toLowerCase();
       
       
        //Look around
        
        if (prison == "look around" || prison == "look") {
            var prisonLook = prompt("The cell is small, dirty, and damp. A rat scurries into a small hole in the corner. There is a barred window to the back, the bars so close together that there might have not been a window at all. There is an bed occupied by a snoring stranger to your right. The locked door to the front is being guarded by an armored lacertillian soldier. The lizard-like creature is at least a foot taller than you, and is sharpening a large axe. The empty bed you woke up in is to your left. The corner of the room has a lumpy, moldy rug. \n -wake stranger \n -look out window \n -look under rug \n -look in the hole in the corner");
            
            //Look out window
            
            if (prisonLook == "look out window"){
                var windowLook = prompt("You can barely see out the window, but it looks like the cell is up very high. It is impossible to tell where you are in the world. \n -continue to look out window \n -leave window");
                
                if (windowLook == "continue to look out window" || windowLook == "continue"){
                    alert("You continue to look out the window. What is out there? How could you escape? Even if you did manage to, you wouldn't know were to go. Maybe it is better to just stay here, where you are safe. Yes, staying here is what you will do.");
                    EndGame();
                }
                else {
                    Prison();
                }
            }
            
            //Waking stranger
            
            else if (prisonLook == "wake stranger"){
                var wakeStranger = alert("The stranger grunts and rolls over. He doesn't appear to be waking up anytime soon.");
                Prison();
            }
            
            //Looking under the rug
            
            else if (prisonLook == "look under rug" || prisonLook == "look under the rug"){
                var lookUnderRug = alert("You gather up your courage and move the rug. Some bugs scurry out from underneath, but there is nothing else.");
                Prison();
            }
            
            //Looking in the hole in the corner
            
            else if (prisonLook == "look into the hole" || prisonLook == "look in hole" || prisonLook == "look in hole in corner" || prisonLook == "look in the hole in the corner"){
                var lookInHole = confirm("The rat from earlier doesn't seem to be there anymore. You can barely see something shiny inside. Do you want to try and take it?");
                
                if (lookInHole) {
                    alert("You reach in and grab the object. Pulling it out reveals it is a dagger. Now you have a weapon.");
                    //Adds dagger to inventory
                    inventory.dagger ++;
                    //Shows dagger in inventory
                    alert("You have " +inventory.dagger+" dagger(s).");
                    Prison();
                }
                
                else {
                    alert("You decide to leave it where it is.");
                    Prison();
                }
                
                
            }
       
        }
        
        //Sleep in prison
        
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
        
        //Taunting guard
        
        else if (prison == "taunt the guard" || prison == "taunt guard" && inventory.dagger > 0){
            alert("You say something snarky to the guard. His tail twitches and he tells you to be quiet. It is clear from his tone that he is annoyed.");
            var botherGuard = prompt("Do you want to bother him more? \n -yes \n -no");
            
            if (botherGuard == "yes" && inventory.dagger < 1) {
                alert("The guard opens the door and slashes at you with his axe, killing you. I suppose you should have checked if he was armed first... Your journey is over before it had even begun.");
                EndGame();
            }
            
            else if (botherGuard == "yes" && inventory.dagger >= 1){
                var deadGuard = prompt("The guard opens the door. You quickly slash at him using the dagger you found, and he falls dead on the floor. \n -take axe \n -take keys \n -leave prison");
                
                if (deadGuard == "take axe" || deadGuard == "axe"){
                    
                }
                
                else if (deadGuard == "take keys" || deadGuard == "keys"){
                    
                }
                else if (deadGuard == "leave prison" || deadGuard == "leave" && inventory.prison >= 1){
                    
                }
                
                else{
                    alert("I don't understand "+deadGuard);
                }
                
                
            }
            else {
                Prison();
            }
            
        }
        
        
        else {
            alert("I don't understand "+prison);
            Prison();
        }
    }
    
    
    Swamp();
    
    function Swamp() {
        var swampEnv = prompt("Muddy, misquito infested swamp. \n -follow path \n -swim");
        
        if (swampEnv == "follow" || swampEnv == "follow path") {
            var swampPath = propmt("You enter on the swamp path, heading north. Probably the safer choice. As you walk, you see a hut in the distance. As you approach it, you see light in the windows. \n -enter hut \n -burn down hut");
                if(swampPath == "enter" || swampPath == "enter hut"){
                    Smithshop();
                }
                else if (swampPath == "burn down hut" || swampPath == "burn hut down" || swampPath == "burn hut"){
                    alert("You somehow burn down the house, feeling much to happy about it to be a normal human. I sure hope there wasn't anyone inside. ...Maybe you were in prison for a reason.");
                }
        }
            else if (swampEnv == "swim"){
                alert("You barely wade in the muddy water before being eaten by a voltfin. Honestly, what were you expecting?");
        }
            else{
                alert("I don't understand "+swampEnv+".");
                Swamp();
        }
        
        
    }
    
    
    Smithshop();
    
    function Smithshop(){
        alert("The smith is busy working. His apprentice stops shining the shields to assist you.");
        
            var smithshop = prompt("Buy somthing, will ya? \n -buy sword \n -buy shield \n -buy dagger \n -buy armor \n -leave").toLowerCase();
                if(smithshop == "buy sword" || smithshop == "sword" && inventory.coins >= 100){
                    var swordPurchase = confirm("You want a sword?");
                        if(swordPurchase){
                            //Adds sword to inventory
                            inventory.sword ++;
                            //Shows sword(s) owned
                            alert("You own " +inventory.sword+" swords.");
                            //Takes money from inventory
                            inventory.coins = inventory.coins - 100;
                            // displays coins in inventory
                            alert("You have "+inventory.coins+" coins remaining.");
                            Smithshop();
                        }
                        else{
                            alert("That's a shame.");
                            Smithshop();
                        }
                    
                }
        
                else if(smithshop == "buy shield" || smithshop == "shield" && inventory.coins >= 75){
                    var shieldPurchase = confirm("You want a shield?");
                        if(shieldPurchase){
                            //Adds shield to inventory
                            inventory.shield ++;
                            //Shows shield(s) owned
                            alert("You own "+inventory.shield+" shields.");
                            //Takes money from inventory
                            inventory.coins = inventory.coins - 75;
                            //displays coins in inventory
                            alert("You have "+inventory.coins+" coins remaining.");
                            Smithshop();
                        }
                        else{
                            alert("That's a shame.");
                            Smithshop();
                        }
                   }
                       
                else if (smithsop == "buy dagger" || smithshop == "dagger" && inventory.coins >= 50){
                    var knifePurchase = confirm("You want a dagger?");
                        if(knifePurchase){
                            //Adds dagger to inventory
                            inventory.dagger ++;
                            //Shows dagger(s) owned
                            alert("You own "+inventory.knife+" daggers.");
                            //Takes money from inventory
                            inventory.coins = inventory.coins - 50;
                            //displays coins in inventory
                            alert("You have "+inventory.coins+" coins remaining.");
                            Smithshop();
                        }
                        else{
                            alert("That's a shame.");
                            Smithshop();
                        }
                }
                
                else if (smithshop == "buy armor" || smithshop == "armor" && inventory.coins >= 100){
                    var armorPurchase = confirm("You want armor?");
                        if(armorPurchase){
                            //Adds armor to inventory
                            inventory.knife ++;
                            //Shows armor owned
                            alert("You own "+inventory.armor+" armor.");
                            //Takes money from inventory
                            inventory.coins = inventory.coins - 100;
                            //displays coins in inventory
                            alert("You have "+inventory.coins+" coins remaining.");
                            Smithshop();
                        }
                        else{
                            alert("That's a shame.");
                            Smithshop();
                        }
                    } 
        
                else if(smithshop == "leave"){
                    alert("You decide to leave.");
                    Swamp();
                }
                else{
                    alert("I don't understand "+smithshop+".");
                }
    
                }
    /*Castle();
    
    function Castle(){
        var insideCastle(" - upstairs - downstairs - courtyard - balcony - look").toLowerCase();
        
            switch(insideCastle){
                case "upstairs":
                    var upstairs = prompt("You walk a long flight of stairs to the top floor of the castle.");
                
                    Castle();
                break;
                case "downstairs":
                    alert("You go downstairs.");
                
                break;
                case "courtyard":
                    alert("You go into the courtyard.");
                    Castle();
                break;
                case "balcony":
                    alert("You go to the balcony.");
                    Castle();
                break;
                default:
                alert("I don't know what "+insideCastle" is!");
                Castle();
                break;
            }
        }
    */
    
        
    }
    
  
   

    
