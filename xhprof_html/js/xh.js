window.addEventListener('load', () => {
	Array.from(document.getElementsByClassName('box-tables')).forEach(tbl => 
		tbl.getElementsByTagName('thead')[0].addEventListener('click', headerClick)
	)
});

function headerClick(e) {
	var tbl = e.target.closest('table');
	var body = tbl.getElementsByTagName('tbody')[0];
	body.style.display = body.style.display == 'inherit' ? '' : 'inherit';
}