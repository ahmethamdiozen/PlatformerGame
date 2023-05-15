class Sprite {
    constructor(x, y, source){
        this.position = {
            x : x,
            y : y, 
        }
        this.image = new Image();
        this.image.src = source;
    }
    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}

// Bu sınıf oyunda kullanılacak olan resimleri kapsıyor. 
// Her resmin pozisyonu, kaynak dosyası konstrüktör ile çağrılıyor.
// drawImage fonksiyonu ile de canvas üzerine bu resim o an o konuma basılıyor.