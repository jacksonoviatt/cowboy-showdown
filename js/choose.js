const cowboy = [
    {
        name: 'Winger',
        hp: 150,
        shot: 15,
        image: '../media/purepng.com-cowboycowboyanimal-herderhorsebackwranglercowgirls-1421526855810ncnly.png'
    },
    {
        name: 'Clint',
        hp: 180,
        shot: 12,
        image: '../media/purepng.com-cowboycowboyanimal-herderhorsebackwranglerclip-artrider-1421526856181hezkn.png'
    },
    {
        name: 'Doc',
        hp: 120,
        shot: 18,
        image: '../media/purepng.com-cowboycowboyanimal-herderhorsebackwranglerclip-artrider-1421526856160gsi1t.png'
    }
]

function startGame(index) {

   const randomNumber = Math.floor(Math.random() * cowboy.length);

   //setup the game
   const game = {
       player: {
           cowboy: cowboy[index],
           currentHealth: cowboy[index].hp
       },
       cpu: {
           cowboy: cowboy[randomNumber],
           currentHealth: cowboy[randomNumber].hp
       }
   } 
   console.log(game);
   
   Cookies.set('game', JSON.stringify(game));


   location.href = "showdown.html";
}

cowboy.map(function(choice, index) {
  
    let div = document.createElement('div');
    

    div.innerHTML = `
        <img src="${choice.image}">
        <h3>${choice.name}</h3>
        <p>Atk: ${choice.shot} | HP: ${choice.hp}</p>
    `;

    div.addEventListener('click', function() {
        startGame(index);
    });

    document.querySelector('.choose-cowboy').append(div);
});