//bài 1
var num = prompt("Nhap day so!");
var dayso = [];
console.log(num);
var a = "";
for (i = 0; i < num.length; i++) {
  if (num[i] != " ") {
    a = a + num[i];
  } else {
    if (a != "") {
      dayso.push(a);
    }
    a = "";
  }
}
console.log(dayso);
for (i = dayso.length - 1; i > -1; i--) {
  console.log(dayso[i]);
}
//bài 2
var dayso = [128, 2, 4, 16, 2, 128, 64, 4, 7, 4, 64, 16]
var trunglap = false
for (i = 0; i < dayso.length; i++) {
  trunglap = false
  for (j = i + 1; j < dayso.length; j++) {
    if (dayso[i] * dayso[j] == 256) {
      console.log(dayso[i] + " and " + dayso[j] + " position is " + dayso.indexOf(dayso[i]) + " and " + dayso.indexOf(dayso[j]))
      trunglap = true
      break
    }
  }
  if (trunglap == true) {
    for (k = i + 1; k < dayso.length; k++) {
      if (dayso[k] == dayso[i]) {
        dayso[k] = 0
      }
    }
  }
}
