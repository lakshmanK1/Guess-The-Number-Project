let secretNum = Math.trunc(Math.random()*20+1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',checkFunc);
function checkFunc(){
    let number =Number(document.querySelector('.guess').value);
    console.log(number, typeof number);
    //if there is no number entered
    if(!number){
        document.querySelector('.message').textContent="😡 no number...";
    }
    //if secret number & guess numbers are equal
    else if(number === secretNum){
        document.querySelector('.message').textContent="🎊🎉Correct number..";
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').textContent=secretNum;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;
        }

    }
    //if guess number is greater than secret number
    else if(number > secretNum){
        document.querySelector('body').style.backgroundColor='red';

        if(score > 0){
        document.querySelector('.message').textContent="🙅‍♂️Ur Guess is High..";
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent="😭 you lost game..";
        }
    }
    //if guess number is smaller than secret number
    else if(number < secretNum){
        document.querySelector('body').style.backgroundColor='red';

        if(score > 1){
            document.querySelector('.message').textContent="🙅‍♂️Ur Guess is Low..";
            score--;
            document.querySelector('.score').textContent=score;
            }else{
                document.querySelector('.message').textContent="😭 you lost game..";
            }    }
}


document.querySelector('.again').addEventListener('click', reloadFunc);
function reloadFunc(){
    score=20;
    secretNum = Math.trunc(Math.random()*20+1);
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value="";
    document.querySelector('body').style.backgroundColor="#222"
}