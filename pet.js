
var arrayPet = [];
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

	//pet.addPet = addPet;
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


// function addPet(pet){
// 	arrayPet.push(pet);
// }



var pet1 = Pet('zmorda', 7, 'dog', 'dashhund', '03145', 'sterilized', 'pics/2.jpg');
var pet2 = Pet('Clara', 3, 'dog', 'dashhund', '03145', 'sterilized', 'pics/5.jpeg');
var pet3 = Pet('Beauty', 2, 'dog', 'dashhund', '03145', 'sterilized', 'pics/9.jpg');
var pet4 = Pet('Rex', 3, 'dog', 'dashhund', '03145', 'sterilized', 'pics/7.jpg');


arrayPet.push(pet1, pet2, pet3, pet4);
arrayPetForAdoption.push(pet1, pet2, pet3, pet4);

// addPet(pet1);
// addPet(pet2);
// addPet(pet3);
// addPet(pet4);




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
                    console.log(arrayAdoptedPet[i])
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
			        h.attr('id','h');
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
			        
			        p.appendTo(d6);


                     var button = $('<button></button>')
                     button.addClass('modal-toggle')
                     button.attr('id','cancel')
                     button.text('Cancel !')
                     button.appendTo(d6);

                     var button2 = $('<button></button>')
                     //button2.addClass('modal-toggle')
                     button2.attr('id','adopt')
                     button2.text('adopt me !')
                     button2.appendTo(d6);
					
					
					d1.appendTo($('main'));



//the click on span action 

                   var obj ;

                  // $('.ClassSpan').on('click', function(e) { working fiiiiine 

                  	$('body').on('click','.ClassSpan', function(e) {

                           e.preventDefault();
                           $('.modal').toggleClass('is-visible');
                           $('p').empty();

                          var arrSrc = $(this)[0].innerText.split('');
                          
                           var imageNameLetters = arrSrc.slice(arrSrc.length - 33, arrSrc.length-22 );// get the src of the image as an array of letters 
						 
						 var imageFullName = imageNameLetters.join('');// get the src of the image as a string
                         //console.log(imageFullName);
						var imageNameArray = imageFullName.split('/');
						
						var imageName = imageNameArray[imageNameArray.length-1];			

						for(var i =0; i<arrayPet.length; i++){

							if(imageName === arrayPet[i].pic.split('/')[1] ){

								var  name =  arrayPet[i].name;
								var  age =  arrayPet[i].age;
								var  type =  arrayPet[i].type;
								var  breed =  arrayPet[i].breed;
								var  microchipId =  arrayPet[i].microchipId;
								var  sterilized =  arrayPet[i].sterilized;	
								 $('p').append('Name :'+'          ' +name + ' <br/> ');
								 $('p').append('Age :'+'          ' +age + ' <br/> ');
								 $('p').append('Type :'+'         ' +type + ' <br/> ');
								 $('p').append('Breed :'+'        ' +breed + ' <br/> ');
								 $('p').append('Microchip Id :'+' ' +microchipId + ' <br/> ');
								 $('p').append('Sterilized :'+'  ' +sterilized + ' <br/> ');		
								obj = arrayPet[i];			
								// console.log( obj.name);

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
						                            arrayPet.splice(i,1) ;
						                 		}
						                 	}
						                      $('.modal').toggleClass('is-visible'); 

												 });


						   function displayForAdoption(){
						   	//console.log('hey')

	                 for(var i =0; i<arrayPetForAdoption.length; i++){
	                 	if(arrayPetForAdoption[i].status === 'For Adoption'){

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
                    console.log(arrayPetForAdoption[i])
                     var pic = arrayPetForAdoption[i].pic;
                     s1.attr('src',pic);
                     s1.attr('class', 'pic');    
					 s2.append("<br/>" +arrayPetForAdoption[i].pic);
					 s2.attr('class', 'text');  
					
					button.appendTo(s4);

				    s1.appendTo(s);
					s2.appendTo(s);
					s3.appendTo(s);	
					s4.appendTo(s);
					s.appendTo($('main'));


  }
}

}


