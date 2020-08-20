// const name = document.querySelectorAll("#name path");
// console.log(name);
// for(let i = 0; i < logo.length; i++){
//     console.log(`Letter ${i} is ${name[i].getTotalLength()}`);
// }

// var slider = document.getElementsByClassName("image")[0];
// slider.classList.add("slided");
// if (slider.classList.contains("slided")) {
//     slider.classList.remove("slided");
// } else {
//     slider.classList.add("slided");
// }

function trans(id) {
    if(document.getElementById(id).innerText == "See More"){
        document.querySelector('.work-text').classList.add('grow-width');
    }
    else{
        document.querySelector('.work-text').classList.remove('grow-width');
    }
    if (document.querySelector('.work-text').classList.contains('grow-width')) {

        // for (var i = 0; i < document.getElementsByClassName('btn').length; i++)
        //     document.getElementsByClassName('btn')[i].innerText = "See Less";
        document.getElementById(id).innerText = "See Less";
    }
    else {
        // slider.classList.remove("slided");
        // for (var i = 0; i < document.getElementsByClassName('btn').length; i++)
        //     document.getElementsByClassName('btn')[i].innerText = "See More";
        document.getElementById(id).innerText = "See More";
    }

    if (id == "btntodo") {
        todo(id);
    }
    else if (id == "btnfunfood") {
        funfood(id);
    }
    else if (id == "btnexhome") {
        exhome(id);
    }
    else if (id == "btnicoder") {
        icoder(id);
    }

}

function todo(id) {
    if (document.getElementById(id).innerText == "See Less") {
        document.querySelector('#worktodo .image').classList.add('shrink-height');
        document.querySelector('#worktodo').classList.add('slided');
        document.querySelector('#worktodo .work-details').classList.remove('invisible');
    }
    else {
        if (document.querySelector('.work-text').classList.contains('grow-width')){
            document.querySelector('#worktodo .image').classList.add('shrink-height');
            document.querySelector('#worktodo').classList.add('slided');
            document.querySelector('#worktodo .work-details').classList.remove('invisible');
        }
        document.querySelector('#worktodo .image').classList.remove('shrink-height');
        document.querySelector('#worktodo').classList.remove('slided');
        document.querySelector('#worktodo .work-details').classList.add('invisible');
    }
}

function funfood(id) {
    if (document.getElementById(id).innerText == "See Less") {
    document.querySelector('#workfunfood .image').classList.add('shrink-height');
    document.querySelector('#workfunfood').classList.add('slided');
    document.querySelector('#workfunfood .work-details').classList.remove('invisible');
    }
    else {
        if (document.querySelector('.work-text').classList.contains('grow-width')){
            document.querySelector('#workfunfood .image').classList.add('shrink-height');
            document.querySelector('#workfunfood').classList.add('slided');
            document.querySelector('#workfunfood .work-details').classList.remove('invisible');
        }
            document.querySelector('#workfunfood .image').classList.remove('shrink-height');
            document.querySelector('#workfunfood').classList.remove('slided');
            document.querySelector('#workfunfood .work-details').classList.add('invisible');
        
    }
}

function exhome(id) {
    if (document.getElementById(id).innerText == "See Less") {
        document.querySelector('#workexhome .image').classList.add('shrink-height');
        document.querySelector('#workexhome').classList.add('slided');
        document.querySelector('#workexhome .work-details').classList.remove('invisible');
        }

    else {
        if (document.querySelector('.work-text').classList.contains('grow-width')){
            document.querySelector('#workexhome .image').classList.add('shrink-height');
            document.querySelector('#workexhome').classList.add('slided');
            document.querySelector('#workexhome .work-details').classList.remove('invisible');
        }
        document.querySelector('#workexhome .image').classList.remove('shrink-height');
        document.querySelector('#workexhome').classList.remove('slided');
        document.querySelector('#workexhome .work-details').classList.add('invisible');
    }
}

function icoder(id) {
    if (document.getElementById(id).innerText == "See Less") {
        document.querySelector('#workicoder .image').classList.add('shrink-height');
        document.querySelector('#workicoder').classList.add('slided');
        document.querySelector('#workicoder .work-details').classList.remove('invisible');
        }

    else {
        if (document.querySelector('.work-text').classList.contains('grow-width')){
            document.querySelector('#workicoder .image').classList.add('shrink-height');
            document.querySelector('#workicoder').classList.add('slided');
            document.querySelector('#workicoder .work-details').classList.remove('invisible');
        }
        document.querySelector('#workicoder .image').classList.remove('shrink-height');
        document.querySelector('#workicoder').classList.remove('slided');
        document.querySelector('#workicoder .work-details').classList.add('invisible');
    }
}
