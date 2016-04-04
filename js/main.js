function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
function validateEmail(email) {var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return re.test(email);};

$(document).ready(function() {
  setTimeout(function(){if(!$('body').hasClass('loaded')) {$('body').addClass('loaded')};},3000);
  $('<link rel="stylesheet" href="css/normalize.min.css"><link rel="stylesheet" type="text/css" href="css/jquery.fullpage.css"><link rel="stylesheet" href="css/animate.css"><link rel="stylesheet" href="css/feature-carousel.css"><link rel="stylesheet" href="css/fonts.css"><link rel="stylesheet" href="css/style.css">').appendTo('head');
var data_model;
var cach_step=1;
var is_animating = 0;
var price = '2 499';
var alt_price = '1 999';
var cur_sex = 'female';
var cur_model = 'short';
var cur_color = 'red';
var alt_cur_model = 'hi';
var alt_cur_color = 'red';
var alt_cur_sex = 'male';
var data_alt_model = 'hi';
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
if(!$('body').hasClass('loaded')) {$('body').addClass('loaded')};
$('<style>header,section{height:800px;display:block}</style>').appendTo('head');
}
else
{
	//$('#pages').fullpage({
  //    scrollBar:true,
  //    scrollingSpeed: 1000,
  //    navigation: true
  //  });

$('<style>header,section{height:100vh!important;display:block}</style>').appendTo('head');

//$('<style>header,section{height:800px;display:block}</style>').appendTo('head');
        $('.animation1').addClass('hidden-a').viewportChecker({
            classToRemove: 'hidden-a',
            classToAdd: 'fadeInUp animated',
            removeClassAfterAnimation: true, 
        }); 
        $('.animation2').addClass('hidden-a').viewportChecker({
            classToRemove: 'hidden-a',
            classToAdd: 'fadeInDown animated',
            removeClassAfterAnimation: true,
        }); 
        $('.animation3').addClass('hidden-a').viewportChecker({
            classToRemove: 'hidden-a',
            classToAdd: 'fadeIn animated3',
            removeClassAfterAnimation: true
        });
}


$('.haed-mouse').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 500);});

    $('.calc-st1-btn,.calc-st5-btn').click(function(e) {
        e.preventDefault();
        var cur = parseInt($(this).parent().parent().data('step'));
        var next = cur + 1;
        par = $(this).parents('section.section');
        next_step_animation(cur,next,par);
    });
    $('.calc-back').click(function(e) {
        e.preventDefault();
        var cur = parseInt($(this).parent().data('step'));
        var next = cur - 1;
        par = $(this).parents('section.section');
        prev_step_animation(cur,next,par);
    });
    function next_step_animation(cur,next,par){
        par.find('.calc-h4[data-step="'+cur+'"]').addClass('hidden-a slideOutUp animated')
        par.find('.calc-h4[data-step="'+next+'"]').addClass('visible-a zoomIn animated');
        par.find('.calc-wrap[data-step="'+cur+'"]').addClass('hidden-a slideOutUp animated');
        par.find('.calc-wrap[data-step="'+next+'"]').addClass('visible-a zoomIn animated');
        par.find('.calc-wrap[data-step="'+next+'"]').attr('style','opacity:1');
          function togle_step_anim(){
            par.find('.calc-h4[data-step="'+next+'"],.calc-wrap[data-step="'+next+'"]').removeClass('zoomIn animated');
            par.find('.calc-wrap[data-step="'+cur+'"],.calc-h4[data-step="'+cur+'"]').removeClass('slideOutUp animated');
            par.find('.calc-wrap[data-step="'+next+'"]').attr('style','');
          }
          setTimeout(togle_step_anim,1200);
    }
    function prev_step_animation(cur,next,par){
        par.find('.calc-h4[data-step="'+cur+'"]').removeClass('visible-a')
        par.find('.calc-h4[data-step="'+next+'"]').removeClass('hidden-a');
        par.find('.calc-wrap[data-step="'+cur+'"]').removeClass('visible-a');
        par.find('.calc-wrap[data-step="'+next+'"]').removeClass('hidden-a');
    }
    $('.selection-ul li').click(function(){
      var inp_name = $(this).parent().parent().data('name');
      var inp_value = $(this).data('value');
      $('.selection-ul').removeClass('visible-select');

      if ($(this).parent().parent().parent().parent().parent().hasClass('double-form-form') && !$(this).parent().parent().parent().hasClass('double-form-active')) {
          $(this).parent().parent().children('.selection-current').html($(this).html());
          $('input[name="alt_'+inp_name+'"]').val(inp_value);
          if (inp_name == "model") {
             //alt_cur_model=inp_value;
          }
          //change_color_sizes();
        }
        else if ($(this).parent().parent().parent().parent().parent().parent().hasClass('double-form-form') && !$(this).parent().parent().parent().parent().hasClass('double-form-active')) {
            $(this).parent().parent().children('.selection-current').html($(this).html());
            $('input[name="alt_'+inp_name+'"]').val(inp_value);
            if (inp_name == "model") {
             //alt_cur_model=inp_value;
            }
            //change_color_sizes();
            
          }
          else{
            $('li[data-value="'+inp_value+'"]').each(function(){
              if (!$(this).closest(".double-form-sex").not('.double-form-active').length>0) {
                $(this).parent().parent().children('.selection-current').html($(this).html());
              }
              //$('input[name="alt_'+inp_name+'"],input[name="'+inp_name+'"]').val(inp_value);
              $('input[name="'+inp_name+'"]').val(inp_value);
               if (inp_name == "model") {
                  $('.sect-form-mod[data-select="model"]').removeClass('sect-form-mod-active');
                  $('.sect-form-mod[data-value="'+inp_value+'"]').addClass('sect-form-mod-active');
                  cur_model=inp_value;
                  //alt_cur_model=inp_value;

                  change_color_sizes();
                };              
                if (inp_name == "sex") {
                  $('.sect-form-mod[data-select="sex"]').removeClass('sect-form-mod-active');
                  $('.sect-form-mod[data-value="'+inp_value+'"]').addClass('sect-form-mod-active');
                  $('.double-form-sex').removeClass('double-form-active');
                  $('.double-form-sex[data-value="'+inp_value+'"]').addClass('double-form-active');
                  $('.double-form-sex').children('.double-form-price').children('.price').html(alt_price);
                  $('.double-form-sex[data-value="'+inp_value+'"]').children('.double-form-price').children('.price').html(price);
                  if(inp_value=='female'){
                    $('input[name="alt_sex"]').val('male');
                    alt_cur_sex = 'male';

                  }else{
                    $('input[name="alt_sex"]').val('female');
                    alt_cur_sex = 'female';

                  }
                  cur_sex = inp_value;

                  change_color_sizes();
                };              
                if (inp_name == "size") {
                  $('.calc-st4-size li').removeClass('opt-active');
                  $('.calc-st4-size li[data-value="'+inp_value+'"]').addClass('opt-active');
                };

           });
          };
      if(inp_name == "color"){
        if ($(this).parent().parent().parent().parent().parent().parent().hasClass('double-form-form') && !$(this).parent().parent().parent().parent().hasClass('double-form-active')) {
          $(this).parent().parent().parent().attr('data-color',inp_value);
          alt_cur_color=inp_value;
        }
        else{
          $('.calc-select-color-wrap').each(function(){
            if (!$(this).closest(".double-form-sex").not('.double-form-active').length>0) {
              $(this).attr('data-color',inp_value);
            }
          });
          cur_color=inp_value;
          //alt_cur_color=inp_value;
          $('.calc-st4-color p').removeClass('opt-active');
          $('.calc-st4-color p[data-value="'+inp_value+'"]').addClass('opt-active');
          $('.sect-form-color-wrap span').removeClass('opt-active');
          $('.sect-form-color-wrap span[data-value="'+inp_value+'"]').addClass('opt-active');
        };
      }
      change_images();
      change_prices();
      calculate();
    });

    function change_images(){
      $('.double-form-img').attr({
        'data-model' : alt_cur_model,
        'data-color' : alt_cur_color
      });
      $('.sect-form-tov,.calc-st4-convers,.calc-st5-tovar,.double-form-active .double-form-img').attr({
        'data-model' : cur_model,
        'data-color' : cur_color
      });
    };

