

//My pseudocode:

const quizInfo = {
    
  currentQuestionNumber:0,
  currentScore:0,
  chosenAnswer:undefined
}

//function 1: when a user clicks on start quiz button 
function renderQuestion(){
  $('.startButton').click(function(){
    //event listener test
    console.log('click works');
    $('.container').addClass('hide')
   
    $('body').html(generateQuestion)
  
  });
    
  }
  
  function storeChoice(){
  
  $('body').on( 'click', '.choices', function(e){
    quizInfo.chosenAnswer = e.target.id;
    console.log(quizInfo.chosenAnswer);
      }
    )
  }
  
  
  function printResult() {
  
   $('body').on('click','.submitButton', function(){
         console.log('abc');
      if (quizInfo.chosenAnswer === undefined) {
       $('.error').html(`<p class = "result"> Please select an answer! </p>`)
    }
      else if (quizInfo.chosenAnswer == STORE[quizInfo.currentQuestionNumber].correctAnswer){
        quizInfo.currentScore ++ ;
        $('body').html(`<p class = "result"> Correct! ${STORE[quizInfo.currentQuestionNumber].explain} </p>
        <button type="button" class="nextButton button">Next</button>`)

    }
  
    else {
      $('body').html(`<p class = "result"> Wrong! The answer is ${STORE[quizInfo.currentQuestionNumber].correctAnswer}. ${STORE[quizInfo.currentQuestionNumber].explain} </p> <button type="button" class="nextButton button">Next</button>`)
    }
  
   quizInfo.chosenAnswer = undefined;
  })
  }
   
    

  
  function generateQuestion(){
    return `<section>
          <ul>
            <li class="sizeMe">Question:
              <span class="questionNumber">${quizInfo.currentQuestionNumber + 1}</span>/9</li>
            <li class="sizeMe">Score:
              <span class="score">${quizInfo.currentScore}</span>
            </li>
          </ul>
        </section>
      <h1>${STORE[quizInfo.currentQuestionNumber].question}</h1>
      <form>
      <input type="radio" id="${STORE[quizInfo.currentQuestionNumber].answers[0]}" class = "choices" name="option" value="${STORE[quizInfo.currentQuestionNumber].answers[0]}">
      <label for="${STORE[quizInfo.currentQuestionNumber].answers[0]}">${STORE[quizInfo.currentQuestionNumber].answers[0]}</label><br>
      <input type="radio" id="${STORE[quizInfo.currentQuestionNumber].answers[1]}" class = "choices" name="option" value="${STORE[quizInfo.currentQuestionNumber].answers[1]}">
      <label for="${STORE[quizInfo.currentQuestionNumber].answers[1]}">${STORE[quizInfo.currentQuestionNumber].answers[1]}</label><br>
      <input type="radio" id="${STORE[quizInfo.currentQuestionNumber].answers[2]}" class = "choices" name="option" value="${STORE[quizInfo.currentQuestionNumber].answers[2]}">
      <label for="${STORE[quizInfo.currentQuestionNumber].answers[2]}">${STORE[quizInfo.currentQuestionNumber].answers[2]}</label><br>
      <input type="radio" id="${STORE[quizInfo.currentQuestionNumber].answers[3]}" class = "choices" name="option" value="${STORE[quizInfo.currentQuestionNumber].answers[3]}">
      <label for="${STORE[quizInfo.currentQuestionNumber].answers[3]}">${STORE[quizInfo.currentQuestionNumber].answers[3]}</label><br>
      <input type="radio" id="${STORE[quizInfo.currentQuestionNumber].answers[4]}" class = "choices" name="option" value="${STORE[quizInfo.currentQuestionNumber].answers[4]}">
      <label for="${STORE[quizInfo.currentQuestionNumber].answers[4]}">${STORE[quizInfo.currentQuestionNumber].answers[4]}</label><br> 
      <button type="button" class="submitButton button">Submit</button>
      <div class="error"> </div>
      </form>`;
  }
  
  function revealNextQ(){
  
    $('body').on('click', '.nextButton', function(e){
  
        if(quizInfo.currentQuestionNumber >= 8){
        $('body').html(nextQuestionHTML)
  
      }
      
      else {
      quizInfo.currentQuestionNumber ++ 
    
      $('body').html(generateQuestion);
  
      }
  
  
    })
  }

  function nextQuestionHTML(){
    return `<h1>Your Results:</h1>
          <ul>
            <li class="sizeMe">Score:
              <span class="finalScore">${quizInfo.currentScore}/9</span>
            </li>
          </ul><br>
          <button type="button" class="restartButton button">Restart</button>`
  }
  
  
  
   function restartQuiz(){
  
     $('body').on('click', '.restartButton', function(e){
      quizInfo.currentQuestionNumber = 0
      quizInfo.currentScore = 0
      console.log('restart works')
      $('body').html(generateQuestion)
      
     })
    
   }
  
  function changingOption(){
      //going to bind a change() handler so that the event will fire when the state of a checkbox changes. Then, just deselect all checkboxes apart from the one which triggered the handler:
    $('body').on('change', 'input[type="radio"]', function() {
     $('input[type="radio"]').not(this).prop('checked',false);
     $('.error').empty();
    })
    
  }
  
  function initQuiz(){
    renderQuestion();
    storeChoice();
    printResult();
    revealNextQ();
    restartQuiz();
    changingOption();
  }
  
  initQuiz();