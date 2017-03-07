var dosad=document.getElementById('dosad');
var i=0;
var s=0;
dosad.addEventListener('click', function () {
if (s>7){
    dosad.style.color="yellow";
    dosad.style.text.shadow="2px 2px #ff3355";
	dosad.innerHTML="LOŠ SI SKROZ, osveži stranicu"}
    
	else{
	if (i==0) {dosad.innerHTML="PROMAŠAJ !!! probaj ponovo !";

	  dosad.style.border="5px solid gold";
	  dosad.style.color="white";
	  dosad.style.background="black";
	  dosad.style.position="relative";
	  dosad.style.left="500px";
	  //alert('pauza');
	  i++;
	  s++
	   } else {
	  

	  dosad.innerHTML="PROMAŠAJ !!! probaj ponovo !";
	  dosad.style.border="5px solid gold";
	  dosad.style.color="white";
	  dosad.style.background="black";
	  dosad.style.position="relative";
	  dosad.style.left="0";
	  i=0;
	  s++;}
//}
}
})