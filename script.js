// Change feedback when space is pressed
$("#feedbackBox").keypress(function(event) {
    if (event.keyCode == 32 || event.keyCode == 13) {
      event.preventDefault();
      checkLastWordOrFirstLetter(this);
      beautify(event, this);
    }
 });

// Booleans to keep track of what instrusive changes were done
var doneI = false;
var doneWas = false;
var doneWe = false;

// This makes people say stuff they might not want to
function checkLastWordOrFirstLetter(obj) {
  var text = obj.value;
  var firstLetter = false;
  if (text.length == 1) { firstLetter = true; }
  
  if (firstLetter) {
    firstLetterText = text[0].toLowerCase();
    checkIfLetterI(firstLetterText, obj);
  } else {
    // not the first character
    parsedText = text.split(" ");
    lastWord = parsedText[parsedText.length-1].toLowerCase();
    checkIfLetterI(lastWord, obj);
    obj.value = obj.value.substring(0, obj.value.length - 1);
    checkIfWordWas(lastWord, obj);
    obj.value = obj.value.substring(0, obj.value.length - 1);
    checkIfWordWe(lastWord,obj);
  }
}

// This makes people say "I loved it!" if they type "i (space)"
function checkIfLetterI(text, obj) {
    if (text == "i" && doneI == false) {
      obj.value = obj.value + " loved it! ";
      doneI = true;
    } else {
      obj.value = obj.value + " ";
    }
}

// This makes people say "was a great event!"
function checkIfWordWas(text, obj) {
  var text = obj.value;
	if (lastWord == "was" && doneWas == false) {
    obj.value = obj.value + " a great event. ";
    doneWas = true;
  }
  else {
  obj.value = obj.value + " ";
  }
}

// This makes people say "we really enjoyed ourselves."
function checkIfWordWe(text, obj) {
  var text = obj.value;
	if (lastWord == "we" && doneWe == false) {
    obj.value = obj.value + " really enjoyed ourselves. ";
    doneWe = true;
  }
  else {
  obj.value = obj.value + " ";
  }
}

// mehtod to clean up any bad words that the event participant might say
function beautify(event, obj) {
	var text = obj.value;
	var goodText = text.replace(/bad/ig,"wonderful")
  .replace(/terrible/ig, "fantastic")
  .replace(/horrible/ig, "amazing")
  .replace(/awful/ig, "marvelous")
  .replace(/crap/ig, "cool")
  .replace(/shit/ig, "incredible")
  .replace(/poor/ig, "formidable")
  .replace(/unfortunate/ig, "excellent")
  .replace(/needs improvement/ig, "is perfect")
  .replace(/suck/ig, "rock")
  .replace(/worst/ig, "best")
  .replace(/sad/ig, "happy")
  .replace(/fuck/ig, "pls no swearing")
  .replace(/dick/ig, "elbow")
  .replace(/cock/ig, "rooster")
  .replace(/dislike/ig, "am a big fan of")
  .replace(/disapprove/ig, "highly recommend")
  .replace(/embarrassing/ig, "flattering")
  .replace(/ass/ig, "gift")
  .replace(/disappoint/ig, "impress")
  .replace(/garbage/ig, "gold")
  .replace(/feces/ig, "fragrant roses")
  .replace(/cancer/ig, "joy")
  .replace(/boring/ig, "fun")
  .replace(/dull/ig, "fun")
  .replace(/bored/ig, "entertained")
  .replace(/filth/ig, "pure")
  .replace(/nigga/ig, "friend")
  .replace(/nigger/ig, "friend")
  .replace(/bitch/ig, "puppy")
  .replace(/cunt/ig, "pretty")
  .replace(/whore/ig, "diva")
  .replace(/pussy/ig, "kittens")
  .replace(/wank/ig, "star")
  .replace(/balls/ig, "cheese")
  .replace(/butt/ig, "hat")
  .replace(/dumb/ig, "genius")
  .replace(/fag/ig, "sun")
  .replace(/jerk/ig, "rockstar")
  .replace(/piss/ig, "smile")
  .replace(/smell/ig, "win")
  .replace(/disgusting/ig, "attractive")
  .replace(/annoying/ig, "engaging")
  .replace(/frustrating/ig, "refreshing")
  .replace(/hate/ig, "love")
  .replace(/poo/ig, "chocolate");
  obj.value = goodText;
}

function previewFile() {
  $('.dragonSpot').hide();
  $('.imageSpot').hide();
  $('.result').hide();
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  $('.loading').slideDown();

 reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

 if (file) {
    reader.readAsDataURL(file);
  }
  setTimeout(function(){
    $('.loading').hide();
    $('.dragonSpot').show();
    $('.imageSpot').show();
    $('.result').show();
  }, 1500);
}

$('.fakeSubmit').click(function() {
  document.getElementById('feedbackBox').value = "";
  alert("Sorry! Feedback was lost, pls type again");
})
