
/*
 * page grad test
 * t:	950/960/980
 * 
 * $.getScript('http://dragonui.com/resource/js/pagegrad.js');
 * 
 */
function creatGradBg(t){
	var _t = t || [950,960,980],
		_p = 'http://dragonui.com/resource/images/grad/' + _t + '/cssgradbg.png',
		//_s = 'width:100%;height:100%;position:absolute;z-index:1000;opacity:0.5;background:url('+_p+') report-y center 0',
		_h = '<div id="pageGradBg"></div>'
		_b = $('#pageGradBg');
		_b.remove();
	var _height = $('body').height();
	console.log(_p);
	$(_h).css({
		width:'100%',
		//height:_height,
		position:'absolute',
		zIndex:1000,
		opacity:0.5,
        left:0,
        top:0,
        //'background-position':'center 0',
        //'background-repeat':'repeat-y',
        //'background-image':'url("'+_p+'")'
		background:'url("'+_p+'") report-y center 0'
	}).height(_height).appendTo('body');	
}

function removeGrad () {
  $('#pageGradBg').remove();
}

(function(){
	creatGradBg(980);
})();
