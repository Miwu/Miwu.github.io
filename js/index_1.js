$(document).ready(function() {

	//设置购物车按钮的hover效果
	$("#head_car").hover(function() {
		$(this).css("background", "#FFFFFF");
		$(".head_car_text").css("color", "#ff6700");
		$("#car_content").css({
			"height": "100px",
			"border-width": " 0 1px 1px 1px"
		});
		setTimeout(function() {
			$(".car_text").html("购物车中还没有商品，赶紧选购吧！")
		}, 300);
	}, function() {
		$("#car_content").css("height", "0px");
		$(".car_text").html("");
		setTimeout(function() {
			$("#head_car").css("background", "#424242");
			$(".head_car_text").css("color", "#b0b0b0");
			$("#car_content").css("border-width", "0");
		}, 300);
	})

	//打开【地区选择】模块
	$("#Select_Region_but").on("click", function(e) {
		$("#body_mask").show();
		$("#region_box").animate({
			top: "100px",
			opacity: "1"
		}, 100, "linear");
		e.stopPropagation();
	});

	//设置【关闭地区选择】模块效果
	function close_region() {
		$("#body_mask").hide();
		$("#region_box").animate({
			top: "-480px",
			opacity: "0"
		}, 100, "linear");
	}
	$("#close_region_but").on("click", function() {
		close_region();
	})

	//点击非自己即关闭
	$(document).on("click", function(e) {
		if($(e.target).closest("#region_box").length == 0) {
			close_region();
			$("#body_mask").hide();
		}
	})
	/*..............导航区菜单移入效果..............*/
	$('.menu_li').hover(function(){
		var menu_li_indrx=$(this).index();//获取索引
		$('#menu_content_bg').css('height','230px');
		$('#menu_content_wrap ul').css('top','-'+menu_li_indrx*230+'px');//让对应的隐藏框中
	},function(){
		$('#menu_content_bg').css('height','0px')
	});
	$('#menu_content_bg').hover(function(){
		var menu_li_indrx=$(this).index();//获取索引
		$(this).css('height','230px');
	},function(){
		$('#menu_content_bg').css('height','0px')
	});

/*...............搜索框下拉列表.........*/
	$('#find_input').focus(function(){//获取焦点
		$('#find_hot').fadeToggle();//下拉列表出来
		$('#find_wrap,#find_but').css('border-color','#ff6700');
		$('#find_bar_word').hide()
	});
	$('#find_input').blur(function(){//失去焦点
		$('#find_hot').fadeToggle();//下拉列表出来
		$('#find_wrap,#find_but').css('border-color','#f0f0f0');
		$('#find_bar_word').show()
	});





















































})
