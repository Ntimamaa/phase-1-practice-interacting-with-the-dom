
document.addEventListener('DOMContentLoaded', function() {
    var interval = setInterval(counter, 1000);
     document.getElementById('pause').addEventListener('click',()=>{
        clearInterval(interval)
     })
  });
  
  function counter() {
    var counterText = document.getElementById('counter');
    var counterValue = parseInt(counterText.innerText);
    var newValue = counterValue + 1;
    counterText.innerText = newValue;
  }
  

function comment(){
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault()
        const commentInput = document.getElementById('comment-input').value;
        enterComment(commentInput);
    })  
}

function enterComment(value){
    const p = document.createElement('p')
    p.textContent = value;
    document.querySelector('#list').appendChild(p)

}
comment();

function plusButton(){
    document.getElementById('plus').addEventListener('click',() => {
        var counterValue = parseInt(document.getElementById('counter').innerText)
        var newvalue = counterValue+1
        document.getElementById('counter').innerText = newvalue ;
        console.log(newvalue)

    })

}
plusButton();

function minusButton(){
    document.getElementById('minus').addEventListener('click',() => {
        var counterValue = parseInt(document.getElementById('counter').innerText)
            var newvalue = counterValue-1
            document.getElementById('counter').innerText = newvalue ;
            if(newvalue < 0){
                console.log(0)
            }
            console.log(newvalue)}    
 )

}
minusButton();

function likesFunction(){
    document.getElementById('heart').addEventListener('click',() =>{
        let textValue = document.getElementById('counter').innerText
        let li = document.createElement('li')
        li.textContent = `${textValue} has been liked`
        document.querySelector('.likes').appendChild(li)
    })

}
likesFunction();

function pauseButton(){
    document.getElementById('pause').addEventListener('click',() =>{
        document.getElementById('pause').innerText = 'resume'
        document.getElementById('pause').id = 'resume'
        resumeButton();
        let buttonPlus = document.getElementById('plus')
        let buttonMinus = document.getElementById('minus')
        let buttonHeart = document.getElementById('heart')
        let buttonSubmit = document.getElementById('submit')

        buttonPlus.disabled = true;
        buttonMinus.disabled = true;
        buttonHeart.disabled = true;
        buttonSubmit.disabled = true;
        })
}
pauseButton()

function resumeButton(){
    document.getElementById('resume').addEventListener('click',() =>{
        document.getElementById('resume').innerText = 'pause'
        document.getElementById('resume').id = 'pause'
        startInterval();
        pauseButton();
        let buttonPlus = document.getElementById('plus')
        let buttonMinus = document.getElementById('minus')
        let buttonHeart = document.getElementById('heart')
        let buttonSubmit = document.getElementById('submit')

        buttonPlus.disabled = false;
        buttonMinus.disabled = false;
        buttonHeart.disabled = false;
        buttonSubmit.disabled = false;
        })
}
resumeButton()

function startInterval() {
    interval = setInterval(counter, 1000);
  }