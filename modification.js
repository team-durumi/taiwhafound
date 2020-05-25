$('#w20200522703805e40dcb4').parent('.col-dz').css('background-color', 'black');
$('#input_txt_438cfbe3d37f1').attr("placeholder", "이름");
$('#input_txt_079ae4d1844bb').attr("placeholder", "이메일");
$("#addFormw20200522f781b42ee003a").find('.checkbox').append('<a style="margin:0 0 5px 10px;font-weight:bold;font-size:22px;display:inline-block;line-height:1.6;cursor:pointer;" class="newsletter-privacy-content">[보기]</a>');

$('.newsletter-privacy-content').click(function() {
  console.log('[보기] clicked!');
  $('#w20200522f781b42ee003a').css('height','350px');
  $('#addFormw20200522f781b42ee003a').find("#privacy").find(".form-control").show();
});