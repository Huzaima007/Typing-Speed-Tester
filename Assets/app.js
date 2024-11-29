var sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes a man perfect.",
    "Coding is a skill that improves with practice.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Stay positive, work hard, and make it happen.",
    "Consistency is the key to success.",
    "Good things take time, but great things happen all at once.",
    "Believe in yourself and all that you are.",
    "Every day is a new opportunity to learn and grow.",
    "The best way to predict the future is to create it."
  ];
  
  var startTime, endTime;
  
  function getRandomSentence() {
    var randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  }
  
  function startTest() {
    var sampleText = getRandomSentence();
    document.getElementById("sample-text").textContent = sampleText;
  
    var inputField = document.getElementById("input-text");
    inputField.value = ""; 
    inputField.focus();
    startTime = new Date(); 
    document.getElementById("result").textContent = ""; 
  }
  
  function endTest() {
    var inputField = document.getElementById("input-text").value.trim();
    var sampleText = document.getElementById("sample-text").textContent.trim();
    endTime = new Date(); 
  
    var timeTaken = (endTime - startTime) / 1000; 
    var wordsTyped = inputField.split(" ").length;
    var correctWords = inputField === sampleText ? wordsTyped : 0; 
  
    var speed = Math.round((wordsTyped / timeTaken) * 60);
    var accuracy = Math.round((correctWords / sampleText.split(" ").length) * 100);
  
    var result = `You typed ${wordsTyped} words in ${timeTaken.toFixed(2)} seconds.
                    Speed: ${speed} WPM.
                    Accuracy: ${accuracy}%`;
    document.getElementById("result").textContent = result;
  }