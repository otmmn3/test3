/*if文,for文*/
//問１
for(var i = 1; i <= 5; i++) {
    document.write("★");
}
document.write("<br>");
document.write("<br>");

//問２
for(var line1 = 1; line1 <= 2; line1++) {
    for(var star2 = 1; star2 <= 3; star2++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

//問３
for(var star1 = 1; star1 <= 2; star1++){
    for(var star2 = 1; star2 <= 5; star2++) {
        document.write("☆");
    }
    document.write("<br>");
}
document.write("<br>");

//問４
for(var star1 = 1; star1 <= 4; star1++) {
    for(var star2 = 1 ; star2 <= 5; star2++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

//問５
for(var star1 = 1; star1 <= 4; star1++) {
    for(var star2 = 1; star2 <= 3; star2++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

//問６
for(var star1 = 0; star1 <= 2; star1++) {
    for(var star2 = 0; star2 <= 2; star2++) {
        if(star2 % 2 == 0) {
            document.write("★");
        } else {
            document.write("☆");
        }   
    } 
    document.write("<br>"); 
}
document.write("<br>");

//問７
for(var star1 = 0; star1 <= 3; star1++) {
    for(var star2 = 0; star2 <= 4; star2++) {
        if(star2 % 2 == 0) {
            document.write("★");
        }
        else{
            document.write("☆");
        }   
    } 
    document.write("<br>"); 
}
document.write("<br>");

//問８
for(var star1 = 0; star1 <= 4; star1++) {
    for(var i = 0; i <= star1; i++) {
        document.write("★");
    }
    document.write("<br>"); 
}
