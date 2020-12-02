let game = JSON.parse(Cookies.get('game'));
let cpu = game.cpu;
let player = game.player;


let playerShot = Cookies.get(game.player.cowboy.shot);
playerShot = Number(game.player.cowboy.shot);

let playerHp = Cookies.get(game.player.cowboy.hp);
playerHp = Number(game.player.cowboy.hp);

let maxHp = Cookies.get(game.player.cowboy.maxhp);
maxHp = Number(game.player.cowboy.maxhp);





let cpuShot = Cookies.get(game.cpu.cowboy.shot);
cpuShot = Number(game.cpu.cowboy.shot);
let cpuHp = Cookies.get(game.cpu.cowboy.hp);
cpuHp = Number(game.cpu.cowboy.hp);
let message;


document.querySelector('.player .name').innerHTML = player.cowboy.name;
document.querySelector('.player .health').innerHTML = player.currentHealth;
document.querySelector('.player img').src = player.cowboy.image;


document.querySelector('.cpu .name').innerHTML = cpu.cowboy.name;
document.querySelector('.cpu .health').innerHTML = cpu.currentHealth;
document.querySelector('.cpu img').src = cpu.cowboy.image;



function showdown(){
    if(playerHp > 0 && cpuHp > 0){
        cpuHp = (cpuHp - playerShot);
        playerHp = (playerHp - cpuShot);
        document.querySelector('.player .health').innerHTML = playerHp;
        document.querySelector('.cpu .health').innerHTML = cpuHp;
    }else if (cpuHp <= 0 && playerHp <= 0){
        document.querySelector(".statement").innerHTML = "Draw";
        }else if (cpuHp <= 0){
            document.querySelector(".statement").innerHTML = "You win";
        }else if (playerHp <= 0){
                document.querySelector(".statement").innerHTML = "You lose";
        }else {
            null
} }

let shootButton = document.querySelector('.game-button');
shootButton.innerHTML = "Shot";
shootButton.addEventListener('click', function(){
    showdown();
});



let footer = document.querySelector('footer');
let playAgain = document.createElement('button');
playAgain.innerText = 'play a new round';
playAgain.addEventListener('click', function () {
    Cookies.remove('game');
    location.href = 'choose.html';
});
footer.append(playAgain);