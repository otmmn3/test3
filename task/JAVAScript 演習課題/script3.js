/*関数*/
//問１
function menseki(hankei) {
    return "円の面積は" + hankei * hankei * 3.14 + "㎠です。<br>";
}
document.write("半径5cmの" + menseki(5));
document.write("半径7cmの" + menseki(7));
document.write("半径10cmの" + menseki(10));

document.write("<br>")

//問２
function totalAmount(group, adultCount, childCount) {
    return group + "グループの合計金額は" + (adultCount * 500 + childCount * 200) + "円です。<br>";
}
document.write(totalAmount("A", 2, 4));
document.write(totalAmount("B", 1, 5));
document.write(totalAmount("C", 3, 7));


