let url = 'https://api.adviceslip.com/advice'

let adviceId = document.querySelector('.adviceNo')
let advice = document.querySelector('.advice')
let randomGenerator =  document.querySelector('.new')

async function gettingAdvice(){
    let adviceData = await fetch(url)
    let jsonData  = await adviceData.json()

    // console.log(jsonData.slip.advice)
    // console.log(jsonData.slip.id)

    settingData(jsonData.slip)


}


function settingData(jsonData){

    adviceId.innerHTML = `#${jsonData.id}` 
    advice.innerHTML = `&ldquo;${jsonData.advice}&rdquo;`    
}

gettingAdvice()

randomGenerator.addEventListener("click", gettingAdvice)
