const button = document.getElementById("button-advice");
const text = document.getElementById("advice")




button.addEventListener("click", function(){
    document.body.style.backgroundColor = bg_advice[random()]
    text.textContent = text_advice[random_text()]
})

let text_advice = ["Высыпайтесь", "Разминайтесь по утрам", "Выбирайте правильные закуски", "Завтракайте", "Гуляйте каждый день", "Общайтесь", "Читайте состав своих любимых продуктов", "Ищите приключений", "Любите жизнь"]

function random_text(){
    return Math.floor(Math.random() * text_advice.length)
}


let bg_advice = ["#6abada","#F67280", "#355C7D" , "#0D7377", "#F07B3F", "#6639A6", "#F85F73", "#D4A5A5" , "#1FAB89", "#6EB6FF"]

function random(){
    return Math.floor(Math.random() * bg_advice.length)
}

