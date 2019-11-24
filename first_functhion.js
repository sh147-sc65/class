function first_functhion() {
    alert('Пасхалка номер один: 28 ');
}
function second_function(){
    alert('Напиши пока в личку и произойдет что-то прикольное') 
 }

 function n2(){
     alert("Пасхалка номер два:4")
 }

 function n3(){
     alert("Пасхалка номер три:7,4")
 }

 function secret_f(){
    var name=prompt("Как вас зовут?")
    console.log(name)
    console.log('Было вызвано секретное послание')
    f = $("#sec1")
    f.html("Секретное послание тебе, " + name + ".")
    f.css("color", "deeppink")
    f.css("font-family", 'Kelly Slab')
    p = $("#secret")
    p.html("<br> Привет, на этом сайте есть загадка.<br>Тому кто первый ее решит полагается небольшой денежный приз)0))<br>Чтобы разгадать загаду нужно:<br>Пасхалку номер &laquo;1&raquo; поделить на пасхалку номер &laquo;2&raquo;<br>Потом ,плюс  пасхалка &laquo;3&raquo;<br>Умножить на десять)<br>И найти корень из этого числа.<br>Ответ сообщи Никите)<br>Удачки))))")
    p.css("color", "coral")
    p.css("font-family", 'Kelly Slab')
    r = $("#sec").html("Опана загадочка......")
    r.css("color", "darkorchid" )
}