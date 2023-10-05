

//block for loading images

var loader = document.querySelectorAll(".loadImg");

window.addEventListener("load", showImg);

function showImg() {
	
	loader.forEach(loadImg => {
		loadImg.style.opacity = 1;		
	});

}


// block  for loading icons

var loadIconDiv = document.querySelectorAll(".divIcon");
var loadIcon = null;

function showIcons() {
	loadIconDiv.forEach(divIcon => {
		divIcon.style.backgroundColor = "#1E1E1E";
		document.getElementById("imgHome").style.visibility = "visible";
		document.getElementById("imgHome").style.animationDuration = "1s";
		document.getElementById("imgPen").style.visibility = "visible";
		document.getElementById("imgCamera").style.visibility = "visible";
		document.getElementById("imgPlay").style.visibility = "visible";
		document.getElementById("img2D").style.visibility = "visible";
		document.getElementById("img3D").style.visibility = "visible";
		document.getElementById("imgGame").style.visibility = "visible";
		document.getElementById("imgWeb").style.visibility = "visible";
		document.getElementById("imgMessage").style.visibility = "visible";
	}
	);
}


//----------------------------------------------------------------------


//block for CGI slider

var i = null;
var value = null;
var slider = null;
var output = null;
var m = null;
		
function funcAdjust(i,m) {
	slider = document.getElementById("myRange" + i);
	output = document.getElementById("mask" + m + i);
	value = (100-slider.value).toString() + '%';
	output.style.setProperty("--mask", value);
}

//----------------------------------------------------------------------


//block for submitting email form (working)

function submitForm() {
	
	var email = document.getElementById("txtEmail").value;
	var subj = document.getElementById("txtSubject").value;
	var msg = document.getElementById("txtMessage").value;
	
	if (email != "") 
	{
		if (email.includes('@') && email.includes('.') || email.includes('_'))
		{
			if (subj != "") 
			{
				if (msg != "") 
				{
					document.getElementById("frmEmail").submit();
				}
				
				else 
				{ 	
					document.getElementById("txtEmail").style.outline = "none";
					document.getElementById("txtSubject").style.outline = "none";
					document.getElementById("txtMessage").style.outline = "1px solid rgba(255,0,0,.5)";
				}
			}
			else 
			{ 
				document.getElementById("txtEmail").style.outline = "none";
				document.getElementById("txtMessage").style.outline = "none";
				document.getElementById("txtSubject").style.outline = "1px solid rgba(255,0,0,.5)";
			}
		}

		else 
		{
			document.getElementById("txtEmail").style.outline = "1px solid rgba(255,0,0,.5)";
			document.getElementById("txtSubject").style.outline = "none";
			document.getElementById("txtMessage").style.outline = "none";
		}
	}
	else 
	{ 
		document.getElementById("txtEmail").style.outline = "1px solid rgba(255,0,0,.5)";
		document.getElementById("txtSubject").style.outline = "none";
		document.getElementById("txtMessage").style.outline = "none";
	}
	
}

//--------------------------------------------------------------------------------------