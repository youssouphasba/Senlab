// Référence API Velo : https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	// $w.onReady(function () {
  $w("#uploadButton").onChange((event) => {
    let file = event.target.files[0];
    if (file) {
      $w("#mockupImage").src = URL.createObjectURL(file);
    }
  });
});