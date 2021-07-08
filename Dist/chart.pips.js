const tvchart={};
tvchart.createChart=function (){
	const chart=$('#chart');
	const header=document.createElement('div');
	header.className='header';
	header.innerHTML='<label class=name></label>';
	header.innerHTML+='<label class=interval></label>';
	header.innerHTML+='<label class=chartype>'+candlesvgimage+'</label>'
	chart.append(header);
	window.addEventListener('load',function (){
		let widthofname=(((Number($('#chart .header .name').css('width').replace('px',''))+21).toString())+'px');
		$('#chart .header .interval').css('margin-left',widthofname);
		$('#chart .header .interval').html('<label class=1m>1m</label>');
		$('#chart .header .interval').append('<label class=5m>5m</label>');
		$('#chart .header .interval').append('<label class=15m>15m</label>');
		$('#chart .header .interval').append('<svg viewBox="55.749 -6.969 217.771 140.244" xmlns="http://www.w3.org/2000/svg" class=down><path d="M 64.111 18.99 L 264.111 18.99 L 164.111 118.99 L 64.111 18.99 Z"/></svg>');
		widthofname=(((Number($('#chart .header .interval').css('width').replace('px',''))+6)+(Number($('#chart .header .name').css('width').replace('px',''))+21))+'px');
		$('#chart .header .chartype').css('margin-left',widthofname);
	});
	const draw=document.createElement('div');
	const body=document.createElement('div');
	const feature=document.createElement('div');
	const footer=document.createElement('div');
	draw.className='draw';
	body.className='body';
	feature.className='feature';
	footer.className='footer';
	chart.append(draw);
	chart.append(body);
	chart.append(feature);
	chart.append(footer);
	let api={};
	api.symbol=function (s) {
		if (s.name!=null&&s.exchange!=null) {
			$('#chart .header .name').html(s.name);
			$('title').html(s.name+' ('+s.exchange+')');
		}
	};
	return api;
};