document.getElementById("url").focus();

function check(item) {
	if (item == 'url') {
		var checkedItem = document.getElementById("url").value;
		if (checkedItem.length == 11 && checkedItem.match(/[^0-9a-z]/i)) {
			document.getElementById("step1").classList.remove("fullOpacity");
			embed(document.getElementById("url").value);
			setTimeout(function () {
				document.getElementById("step2").style.display = "";
				document.getElementById("step1").style.display = "none"
				document.getElementById("step2").classList.add("fullOpacity");
			}, 200)
		} else if (checkedItem.length == 39 && checkedItem.includes("youtu")) {
			document.getElementById("step1").classList.remove("fullOpacity");
			embed(document.getElementById("url").value);
			setTimeout(function () {
				document.getElementById("step2").style.display = "";
				document.getElementById("step1").style.display = "none"
				document.getElementById("step2").classList.add("fullOpacity");
			}, 200)
		}
	}
}

function embed(url) {
	if (url.length == 11) {
		document.getElementById("embed").src = "https://youtube.com/embed/" + url
		sessionStorage.setItem("bUrl", "https://youtube.com/embed/" + url);
	} else {
		document.getElementById("embed").src = "https://youtube.com/embed/" + getId(url, "?v=");
		sessionStorage.setItem("bUrl", "https://youtube.com/embed/" + getId(url, "?v="));
	}
}

function updateEmbed(param) {
	if (param == "ap") {
		if (document.getElementById("autoplay").checked == true) {
			sessionStorage.setItem("ap", "y");
		} else {
			sessionStorage.setItem("ap", "n");
		}
	} else if (param == "lo") {
		if (document.getElementById("loop").checked == true) {
			sessionStorage.setItem("lo", "y");
		} else {
			sessionStorage.setItem("lo", "n");
		}
	} else if (param == "an") {
		if (document.getElementById("privacy").checked == true) {
			sessionStorage.setItem("an", "y");
		} else {
			sessionStorage.setItem("an", "n");
		}
	} else if (param == "dk") {
		if (document.getElementById("disableKb").checked == true) {
			sessionStorage.setItem("dk", "y");
		} else {
			sessionStorage.setItem("dk", "n");
		}
	}
}

function getId(parentString, substring) {
    return parentString.substring(parentString.indexOf(substring) + substring.length)
}

function formUrl() {
	
}