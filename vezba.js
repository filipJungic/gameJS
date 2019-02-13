var niz = [3,-7,12,-6,-8,55,6,-1];
var zbir = 0;
var pro = 1;

document.write("Ukupan broj clanova niza je "+niz.length+"<br>");

for (var i=0; i<niz.length; i++) {
  document.write("broj je "+niz[i]+" ,");

  if (niz[i]>0) {
    pro*=niz[i];
  }
  else {
    zbir+=niz[i];
  }
}
document.write("<br>");
document.write("poizvod je "+pro+"<br>");
document.write("zbir negativnih je "+zbir+"<br>");

document.write("<br>");
document.write("<br>");
document.write("<br>");

//4. formirati niz neparnih brojeva od 1 do 45 i napraviti simetriju niza
var niz=[];
var a=[];

for (var i=1; i<=45; i++) {
  if (i%2==1){
    niz.push(i);
    a.push(i);
  }

}
var b=a.reverse();
var c=niz.concat(b);
document.write(c);

document.write("<br>");
document.write("<br>");
document.write("<br>");


var niz=[];
var a=[];

for (var i=1; i<=45; i++) {
  if (i%2==1){
    niz.push(i);

  }
  else {
    a.push(i);
  }

}
var f=niz.concat(a);
document.write(f);
document.write("<br>");
document.write("<br>");
document.write("<br>");


/* 1. Niz desetica */

var desetica=1;
var niz=[];
var f;

while (desetica<=59) {
  f=desetica*10;
  desetica++;
  niz.push(f);
}
document.write(niz);
document.write("<br>");
document.write("<br>");
document.write("<br>");

var indexStart=niz.indexOf(200);
var indexEnd=niz.indexOf(400);

var noviNiz=niz.slice(indexStart,indexEnd+1);
document.write(noviNiz);
document.write("<br>");
document.write("<br>");
document.write("<br>");

var noviNiz2=[];

for (var i = 0; i < niz.length; i++) {
  if ((niz[i]>=200)&&(niz[i]<=400)) {
    noviNiz2.push(niz[i]);
  }
}
document.write(noviNiz2);
document.write("<br>");
document.write("<br>");
document.write("<br>");
/* 2. Trocifrene i cetvorocifrene ispiuje naopako */
var a=124;
var b=4678;
if ((a>=100)&&(a<=999)) {
  var nesto=a%10;
  var neko=a/10;
  var deset=neko%10;
  var sto=a%10;
}
document.write(nesto);
document.write(sto);

document.write("<br>");
document.write("<br>");
document.write("<br>");


/* Napisati niz brojeva (n<=100), od tog niza napraviti novi niz A koji sadrzi samo neparne brojeve niza, potom iyracunati srednju vrednost tog novog niza*/

var niz=[2,21,3,5,19,22,73,60,4];
var b=[];
var brojac=0;
var suma=0;

for (var i = 0; i<niz.length; i++) {
  if (niz[i]%2==1) {
    b.push(niz[i]);
    suma+=niz[i];
    brojac++;
  }
}

var srednja=suma/brojac;
document.write("Dobijeni niz je "+b+ " a njegova srednja vrednost je "+ srednja);

document.write("<br>");
document.write("<br>");
document.write("<br>");


/* sabiranje korespodentnih clanova niza */
var a=[1,2,3,4];
var b=[5,6,7,8];
var zbir;
var raylika;
var c=[];
var d=[];

for (var i = 0; i < a.length; i++) {
  for (var i = 0; i < b.length; i++) {
    zbir=a[i]+b[i];
    c.push(zbir);
    razlika=c[i]-a[i];
    d.push(razlika);
  }
}
if (a.length==b.length) {
  document.write("Niz c: "+c+"<br>");
  document.write(" Niz d: "+d);

}
else {
  document.write("greska");
}


document.write("<br>");
document.write("<br>");
document.write("<br>");
/*napisati program koji od zadate matrice kreira dva niza*/

var matrix=[[1,2,3,4],[5,6,7,8],[3,2,3,2]];
var zbir=0;
var a=[];
var numbRow=matrix.length;
var numbCol=matrix[0].length;


for (var col = 0; col < numbCol; col++) {
  for (var row = 0; row < numbRow; row++) {
    if (col%2==0) {
      zbir=+matrix[row];
      a.push(zbir);
      document.write(a);

  }
}
}


document.write("<br>");
document.write("<br>");
document.write("<br>");


/* definisati funkciju IZBACIk koja iz niza brojeva duzine n izbacuje k-ti element (1<=k<=n)*/

var niz=[1,2,3,4,5,6,7,8];
var k=4;
var a=[];

for (var i = 0; i < niz.length; i++) {
  if (i!=k){
    a.push(niz[i]);
  }
}
document.write(a);
