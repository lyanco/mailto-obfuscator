(function(){
	var bits = ['m',String.fromCharCode(111),'c',String.fromCharCode(46),'e',String.fromCharCode(108),'p',String.fromCharCode(109),'a','x',String.fromCharCode(101),String.fromCharCode(64),String.fromCharCode(116),'s','e','t'];
	var addr = bits.reverse().join('');
	var mtbits = ['o',String.fromCharCode(116),'l',String.fromCharCode(105),'a','m'];
	var head = mtbits.reverse().join('');
	document.write('<a href="' + head + ':' + addr + '">' + addr + '</a>');
})();