function calculate(){
  var int_price = parseInt(price.replace(/\s+/g, ''));
  var int_alt_price = parseInt(alt_price.replace(/\s+/g, ''));
  if ($('.double-form-active').hasClass('double-form-left')) {
    $('.summ-calc .left').html(price);
    $('.summ-calc .right').html((int_alt_price+500).toString().replace(/^(.{1})(.*)$/, "$1 $2"));
    $('.double-form-right .price').html((int_alt_price+500).toString().replace(/^(.{1})(.*)$/, "$1 $2"));
  }else{
    $('.summ-calc .left').html((int_alt_price+500).toString().replace(/^(.{1})(.*)$/, "$1 $2"));
    $('.double-form-left .price').html((int_alt_price+500).toString().replace(/^(.{1})(.*)$/, "$1 $2"));
    $('.summ-calc .right').html(price);
  }
  $('.summ-is').html((int_alt_price+int_price).toString().replace(/^(.{1})(.*)$/, "$1 $2"));
  $('.summ-calc .summ-not').html((int_alt_price+int_price+500).toString().replace(/^(.{1})(.*)$/, "$1 $2"));
  //console.log(int_price,int_alt_price);
}

function change_color_sizes(){

$('div[data-name="color"]').children('.selection-ul').children('li').hide();
$('div[data-name="color"]').children('.selection-ul').children('li[data-'+cur_model+'="1"][data-'+cur_sex+'="1"]').show();
$('.calc-st4-color').children('p').hide();
$('.calc-st4-color').children('p[data-'+cur_model+'="1"][data-'+cur_sex+'="1"]').show();
$('.sect-form-color-wrap').children('span').hide();
$('.sect-form-color-wrap').children('span[data-'+cur_model+'="1"][data-'+cur_sex+'="1"]').show();
$('.calc-st4-size').children('li').hide();
$('.calc-st4-size').children('li[data-'+cur_sex+'="1"]').show();

$('div[data-name="size"]').children('.selection-ul').children('li').hide();
$('div[data-name="size"]').children('.selection-ul').children('li[data-'+cur_sex+'="1"]').show();

$('.main-control-ul').children('li[data-value="red"]').trigger('click');
$('.main-control-ul').children('li[data-value="40"]').trigger('click');

$('.double-form-sex').not('.double-form-active').find('.selection-w[data-name="size"]').find('li').hide();
$('.double-form-sex').not('.double-form-active').find('.selection-w[data-name="size"]').find('li[data-'+alt_cur_sex+'="1"]').show();

$('.double-form-sex').not('.double-form-active').find('.selection-w[data-name="color"]').find('li').hide();
$('.double-form-sex').not('.double-form-active').find('.selection-w[data-name="color"]').find('li[data-'+alt_cur_model+'="1"][data-'+alt_cur_sex+'="1"]').show();


$('.double-form-sex .calc-select-color-wrap').each(function(){
  $(this).find('li[data-value="'+$(this).data('color')+'"]').trigger('click');
});


if($('.double-form-sex').not('.double-form-active').find('.selection-w[data-name="model"]').children('.selection-current').text() == 'Низ.'){
  data_alt_model = 'short';
}else{
  data_alt_model = 'hi';
}

//$('.double-form-sex.double-form-active li[data-value='+cur_model+']').trigger('click');


$('.double-form-sex').not('.double-form-active').find('.double-form-img').attr('data-model',data_alt_model);
    

}

