

//card array
const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-lovers.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-devil.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-star.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png',
    'https://www.trustedtarot.com/img/cards/the-sun.png',
    'https://www.trustedtarot.com/img/cards/judgement.png',
    'https://www.trustedtarot.com/img/cards/the-world.png',
    'https://www.trustedtarot.com/img/cards/king-of-cups.png',
    'https://www.trustedtarot.com/img/cards/queen-of-cups.png',
    'https://www.trustedtarot.com/img/cards/knight-of-cups.png',
    'https://www.trustedtarot.com/img/cards/page-of-cups.png',
    'https://www.trustedtarot.com/img/cards/ten-of-cups.png',
    'https://www.trustedtarot.com/img/cards/nine-of-cups.png',
    'https://www.trustedtarot.com/img/cards/eight-of-cups.png',
    'https://www.trustedtarot.com/img/cards/seven-of-cups.png',
    'https://www.trustedtarot.com/img/cards/six-of-cups.png',
    'https://www.trustedtarot.com/img/cards/five-of-cups.png',
    'https://www.trustedtarot.com/img/cards/four-of-cups.png',
    'https://www.trustedtarot.com/img/cards/three-of-cups.png',
    'https://www.trustedtarot.com/img/cards/two-of-cups.png',
    'https://www.trustedtarot.com/img/cards/ace-of-cups.png'
    'https://www.trustedtarot.com/img/cards/king-of-swords.png',
    'https://www.trustedtarot.com/img/cards/queen-of-swords.png',
    'https://www.trustedtarot.com/img/cards/knight-of-swords.png',
    'https://www.trustedtarot.com/img/cards/page-of-swords.png',
    'https://www.trustedtarot.com/img/cards/ten-of-swords.png',
    'https://www.trustedtarot.com/img/cards/nine-of-swords.png',
    'https://www.trustedtarot.com/img/cards/eight-of-swords.png',
    'https://www.trustedtarot.com/img/cards/seven-of-swords.png',
    'https://www.trustedtarot.com/img/cards/six-of-swords.png',
    'https://www.trustedtarot.com/img/cards/five-of-swords.png',
    'https://www.trustedtarot.com/img/cards/four-of-swords.png',
    'https://www.trustedtarot.com/img/cards/three-of-swords.png',
    'https://www.trustedtarot.com/img/cards/two-of-swords.png',
    'https://www.trustedtarot.com/img/cards/ace-of-swords.png',
  ]

  // const i = Math.floor(Math.random()*cards.length);

  // //adding a div 
  // function insert() { 
  //   for(var i = 0; i < cards.length; i++){
  //     var tempCard = cards[i]
  //     $(`<img src=${tempCard}>`).appendTo($('#parent'));  

  //   }        
  //  }  

  //  insert()


  function insertCard() { 
    const i = Math.floor(Math.random()*cards.length);
    var tempCard = cards[i]
    $(`<img src=${tempCard}>`).appendTo($('#parent'));    
 }  





   
