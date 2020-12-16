let count = 0;

function moveOrnament(ornament) {
    if (ornament === 'top') {
    document.getElementById(ornament).style.cssText = "animation: none; left: 400px; top: 360px;";
    }
    if (ornament === 'middle') {
        document.getElementById(ornament).style.cssText = "animation: none; left: 350px; top: 420px;";
    }
    if (ornament === 'bottom-left') {
        document.getElementById(ornament).style.cssText = "animation: none; left: 315px; top: 480px;";
    }
    if (ornament === 'bottom-right') {
        document.getElementById(ornament).style.cssText = "animation: none; left: 430px; top: 455px;";
    }
    if (ornament === 'bottom-center') {
        document.getElementById(ornament).style.cssText = "animation: none; left: 380px; top: 500px;";
    }
    count++
    if (count > 4) {
        const DOM = document.querySelector('main');
        let text = `<div style="text-align: center;
        font-size: 70px;
        padding-top: 90px;
        font-family: 'Lobster', cursive;
        color: #0038b6;">Happy Holidays!</div>`
        DOM.insertAdjacentHTML('afterbegin', text)
    }
}