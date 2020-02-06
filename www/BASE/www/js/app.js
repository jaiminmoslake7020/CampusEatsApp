/* global $,document,console */

document.addEventListener("deviceready", init, false);
function init() {
	
  $search = $("#searchField");
  $results = $("#results");
  $searchButton = $("#searchButton");
	
  $searchButton.on("click", function(e) {
    var search = $search.val();
    if(search === "") return;

    //disable button while we search
    $(this).prop("disabled",true);

    $results.html("<i>Doing a search for "+search+"</i>");

    //call the REST endpoint
	var request = $.getJSON("https://api.github.com/search/repositories?q="+search);	

	request.done( function(res,code) {
	  console.log("Requeat is done: "+ code);		
      if(res.items && res.items.length) {
        var s = '<ul>';
        for(var i=0, len=res.items.length; i<len; i++) {
          var entry = res.items[i];
          s += "<li><h2>"+entry.name+"</h2>";
          s += "<p>By: " + entry.owner.login+"<br/>";
          s += "Updated: " + entry.updated_at+"<br/>";
          s += entry.description;
          s += "</p></li>";
        }
        s +="</ul>"
        $results.html(s);
      }
	  else {
		  $results.html("No Match found for : " + search);
	  }
      $searchButton.prop("disabled",false);
    });
	
	request.fail( function(error) {
      alert('Request failed :'+JSON.stringify(error)); // or whatever
	  $searchButton.prop("disabled",false);
	});

  }); //end of click handler

}; //end of init function
