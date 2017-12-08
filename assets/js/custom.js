window.ShowDiv=0;
/*! Custom jQuery by Syed Muhammad Rehan Dated 1-Oct-2011 B3ckstage.com */

/*! Scroll To jQuery */
	jQuery(function( $ ){
	/**
	 * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
	 * @see http://flesler.demos.com/jquery/scrollTo/
	 * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
	 */
	
	// The default axis is 'y', but in this demo, I want to scroll both
	// You can modify any default like this
	$.localScroll.defaults.axis = 'y';
	/**
	 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
	 * also affect the >> and << links. I want every link in the page to scroll.
	 */
	$.localScroll({
		queue:true,
		duration:700,
		hash:true,
		onBefore:function( e, anchor, $target ){
			// The 'this' is the settings object, can be modified
		},
		onAfter:function( anchor, settings ){
			// The 'this' contains the scrolled element (#content)
		}
	});
});

/*! Slider jQuery */
  $(function(){
  $('#web-slider').bxSlider({
	wrapperClass: 'web-slider', 
	displaySlideQty: '3' 
  });
})

  $(function(){
  $('#fb-slider').bxSlider({
	wrapperClass: 'web-slider', 
	displaySlideQty: '3' 
  });
})

  $(function(){
  $('#iphone-slider').bxSlider({
	wrapperClass: 'iphone-slider', 
	displaySlideQty: '3' 
  });
})

/* Show Hide About */
$(document).ready(function(){
	$(".about-me").hide();
	$(".showhide-about").show();	
	$('.showhide-about').click(function(){
		if(window.ShowDiv==0)
		{
			window.ShowDiv=1;
			
			if(document.getElementById("contactDiv").style.display!='none')
			{
				$('#contactDiv').slideUp('slow', function(){
					$(".about-me").slideToggle('slow', function(){
						window.ShowDiv=0;
					});
				});
			}
			else
			{
				$(".about-me").slideToggle('slow', function(){
					window.ShowDiv=0;
				});
			}
			if(document.getElementById("AboutDivLink").className=='showhide-about')
			{
				$("#AboutDivLink").addClass('TopLinkSelected');
				$("#ContactDivLink").removeClass('TopLinkSelected');
			}
			else
			{
				$("#AboutDivLink").removeClass('TopLinkSelected');
			}	
		}
 	});
});


/* Show Hide Contact */
$(document).ready(function(){
	$(".contact-me").hide();
	$(".showhide-contact").show();	
	$('.showhide-contact').click(function(){
										  
		if(window.ShowDiv==0)
		{
			window.ShowDiv=1;
			if(document.getElementById("aboutDiv").style.display!='none')
			{
				$('#aboutDiv').slideUp('slow', function(){
					$(".contact-me").slideToggle('slow', function(){
						window.ShowDiv=0;
					});
				});
			}
			else
			{
				$(".contact-me").slideToggle('slow', function(){
					window.ShowDiv=0;
				});
			}
			if(document.getElementById("ContactDivLink").className=='showhide-contact')
			{
				$("#ContactDivLink").addClass('TopLinkSelected');
				$("#AboutDivLink").removeClass('TopLinkSelected');
			}
			else
			{
				$("#ContactDivLink").removeClass('TopLinkSelected');
			}
		}
	});
	
/* Measuring Page height for About and Contact */
	var DocHeight = $(document).height();
	var ContactDivHeight = $(".contact-me").height();
	var AboutDivHeight = $(".about-me").height();
	var ContactHidePageDivHeight = parseInt(DocHeight) - parseInt(ContactDivHeight);
	var AboutHidePageDivHeight = parseInt(DocHeight) - parseInt(AboutDivHeight);
	$('#HidePageContact').css('height', ContactHidePageDivHeight+'px').click(function(){
		$(".contact-me").slideUp('slow', function(){
			$("#ContactDivLink").removeClass('TopLinkSelected');
		});
	});
	$('#HidePageAbout').css('height', AboutHidePageDivHeight+'px').click(function(){
		$(".about-me").slideUp('slow', function(){
			$("#AboutDivLink").removeClass('TopLinkSelected');
		});
	});
	
	$('#ContactForm').submit(function(){
		if($('#Name').val()=='')
		{
			$('#Name').addClass('InputError').focus();
			return false;
		}
		else if($('#Email').val()=='')
		{
			$('#Email').addClass('InputError').focus();
			return false;
		}
		else if(isEmail($('#Email').val())==false)
		{
			$('#Email').addClass('InputError').focus();
			return false;
		}
		else if($('#Message').val()=='')
		{
			$('#Message').addClass('InputError').focus();
			return false;
		}
		else
		{
			$('#SubmitMessage').html('<img src="assets/images/spinner2.gif" alt="Please Wait" />');
			$('#ValidateContactForm').val('true');
			var Form = $('#ContactForm').serialize();
			jQuery.post("send_mail.php?refresh="+Math.random(), Form, function(Data, textStatus){
				$('#SubmitMessage').html(Data);
			});
			return false;
		}
		return false;
	});
	
	$('#ContactForm input, #ContactForm textarea').keypress(function(){
		$(this).removeClass('InputError');
	});
	
});

/* Portfolio Script */
function LoadPage(PageID, DivToWrite, LinksDiv, Element)
{
	$('#'+DivToWrite).html('<p align="center" class="loadport"><img src="assets/images/spinner.gif" alt="Please Wait" /></p>');
	$('#'+DivToWrite).load('assets/portfolio/'+PageID+'.html');
	
	$('#'+LinksDiv+' li a').removeClass('active');
	$(Element).addClass('active');
}

function isEmail(theStr) 
{
	var atIndex = theStr.indexOf('@');
 	var dotIndex = theStr.indexOf('.', atIndex);
 	var flag = true;
 	theSub = theStr.substring(0, dotIndex+1)
 	if ((atIndex < 1)||(atIndex != theStr.lastIndexOf('@'))||(dotIndex < atIndex + 2)||(theStr.length <= theSub.length)) 
 	{	 
 		flag = false; 
 	}
 	else 
	{ 
 		flag = true; 
 	}
 	return(flag);
}