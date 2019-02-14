$(document).ready(function() {
  var questionList = [
    {
      //Question 1, Index 0
      question: "What year was Nintendo founded?",
      answerChoices: ["1954", "1823", "1889", "2001"],
      answer: 2,
      gifSrc: "https://media.giphy.com/media/4Iepymq5msMg/giphy.gif"
    },
    {
      //Question 2, Index 1
      question:
        "In the orginal God of War, Who does Kratos dethrone to earn the title of God of War?",
      answerChoices: ["Ares", "Athena", "Zeus", "Poseidon"],
      answer: 0,
      gifSrc: "https://media.giphy.com/media/gDkHu4XUr85nG/giphy.gif"
    },
    {
      //Question 3, Index 2
      question: "In 2013, what game won Game of the Year",
      answerChoices: [
        "Grand Theft Auto 5",
        "The Last of Us",
        "Bioshock 2",
        "The Witcher 3"
      ],
      answer: 1,
      gifSrc: "https://media.giphy.com/media/VX33u4Tj1IsuY/giphy.gif"
    },
    {
      //Question 4, Index 3
      question: "How many Power Stars can you collect in Super Mario 64?",
      answerChoices: ["101", "120", "80", "300"],
      answer: 1,
      gifSrc: "https://media.giphy.com/media/iEs4yXq5rVlL2/giphy.gif"
    },
    {
      //Question 5, Index 4
      question: "Who is the protaganist of the original Halo series?",
      answerChoices: ["Samus Aran", "Kratos", "Kirby", "Master Chief"],
      answer: 3,
      gifSrc: "https://media.giphy.com/media/3OP8ytRE0QBX2/giphy.gif"
    },
    {
      //Question 6, Index 5
      question: "What is the higest selling console of all time?",
      answerChoices: ["Playstation 3", "Xbox 360", "NES", "Playstation 2"],
      answer: 3,
      gifSrc: "https://media.giphy.com/media/gDPFPzFvzHmF2/giphy.gif"
    },
    {
      //Question 7, Index 6
      question: "Who is the main protaganist of the Legend of Zelda franchise",
      answerChoices: ["Link", "Ganon", "Navi", "Zelda"],
      answer: 0,
      gifSrc: "https://media.giphy.com/media/xT9IgMNokjDuNwm8vK/source.gif"
    },
    {
      //Question 8, Index 7
      question: "Which series stars Samus Aran?",
      answerChoices: ["Super Mario", "Star Fox", "Halo", "Metroid"],
      answer: 3,
      gifSrc: "https://media.giphy.com/media/vmZ11AetEXR6M/giphy.gif"
    },
    {
      //Question 9, Index 8
      question: "Who created the Super Mario Bros. series?",
      answerChoices: [
        "Neil Druckmann",
        "Ken Levine",
        "Shigeru Miyamoto",
        "Hideo Kojima"
      ],
      answer: 2,
      gifSrc: "https://media.giphy.com/media/FF7ACbidr7oUU/giphy.gif"
    },
    {
      //Question 10, Index 9
      question:
        "What is the name of the first video game console ever released?",
      answerChoices: [
        "Sega Genesis",
        "Commodore 64",
        "Magnavox Odyssey",
        "Nintendo 64"
      ],
      answer: 2,
      gifSrc: "https://media.giphy.com/media/Ik6hopb6wUKDm/giphy.gif"
    },
    {
      //Question 11, Index 10
      question:
        "Which of the following games gave birth to the Soulsbourne genre?",
      answerChoices: [
        "Demon Souls",
        "Devil May Cry",
        "God of War",
        "Death Stranding"
      ],
      answer: 0,
      gifSrc: "https://media.giphy.com/media/NoqEh5YNQPT0s/giphy.gif"
    },
    {
      //Question 12, Index 11
      question: "Who is known as the 'Father of PlayStation'?",
      answerChoices: [
        "Phil Harrison",
        "Shuhei Yoshida",
        "Ken Kutaragi",
        "Shawn Layden"
      ],
      answer: 2,
      gifSrc: "https://media.giphy.com/media/3o6ZtaS0fxxTzh8DUA/giphy.gif"
    },
    {
      //Question 13, Index 12
      question: "Who created the Metal Gear Solid franchise?",
      answerChoices: [
        "Julias Casanova",
        "Hideo Kojima",
        "Nujabes",
        "David Hoggins"
      ],
      answer: 1,
      gifSrc: "https://media.giphy.com/media/joxThEgTJuSBO/giphy.gif"
    },
    {
      //Question 14, Index 13
      question: "How much money did Sony lose on the Playstation 3?",
      answerChoices: ["$1 million", "$350,000", "$17 billion", "$3 billion"],
      answer: 3,
      gifSrc: "https://media.giphy.com/media/l41YmZCIFDTJqdvQk/giphy.gif"
    },
    {
      //Question 15, Index 14
      question:
        "What mythology does Kratos from the God of War series travel to in the latest installment?",
      answerChoices: ["Greek", "Norse", "Hindu", "Egyptian"],
      answer: 1,
      gifSrc: "https://media.giphy.com/media/csHW5fcFNP6dQ5jhsH/giphy.gif"
    }
  ];

  $("#start-over").hide();
  var sound1 = document.getElementById("audio1");
  var sound2 = document.getElementById("audio2");
  $("#coin").on("click", function() {
    sound1.play();
    sound2.play();
    nextQuestion();
  });

  var questionAsked = [];

  var questionCount = 0;

  var secondsLeft = 15;

  var interval;

  var choice;

  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  var corrAns = false;
  var inCorr = false;
  var notAnswer = false;

  var randomQuestion =
    questionList[Math.floor(Math.random() * questionList.length)];

  var timeout;
  var answerTimeout;

  function checkQuestion() {
    if (!questionAsked.includes(randomQuestion)) {
      questionAsked.push(randomQuestion);
    } else {
      if (questionCount != 15) {
        while (questionAsked.includes(randomQuestion)) {
          randomQuestion =
            questionList[Math.floor(Math.random() * questionList.length)];
        }
        questionAsked.push(randomQuestion);
      }
    }
  }

  function showResults() {
    corrAns = false;
    inCorr = false;
    notAnswer = false;
    $("#start-over").show();
    $("#correct-answer").empty();
    $("#result-time").empty();
    $("#answers").empty();
    $("#correct-incorrect").empty();
    $("#result-heading").html("<h1> Your Results </h1>");
    $("#number-correct").html("<h2> Correct: " + correct + "</h2>");
    $("#number-incorrect").html("<h2> Incorrect: " + incorrect + "</h2>");
    $("#number-unanswered").html("<h2> Unanswered: " + unanswered + "</h2>");

    $("#start-over").on("click", function() {
      questionAsked = [];

      questionCount = 0;

      secondsLeft = 15;

      correct = 0;
      incorrect = 0;
      unanswered = 0;

      corrAns = false;
      inCorr = false;
      notAnswer = false;

      randomQuestion =
        questionList[Math.floor(Math.random() * questionList.length)];

      $("#result-heading").empty();
      $("#number-correct").empty();
      $("#number-incorrect").empty();
      $("#number-unanswered").empty();
      $("#start-over").hide();

      $("#start-btn").show();
    });
  }

  function answerScreen() {
    $("#time-left").empty();
    $("#question-number").empty();
    $("#question").empty();
    $("#answers").empty();
    clearTimeout(timeout);
    clearInterval(interval);
    $("#gif").show();
    $("#gif").html("<img src ='" + randomQuestion.gifSrc + "'width = '400px'>");
    if (secondsLeft === 15) {
      secondsLeft = 14;
    }

    if (corrAns === true) {
      $("#correct-incorrect").html("<h2> Yup, that's the answer! </h2>");
      $("#result-time").html(
        "<h2> Answered with: " + ++secondsLeft + " second(s) remaining</h2>"
      );
    } else if (inCorr === true) {
      $("#correct-incorrect").html("<h2> Nope, that's not the answer! </h2>");
      $("#result-time").html(
        "<h2> Answered with: " + ++secondsLeft + " second(s) remaining</h2>"
      );
      $("#correct-answer").html(
        "<h2> The correct answer was: " +
          randomQuestion.answerChoices[randomQuestion.answer] +
          "</h2>"
      );
    } else {
      $("#correct-incorrect").html(
        "<h2> Looks like you ran out of time! </h2>"
      );
      $("#correct-answer").html(
        "<h2> The correct answer was: " +
          randomQuestion.answerChoices[randomQuestion.answer] +
          "</h2>"
      );
    }

    secondsLeft = 15;
    anwerTimeout = setTimeout(function() {
      nextQuestion();
    }, 5000);
  }

  function countdown() {
    if (secondsLeft === 1) {
      $("#time-left").html("<h2>" + secondsLeft + " second left! </h2>");
    } else {
      $("#time-left").html("<h2>" + secondsLeft + " seconds left! </h2>");
    }
    secondsLeft--;
    if (secondsLeft === -1) {
      clearInterval(interval);
    }
  }

  function showQuestion(random) {
    $("#time-left").html("<h2> 15 seconds left! </h2>");
    interval = setInterval(countdown, 1000);
    clearTimeout(answerTimeout);
    questionCount++;
    $("#question-number").html("<h1>Question " + questionCount + "/15</h1>");
    $("#question").html("<h1>" + random.question + "</h1>");
    for (var i = 0; i < randomQuestion.answerChoices.length; i++) {
      $("#answers").append("<li>" + randomQuestion.answerChoices[i] + "</li>");
    }

    $("#answers li").click(function() {
      choice = $(this).index();
      if (choice === randomQuestion.answer && secondsLeft >= 0) {
        correct++;
        corrAns = true;
        clearInterval(interval);
        answerScreen();
      } else if (choice !== randomQuestion.answer && secondsLeft >= 0) {
        incorrect++;
        corrAns = false;
        inCorr = true;
        clearInterval(interval);
        answerScreen();
      }
    });

    timeout = setTimeout(function() {
      corrAns = false;
      inCorr = false;
      notAnswer = true;
      unanswered++;
      clearInterval(interval);
      answerScreen();
    }, 17000);
  }

  function nextQuestion() {
    corrAns = false;
    inCorr = false;
    notAnswer = false;
    $("#correct-answer").empty();
    $("#result-time").empty();
    $("#answers").empty();
    $("#correct-incorrect").empty();
    $("#gif").hide();
    checkQuestion();
    secondsLeft = 15;
    $("#start-btn").hide();
    if (questionCount < 15) {
      showQuestion(randomQuestion);
    } else {
      showResults();
    }
  }
});
