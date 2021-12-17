const captcha = document.getElementById('nobot');
captcha.addEventListener("click", () => {
	document.getElementById ("submit").disabled = false;
  document.getElementById ("nobot").style.opacity = "0.0";
  document.getElementById ("nobot").style.cursor = "pointer";
});
