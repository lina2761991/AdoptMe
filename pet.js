
var arrayAdoptedPet = [];
var arrayPetForAdoption = [];

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

	return pet;
}


var pet1 = Pet('zmorda', 7, 'Dog', 'Dashhund', '03145', 'yes', 'pics/2.jpg');
var pet2 = Pet('Clara', 3, 'Dog', 'Labrador', '03145', 'no', 'pics/9.jpg');
var pet3 = Pet('Tayzon', 2, 'Cat', 'Siberian', '03145', 'yes', 'pics/a.jpg');
var pet4 = Pet('Dabdoub', 3, 'Cat', 'Siberian', '03145', 'no', 'pics/z.jpg');


arrayPetForAdoption.push(pet1, pet2, pet3, pet4);


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}


$(document).ready(function(){
	var $main = $('main');

	// display all the pets 

	function displayAll(arr){
		for(var i =0; i<arr.length; i++){
			var s = $('<span></span>');
			s.addClass('ClassSpan') ;
			//s.attr('id','standOut')
			s.addClass('modal-toggle');
			s.attr('id', 'big');
			var s1 = $('<img>');
			s1.add('attr','imageId')
			var s2 = $('<div></div>');
			var s3 = $('<div></div>');
			var s4 = $('<div></div>');
			var button = $('<button></button>');
			button.text(' Get To Know Me More ! ');
			console.log(arr[i])
			var pic = arr[i].pic;
			s1.attr('src',pic);
			s1.attr('class', 'pic');    
			s2.append("<br/>" +arr[i].pic);
			s2.attr('class', 'text');  
			button.appendTo(s4);
			s1.appendTo(s);
			s2.appendTo(s);
			s3.appendTo(s);	
			s4.appendTo(s);
			s.appendTo($('main'));
		}
	}


	//display adopted pets 

	function displayAdopted(){

	for(var i =0; i<arrayAdoptedPet.length; i++){
		var s = $('<span></span>');
	  s.addClass('ClassSpan') ;
		s.addClass('modal-toggle');
		s.attr('id', 'big');
		var s1 = $('<img>');
		var s2 = $('<div></div>');
		var s3 = $('<div></div>');
		var s4 = $('<div></div>');
		var button = $('<button></button>');
		button.text(' Delete!');
		button.add('id','DeleteButton');
		button.css(' margin-left','120px');

		var pic = arrayAdoptedPet[i].pic;
		s1.attr('src',pic);
		s1.attr('class', 'pic');    
		s2.append("<br/>" +arrayAdoptedPet[i].pic);
		s2.attr('class', 'text');  

		button.appendTo(s4);

		s1.appendTo(s);
		s2.appendTo(s);
		s3.appendTo(s);	
		s4.appendTo(s);
		s.appendTo($('main'));
	}
}

displayAll(arrayPetForAdoption);

//the skeleton of the pop up

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
h.attr('id','h');
h.text('Those are My Info');

h.appendTo(d4);
d4.appendTo(d3);

var d5=$('<div></div>');
d5.addClass('modal-body');
d5.appendTo(d4);

var d6= $('<div></div>');
d6.addClass('modal-content');
d6.appendTo(d5);

var p =$('<p></p>');

p.appendTo(d6);

var button = $('<button></button>');
button.addClass('modal-toggle');
button.attr('id','cancel');
button.text('Cancel');
button.appendTo(d6);

var button2 = $('<button></button>');
button2.attr('id','adopt');
button2.text('Adopt Me Please !');
button2.appendTo(d6);


d1.appendTo($('main'));



	//the click on span action 

	var obj ;

	$('.ClassSpan').on('click', function(e) { 
		e.preventDefault();
		$('.modal').toggleClass('is-visible');
		$('p').empty();

		var arrSrc = $(this)[0].innerText.split('');

		var imageNameLetters = arrSrc.slice(arrSrc.length - 33, arrSrc.length-22 );// get the src of the image as an array of letters 

		var imageFullName = imageNameLetters.join('');// get the src of the image as a string

		var imageNameArray = imageFullName.split('/');

		var imageName = imageNameArray[imageNameArray.length-1];			

		for(var i =0; i<arrayPetForAdoption.length; i++){

		if(imageName === arrayPetForAdoption[i].pic.split('/')[1] ){

		var  name =  arrayPetForAdoption[i].name;
		var  age =  arrayPetForAdoption[i].age;
		var  type =  arrayPetForAdoption[i].type;
		var  breed =  arrayPetForAdoption[i].breed;
		var  microchipId =  arrayPetForAdoption[i].microchipId;
		var  sterilized =  arrayPetForAdoption[i].sterilized;	
		$('p').append('Name :'+'          ' +name + ' <br/> ');
		$('p').append('Age :'+'          ' +age + ' <br/> ');
		$('p').append('Type :'+'         ' +type + ' <br/> ');
		$('p').append('Breed :'+'        ' +breed + ' <br/> ');
		$('p').append('Microchip Id :'+' ' +microchipId + ' <br/> ');
		$('p').append('Sterilized :'+'  ' +sterilized + ' <br/> ');		
		obj = arrayPetForAdoption[i];
	}
 }	
});



	// the modal buttons 
	$('#cancel').on('click', function(e) {

	$('.modal').toggleClass('is-visible');
	});

	// adopt me button 
	$('#adopt').on('click', function() {
	obj.status = "adopted";
	arrayAdoptedPet.push(obj);
	for(var i =0; i<arrayPetForAdoption.length; i++){
	if(arrayPetForAdoption[i] === obj){
	arrayPetForAdoption.splice(i, 1); 
	}
 }

	$('main').empty('');
	displayAll(arrayPetForAdoption);
	$('.modal').toggleClass('is-visible'); 

	});




	//display homepage

	$('#homPage').on('click', function() {

	$('main').empty();
	displayAll(arrayPetForAdoption);
	console.log('hey')

	});


	// add for adoption


	$('#Add').on('click',function(){
	$('main').empty();
	var form =$('<form></form>');
	var bigdiv = $('<table></table>');
	var tr1 =$('<tr></tr>');
	var th1  =$('<th></th>');
	var th2 =$('<th></th>');
	var tr2 =$('<tr></tr>');
	var th21  =$('<th></th>');
	var th22 =$('<th></th>');
	var tr3 =$('<tr></tr>');
	var th31  =$('<th></th>');
	var th32 =$('<th></th>');
	var tr4 =$('<tr></tr>');
	var th41  =$('<th></th>');
	var th42 =$('<th></th>');
	var tr5 =$('<tr></tr>');
	var th51  =$('<th></th>');
	var th52 =$('<th></th>');
	var tr6 =$('<tr></tr>');
	var th61  =$('<th></th>');
	var th62 =$('<th></th>');
	var tr7 =$('<tr></tr>');
	var th71  =$('<th></th>');
	var th72 =$('<th></th>');
	var tr8 =$('<tr></tr>');
	var th81 =$('<th></th>');
	var th82 =$('<th></th>');
	var name =$('<input>');
	name.attr('placeholder','Your Pet Name...');
	var age =$('<input>');
	age.attr('type','number');
	age.attr('min','0');
	age.attr('placeholder','Your Pet Age...');
	var type = $('<select>');
	type.attr('id','typeId');
	var optionType = $('<option> -- select one -- </option>')
	var item1 = $('<option>Dog</option>')
	item1.attr('value','Dog');
	var item2 = $('<option>Cat</option>')
	item2.attr('value','Cat');
	optionType.appendTo(type);
	item1.appendTo(type);
	item2.appendTo(type);
	var size =$('<select>');
	var option3 = $('<option>-- select one -- </option>')

	option3.appendTo(size);


	type.attr('id','typeId');
	size.attr('id','typeId1'); 

	var microchipId =$('<input>');
	microchipId.attr('placeholder','Your Pet Microchip Id...');
	microchipId.attr('type','number');
	microchipId.attr('min','000');
	
	var sterilized =$('<input>');
	sterilized.attr('type','radio');
	sterilized.attr('name','saymyname');
	sterilized.attr('value','yes');

	var label =('<label>yes</label>')

	var sterilized2 =$('<input>');
	sterilized2.attr('type','radio');
	sterilized2.attr('name','saymyname');
	sterilized2.attr('value','no');
	var label2 =('<label>no</label>');

	var pic =$('<input>');
	pic.attr('placeholder','Your Pet Picture...');

	th1.append('Name: ');
	th2.append(name );

	th31.append('Age: ');
	th32.append(age );

	th41.append('Type: ');
	th42.append(type );

	th51.append('Breed: ');
	th52.append(size );

	th61.append('Microchip Id: ');
	th62.append(microchipId );

	th71.append('Sterilized: ');
	th72.append(sterilized );
	th72.append(label);
	th72.append(sterilized2 );
	th72.append(label2);

	th81.append('Picture: ');
	th82.append(pic );

	tr1.append(th1);
	tr1.append(th2);

	tr2.append(th21);
	tr2.append(th22);

	tr3.append(th31);
	tr3.append(th32);


	tr4.append(th41);
	tr4.append(th42);


	tr5.append(th51);
	tr5.append(th52);

	tr6.append(th61);
	tr6.append(th62);

	tr7.append(th71);
	tr7.append(th72);

	tr8.append(th81);
	tr8.append(th82);

	bigdiv.append(tr1);
	bigdiv.append(tr2);
	bigdiv.append(tr3);
	bigdiv.append(tr4);
	bigdiv.append(tr5);
	bigdiv.append(tr6);
	bigdiv.append(tr7);
	bigdiv.append(tr8);


	form.append(bigdiv);


	var button =$('<button>Add New Pet</button>')
	button.attr('id','addNewPet');

	button.appendTo(bigdiv);

	bigdiv.appendTo('main');


	$("#typeId").change(function() {
	var val = $(this).val();
	if (val === "Dog") {
	size.html("<option value='German Sheperd'>German Sheperd</option><option value='Dashhund'>Dashhund</option><option value='Huskey'>Huskey</option><option value='Labrador'>Labrador</option>");
   } 

	else if (val == "Cat") {
	size.html("<option value='Siamois'>Siamois</option><option value='Persan'>Persan</option><option value='Bengal'>Bengal</option>");

	}
	});

	$('#addNewPet').on('click',function(){
	var newName = name.val();
	var newAge =  age.val();
	var newType = type.val();
	var newBreed = size.val();
	var newMicrochipId = microchipId.val();
	var newSterilized = sterilized.val()
	var newPic = pic.val();
	var a = Pet(newName, newAge, newType, newBreed, newMicrochipId, newSterilized, newPic);
	console.log(a);
	arrayPetForAdoption.push(a);
	$('main').empty();
	displayAll(arrayPetForAdoption);

	})

	}) 

	$('#Adopted').on('click', function() {

	$('main').empty('');
	displayAdopted();
	$('body').on('click','.ClassSpan','#DeleteButton', function(e) {

	var arrSrc=$(this)[0].innerText.split('');

	var imageNameLetters = arrSrc.slice(arrSrc.length - 33, arrSrc.length-27 );// get the src of the image as an array of letters 

	var imageFullName = imageNameLetters.join('');// get the src of the image as a string

	var imageNameArray = imageFullName.split('/');

	var imageName = imageNameArray[imageNameArray.length-1];

	for(var i =0; i<arrayAdoptedPet.length; i++){

	if(imageName === arrayAdoptedPet[i].pic.split('/')[1] ){

	arrayAdoptedPet.splice(i, 1);
	$('main').empty('');
	displayAdopted();
	}
	}	
	});
	});
})