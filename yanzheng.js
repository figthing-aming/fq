<script type="text/javascript">
	var form = document.getElementById("form");
	var yz = document.getElementById("yz");
	var btn = document.getElementById("btn");
	var btn1 = document.getElementById("btn1");

	btn.onclick = function () {
		var str = "ABXDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

		var yzm = "";
		for (var i = 1; i < 6; i++) {
			var p = Math.ceil(Math.random() * 1000) % 36;
			yzm = yzm + str.substr(p, 1);
		}
		num.value = yzm;
	}







	btn1.onclick = function (e) {
		if (yz.value == "") {
			yzmtips.innerHTML = "验证码为空"
		} else {
			if (yz.value != num.value) {
				yzmtips.innerHTML = ("两次密码不一样")

			} else {

				location.href = "http://www.tmall.com";
			}

		}

	}
	yz.onfocus = function () {
		yzmtips.innerHTML = "*";

	}
</script>