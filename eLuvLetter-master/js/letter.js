
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["Mrs.^200赵小傻<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时光飞逝，^300不知不觉间^300我们在一起已经五年了阿，^200可能是相爱的人^200在一起察觉不到时间吧。", 
				"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^600真的很感谢我们的这场相遇，^300让我相信了真爱，我想这就是上天冥冥中的安排吧。^600回忆在一起的每一个画面，^200平淡而温馨，有一种简单的，^200只属于我们两个的幸福。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^200就这样^600，^200用我温暖的手^600牵着你冰凉的手^200一辈子吧！^300<br>"
				+"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Deep affection is not as long as deep love needs no words <br><p style='display:block; text-align:center;'>I Love You Three Thousand Times ❤</p><br><p style='float:right; display:block; width:80px;'>^1000MR.^200陆</p>"],
			typeSpeed: 100,
			backSpeed: 50
		});
		// ^1000Dear&nbsp;&nbsp;小傻子
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
