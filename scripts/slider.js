$(document).ready(function(){
// esto hace que se ejecute la funcion 'avanzar()' cada 3000ms
var t=setInterval(function(){avanzar();},5000);

// esto hace que se ejecute la funcion 'avanzar()' despues de 3000ms. No repite
//var t=setTimeOut(function(){avanzar();},3000);

// asignamos eventos a los botones para manejar el slider
	$('#btnAnt').click(function(){
	   retroceder();
	});
	
	$('#btnSig').click(function() {
	   avanzar();
	});	

});


function avanzar()
{
		
    // num de elem de clase '.s_element' que 'encontramos' en '.slider'
	var size = $('.slider').find('.s_element').size();
	    // para cada elem de clase '.s_element' que 'encontramos' en '.slider'
		$('.slider').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
				    
					$(value).slideUp(1000, function() { $(value).removeClass('s_visible'); });
					//$(value).removeClass('s_visible');
					if(index+1 < size)
					{
						var next = $($('.slider').find('.s_element').get(index+1));
						/*$($('.slider').find('.s_element').get(index+1)).slideDown(4500);
						$($('.slider').find('.s_element').get(index+1)).addClass('s_visible');
						return false;*/
					}
					else
					{
					    var next = $($('.slider').find('.s_element').get(0));
						/*$($('.slider').find('.s_element').get(0)).slideDown(4500);*/
						$($('.slider').find('.s_element').get(0)).addClass('s_visible');
						/*return false;*/
					}
					next.slideDown(1000, function() {next.addClass('s_visible');} );
					/*next.addClass('s_visible');*/
					return false;
				}
		});
}

function retroceder()
{
	var size = $('.slider').find('.s_element').size();
	$('.slider').find('.s_element').each(
		function(index,value){
			if($(value).hasClass('s_visible'))
			{
				$(value).slideUp(500, function() { $(value).removeClass('s_visible'); });
				//$(value).removeClass('s_visible');
					
				if(index == 0)
				{
				    var next = $($('.slider').find('.s_element').get(size-1));
					/*$($('.slider').find('.s_element').get(size-1)).slideDown();
					$($('.slider').find('.s_element').get(size-1)).addClass('s_visible');
					return false;*/
				}
				else
				{
				    var next = $($('.slider').find('.s_element').get(index-1));
					/*$($('.slider').find('.s_element').get(index-1)).slideDown();
					$($('.slider').find('.s_element').get(index-1)).addClass('s_visible');	
					return false;*/
				}
				next.slideDown(1000, function() {next.addClass('s_visible');} );
				//next.addClass('s_visible');
				return false;
			}
	});
}
