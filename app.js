var box = document.getElementById('main-box')

setInterval(function(){
    var currentColor = box.style.backgroundColor
    console.log(currentColor);

    if(box){
        if(box.style.backgroundColor === 'darkseagreen'){
            box.style.backgroundColor = 'lightgreen';
        }
        else if(box.style.backgroundColor === 'lightgreen'){
            box.style.backgroundColor = 'cadetblue';
        }else if(box.style.backgroundColor === 'cadetblue'){
            box.style.backgroundColor = 'cornsilk';
        }
        else {
            box.style.backgroundColor = 'darkseagreen';
        }
    }
}, 3000)
