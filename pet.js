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
 var $body = $('body');

  // display all the pets for adoption

function displayAll(arr){

	                 for(var i =0; i<arr.length; i++){

                     var s = $('<span></span>');
                     s.addClass('ClassSpan') ;
                     s.addClass('modal-toggle');
					 s.attr('id', 'big');
					 var s1 = $('<img>');
					 var s2 = $('<div></div>');
					 var s3 = $('<div></div>');
					 var s4 = $('<div></div>');
					
					var button = $('<button></button>');
					button.text(' Get to know me more ! ');
                    console.log(arr[i])
                    var pic = arr[i].pic;
                     s1.attr('src',pic);
                     s1.attr('class', 'pic');    

					 // s2.append("<br/>" +arr[i].name);
					 // s2.append("<br/>" +arr[i].age);
					 // s2.append("<br/>" +arr[i].type);
					 // s2.append("<br/>" +arr[i].breed);
					 // s2.append("<br/>" +arr[i].microchipId);
					 // s2.append("<br/>" +arr[i].sterilized);
					  s2.append("<br/>" +arr[i].pic);
					 s2.attr('class', 'text');  
					
					button.appendTo(s4);

				    s1.appendTo(s);
					s2.appendTo(s);
					s3.appendTo(s);	
					s4.appendTo(s);
					s.appendTo($('body'));


  }

}



// <a class="button" href="#popup1">Let me Pop up</a>



displayAll(arrayPet);



			        var d1 = $('<div></div>'); 
			        d1.addClass('modal');
			     

			        var d2 = $('<div></div>'); 
			        d2.addClass('modal-overlay');
			        d2.addClass('modal-toggle');

			        d2.appendTo(d1);
			       

			        var d3 = $('<div></div>');
			        d3.addClass('modal-wrapper');
			        d3.addClass('modal-transition');
			         d3.appendTo(d1);

                    var d4 = $('<div></div>');
			        d4.addClass('modal-header');
			        var h=$('<h2></h2>');
			        h.text('Those are my Info');

			        h.appendTo(d4);
			        d4.appendTo(d3);

			        var d5=$('<div></div>');
			        d5.addClass('modal-body');
			        d5.appendTo(d4);

			        var d6= $('<div></div>');
					d6.addClass('modal-content');
			        d6.appendTo(d5);

			        var p =$('<p></p>')
			        p.text('heyyyyyyy');
			        p.appendTo(d6);


                     var button = $('<button></button>')
                     button.addClass('modal-toggle')
                     button.attr('id','cancel')
                     button.text('Adopt Me !')
                     button.appendTo(d6);
					
					
					d1.appendTo($('body'));





                     function clickOnSeeMore(){

                   $('span').on('click', function(e) {
                         	

                           e.preventDefault();
                           $('.modal').toggleClass('is-visible');
                           var n = this.name;
                           $('p').text(name);




                          var arrSrc=$(this)[0].innerText.split('');
                          

                           var imageNameLetters = arrSrc.slice(arrSrc.length - 33, arrSrc.length-22 );// get the src of the image as an array of letters 
						 
						 var imageFullName = imageNameLetters.join('');// get the src of the image as a string
                         //console.log(imageFullName);
						var imageNameArray = imageFullName.split('/');
						
						var imageName = imageNameArray[imageNameArray.length-1];
						console.log(imageName);


				
                             });

               }
               clickOnSeeMore();

						 $('#cancel').on('click', function(e) {
						                         	
						   $('.modal').toggleClass('is-visible');
												 });






			



})
