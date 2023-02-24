let hover1 = document.getElementById("sale1");
let hover2 = document.getElementById("sale2");
let hover3 = document.getElementById("sale3");
let hover4 = document.getElementById("sale4");
let hover5 = document.getElementById("sale5");

let bildhover1 = document.getElementById("bildsales1");
let bildhover2 = document.getElementById("bildsales2");
let bildhover3 = document.getElementById("bildsales3");
let bildhover4 = document.getElementById("bildsales4");
let bildhover5 = document.getElementById("bildsales5");

hover1.style.display="none";
hover2.style.display="none";
hover3.style.display="none";
hover4.style.display="none";
hover5.style.display="none";


bildhover1.addEventListener("mouseover",function(){
	bildhover1.style.opacity=0.6;
	hover1.style.display="block";
});
bildhover1.addEventListener("mouseout",function(){
	bildhover1.style.opacity=null;
	hover1.style.display="none";
});

 
bildhover2.addEventListener("mouseover",function(){
	bildhover2.style.opacity=0.6;
	hover2.style.display="block";
});
bildhover2.addEventListener("mouseout",function(){
	bildhover2.style.opacity=null;
	hover2.style.display="none";
});

bildhover3.addEventListener("mouseover",function(){
	bildhover3.style.opacity=0.6;
	hover3.style.display="block";
});
bildhover3.addEventListener("mouseout",function(){
	bildhover3.style.opacity=null;
	hover3.style.display="none";
});

bildhover4.addEventListener("mouseover",function(){
	bildhover4.style.opacity=0.6;
	hover4.style.display="block";
});
bildhover4.addEventListener("mouseout",function(){
	bildhover4.style.opacity=null;
	hover4.style.display="none";
});

bildhover5.addEventListener("mouseover",function(){
	bildhover5.style.opacity=0.6;
	hover5.style.display="block";
});
bildhover5.addEventListener("mouseout",function(){
	bildhover5.style.opacity=null;
	hover5.style.display="none";
});