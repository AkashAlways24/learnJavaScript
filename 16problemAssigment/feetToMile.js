function feetToMile(feet) {
  var mile= feet/5280;
  return mile;
}

var dhaka = 633600;

var finalMileDhaka= feetToMile(dhaka);

console.log("sirajganj to dhaka ", finalMileDhaka, "mile");

var teknaf =3142128;

var finalMileTeknaf= feetToMile(teknaf);

console.log("sirajganj to teknaf ", finalMileTeknaf, "mile");