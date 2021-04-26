class Quiz {
    constructor(){

    }

    getState(){
        var gameStateRef=database.ref("gameStateRef")
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
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
}
play(){
    question.hide();
    background("yellow");
    text("Quiz Results", 340, 50)
    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
        var display_answers=230;
        text("Whoever answers correct will have the answer in green")

      for(var plr in allContestants){
        var correctAns = "2";
        if (correctAns === allConstestants[plr].answer)
        fill("Green")
        else
        fill("red")
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        }
      }
    }
}