class CollisionBlock{
    constructor({ position }){
        this.position = position;
        this.width = 16; // her blok 16 x 16 pikselden oluşuyor oyunumuzda.
        this.height = 16;
    }
}
// Karakterlerin geçemeyeceği blokların ismi CollisionBlock.
// Bu bloklar için bir sınıf oluşturup belli değerler (konum, genişlik, uzunluk vb) atıyorum.
