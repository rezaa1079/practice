var button=document.querySelector("button");
var input=document.querySelector("input");
var ul=document.querySelector("ul");



function enter() 
{
	button.addEventListener("click" , function () 
{
	if (input.value.length>0) 
	{
		var li=document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li)
		input.value="";


	}
})

input.addEventListener("keypress" , function () 
{
	if (input.value.length>0 && event.which===13) 
	{
		var li=document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li)
		input.value="";


	}
})
}
enter();