// Single line comment
/*

Multiline comment

*/


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
                arrow:0,
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
    
        var inventory = function(){
        alert("Coins: "+player.inventory.coins+"\n Water: "+player.inventory.water+"\n Bread: "+player.inventory.bread+"\n Fish: "+player.inventory.water+"\n Apples: "+player.inventory.apple+"\n Mutton: "+player.inventory.mutton+"\n Swords: "+player.inventory.sword+"\n Daggers: "+player.inventory.dagger+"\n Axes "+player.inventory.axe+"\n Shield: "+player.inventory.shield+"\n Armor Class: "+player.inventory.armorClass+"\n Prison Keys: "+player.inventory.prison+"\n Castle Keys: "+player.inventory.castle);
    }
        
    function GetRandInt(max){
        var randInt = Math.floor(Math.random()* Math.floor(max));
        
        return randInt;
        
  
    }   
        
        
//Start game
Game();

function Game() {
    document.write("Symphony of Monsters");
    var pc = prompt("What is your name?");
    
    while(!confirm("Are you sure you want "+pc+" as a name?")){
       pc = prompt("What name do you want?");
    }
   
    alert("Welcome to the land of , "+pc+".");
    
    var characterRace = ["human", "half elf", "half druid", "half dwarf"];
    
    alert("You are a "+characterRace[Math.floor(Math.random()* 4)]+".");
    

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
                var lookUnderRug = prompt("You gather up your courage and move the rug. Some bugs scurry out from underneath. There seems to be a trapdoor. \n -open trapdoor \n -leave it");
                
                if (lookUnderRug == "open trapdoor" || lookUnderRug == "open door" || lookUnderRug == "trapdoor"){
                    var trapDoor = alert("You open the trapdoor quietly and slip inside. You go down a flight of stairs in the dark.");
                    Castle();
                }
                
                else if (lookUnderRug == "leave it" || lookUnderRug == "leave"){
                    alert("You decide to not risk going inside. You cover the trapdoor with the rug.");
                    Prison();
                }
            }
            
            //Looking in the hole in the corner
            
            else if (prisonLook == "look into the hole" || prisonLook == "look in hole" || prisonLook == "look in hole in corner" || prisonLook == "look in the hole in the corner"){
                var lookInHole = confirm("The rat from earlier doesn't seem to be there anymore. You can barely see something shiny inside. Do you want to try and take it?");
                
                if (lookInHole) {
                    alert("You reach in and grab the object. Pulling it out reveals it is a dagger. Now you have a weapon.");
                    //Adds dagger to inventory
                    inventory.dagger ++;
                    //Shows dagger in inventory
                    alert("You have "+inventory.dagger+" dagger(s).");
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
                EndGame();
            }
            
        }
        
        //Taunting guard
        
        else if (prison == "taunt the guard" || prison == "taunt guard" && inventory.dagger >= 0){
            alert("You say something snarky to the guard. His tail twitches and he tells you to be quiet. It is clear from his tone that he is annoyed.");
            var botherGuard = prompt("Do you want to bother him more? \n -yes \n -no");
            
            if (botherGuard == "yes") {
                alert("The guard opens the door and slashes at you with his axe, killing you. I suppose you should have checked if he was armed first... Your journey is over before it had even begun.");
                EndGame();
            }
            else if (botherGuard == "no"){
                Prison();
            }
            else {
                alert("I don't understand.");
            }
            
            }
            else {
                alert("I don't understand "+botherGuard+".");
                botherGuard();
            }
            
        
        }
        
        
    }
    
    
     
    Castle();
    
    function Castle(){
        var insideCastle = prompt("There seems to be no one else here. - upstairs - downstairs - courtyard - balcony - look").toLowerCase();
        
            switch(insideCastle){
                case "upstairs":
                    var upstairs = alert("The only thing up there is the prison. You go back downstairs.");
                    Castle();
                break;
                case "downstairs":
                    alert("You go downstairs.");
                    Shop();
                
                break;
                case "courtyard":
                    var courtyard = prompt("You go into the courtyard. The remains of one, actually. No royalty has lived here for a long time. - north - back");
                    switch(courtyard){
                        case "north":
                            var courtyardNorth = alert("You exit through the crumbled wall of the courtyard.");
                            Swamp();
                    break;
                        case "back":
                            alert("You go back to the castle.");
                            Castle();
                    break;
                        default:
                            alert("I don't understand "+courtyard+".");
                            courtyard;
                    }
                    Castle();
                break;
                case "balcony":
                    alert("You go to the balcony. It overlooks the rundown courtyard. The elements have broken down the north wall. There is nothing useful here.");
                    Castle();
                break;
                default:
                    alert("I don't understand "+insideCastle+".");
                    Castle();
                break;
            }
        }
    
    Swamp();
    
    function Swamp() {
        var swampEnv = prompt("Muddy, misquito infested swamp. \n -follow path \n -swim");
        
        if (swampEnv == "follow" || swampEnv == "follow path"){
            var swampPath = prompt("You enter on the swamp path, heading north. Probably the safer choice. As you walk, you see a hut in the distance. As you approach it, you see light in the windows. \n -enter hut \n -burn down hut \n -continue north");
                if(swampPath == "enter" || swampPath == "enter hut"){
                    Smithshop();
                }
                else if (swampPath == "burn down hut" || swampPath == "burn hut down" || swampPath == "burn hut"){
                    alert("You somehow burn down the house, feeling much to happy about it to be a normal human. I sure hope there wasn't anyone inside. ...Maybe you were in prison for a reason.");
                    swampPath2();
                }
                else if (swampPath == "continue" || swampPath == "continue north"){
                    field = prompt("You continue to walk along the path until well after dark. The environment slowly changes from a swamp to an open field. You can see a village about a mile away, but to your left there is a fruit tree. \n -sleep under the tree \n -continue to village");
                    
                    if (field == "sleep" || field == "sleep under tree" || field =="sleep under the tree"){
                        alert("The tree is not a tree, but a monster in disguise! You were eaten.");
                        EndGame();
                    }
                    else if (field == "continue" || field == "continue to village"){
                        alert("You continue on to the village.");
                        WinGame();
                    }
                }
        }
            else if (swampEnv == "swim"){
                alert("You barely wade in the muddy water before being eaten by a voltfin. Honestly, what were you expecting?");
        }
            else{
                alert("I don't understand "+swampEnv+".");
                Swamp();
        }
        
        var swampPath2 = alert("There is nothing here but the remains of a hut.");
        EndGame();
        
        
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
    
    function Shop(){
        var arrowShop = 100;
        var arrowPrice = 2;
        var foodShop = 20
        var foodPrice = 3
        
        var purchase = prompt("Welcome, what would you like to buy? \n - arrows"+arrowShop+" \n - food"+foodShop).toLowerCase();
        
        if(purchase == "arrows" || purchase == "arrow"){
            var arrowCon = prompt("How many arrows do you wish to buy?");
            
            while(!confirm("Are you sure you want to purchase "+arrowCon+" arrows for "+arrowPrice+" per arrow?")){
                arrowCon = prompt("How many arrows will you purchase?");
            }
            
            for(i = 1; i <= arrowCon; i++){
                //Adds arrow to inventory
                inventory.arrow ++;
                console.log("You have "+inventory.arrow+" arrows.");
                //Removes coins from inventory
                inventory.coins --;
                console.log("You have "+inventory.coins+" coins left.");
                //Removes arrows from shop total
                arrowShop --;
            }
            alert("You have purchased "+arrowCon+" arrows. Thank you.");
            Shop();
        }
        
        else if(purchase == "food"){
            var foodCon = prompt("How many loafs of bread to you wish to purchase?");
            
            while(!confirm("Are you sure you want to purchase "+foodCon+" loafs of bread for "+foodPrice+" per loaf?")){
                foodCon = prompt("How many loafs of bread to you wish to buy?");
            }
            
        for(i = 1; i <= foodCon; i++){
            //Adds bread to inventory
            inventory.bread ++;
            console.log("You have "+inventory.bread+" loafs of bread.");
            //Removes coins from inventory
            inventory.coins --;
            console.log("You have "+inventory.coins+" coins left.");
            //Removes arrows from shop total
            arrowShop --;
        }
            alert("You have purchased "+foodCon+" loafs of bread. Thank you.");
            Shop();
        }
        
        else if(purchase == "exit" || purchase == "leave"){
            Castle();
        }
            
    }
    
    
    EndGame();
        endGame = alert("You lose.");
        
    WinGame();
        winGame = alert("The people of the village welcome you. You join a mercenary guild shortly after.");

    
  
   

    
