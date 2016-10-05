function searchAndDrawRoutes ()
{
	var searchCriteria = {
      						origin:{lat:"17.5141", lon:"78.3666"},
							destination:{lat:"17.4469", lon:"78.3741"},
      						transportMode:"driving",
      						directionServiceUrl:"https://maps.googleapis.com/maps/api/directions/json",
      						apiKey:"AIzaSyDPcS_2MrXbXIATIXQ7OrUZXAHCnLdikz0"
    					};
	kony.map.searchRoutes(searchCriteria, successCallback, failureCallback);
}

function successCallback (route)
{
  alert (JSON.stringify(route));
    var drawRoute = 
{
id: "route",          startLocation:{lat:route[0]["startLocation"]["lat"],lon:route[0]["startLocation"]["lon"]},
endLocation:{lat:route[0]["endLocation"]["lat"],lon:route[0]["endLocation"]["lon"]},
locations:route[0]["polylinePoints"],
polylineConfig:{lineColor:"0x0000ffff", lineWidth:"2"}
};
  frmMap.map.addPolyline (drawRoute);
  frmMap.show();

  kony.print (" ********** "+JSON.stringify(route));
}

function failureCallback (error)
{
  alert (JSON.stringify(error));  
  kony.print (" ********** "+JSON.stringify(error));  
}