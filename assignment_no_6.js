$(() => {
	let images = ["asval.png", "bizon.png", "knn.png", "qqr.png", "qxr.png"];
	let i = 0, j = 0;
	let len = images.length - 1

	// Change Background Image with setInterval
	setInterval(() => changeImage(), 1000);

	const changeImage = () => {
		$("#a1").css({
			backgroundImage: "url(/home/Gaitonde/Pictures/" + images[i] + ")",
			height: "400px",
			width: "600px",
			backgroundSize: "cover"
		});
		if(i == len) {
			i = 0;
		} else {
			i++;
		}console.log("/home/Gaitonde/Pictures/" + images[i])
	}

	// Do Image Slide show with setInterval
	setInterval(() => slideShow(), 1000);

	const slideShow = () => {
		$("#a2").attr("src", "/home/Gaitonde/Pictures/" + images[j]);
		if(j == 0) {
			j = len;
		} else {
			j--;
		}
	}

	// Navigation bar When u click on the link then class active should be applied to link
	$("li>a").click(function() {
		$(this).addClass("active");
		$("li>a").not(this).removeClass("active");
	});
});