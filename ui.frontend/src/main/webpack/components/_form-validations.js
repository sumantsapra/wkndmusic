// Example of how a component should be initialized via JavaScript
// This script logs the value of the component's text property model message to the console

(function() {
	
	function validateemail() {
		var email = document.getElementById("wknd--membership__email");
        email.addEventListener("blur", function(e){
             if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
                email.removeAttribute("style");
             }else{
                 email.style.border = "1px solid red";
				 email.style.background="transparent url('../resources/images/Warning.png') 0% 0% no-repeat padding-box;";
				 var node = document.createElement("div");
				 node.className += "error__message";
				 var textnode = document.createTextNode(email.parentElement.getAttribute('data-cmp-constraint-message'));
				 node.appendChild(textnode);
				 email.appendChild(node);
             }

        })
	}
	
    function onDocumentReady() {
        validateemail();

    }

    if (document.readyState !== "loading") {
        onDocumentReady();
    } else {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    }

}());
