// Example of how a component should be initialized via JavaScript
// This script logs the value of the component's text property model message to the console

(function() {
	function addErrorNode(elementName, elementID) {
		elementName.style.border = "1px solid red";
		var node = document.createElement("div");
		node.className += "error__message";
		node.id = elementID;
		var textnode = "";
		if ( elementName.value.length < 1 ) {
			textnode = document.createTextNode(elementName.parentElement.getAttribute('data-cmp-required-message'));
		} else {
			textnode = document.createTextNode(elementName.parentElement.getAttribute('data-cmp-constraint-message'));
		}
		node.appendChild(textnode);
		var element =  document.getElementById(elementID);
		if (typeof(element) != 'undefined' && element != null) {
		  // Exists.
		} else {
		 	elementName.parentElement.appendChild(node);
		 	elementName.className += " error__icon";
		}
	}
	
	function removeErrorNode(elementName, elementID) {
		var hashElementId = "#" + elementID;
		elementName.classList.remove("error__icon");
		if (elementName.parentElement.querySelector(hashElementId)) {
			var node = document.getElementById(elementID);
			elementName.parentElement.removeChild(node);
		}
	}
	
	function validateEmail() {
		var email = document.getElementById("wknd--membership__email");
        email.addEventListener("blur", function(e){
        	removeErrorNode(email, 'wknd--membership__email-id');
             if((email.value.length > 0) &&  (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))){
                email.removeAttribute("style");
             }else{
                 addErrorNode(email, 'wknd--membership__email-id');
             }

        });
	}
	
	function validateName() {
		var name = document.getElementById("wknd--membership__name");
		name.addEventListener("blur", function(e){
		removeErrorNode(name, 'wknd--membership__name-id');
			if(name.value.length > 0 ) {
				name.removeAttribute("style");
			} else {
				addErrorNode(name, 'wknd--membership__name-id');
			}
		});
	}
	
	function validatePhone() {
		var phone = document.getElementById("wknd--membership__phone");
		phone.addEventListener("blur", function(e){
		removeErrorNode(phone, 'wknd--membership__phone-id');
			if(phone.value.length == 10 && (isNaN(phone.value)==false)) {
				phone.removeAttribute("style");
			} else {
				addErrorNode(phone, 'wknd--membership__phone-id');
			}
		});
	}
	
	function validateCard() {
		var card = document.getElementById("wknd--membership__card");
		card.addEventListener("blur", function(e){
		removeErrorNode(card, 'wknd--membership__card-id');
			if(card.value.length == 16) {
				card.removeAttribute("style");
			} else {
				addErrorNode(card, 'wknd--membership__card-id');
			}
		});
	}

    function onDocumentReady() {
        validateEmail();
        validateName();
        validatePhone();
        validateCard();
        enableButton();
    }

    if (document.readyState !== "loading") {
        onDocumentReady();
    } else {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    }

}());
