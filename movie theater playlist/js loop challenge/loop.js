document.write("Chall 1<br><br>")
for (i = 0; i < 6; i++) {
  document.write("I hate hw<br>");
}
document.write("<br>");

document.write("Chall 2<br><br>")
for (i = 0; i < 5; i++) {
    document.write("numb " + i + "<br>");
}

document.write("Chall 3<br><br>")

for (i = 15; i <31; i++) {
  // use an if statement and use % modulus
 if(i%3) {
  document.write(i + i + i + i + i )
 }
}