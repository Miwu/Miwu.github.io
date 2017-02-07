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
/*自动轮播*/ 
	var i=0;
	var pic_ul=$('#big_banner_pic');//这是放图片的ul 
	var pic_len=$('#big_banner_pic li').length;//图片的张数
	pic_ul.css('width',pic_len*1226+"px");//设置轮播图的宽度
	/*初始化轮播图函数*/
		function pic_init(){
			var changeLeft=i*-1226+'px';//设置图片轮动的距离变量
			pic_ul.animate({
				opacity:'0.2',

			},200,function(){
				pic_ul.css('left',changeLeft)
					pic_ul.animate({
				opacity:'1',
			},200)
			})
			$('#big_banner_change_wrap ul li').eq(i).css('background','#fff').siblings().css('background','#9d9d9d')
		}
		//定时器
		pic_temer=setInterval(pic_change,2000)

			function pic_change(){
				i++;
				if(i>=pic_len){
					i=0	
				}
				pic_init()//调用初始化轮播图的函数
			}

		//鼠标移入轮播区，自动轮播停止
		$('#big_banner_change_wrap').hover(function(){
			clearInterval(pic_temer);
		},function(){
			pic_temer=setInterval(pic_change,2000)
		})
		//上一张图片
		$('#big_banner_change_prev').on('click',function(){
			i--;
			if(i<0){
				i=pic_len-1	
			}
			pic_init();//调用初始化函数
		})
		//下一张	
		$('#big_banner_change_next').on('click',function(){
			i++;
			if(i>=pic_len){
				i=0//第一张的位置
			}
			pic_init();//调用初始化函数
		})
		//作用小圆点
		$('#big_banner_change_wrap ul li').on('click',function(){
			var pic_index=$(this).index();//获取索引
			i=pic_index
			pic_init();//调用初始化函数
		})

//调整隐藏框的位置
	$('#banner_menu_wrap>li').each(function(){//用于没有事件调用的情况下给类数组的对象元素加函数的时候用each
		var i=$(this).index();//设置索引
		$(this).find('div').css('top',-(i*42+20)+'px')
	})


/*............................整行轮播............................*/

	/*点击右按钮*/

	$('#head_hot_goods_next').on('click',function(){
		$('#head_hot_goods_content ul').css('left','-1226px');
		$(this).css({
			'color':'#e0e0e0',
			'cursor':'default'	
		})
		$('#head_hot_goods_prave').css({
				'color':'#bebebe',
				'cursor':'pointer'
		})
		
	})
/*点击左按钮*/
$('#head_hot_goods_prave').on('click',function(){
		$('#head_hot_goods_content ul').css('left','0');
		$(this).css({
			'color':'#e0e0e0',
			'cursor':'default'	
		})
		$('#head_hot_goods_next').css({
				'color':'#bebebe',
				'cursor':'pointer'
		})
		
	})
/*内容*/
/*$('.content_4_main_1').on('mouseover',function(){
	$('.content4_but_left').css('opacity','1');
	$('.content4_but_left').css('background','#d9d9d9');
	$('.content4_but_right').css('opacity','1');
	$('.content4_but_right').css('background','#d9d9d9');
})
$('.content4_but_left').on('mouseover',function(){
	$('.content4_but_left').css('background','#d0d0d0');
	$('.content4_but_right').css('background','#d0d0d0');
})
*/


