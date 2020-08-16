

//My pseudocode:

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
      chosenAnswer = e.target.id;
      console.log(chosenAnswer);
        }
      )
    }
    
    
    function printResult() {
    
     $('body').on('click','.submitButton', function(){
           console.log('abc');
        if (chosenAnswer == STORE[currentQuestionNumber].correctAnswer){
          currentScore ++ ;
          $('body').html(`<p class = "result"> Correct! ${STORE[currentQuestionNumber].explain} </p>
          <button type="button" class="nextButton button">Next</button>`)
      }
        else {
         $('body').html(`<p class = "result"> Wrong! The answer is ${STORE[currentQuestionNumber].correctAnswer}. ${STORE[currentQuestionNumber].explain} </p> <button type="button" class="nextButton button">Next</button>`)
    
      }
    
    })
    }
     
      
    
    let currentQuestionNumber = 0;
    let currentScore = 0;
    let chosenAnswer;
    
    function generateQuestion(){
      return `<section>
            <ul>
              <li class="sizeMe">Question:
                <span class="questionNumber">${currentQuestionNumber + 1}</span>/9</li>
              <li class="sizeMe">Score:
                <span class="score">${currentScore}</span>
              </li>
            </ul>
          </section>
        <h1>${STORE[currentQuestionNumber].question}</h1>
        <form>
        <input type="checkbox" id="${STORE[currentQuestionNumber].answers[0]}" class = "choices" name="option" value="${STORE[currentQuestionNumber].answers[0]}">
        <label for="${STORE[currentQuestionNumber].answers[0]}">${STORE[currentQuestionNumber].answers[0]}</label><br>
        <input type="checkbox" id="${STORE[currentQuestionNumber].answers[1]}" class = "choices" name="option" value="${STORE[currentQuestionNumber].answers[1]}">
        <label for="${STORE[currentQuestionNumber].answers[1]}">${STORE[currentQuestionNumber].answers[1]}</label><br>
        <input type="checkbox" id="${STORE[currentQuestionNumber].answers[2]}" class = "choices" name="option" value="${STORE[currentQuestionNumber].answers[2]}">
        <label for="${STORE[currentQuestionNumber].answers[2]}">${STORE[currentQuestionNumber].answers[2]}</label><br>
        <input type="checkbox" id="${STORE[currentQuestionNumber].answers[3]}" class = "choices" name="option" value="${STORE[currentQuestionNumber].answers[3]}">
        <label for="${STORE[currentQuestionNumber].answers[3]}">${STORE[currentQuestionNumber].answers[3]}</label><br>
        <input type="checkbox" id="${STORE[currentQuestionNumber].answers[4]}" class = "choices" name="option" value="${STORE[currentQuestionNumber].answers[4]}">
        <label for="${STORE[currentQuestionNumber].answers[4]}">${STORE[currentQuestionNumber].answers[4]}</label><br> 
        <button type="button" class="submitButton button">Submit</button>
        </form>`;
    }
    
    function revealNextQ(){
    
      $('body').on('click', '.nextButton', function(e){
    
          if(currentQuestionNumber >= 8){
          $('body').html(`
            <h1>Your Results:</h1>
            <ul>
              <li class="sizeMe">Score:
                <span class="finalScore">${currentScore}/9</span>
              </li>
            </ul><br>
            <button type="button" class="restartButton button">Restart</button>
            `)
    
        }
        
        else {
        currentQuestionNumber ++ 
      
        $('body').html(generateQuestion);
    
        }
    
    
      })
    }
    
    
    
     function restartQuiz(){
    
       $('body').on('click', '.restartButton', function(e){
        currentQuestionNumber = 0
        currentScore = 0
        console.log('restart works')
        $('body').html(generateQuestion)
        
       })
      
     }
    
    function changingOption(){
        //going to bind a change() handler so that the event will fire when the state of a checkbox changes. Then, just deselect all checkboxes apart from the one which triggered the handler:
      $('body').on('change', 'input[type="checkbox"]', function() {
       $('input[type="checkbox"]').not(this).prop('checked',false);
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
    