var helpWriteBtn = document.getElementById("helpWriteBtn");
var userEng = document.getElementById("userEng");
var suggGhost = document.getElementById("suggGhost");
var writePort = document.getElementById("writePort");
var dashPort = document.getElementById("dashPort");
var tutorialBar = document.getElementById("tutorialBar");

userEng.onkeyup = function () {
  suggGhost.style.display = "block";
  var splitA = userEng.value.split(" ");
  var tProduct = [];
  var cProduct = [];
  for(i=0;i<splitA.length;i++){
    if(dictionary.noun.join("").search(splitA[i])==-1){
      tProduct.push("<g class='prv'>"+splitA[i]+"</g>");
    } else {
      tProduct.push(splitA[i]);
    }
  }
  var spaceCount = 0;
  for(i=0;i<splitA.length;i++){
    if(splitA[i]=="") {
      if(spaceCount==0) {
        cProduct.push(splitA[i]);
        spaceCount += 1;
      } else if (spaceCount>=1&&splitA[i]!=""){
        spaceCount = 0;
      }
    } else {
      cProduct.push(splitA[i]);
    }
  }
  suggGhost.innerHTML = tProduct.join(" ");
  userEng.value = cProduct.join(" ");
}
userEng.onkeydown = function () {
  suggGhost.style.display = "none";
}

function dashSelect() {
  document.getElementById("dashHover").style.display = "block";
  document.getElementById("dashIdol").style.display = "none";
  document.getElementById("docsHover").style.display = "none";
  document.getElementById("docsIdol").style.display = "block";
  writePort.style.display = "none";
  dashPort.style.display = "block";
}

function docsSelect() {
  document.getElementById("dashHover").style.display = "none";
  document.getElementById("dashIdol").style.display = "block";
  document.getElementById("docsHover").style.display = "block";
  document.getElementById("docsIdol").style.display = "none";
  writePort.style.display = "block";
  dashPort.style.display = "none";
}

setTimeout( function () {
  tutorialBar.style.opacity = "0";
}, 1000);
setTimeout( function () {
  tutorialBar.style.display = "none";
}, 2000);
