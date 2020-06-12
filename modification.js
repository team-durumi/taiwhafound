// new main newsletter
$('#w202006127198e308f465d').parent('.col-dz').css('background-color', 'black');
$('#input_txt_438cfbe3d37f1').attr("placeholder", "이름");
$('#input_txt_079ae4d1844bb').attr("placeholder", "이메일");
$("#addFormw20200612f523adb263ee5").find('.checkbox').append('<a style="margin:0 0 5px 10px;font-weight:bold;font-size:22px;display:inline-block;line-height:1.6;cursor:pointer;" class="newsletter-privacy-content">[보기]</a>');

$('.newsletter-privacy-content').click(function() {
  console.log('[보기] clicked!');
  $('#w20200612f523adb263ee5').css('height','350px');
  $('#addFormw20200612f523adb263ee5').find("#privacy").find(".form-control").show();
});
// new main newsletter end


// mozo rolling board
$(function(){
	$('.rolling-list').each(function(){
	    console.log($('ul', this));
	    var slider = $('ul', this).bxSlider({
	        mode: 'vertical',
	        minSlides: 2,
	        pager: false,
	        controls: false,
	    });

	    $('nav a:eq(0)', this).click(function(e){
	        e.preventDefault();
	        slider.goToPrevSlide();
	        slider.stopAuto();
	    });
	    $('nav a:eq(1)', this).click(function(e){
	        e.preventDefault();
	        slider.goToNextSlide();
	        slider.stopAuto();
	    });
	});
});
// mozo rolling board end

// old main newsletter
$('#w20200522703805e40dcb4').parent('.col-dz').css('background-color', 'black');
$('#input_txt_438cfbe3d37f1').attr("placeholder", "이름");
$('#input_txt_079ae4d1844bb').attr("placeholder", "이메일");
$("#addFormw20200522f781b42ee003a").find('.checkbox').append('<a style="margin:0 0 5px 10px;font-weight:bold;font-size:22px;display:inline-block;line-height:1.6;cursor:pointer;" class="newsletter-privacy-content">[보기]</a>');

$('.newsletter-privacy-content').click(function() {
  console.log('[보기] clicked!');
  $('#w20200522f781b42ee003a').css('height','350px');
  $('#addFormw20200522f781b42ee003a').find("#privacy").find(".form-control").show();
});
// old main newsletter end

// for imweb template
$('#w202005202357d1b722819').parent('.col-dz').css('background-color', 'black');
$('#input_txt_d324639c89a63').attr("placeholder", "이름");
$('#input_txt_da948fc6dabb2').attr("placeholder", "이메일");
$("#addFormw20200520df16d1c9118b1").find('.checkbox').append('<a style="margin:0 0 5px 10px;font-weight:bold;font-size:22px;display:inline-block;line-height:1.6;cursor:pointer;" class="newsletter-privacy-content">[보기]</a>');

$('.newsletter-privacy-content').click(function() {
  console.log('[보기] clicked!');
  $('#w20200520df16d1c9118b1').css('height','350px');
  $('#addFormw20200520df16d1c9118b1').find("#privacy").find(".form-control").show();
});
// for imweb template end
