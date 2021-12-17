const captcha = document.getElementById('nobot');
captcha.addEventListener("click", () => {
	document.getElementById ("submit").disabled = false;
  document.getElementById ("submit").style.opacity = "0.0";
  document.getElementById ("submit").style.cursor = "pointer";
});
