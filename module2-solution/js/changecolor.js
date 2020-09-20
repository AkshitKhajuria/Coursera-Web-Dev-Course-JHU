// const lightbg = '#476D86';
var sp_style = document.getElementById('sp').style;

function changeSPColor(triggerElem,newColor){
	triggerElem.addEventListener('mouseover',()=>{
	    sp_style.color = newColor;
	});
	triggerElem.addEventListener('mouseout',()=>{
	    sp_style.color = 'inherit';
	});
}

const card = document.querySelectorAll('.card');
card.forEach(c=>{
	const h_color = window.getComputedStyle(c.firstElementChild).getPropertyValue('background-color');
	changeSPColor(c,h_color);
});
