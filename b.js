document.querySelector(".happy").addEventListener("click", function () {
  document.querySelector(".container").style.display = "block";
});
document.querySelector(".bt1").addEventListener("click", function () {
  document.querySelector(".container").style.display = "none";
});


document.querySelector(".bt2").addEventListener("click", function () {
    let p = document.getElementById("o").value;
let a = document.getElementById("a").value;
let b = document.getElementById("b").value;
let c = document.getElementById("c").value;

  document.querySelector("#p").innerHTML=a;
  document.querySelector("#q").innerHTML=b;
  document.querySelector("#r").innerHTML=c;
  document.querySelector("#p1").innerHTML=p;
  console.log(a);

  document.querySelector(".container").style.display = "none";
});
