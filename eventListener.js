window.addEventListener("keydown", (event) =>{
    switch(event.key){
        case "w":
        case "W":
            if(player1.velocity.y == 0){ // 2 kere üst üste zıplamayı engelliyoruz.
                player1.velocity.y = -18;
            }
        break;
        case "s":
        case "S":
                player1.velocity.y = 10;
        break;
        case "a":
        case "A":
            player1.velocity.x = -5;
        break;
        case "d":
        case "D":
            player1.velocity.x = 5;
        break;

        case "ArrowUp":
            if(player2.velocity.y == 0){
                player2.velocity.y = -13;
            }
        break;
        case "ArrowDown":
                player2.velocity.y = 12;
        break;
        case "ArrowLeft":
            player2.velocity.x = -5;
        break;
        case "ArrowRight":
            player2.velocity.x = 5;
        break;
    }
} )
// Bu kodların amacı ise karakterlerimi hareket ettirmek. 
// WASD tuşları ile 1.oyuncuyu, Yön tuşları ile de 2. oyuncuyu hareket ettiriyoruz.
// İki oyuncunun da zıplama yüksekliği, hızı gibi değerler buradan değiştirilebiliyor.


// Tuşlardan ellerimizi çektiğimizde de karakterlerin hareket etmemesi için hızlarını 0 yapıyoruz.
// Dikey olan hızları yerçekimi ile zaten kendiliğinden düzenleniyor.
window.addEventListener("keyup", (event) =>{
    switch(event.key){
            case "a":
            case "A":
                player1.velocity.x = 0;
            break;
            case "d":
            case "D":
                player1.velocity.x = 0;
            break;

            case "ArrowLeft":
                player2.velocity.x = 0;
            break;
            case "ArrowRight":
                player2.velocity.x = 0;
            break;
    }

    } )
