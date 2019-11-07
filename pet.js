var arrayPet = [];

function Pet(name, age, type, breed, microchipId, sterilized, pic){
	var pet = {};
	pet.name = name;
	pet.age = age;
	pet.type = type;
	pet.breed = breed;
	pet.microchipId = microchipId;
	pet.sterilized = sterilized;
	pet.pic = pic;
	pet.status = 'For Adoption';

	pet.addPet = addPet;
	//pet.displayPet = displayPet;
	//pet.adoptPet = adoptPet;
	//pet.removePet = removePet;
	//pet.searchPet = searchPet;


	return pet;
}

// function CreatePet(name, age, type, breed, microchiped, sterilized, status, pic){
// 	this.name = name;
// 	this.age = age;
// 	this.type = type;
// 	this.breed = breed;
// 	this.microchiped = microchiped;
// 	this.sterilized = sterilized;
// 	this.status = status;
// 	this.pic = pic

// }


function addPet(pet){
	arrayPet.push(pet);
}



var pet1 = Pet('zmorda', 7, 'dog', 'dashhund', '03145', 'sterilized', 'pics/2.jpg');
var pet2 = Pet('Clara', 3, 'dog', 'dashhund', '03145', 'sterilized', 'pics/5.jpeg');
var pet3 = Pet('Beauty', 2, 'dog', 'dashhund', '03145', 'sterilized', 'pics/6.jpeg');
var pet4 = Pet('Rex', 3, 'dog', 'dashhund', '03145', 'sterilized', 'pics/7.jpg');

addPet(pet1);
addPet(pet2);
addPet(pet3);
addPet(pet4);






$(document).ready(function(){
 var $body = $('main');

  // display all the pets for adoption

function displayAll(arr){

	                 for(var i =0; i<arr.length; i++){

                     var s = $('<span></span>'); 
					 s.attr('id', 'big');
					 var s1 = $('<img>');
					 var s2 = $('<div></div>');
					 var s3 = $('<div></div>');
					 var s4 = $('<div></div>');
					
					var button = $('<button></button>');
					button.text(' Adopt Me ');
                    console.log(arr[i])
                    var pic = arr[i].pic;
                     s1.attr('src',pic);
                     s1.attr('class', 'pic');    

					 s2.append("<br/>" +arr[i].name);
					 s2.append("<br/>" +arr[i].age);
					 s2.append("<br/>" +arr[i].type);
					 s2.append("<br/>" +arr[i].breed);
					 s2.append("<br/>" +arr[i].microchipId);
					 s2.append("<br/>" +arr[i].sterilized);
					 s2.attr('class', 'text');  
					
					button.appendTo(s4);

				    s1.appendTo(s);
					s2.appendTo(s);
					s3.appendTo(s);	
					s4.appendTo(s);
					s.appendTo($('main'));


  }

}



// <a class="button" href="#popup1">Let me Pop up</a>



displayAll(arrayPet);

$('main').on('click', 'span', function() {

			          var d1 = $('<div></div>'); 
					
					 var d2 = $('<img>');
					 var d2 = $('<div></div>');
					 var d4 = $('<div></div>');
					 var d5 = $('<div></div>');
					
	

	});


// <div id="popup1" class="overlay">
// 	<div class="popup">
// 		<h2>Here i am</h2>
// 		<a class="close" href="#">&times;</a>
// 		<div class="content">
// 			Thank to pop me out of that button, but now i'm done so you can close this window.
// 		</div>
// 	</div>
// </div>

      

  
})
