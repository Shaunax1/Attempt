  
 function ucgen(){
  
 var tabanUzunlugu = prompt("Lütfen üçgenin taban uzunluğunu girin:");

 for (var i = 0; i < tabanUzunlugu; i++) {
  
  for (var j = 0; j < tabanUzunlugu - i; j++) {
    document.write("&nbsp;");
  }
  for (var k = 0; k <= i; k++) {
    document.write("*");
  }
  document.write("<br>");
}
 } 


function tablo() {
  // Tablo oluştur
  var table = document.createElement("table");
  document.body.appendChild(table)

  // Satır oluştur
  var tr = document.createElement("tr");
  table.appendChild(tr);

  // İlk hücre oluştur
  var td1 = document.createElement("td");
  td1.width = "300";
  tr.appendChild(td1);

  // İkinci hücre oluştur
  var td2 = document.createElement("td");
  td2.width = "300";
  tr.appendChild(td2);

  // İlk resim oluştur
  var img1 = document.createElement("img");
  img1.src = "resim1.JPG";
  img1.width = "250";
  td1.appendChild(img1);

  // İkinci resim oluştur
  var img2 = document.createElement("img");
  img2.src = "resim2.JPG";
  img2.width = "250";
  td2.appendChild(img2);
}



 /* Asal Sayi olup olmadığı */ 
      
       function asalMi(){
        let girilenSayi;
        let asalMi = true;
 
        do{
            girilenSayi = prompt("Lütfen bir sayı giriniz.");
        } 
        while(girilenSayi < 2)
 
        for(let i = 2; i < girilenSayi; i++){
            if(girilenSayi%i == 0){
                asalMi = false;
                break;
            }
        }
 
        if(asalMi) {
            alert(girilenSayi + " asal sayıdır!")
        } else{
            alert(girilenSayi + " asal sayı değildir!")
        }
       } 
        
/*----------------------------------------------------- */ 

/* ---------------------------------------------------- */ 
       function hesapMakinasi(){
        var x = parseInt(prompt("X Sayısını Giriniz : "));
        let secim=prompt("+,-,/,*");
        var y = parseInt(prompt("Y Sayısını Giriniz : "));
    

    switch(secim){
        case"+":
        alert(x+y);
        break;
        case"-":
        alert(x-y);
        break;
        case"/":
        alert(x/y);
        break;
        case"*":
        alert(x*y);


    }
       }
/* ------------------------------------------------------------- */ 