function insert(no)
{
	document.form.textview.value=document.form.textview.value+no;
}

function equal()
{
	var ans=document.form.textview.value;
	if(ans)
		document.form.textview.value=eval(ans);
}

function clean() 
{
	document.form.textview.value=""	
}


function back() 
{
	var exp=document.form.textview.value;
	document.form.textview.value=exp.substring(0,exp.length-1)
}

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