var floor_con=new Array(
	new Array(
		new Array("","","",""),
		new Array("","","",""),
		new Array("","","",""),
		new Array("","","",""),
		new Array("","","",""),
		new Array("","","",""),
		new Array("","","",""),
		new Array("","","",""),
		new Array("","","","")
		),
	new Array(
		new Array("","","",""),
		new Array("../images/da3.jpg","20000Ah小米移动电源2","149元","2320人评价"),
		new Array("../images/da4.jpg","小米用电源10000Ah高清版","149元","898人评价"),
		new Array("../images/da5.jpg","小米蓝牙音箱","199元","2.2万人评价"),
		new Array("../images/da7.jpg","小米圈铁耳机Pro","149元","6183人评价"),
		new Array("","","",""),
		new Array("../images/da6.jpg","小米蓝牙耳机青春版","59元","8275人评价"),
		new Array("../images/da9.jpg","小米小钢炮蓝牙音箱2","129元","1.8万人评价"),
		new Array("../images/da10.jpg","小米车载充电器","49元","4万人评价"),
		new Array("../images/da8.jpg","小米移动电源...","49元",""),
		new Array("","","","热门")
		),
	new Array(
		new Array("","","",""),
		new Array("../images/er1.jpg","小米头戴式耳机&nbsp;轻松版","199元","199人评价"),
		new Array("../images/er2.jpg","小米胶囊耳机","69元",""),
		new Array("../images/er3.jpg","小米圈铁耳机Pro","149元","6070人评价"),
		new Array("../images/er4.jpg","小米随身蓝牙音箱","69元",""),
		new Array("","","",""),
		new Array("../images/er5.jpg","小米小钢炮蓝牙音箱2","129元",""),
		new Array("../images/er6.jpg","方盒子音箱","99元",""),
		new Array("../images/er7.jpg","ROIDMI音乐蓝牙车充","99元","112人评价"),
		new Array("../images/er8.jpg","小米蓝牙音箱","199元",""),
		new Array("","","","耳机音箱")
		),
	new Array(
		new Array("","","",""),
		new Array("../images/yuan1.jpg","移动电源5000mAh","49元",""),
		new Array("../images/yuan2.jpg","ZMI移动电源&nbsp;10000mAh","99元","3992人评价"),
		new Array("../images/yuan3.jpg","小米移动电源10000mAh高配版","149元","918人评价"),
		new Array("../images/yuan4.jpg","20000mAh小米移动电源2","149元","2343人评价"),
		new Array("","","",""),
		new Array("../images/yuan5.jpg","10000mAh小米移动电源2","79元",""),
		new Array("../images/yuan6.jpg","小米插线板&nbsp;5孔位","39元",""),
		new Array("../images/yuan7.jpg","USB&nbsp;Type-C充电套装","15元",""),
		new Array("../images/yuan8.jpg","小米智能插...","69元",""),
		new Array("","","","电源")
		),
	new Array(
		new Array("","","",""),
		new Array("../images/chi1.jpg","金士顿8GB存储卡(Class4)","24.9元","175人评价"),
		new Array("../images/chi2.jpg","SanDisk&nbsp;32GB高速存储卡","69.9元",""),
		new Array("../images/chi3.jpg","彩虹5号电池(10粒装)","9.9元",""),
		new Array("../images/chi4.jpg","彩虹7号电池(10粒装)","9.9元",""),
		new Array("","","",""),
		new Array("../images/chi5.jpg","小米USB充电器(4口)","69元",""),
		new Array("../images/chi6.jpg","镍氢充电电池套装","88元",""),
		new Array("../images/chi7.jpg","小米车载充电器","49元",""),
		new Array("../images/chi8.jpg","SanDisk&nbsp;16...","31.9元",""),
		new Array("","","","电池存储卡")
		))
	//搭配数据加载
	var floor_array="1";
	function change_floor_goods(){
		var floor_2=$('#floor_2 .floor_goods_wrap_li');
		floor_2.each(function(i){
			$(this).find(".floor_goods_img img").attr("src",floor_con[floor_array][i][0]);
			$(this).find(".floor_goods_tit").html(floor_con[floor_array][i][1]);
			$(this).find(".floor_goods_price").html(floor_con[floor_array][i][2]);
			$(this).find(".floor_goods_txt").html(floor_con[floor_array][i][3]);
		})
	}
	change_floor_goods();
	$('#floor_1_list ul li').on("mouseover",function(){
		floor_array=$(this).index()+1;
		change_floor_goods();
	})



			/*...................................视频弹框........................*/
	  	/*视频连接数据*/
	  		var vido_con=new Array(
			new Array("红米Note2","http://player.youku.com/player.php/sid/XMTMwODUxNzAwMA==/v.swf"),
			new Array("http://player.youku.com/player.php/sid/XODcyMjA1MTQw/v.swf"),
			new Array("60秒看懂","http://http://player.youku.com/player.php/sid/XODcyMjA1MTQw/v.swf"),
			new Array("红米Note2","http://player.youku.com/player.php/sid/XMTI1NTI5NzM4MA==/v.swf")
			);


    /*视频*/

    		var vido_w=$('#vido_div').width();//视频层的宽
    		var window_w=$(window).width();//可视区域的宽
    		var vido_left=(window_w/2)-(vido_w/2)//视频层的left值
    		$('#vido_div').css('left',vido_left);//设置视频层的初始水平位置


    	function vido_div_position(){//设置
    		var vido_w=$('#vido_div').width();
    		var vido_h=$('#vido_div').height();
    		var window_w=$(window).width();
    		var window_h=$(window).height();
    		var vido_left=(window_w/2)-(vido_w/2)
    		var vido_top=(window_h/2)-(vido_h/2)
    		$('#vido_div').animate({
    			left:vido_left,
    			top:vido_top
    		},500)
    	}


$(window).resize(function(){//窗口大小变化时,视频层位置
	vido_div_position();
})



$('.video_warp').on('click',function(e){//打开视频
	var a=$(this).index();//设置自定义变量
	//embed即可以当做视频标签也可当做音频标签，里面src里面放什么资源返回什么效果。
		var vido_src = "<embed src='" + vido_con[a][1] + "'allowFullScreen='true' quality='high' width='907' height='550' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>";
			$("#vido_src").html(vido_src);//ido_src是弹窗中放视频的div
			$("#body_mask").show();//遮罩层
			$("#vido_div").css("opacity","1");//视频弹窗
			vido_div_position();//调用位置函数
			e.stopPropagation();//阻止浏览器默认事件
		});



$('#close_vido_div').on('click',function(){
	$("#body_mask").hide();
	$("#vido_div").animate({
		'opacity':'1',
		'top':'-100%'
	},500,function(){
		$('#vido_src').html('');
	});
})




































})