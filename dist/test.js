function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  var iframe =  $(".cesium-infoBox-iframe")[0]
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document
  
  // Get all elements with class="tabcontent" and hide them
  tabcontent = innerDoc.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = innerDoc.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  
  
  innerDoc.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}