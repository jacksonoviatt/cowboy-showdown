let game = JSON.parse(Cookies.get('game'));
// game = Number(game);
let cpu = game.cpu;
let player = game.player;



let playerShot = Cookies.get(game.player.cowboy.shot);
playerShot = Number(game.player.cowboy.shot);



let playerHp = Cookies.get(game.player.cowboy.hp);
playerHp = Number(game.player.cowboy.hp);
let cpuShot = Cookies.get(game.cpu.cowboy.shot);
cpuShot = Number(game.cpu.cowboy.shot);
let cpuHp = Cookies.get(game.cpu.cowboy.hp);
cpuHp = Number(game.cpu.cowboy.hp);
let message;
let log = [];
// let cpuCurrentHp = cpuHp;
// let playerCurrentHp = playerHp;


console.log(playerHp - cpuShot);

document.querySelector('.player .name').innerHTML = player.cowboy.name;
document.querySelector('.player .health').innerHTML = player.currentHealth + '/' + playerHp;
document.querySelector('.player img').src = player.cowboy.image;


document.querySelector('.cpu .name').innerHTML = cpu.cowboy.name;
document.querySelector('.cpu .health').innerHTML = cpu.currentHealth + '/' + cpu.cowboy.hp;
document.querySelector('.cpu img').src = cpu.cowboy.image;



function battle(){
    if(playerHp > 0 && cpuHp > 0){
        cpuHp = cpuHp - playerShot;
        playerHp = playerHp - cpuShot;
        document.querySelector('.player .health').innerHTML = playerHp;
        document.querySelector('.cpu .health').innerHTML = cpuHp;

    }else if(player.health <= 0){
            log.push('<strong> You have been Defeated </strong>');
    }else if(cpu.health <= 0){
            log.push('<strong> you are Victorious </strong>');
    }else{
        log.push('<strong> The match was a Draw </strong>');
     }
}

let shootButton = document.querySelector('.game-button');
shootButton.innerHTML = "Shot";
shootButton.addEventListener('click', function(){
    battle();
});



// let gameButton = document.querySelector('.game-button');
// gameButton.addEventListener('click', function () {
//     cpuHp - playerShot;
//     log.push('player shots and does ' + playerShot + ' damage');
    
//     playerHp - cpushot;
//     log.push('cpu shots and does ' + cpushot + ' damage');
// });

let footer = document.querySelector('footer');
let playAgain = document.createElement('button');
playAgain.innerText = 'play a new round';
playAgain.addEventListener('click', function () {
    Cookies.remove('game');
    location.href = 'choose.html';
});
// let footer = document.querySelector('.footer');
footer.append(playAgain);