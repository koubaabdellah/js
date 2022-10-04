var systemSectionAjaxLoad;

(function($){
	
	$(document).ready(function(){
		
		path = Drupal.settings.basePath;
		lan = Drupal.settings.pathPrefix;
		
		systemSectionAjaxLoad = function (nid) {
			$("#ajax-target").fadeOut(500, function (){
				$("#ajax-target").load(path+lan+"get/ajax/system/radio/"+nid , function(){
					$("#ajax-target").fadeIn(500);
				});
			});
		}

		$('li.views-row-1 a').click();
		$('li.views-row-1 .systemVehicle').addClass('current');
	});

})(jQuery);