// display adopted pets 


// $('#forAdoption').on('click', function() {
// 						   	  $('main').empty('');
// 						   	displayForAdoption();

//                       	$('body').on('click','.ClassSpan', function(e) {

//                            e.preventDefault();
//                            $('.modal').toggleClass('is-visible');
//                            $('p').empty();

//                           var arrSrc=$(this)[0].innerText.split('');
                     
                          
//                            var imageNameLetters = arrSrc.slice(arrSrc.length - 33, arrSrc.length-22 );// get the src of the image as an array of letters 
// 						 var imageFullName = imageNameLetters.join('');// get the src of the image as a string
//                         var imageNameArray = imageFullName.split('/');
// 						var imageName = imageNameArray[imageNameArray.length-1];			

// 						for(var i =0; i<arrayPetForAdoption.length; i++){
// 							if(imageName === arrayPetForAdoption[i].pic.split('/')[1] ){
// 								obj = arrayPetForAdoption[i];		
// 								console.log(obj)
// 								alert(obj.name)

// 							}
// 						}			
	
//                      });
             	
// 				});



						   $('#Adopted').on('click', function() {
						   	  $('main').empty('');
						     	displayAdopted();


						   	 //console.log(arrayAdoptedPet)

                            $('body').on('click','.ClassSpan','#DeleteButton', function(e) {
//console.log($(this))
                            	//  console.log($(this)[0].innerText.split(''));
						   	 var arrSrc=$(this)[0].innerText.split('');
                          
                           var imageNameLetters = arrSrc.slice(arrSrc.length - 33, arrSrc.length-27 );// get the src of the image as an array of letters 
						// console.log(imageFullName);
						 var imageFullName = imageNameLetters.join('');// get the src of the image as a string


                        // console.log(imageFullName);
						var imageNameArray = imageFullName.split('/');
						//console.log(imageNameArray);
						var imageName = imageNameArray[imageNameArray.length-1];
						//console.log(imageName)

						

						for(var i =0; i<arrayAdoptedPet.length; i++){


							if(imageName === arrayAdoptedPet[i].pic.split('/')[1] ){

		                         //console.log(arrayPet[i].pic.split('/')[1])
 //console.log(imageName)

                           

								arrayAdoptedPet.splice(i, 1);
								arrayPet.splice(i,1) ;
								console.log(arrayAdoptedPet)

								$('main').empty('');
								
								displayAdopted();
								// console.log( obj.name);

							}
						}	

						   

						   });

                               });



						   //display homepage

                            $('#homPage').on('click', function() {

                             $('main').empty();
						   	  displayAll(arrayPetForAdoption);


						   	  	$('body').on('click','.ClassSpan', function(e) {

                          // e.preventDefault();
                           $('.modal').toggleClass('is-visible');
                           $('p').empty();

                          var arrSrc = $(this)[0].innerText.split('');
                          
                           var imageNameLetters = arrSrc.slice(arrSrc.length - 33, arrSrc.length-22 );// get the src of the image as an array of letters 
						 
						 var imageFullName = imageNameLetters.join('');// get the src of the image as a string
                         //console.log(imageFullName);
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
								 console.log( obj.name);

							}
						}	
                     });


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
						                            arrayPet.splice(i,1) ;
						                 		}
						                 	}
						                      $('.modal').toggleClass('is-visible'); 

												 });
						   

						   });

                            // display for adoption


                            $('#Add').on('click',function(){
                            	$('main').empty();
         //                    	 var bigdiv = $('<div></div>');
			                     


								 // var form =$('<form></form>');
								 // var name =$('<input>'+ '<br/><br/><br/>');
								 // var age =$('<input>'+ '<br/><br/><br/>');
								 // var type =$('<input>'+ '<br/><br/><br/>');
								 // var breed =$('<input>'+ '<br/><br/><br/>');
								 // var microchipId =$('<input>'+ '<br/><br/><br/>');
								 // var sterilized =$('<input>'+ '<br/><br/><br/>');
								 // var pic =$('<input>'+ '<br/><br/><br/>');

								 // form.append('Name: ').append('       ');
								 // form.append(name );

								 // form.append('Age: ');
								 // age.appendTo(form);

								 // form.append('Type: ');
								 // type.appendTo(form);

         //                         form.append('Breed: ');
								 // breed.appendTo(form);


         //                         form.append('Microchip Id: ');
								 // microchipId.appendTo(form);


         //                         form.append('Sterilized: ');
								 // sterilized.appendTo(form);

								 // form.append('Picture: ');
								 // pic.appendTo(form);

								 // form.appendTo(bigdiv);

								 // var button =$('<button>Add</button>')

								 // button.appendTo(bigdiv);

								 // bigdiv.appendTo('main')




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
								 var th81  =$('<th></th>');
								 var th82 =$('<th></th>');



								 var name =$('<input>');

								 var age =$('<input>');




								  var type = $('<select>');
								  type.attr('id','typeId');

								  var option1 = $('<option>Dog</option>')
								  option1.attr('value','Dog');

								  var option2 = $('<option>Cat</option>')
								  option2.attr('value','Cat');

								  option1.appendTo(type);
								  option2.appendTo(type);


                                    //console.log(type.val())

            //                         $('type').on('change', function() {
												//   //alert( this.value );
												//   console.log('hey')
												// });




            //                         $( "select" )
										  // .change(function () {
										  //   var str = "";
										  //   $( "select option:selected" ).each(function() {
										  //     str = $( this ).text() + " ";
 
										  //   });
										  //   $( "main" ).text( str );
										  // })
										  // .change();


								

								 
                               
                                console.log(type.val())



                                var breed =$('<select>');
								var option3 = $('<option></option>')

								  // if(type.val() === 'Cat'){

								  // 	option3.text('german')
								  // 	option3.attr('value','german');
								  // }


								  	option3.text('german')
								  	//option3.attr('value','german');

					
								  option3.appendTo(breed);


								  type.attr('id','typeId');
								   breed.attr('id','typeId1'); 
 
								  var microchipId =$('<input>');
								  var sterilized =$('<input>');
								 var pic =$('<input>');

								 th1.append('Name: ');
								 th2.append(name );

								 th31.append('Age: ');
								 th32.append(age );

								 th41.append('Type: ');
								 th42.append(type );

								  th51.append('Breed: ');
								 th52.append(breed );

								 th61.append('MicrochipId: ');
								 th62.append(microchipId );

								 th71.append('Sterilized: ');
								 th72.append(sterilized );

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

								 // form.append('Age: ');
								 // age.appendTo(form);

								 // form.append('Type: ');
								 // type.appendTo(form);

         //                         form.append('Breed: ');
								 // breed.appendTo(form);


         //                         form.append('Microchip Id: ');
								 // microchipId.appendTo(form);


         //                         form.append('Sterilized: ');
								 // sterilized.appendTo(form);

								 // form.append('Picture: ');
								 // pic.appendTo(form);

								 //form.appendTo(bigdiv);

								 var button =$('<button>Add</button>')

								 button.appendTo(bigdiv);

								 bigdiv.appendTo('main')



//                                     $('#typeId').change(function() {
//                                     		//option3.text('persian');
//                                     		//$("breed").append(new Option("option text", "value"));
//                                     		var o = new Option("option text", "value");
// 											/// jquerify the DOM object 'o' so we can use the html method
// 											$(o).html("option text");
// 											$("breed").append(o);

  
// })
								
							    $("#typeId").change(function () {
							        var val = $(this).val();
							        if (val == "Dog") {
							            $("#size").html("<option value='test'>item1: test 1</option><option value='test2'>item1: test 2</option>");
							        } else if (val == "Cat") {
							            $("#size").html("<option value='test'>item2: test 1</option><option value='test2'>item2: test 2</option>");
							        } 
							        // else if (val == "item3") {
							        //     $("#size").html("<option value='test'>item3: test 1</option><option value='test2'>item3: test 2</option>");
							        // } else if (val == "item0") {
							        //     $("#size").html("<option value=''>--select one--</option>");
							        // }
							    });





                            }) 

                            
                         


})

