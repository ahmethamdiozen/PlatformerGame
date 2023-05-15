class Player{
    constructor(a, b, c, d, { collisionBlocks = []} ){
        this.position = {
            x: a,
            y: b,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.gravity = 1;
        this.width = c;
        this.height = d;
        this.sides = {
            top : this.position.y,
            bottom : this.position.y + this.height,
            right : this.position.x  + this.width,
            left : this.position.x
        }
        this.collisionBlocks = collisionBlocks;
    }
draw(x){
    ctx.fillStyle = x;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}
// Karakterlerimizin özelliklerini taşıyan sınıfımız.
// Karakterlerin konumları, hızları, büyüklükleri gibi değerleri taşıyor. 
// Collision bloklarla olan etkileşimleri için de parameter olarak giremeyecekleri blokların konumları veriliyor.


// update fonksiyonu ise karakterin hızının x ve y değerini karakterin konumunun x ve y değerlerine ekliyor.
// Bu ekleme sonucunda ise karakterimizin konumu değişmiş oluyor.
update(){
    this.position.x += this.velocity.x;

    for(let i=0; i < this.collisionBlocks.length; i++){
        const theBlock = this.collisionBlocks[i];
// Aşağıdaki if yapısı oyuncular ile collision bloklarının konumlarına göre birbirlerine değip değmediğini kontrol ediyor.
// X EKSENİ İÇİN
// Eğer değiyorsa onu aşağıdan yukarıdan sağdan soldan ufak ufak iterek olması gereken konumda tutuyor.
// Aynı kod y ekseni için de aşğıda mevcut.
    if( (this.position.x <= theBlock.position.x + theBlock.width) &&
        (this.position.x + this.width >= theBlock.position.x) && 
        (this.position.y + this.height >= theBlock.position.y) &&
        (this.position.y <= theBlock.position.y + theBlock.height)){
    
            if(this.velocity.x < 0){
                this.position.x = theBlock.position.x + theBlock.width + 0.01;
                break;
            }
            if(this.velocity.x > 0){
                this.position.x = theBlock.position.x - this.width - 0.01;
                break;
            }
    }
    }
    // yer çekimi her an uygulanmaya devam ediyor.
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;

    for(let i=0; i < this.collisionBlocks.length; i++){
        const theBlock = this.collisionBlocks[i];

// Aşağıdaki if yapısı oyuncular ile collision bloklarının konumlarına göre birbirlerine değip değmediğini kontrol ediyor.
// Y EKSENİ İÇİN
    if( (this.position.x <= theBlock.position.x + theBlock.width) &&
        (this.position.x + this.width >= theBlock.position.x) && 
        (this.position.y + this.height >= theBlock.position.y) &&
        (this.position.y <= theBlock.position.y + theBlock.height)){
    
            if(this.velocity.y < 0){
                this.velocity.y = 0;
                this.position.y = theBlock.position.y + theBlock.height + 0.01;
                break;
            }
            if(this.velocity.y > 0){
                this.velocity.y = 0;
                this.position.y = theBlock.position.y - this.height - 0.01;
                break;
            }
    }
    }
}
}