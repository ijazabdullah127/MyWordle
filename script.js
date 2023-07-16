
const wordArray = [

    { word: 'Mango', hint: 'Tropical juicy fruit' },
    { word: 'Apple', hint: 'Red or green fruit' },
    { word: 'Banana', hint: 'Yellow curved fruit' },
    { word: 'Carrot', hint: 'Orange vegetable for salads' },
    { word: 'Dance', hint: 'Movement to music' },
    { word: 'Elephant', hint: 'Large mammal with a trunk' },
    { word: 'Flower', hint: 'Colorful decorative plant' },
    { word: 'Guitar', hint: 'Stringed musical instrument' },
    { word: 'Happy', hint: 'Feeling of joy' },
    { word: 'Island', hint: 'Land surrounded by water' },
    { word: 'Jungle', hint: 'Overgrown dense forest' },
    { word: 'Kitten', hint: 'Young cat' },
    { word: 'Lemon', hint: 'Sour yellow citrus' },
    { word: 'Monkey', hint: 'Agile and curious primate' },
    { word: 'Nectar', hint: 'Sweet liquid from flowers' },
    { word: 'Ocean', hint: 'Vast saltwater body' },
    { word: 'Piano', hint: 'Keyboard musical instrument' },
    { word: 'Queen', hint: 'Female ruler' },
    { word: 'River', hint: 'Flowing watercourse' },
    { word: 'Sunset', hint: 'Daily disappearing sun' },
    { word: 'Tiger', hint: 'Large striped feline' },
 
    { word: 'Whale', hint: 'Large marine mammal' },

    { word: 'Yogurt', hint: 'Custard-like dairy product' },
    { word: 'Zebra', hint: 'Black and white striped animal' },
    { word: 'Ant', hint: 'Small insect in colonies' },
    { word: 'Bird', hint: 'Feathered flying creature' },
    { word: 'Cake', hint: 'Sweet baked dessert' },
    { word: 'Dog', hint: 'Loyal domesticated mammal' },
    { word: 'Eagle', hint: 'Large predatory bird' },
    { word: 'Fish', hint: 'Aquatic creature' },
    { word: 'Garden', hint: 'Plant cultivating area' },
    { word: 'Horse', hint: 'Riding and racing mammal' },
    { word: 'Ice', hint: 'Solid water form' },
    { word: 'Jam', hint: 'Fruit-based sweet spread' },
    { word: 'Kiwi', hint: 'Fuzzy brown fruit' },
    { word: 'Lion', hint: 'Carnivorous feline' },
    { word: 'Nest', hint: 'Birds home for eggs' },
    { word: 'Owl', hint: 'Nocturnal bird of prey' },

    { word: 'Quack', hint: 'Sound made by ducks' },
    { word: 'Rain', hint: 'Water falling from clouds' },
    { word: 'Snake', hint: 'Legless reptile' },
    { word: 'Turtle', hint: 'Reptile with a protective shell' },


    { word: 'Water', hint: 'Transparent odorless liquid' },
    { word: 'X-ray', hint: 'Medical imaging radiation' },
    { word: 'Yawn', hint: 'Wide-mouthed involuntary action' },
    { word: 'Zoo', hint: 'Animal exhibition facility' },
    { word: 'Air', hint: 'Invisible gaseous substance' },
    { word: 'Bear', hint: 'Heavy-built large mammal' },
    { word: 'Cat', hint: 'Small carnivorous pet' },
    { word: 'bird', hint: 'Feathered creature' },
    { word: 'tree', hint: 'Tall plant with a trunk' },
    { word: 'lamp', hint: 'Light source' },
    { word: 'moon', hint: 'Natural satellite of Earth' },
    { word: 'cake', hint: 'Sweet baked dessert' },
    { word: 'fish', hint: 'Aquatic creature' },
    { word: 'door', hint: 'Entrance or exit barrier' },
    { word: 'rain', hint: 'Water falling from the sky' },
    { word: 'boat', hint: 'Watercraft used for travel' },
    { word: 'sand', hint: 'Granular material on beaches' },
    { word: 'keys', hint: 'Objects to open locks' },
    { word: 'fire', hint: 'Combustion producing heat and light' },
    { word: 'moon', hint: 'Natural satellite of Earth' },
    { word: 'time', hint: 'Measurement of events' },
    { word: 'star', hint: 'Luminous celestial body' },
    { word: 'game', hint: 'Activity for amusement or competition' },
    { word: 'book', hint: 'Written or printed work' },
    { word: 'hand', hint: 'Part of the body used for grasping' },
    { word: 'rain', hint: 'Water falling from the sky' },
    { word: 'salt', hint: 'Mineral used for seasoning' },
    { word: 'wind', hint: 'Moving air' },
    { word: 'snow', hint: 'Frozen precipitation' },
    { word: 'home', hint: 'Place of residence' },
    { word: 'cake', hint: 'Sweet baked dessert' },
    { word: 'leaf', hint: 'Flat structure of a plant' },
    { word: 'bird', hint: 'Feathered creature' },
    { word: 'love', hint: 'Strong affection or attachment' },
    { word: 'song', hint: 'Musical composition with lyrics' },
    { word: 'rose', hint: 'Flower known for its beauty and fragrance' },
    { word: 'game', hint: 'Activity for amusement or competition' },
    { word: 'lamp', hint: 'Light source' },
    { word: 'door', hint: 'Entrance or exit barrier' },
    { word: 'cake', hint: 'Sweet baked dessert' },
    { word: 'hand', hint: 'Part of the body used for grasping' },
    { word: 'book', hint: 'Written or printed work' },
    { word: 'salt', hint: 'Mineral used for seasoning' },
    { word: 'wind', hint: 'Moving air' },
    { word: 'moon', hint: 'Natural satellite of Earth' },
    { word: 'rose', hint: 'Flower known for its beauty and fragrance' },
    { word: 'love', hint: 'Strong affection or attachment' },
    { word: 'game', hint: 'Activity for amusement or competition' },
    { word: 'bird', hint: 'Feathered creature' },
    { word: 'lamp', hint: 'Light source' },
    { word: 'door', hint: 'Entrance or exit barrier' },
    { word: 'hand', hint: 'Part of the body used for grasping' },
    { word: 'salt', hint: 'Mineral used for seasoning' },
    { word: 'moon', hint: 'Natural satellite of Earth' },
    { word: 'rose', hint: 'Flower known for its beauty and fragrance' },
    { word: 'love', hint: 'Strong affection or attachment' },
    // Add more words and hints here
    // ...
  ];
  var attempts=Math.floor((Math.random()*10))+1;
