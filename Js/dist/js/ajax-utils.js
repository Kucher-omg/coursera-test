(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler, isJasonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = 
      function() { 
        handleResponse(request, responseHandler, isJasonResponse); 
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler, isJasonResponse) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
    responseHandler(request);
  }

  if(isJasonResponse == undefined){
    isJasonResponse = true;
  }

  if(isJasonResponse){
    responseHandler(JSON.parse(request.responseText));
  }
  else{
    responseHandler(request.responseText);
  }

}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

