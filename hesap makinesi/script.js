"use";

var _butonlar = document.getElementsByTagName("button"),
_uzunluk = _butonlar.length,
i = 0,
_sonuç = document.getElementById("sonuç");

for (i = 0; i < _uzunluk; i++){
    _butonlar[i].onclick = hesapla;
}

function hesapla (){
    var _deger = this.innerHTML//HTML kısmına ulaşır
   
    if (_deger == "="){
        try {
            _sonuç.value = eval(_sonuç.value);//evaluate js code and executes it?
        }
        catch (e){
            _sonuç.value = "0";
        }
    return;
    }

    _sonuç.value += _deger;

}

