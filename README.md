# Platformer Game

Bu oyun web tabanlı bir 2D platform oyunudur. Oyunda 2 tane karakterimiz var ve amaçları bulundukları yerden portal sayesinde kaçmak. Bunun için aşmaları gereken parkurlar var. Aynı zamanda taktiksel de bir oyun. Çünkü 2 karakterin kaçıp kaçamayacağı birbirleriyle olan etkileşimlerine bağlı. İki kişi ile oynanabileceği gibi bir kişi iki elini kullanarak da oynayabilir.

## Nasıl Oynarım?

Repodaki dosyaları aynı dizinde topladıktan sonra 'index.html' dosyasını herhangi bir tarayıcıda çalıştırarak projeye erişebilirsiniz.

Aynı zamanda bu oyunu [platformergame.freeoda.com](http://platformergame.freeoda.com) sitesinden de bir tık ile oynayabilirsiniz.

Oyunda 2 karakterimiz var ve bunlardan biri WASD diğeri ise yön tuşları ile kontrol ediliyor. 

Karakterlerimizin haritada bir bloğun üstünde kalmalarını sağlamak için Tiled isimli harita yapımı uygulamasından dışa aktardığım her 16x16'lık bloğun karakterlerle collision (çarpışma) oluşturup oluşturmadığını belirten veri kullanıldı. Bu blokların konumları ile karakterlerine konumları X ve Y ekseni üzerinde her kare geçişinde kontrol ediliyor.

Aşağıdaki gifte Tiled isimli harita üretme uygulaması kullanılarak oluşturulan kırmızı bloklar collision oluşturan bloklardır ve karakterlerimiz bu blokların içerisinden geçemezler. Dışa aktarılan veri ise kırmızı blokların 1 diğer blokların 0 olduğu bir boolean dizisine benzetilebilir.

![gif](https://github.com/ahmethamdiozen/PlatformerGame/assets/70757964/11d4e5d4-6273-4e63-8fff-9ce9ab5eeed9)

Haritanın üst tarafında bulunan altın bloklarının üstüne mavi karakter ile çıkarak kırmızı karakteri kırmızı karakter sadece tahta bloklar üzerinde iken uçurabiliyoruz. Her iki karakterimiz de haritanın ortasındaki portala girdiklerinde oyun bitmiş oluyor.

## Kullanılan Teknolojiler

Bu projenin yapımında sadece HTML, CSS ve Vanilla JavaScript kullanılmıştır. Hiçbir framework kullanılmamıştır.
Ayrıca Nesne Yönelimli Programlama mantığı kullanılmış bu sayede kodlar daha kolay yazılabilir ve daha kolay okunabilir hale getirilmiştir.

## Eklenilebilecek Özellikler

- Oyuna başlangıçta genel bir seviye takip sistemi kurulabilir.
- Karakterler için özel sprite'lar oluşturulabilir.
- Kaçmamız gereken yapay zeka karakterler eklenebilir.
- Etrafa bizi gözetleyen kameralar eklenebilir.

## Ek Bilgiler ve Teşekkür

Projeyi anlattığım [şu](https://youtu.be/qVkcC9_b76A) YouTube videosunu izleyerek oyun hakkında daha fazla bilgiye ulaşabilirsiniz. 

Bu oyun Web Tabanlı Programlama dersi kapsamında proje ödevi olarak verilmiştir. Asıl amaç JavaScript ile tecrübe kazanmaktır. Kendimizi geliştirmemiz için bize böyle öğretici projeler veren Turgay Tugay Bilgin Hocama ve dersin asistan hocası Muhammed Ömer Faruk Selvi'ye sektörde işimize yarayacak birçok teknik bilgiyi bizimle paylaştığı için teşekkür ediyorum.
