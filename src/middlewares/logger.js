"use strict"

// $ npm i morgan
// app.use(logger):

const morgan = require('morgan') //' morgan ile logging işlemlerini yapacağız morgan modülünü içeri aktardık .morgan'ı kullanmak, gelen istekler hakkında detaylı bilgileri otomatik olarak kaydetmeyi ve bu bilgilere kolayca erişmeyi sağlar.
const fs = require('node:fs') //' fs modülü, Node.js'in dosya sistemi ile etkileşim kurmak için sağladığı yerleşik bir modüldür. Bu modül, dosya oluşturma, okuma, yazma gibi işlemleri yapmayı sağlar 

const now = new Date() //'mecut saat ve tarih bilgisini now değişkenine atar 
const today = now.toISOString().split('T')[0] //' string ifadeye çevirdik now değişkenine atadık, T karakterine göre böldük ve ilk kısmı aldık [0]

module.exports = morgan('combined', { //' morgan modülü, 'combined' formatında loglama yapacak şekilde konfigüre edilmiştir. 'combined' formatı, log kayıtlarında geniş bilgi seti sunan standart bir Apache kombinasyonu log formatıdır.
    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
})
//'fs.createWriteStream metodu, belirtilen yolda bir yazma akışı (write stream) oluşturur. Bu durumda, ./logs/${today}.log yolu kullanılır, burada ${today} mevcut tarihe karşılık gelir. Böylece, her gün için ayrı bir log dosyası oluşturulmuş olur.

//'{ flags: 'a+' } seçeneği, dosyanın, var olmayan bir dosya olması durumunda oluşturulmasını ve mevcut verilere eklenmek üzere açılmasını sağlar. Bu, gün içinde gelen her isteğin, o günün log dosyasına eklenmesini garanti eder.