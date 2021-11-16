function askerlikdurumu(deger)
{
	if(document.getElementById(deger).value=="Erkek")
	{ document.getElementById("askerlik").type="text";}
	else
	{document.getElementById("askerlik").type="hidden";}
	
	
}

function ackapat(deger)
{
	if(document.getElementById(deger).type=="text")
	{ document.getElementById(deger).type="hidden";}
	else
	{document.getElementById(deger).type="text";}
	
	
}

function kapat()
{
	document.getElementById("askerlik").value="";
	document.getElementById("digerdil").value="";
	document.getElementById("digerilgi").value="";
	document.getElementById("digerbeceri").value="";
	document.getElementById("askerlik").type="hidden";
	document.getElementById("digerdil").type="hidden";
	document.getElementById("digerilgi").type="hidden";
	document.getElementById("digerbeceri").type="hidden";
}