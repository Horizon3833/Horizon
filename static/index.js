var ticTacToe = document.getElementById('tictactoe').addEventListener('click', ticTacToeClick);
var qrCode = document.getElementById('qrcode').addEventListener('click', qrCodeClick);
var color = document.getElementById('colorbar').addEventListener('click', colorClick);
var distance = document.getElementById('distance').addEventListener('click', distanceClick);
var text = document.getElementById('text').addEventListener('click', textClick);


function ticTacToeClick(){
    window.open('https://community.appinventor.mit.edu/t/free-tictactoe-extension/50759?u=horizon', '_blank');
}

function qrCodeClick(){
    window.open('https://community.appinventor.mit.edu/t/free-qrcodegenerator-extension/47908?u=horizon', '_new');
}

function colorClick(){
    window.open('https://community.appinventor.mit.edu/t/free-colorseekbar-extension/49979?u=horizon', '_new')
}

function distanceClick(){
    window.open('https://community.appinventor.mit.edu/t/free-distancefinder-extension/47664?u=horizon', '_new')
}

function textClick(){
    window.open('https://community.appinventor.mit.edu/t/texteditor-extension-free/47313?u=horizon', '_new')
}