var wrong_attempts=[];
var usersequence=[];
var win=false;
var lose=false;
const randomIndex = Math.floor(Math.random() * wordArray.length);
const randomWord = wordArray[randomIndex].word;
const randomHint = wordArray[randomIndex].hint;
usersequence = Array(randomWord.length).fill('-')
for(var i=randomWord.length+1;i<7;i++)
{
    $(".l"+i).hide();
}
$("#hint").text("Hint:   "+randomHint);
$("#guess").text("Remaining Guesses:  "+attempts);
function compareArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
  
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  
    return true;
  }
  
function check(key)
{ 
    var isNotPresent = !randomWord.includes(key);
    var isNotinattempts=!wrong_attempts.includes(key);

    if (isNotPresent && isNotinattempts)
     {
         wrong_attempts.push(key);
         attempts--;    
         if(attempts===0)
         {
            lose=true;
         }    
         $("#wrong-letters").text("Wrong Letters: "+wrong_attempts);
         $("#guess").text("Remaining Guesses:  "+attempts);
    }
    else if(randomWord.includes(key))
    {
      var currentIndex =  randomWord.indexOf(key);     
      usersequence[currentIndex]=randomWord[currentIndex];
      $(".l"+(currentIndex+1)).text(key); 
    
    for(var i=currentIndex+1;i<randomWord.length;i++)
    {
        var nextIndex = randomWord.indexOf(key, i + 1);
        console.log(nextIndex);
        if(nextIndex!==-1)
        {
            $(".l"+(nextIndex+1)).text(key);
            usersequence[nextIndex]=randomWord[nextIndex];
        }
        
    }
    }
    console.log(usersequence);
    console.log(attempts);
if(compareArrays(usersequence,randomWord))
{
    setTimeout(function()
    {
        alert("Congratulations You found the word!");
        location.reload();
    }
    ,200);
 
  
}

else if(attempts===0)
{
    setTimeout(function()
    {
        alert("Game over! You don't have remaining guesses");
        location.reload();
    }
    ,200);
}


    
}
function correct_answer()
{
    for( var i=0;i<randomWord.length;i++)
    {
        $(".l"+(i+1)).text(randomWord[i]);
    }
}
  





$(document).keypress(function(event)
{
   if(attempts>0)
   check(event.key);
   
  

}
)
$(".reset").on("click",function()
{
    
        location.reload();
     
}
)