function change_prices(){
  if(cur_model == 'hi'){
    price = '3 790';
  }else{
    price = '3 390';
  }
  if($('.double-form-sex').not('.double-form-active').find('.selection-w[data-name="model"]').children('.selection-current').text() == 'Низ.'){
  
    alt_price = '2 890';
}else{
    alt_price = '3 290';
}
 
  $('.main-price').html(price);
  $('.double-form-sex.double-form-active').find('.price').html(price);
  $('.double-form-sex').not('.double-form-active').find('.price').html(alt_price);
  //console.log(alt_price);
}

setTimeout(change_color_sizes,100);
  
    $('.selection-current').click(function(){
      $(this).parent().children('.selection-ul').toggleClass('visible-select');
    });

    $('.calc-st1-btn[data-name="skida"]').click(function(){
      $('input[name="skidka"]').val($(this).data('value'));
      $('.calc-st5-kupon').attr('data-number',$(this).data('number'));
    });

    $('.calc-st1-btn[data-name="sex"],.calc-st1-btn[data-name="model"],.calc-st4-size li,.calc-st4-color p,.sect-form-color-wrap>span,.sect-form-mod').click(function(){
      //console.log($(this).data('value'));
      $('.main-control-ul').children('li[data-value="'+$(this).data('value')+'"]').trigger('click');
    });

    $('.calc-st4-color li,.sect-form-color-wrap span').hover(function(){
      $('.sect-form-tov,.calc-st4-convers').attr('data-color',$(this).data('value'));
    },function(){
      $('.sect-form-tov,.calc-st4-convers').attr('data-color',cur_color);
    });

    $('.head-sert').click(function(e){
      e.preventDefault();
      $('#certificate').attr('src','img/sert.jpg').arcticmodal({
        afterOpen:function(){
          $('<div class="close-big"></div>').appendTo('.arcticmodal-container_i2');

          $('.close-big').click(function(){
            $.arcticmodal('close');
          });
        }
      });

    });

    $('.conf-a').click(function(e){
      e.preventDefault();
      $('#conf').arcticmodal({
        afterOpen:function(){
          $('<div class="close-big"></div>').appendTo('.arcticmodal-container_i2');

          $('.close-big').click(function(){
            $.arcticmodal('close');
          });
        }
      });
      
    });

    $('.head-callback').click(function(e){
      e.preventDefault();
      $('#zz-pop').arcticmodal({
        afterOpen:function(){
          $('<div class="close-big"></div>').appendTo('.arcticmodal-container_i2');

          $('.close-big').click(function(){
            $.arcticmodal('close');
          });
        }
      });
    });

    $('.haed-mouse').click(function(e){
      e.preventDefault();
      //$.fn.fullpage.moveSectionDown();
    });

    $('.calc-st5-conf').click(function(){
      $(this).children('.calc-st5-conf-check').removeClass('check-alert').toggleClass('conf-checked');
    });

    $('input[name="name"]').blur(function() {if($(this).val().length < 2) {$(this).addClass('error-input');}});
    $('input[name="name"]').focus(function() {$(this).removeClass('error-input');});

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
    $('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

    $('input[name="email"]').blur(function() {if(!validateEmail($(this).val())) {$(this).addClass('error-input');}});
    $('input[name="email"]').focus(function() {$(this).removeClass('error-input');});

    function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
    }
    $.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
    utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){utm[v]=getURLParameter(v) || $.cookie(v);$.cookie(v, utm[v], { expires: 365, path: '/' });$('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")}); 

    $('form').submit(function(e){
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        if(!$(this).find('.calc-st5-conf-check').hasClass('conf-checked')) {$(this).find('.calc-st5-conf-check').addClass('check-alert')};
        if(!$(this).find('input[type="text"]').hasClass('error-input') && $(this).find('.calc-st5-conf-check').hasClass('conf-checked')){
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            var d_name = $(this).find('input[name="name"]').val();
            var d_phone = $(this).find('input[name="phone"]').val();
            var d_email = $(this).find('input[name="email"]').val();
            var d_commentary = 'Форма: '+$(this).find('input[name="form"]').val()+'; Осн.заказ: '+$(this).find('input[name="sex"]').val()+' '+$(this).find('input[name="model"]').val()+' '+$(this).find('input[name="color"]').val()+' '+' '+$(this).find('input[name="size"]').val()+'; Альт.Заказ: '+$(this).find('input[name="alt_sex"]').val()+' '+$(this).find('input[name="alt_model"]').val()+' '+$(this).find('input[name="alt_color"]').val()+' '+' '+$(this).find('input[name="alt_size"]').val()+'; Скидка: '+$(this).find('input[name="skidka"]').val();

              _rc('send', 'order', {
                //'orderMethod': 'feedback',
                'name' :  d_name.toString(),
                'phone' : d_phone.toString(),
                'email' : d_email.toString(),
                'customerComment' : d_commentary.toString()
              });

               ga('require', 'ecommerce', 'ecommerce.js');
                  ga('ecommerce:addTransaction', {
                    'id': parseInt(d_phone.toString())
                  });
                ga('ecommerce:send');
            //console.log(d_name,d_commentary);
            $.ajax({type: type, url: url, data: data,
            success : function(){
                $.arcticmodal('close');$('#okgo').arcticmodal();
                $('input[type="text"]').val('');
                ga('send','event','submit','submit');
                yaCounter35707620.reachGoal('submit');
            }
        }); 
        }
    });

    $('.okgo-close').click(function(){
      $.arcticmodal('close');
    });



$('.double-form-sex .selection-w li').click(function(){
  var data_sex = $('.double-form-sex.double-form-active').data('value');
  var data_alt_sex = $('.double-form-sex').not('.double-form-active').data('value');
  if($('.double-form-sex').not('.double-form-active').find('.selection-w[data-name="model"]').children('.selection-current').text() == 'Низ.'){
    var data_alt_model = 'short';
  }else{
    var data_alt_model = 'hi';
  }
  if($(this).closest('.selection-w[data-name="model"]').length>0){
    $(this).parent().parent().parent().find('.selection-w[data-name="color"]').find('li[data-value="red"]').trigger('click');
  }

  $('.double-form-sex').not('.double-form-active').find('.double-form-img').attr('data-model',data_alt_model);
  $('.double-form-sex').not('.double-form-active').find('.selection-w[data-name="color"]').find('li').hide();
  $('.double-form-sex').not('.double-form-active').find('.selection-w[data-name="color"]').find('li[data-'+data_alt_model+'="1"][data-'+data_alt_sex+'="1"]').show();


  $('input[name="alt_model"]').val(data_alt_model);
  

  //console.log(data_alt_model);

});


//новий слайдер
var carousel = $('#carousel').featureCarousel({
      trackerIndividual: false,
      trackerSummation: false,
      autoPlay: 0,
      startingFeature:1,
      sidePadding:0,
      smallFeatureOffset:98,
      movedToCenter:function($feature){
        $feature.find('.slide-prew').attr({style: 'opacity:1'});
        //console.log($feature.text());
      },
      leavingCenter:function($feature){
        $feature.find('.slide-prew').attr({style: 'opacity:0'});
      }
    });
        $("#but_prev").click(function () {
          carousel.prev();
          //console.log('prev');
          return false;
        });
        $("#but_next").click(function () {
          carousel.next();
          //console.log('next');
          return false;
    });


});
$(window).load(function(){


  if (!$('body').hasClass('loaded')) {$('body').addClass('loaded')};
  slider1 = $('.otz-ul').bxSlider({pager:true, pagerCustom: '#otz-pager' , controls:false, auto:true, speed: 1000, pause:5000,mode:'fade',startSlide:3,onSlideBefore:function($slideElement, oldIndex, newIndex){
        var newInd = newIndex+1;
        $('.otz-ul li:nth-child('+newInd+')').addClass('slideInDown2 animated');
    },onSlideAfter:function($slideElement, oldIndex, newIndex){
        var newInd = newIndex+1;
        $('.otz-ul li:nth-child('+newInd+')').removeClass('slideInDown2 animated');
    }});
});

$(function () {
  $.srSmoothscroll({
    // defaults
    step: 55,
    speed: 400,
    ease: 'swing',
    target: $('body'),
    container: $(window)
  })
})