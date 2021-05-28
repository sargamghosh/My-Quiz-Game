class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      contestant.getCount();
      

    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
    }
      question = new Question()
      question.display();
    }
  }
        
  play(){
    question.hide();
    if(allContestants!==undefined){
    fill("Blue");
    textSize(20);
    text("*NOTE: Contestant who answerd correct are highlighted in green color!",130,230)
    

    for(var plr in allContestants){
      var correctAns="2";
      if(correctAns === allContestants[plr].answer){
        fill("Green");
        text("correctAns",400,700);
      }
      else{
        fill("red");
        text("incorrectAns",400,700);
      }
    }  
  }
}

        
      }
    
  


