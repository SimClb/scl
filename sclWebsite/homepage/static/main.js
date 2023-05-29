// navbar 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("show");
    } else {
        document.getElementById("navbar").classList.remove("show");
    }
}

let ticking = false;
window.addEventListener('scroll', function(e) {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            scrollFunction();
            ticking = false;
        });
        ticking = true;
    }
});

// burger menu 

let count = 0;
let btn = document.getElementById('burgerMenu');

function showLinks() {
    if (count%2 != 0) {
        document.getElementById('menu').style.top = '80px';
        document.getElementById('menu').style.backgroundColor = '#EBF5EE';
        btn.classList.add('cross');
    }
    else {
        document.getElementById('menu').style.top = '-400px';
        document.getElementById('menu').style.backgroundColor = '#2B2F3A';
        btn.classList.remove('cross');
    }
    count += 1;
}

function linkClicked() {
    document.getElementById('menu').style.top= '-400px';
    btn.classList.remove('cross');
    setTimeout(2000);
    document.getElementById("navbar").classList.remove("show");   
}



