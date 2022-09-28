// ----------------- 1
// Done with installation Node and vscode

// ------------------ 2
// var namee = "haseeb";
// console.log(`Hello ${namee}, would you like to learn some Python today?`);

// ------------------ 3
// var namee = "haseeb";
// console.log(namee.toLowerCase());
// console.log(namee.toUpperCase());
// console.log(namee.charAt(0).toUpperCase() + namee.substr(1).toLowerCase());

// ------------------- 4
// var Quote = 'Mukesh Ambani is "the richest man" of India.';
// console.log(Quote);

// -------------------- 5
// var famous_person = "Haseeb";
// var message = `${famous_person} is \"the richest man\" of India.`;
// console.log(message);

// -------------------- 6
// var person_name = "haseeb";
// console.log(`before \n whitespace : \t ${person_name}`);
// console.log(`After whitespace : ${person_name}`);

// ---------------------- 7
// var number = 8;
// document.write("Add: ", 8 + 8 + " ");
// document.write("Sub: ", 8 - 8 + " ");
// document.write("Sub: ", 8 * 8 + " ");
// document.write("Sub: ", 8 / 8 + " ");

// ------------------- 8
// console.log(5 + 3);
// console.log(4 + 4);
// console.log(10 - 2);
// console.log(4 * 2);

// ---------------- 9
// var fav_num = "8";
// console.log(`My fav numb: ${fav_num}`);

// --------------- 10
// Done os for comment

// ------------------ 11
// var frnd_names = ["has", "asd", "bmfd"];
// frnd_names.forEach((name) => {
//   console.log(name + " ");
// });

// ------------------ 12
// var frnd_names = ["has", "asd", "bmfd"];
// frnd_names.forEach((name) => {
//   console.log(name + "is a good person");
// });

// ----------------- 13
// var lists = ["I like honda", "I like travel honda", "I drive honda"];
// lists.forEach((list) => {
//   console.log(list + "Car");
// });

// ----------------------- 14
// var listper = ["Haseeb", "Ali", "kashif"];
// listper.forEach((listper) => {
//   console.log(listper + ", I invite you to a dinner!");
// });

// ------------------------- 15
// var listper = ["Haseeb", "Ali", "Kashif", "zaidi"];
// listper.forEach((listper) => {
//   console.log(listper + ", I invite you to a dinner!");
// });
// console.log(listper[2] + ", Are not able to attend dinner");
// var newlistper = ["Haseeb", "Ali", "Kashif"];
// newlistper[2] = "Zaidi";
// newlistper.forEach((listper) => {
//   console.log(listper + ", New Invite, I invite you to a dinner!");
// });

// -------------------------- 16
// var guest_invite = document.querySelector(".guest-invite");
// newlistper.unshift("wasi", "asad");
// newlistper[3] = ["zain"];
// newlistper.push("jibran");

// newlistper.forEach(list => {
//     guest_invite.innerHTML += `<li style='text-decoration: "none"; list-style: "none"'>${list} are invited for big table dinner!<li>`
// });

// -------------------- 17
// function removePersons() {
//   if (newlistper.length > 2) {
//     var two_members = newlistper.pop();
//     console.log(two_members + "Sorry you are not invited to dinner");
//     console.log(newlistper + "You are invited to dinner!");
//     removePersons();
//   }
// }
// removePersons();
// newlistper = "";
// console.log(newlistper + "No body invited to dinner");

// --------------------- 18
// var fav_places = ["sindh", "kalam", "Turkey", "America"];
// console.log(fav_places + "before sort");
// console.log(fav_places.sort() + "After sort");
// console.log(fav_places + "original order");
// console.log(fav_places.reverse() + "reverse order");

// -------------------- 19
// var invitedListcount = listper.length + fav_places;
// console.log(`I am invited to dinner ${invitedListcount} people`);

// ------------------------- 20
// var favList = document.querySelector(".fav-list");
// fav_places.forEach(element => {
//     favList.innerHTML += `<li>${element}<li>`;
// });

// -------------------------- 21
// var obj1 = {
//     namee : "mountaines",
//     travel: "hard",
// }

// --------------------- 22
// var arrError = ["arrayerror", "array", "last"];
// arrError.indexOf(2) = 3;

// -------------------- 23
// let car = 'subaru';
// console.log(`${car == 'subaru' ? 'true' : 'false'}`);
// let numberr = 5;
// console.log(`${numberr == 5 ? 'true' : 'false'}`);
// let place = "mountaine"
// console.log(`${place.length == 9 ? 'true' : 'false'}`);
// let addition = 5 + 3;
// if(addition == 8) {
//     console.log("number is 8");
// } else {
//     console.log("number is not 8");
// }
// let object = "match"
// console.log(`${object == "match" ? 'true' : 'false'}`);

// let car = 'subaru';
// console.log(`${car == 'subru' ? 'true' : 'false'}`);
// let numberr = 5;
// console.log(`${numberr == 4 ? 'true' : 'false'}`);
// let place = "mountain"
// console.log(`${place.length == 9 ? 'true' : 'false'}`);
// let addition = 5 + 3;
// if(addition == 6) {
//     console.log("number is 8");
// } else {
//     console.log("number is not 8");
// }
// let object = "math"
// console.log(`${object == "match" ? 'true' : 'false'}`);


// ------------------------- 24
// let place = "mountain"
// console.log(`${place.length == 9 ? 'true' : 'false'}`);
// console.log(`${place.toLowerCase() ? 'true' : 'false'}`);
// console.log( 10 == 10 ); // true
// console.log( 10 !== 20 ); // false
// console.log( 10 >= 10 ); 
// console.log( 10 <= 20 ); 

// -------------------- 25
// var alien_color = "green";
// if(alien_color == "green") {
//     console.log("The player just earned 5 points.");
// } else {
//     return;
// }

// ---------------------------- 26
// var alien_color = "green";
// if(alien_color == "green") {
//     console.log("The player just earned 5 points.");
// } else {
//     console.log("The player just earned 10 points.");
// }
// var alien_color = "yellow";
// if(alien_color == "yellow") {
//     console.log("The player just earned 5 points.");
// } else {
//     console.log("The player just earned 10 points.");
// }


// --------------------------------- 27
// var alien_color = "green";
// if(alien_color == "green") {
//     console.log("The player just earned 5 points.");
// }
// if(alien_color == "yellow") {
//     console.log("The player just earned 10 points.");
// }
// if(alien_color == "red") {
//     console.log("The player just earned 15 points.");
// }

// ----------------------------- 28
// var age = 20;
// if(age < 2) {
//     console.log("baby");
// }
// if(age >=2  && age < 4 ) {
//     console.log("toddler");
// }
// if(age >=4  && age < 13 ) {
//     console.log("kid");
// }
// if(age >=13  && age < 20 ) {
//     console.log("teenager");
// }
// if(age >=20  && age < 65 ) {
//     console.log("adult");
// }
// if(age >= 65) {
//     console.log("older");
// }

// -------------------------------- 29
// var fav_fruits = ["mango", "orange", "banana"];
// fav_fruits.forEach(fruit => {
//     if(fruit) {
//         console.log(`I like ${fruit}`);
//     }
// });

// ------------------------------ 30
// var users = ["admin", "haseeb" , "eric"]
// users.forEach(user => {
//    if(user == "admin")
//     console.log("Hello admin, would you like to see a status report?");
//    else {
//     console.log(` Hello ${user}, thank you for logging in again`);
//    }
// });


// ---------------------------- 31
// function removePersons() {
//     if (users.length == 0) {
//       var two_members = users.pop();
//       console.log(" We need to find some users!");
//       removePersons();
//     }
//   }
//   removePersons();

// ------------------------- 32
// var current_users = ["ali", "sheraz", "haseeb", "herry", "ahsan"];
// var new_users = ["kerani", "hunain", "ali", "haseeb", "sheraz"];
// new_users.forEach(newuser => {
//     current_users.forEach(olduser => {
//         if(newuser.toLowerCase() == olduser.toLowerCase) {
//             console.log(` Hello ${newuser}, already exits , please another username`);
//         }
//     });
// });

// ---------------------  33
// var numbersArray = [1 , 2 ,3 ,5 ,6 ,7, 8 ,9];
// numbersArray.forEach(num => {
//     console.log(`${num}th `);
// });

// ------------------ 34
// var pizzas = ["fajitu", "mughlai", "pakistani hot pizza"];
// pizzas.forEach(pizza => {
//     console.log(`I like ${pizza} pizza` );
// });
// console.log('Pizzza is my fav!');
// console.log(' I really love pizza!');
// console.log(' I eat pizza!');

// -------------------- 35
// var animals = ["cat", "dog", "cow"];
// animals.forEach(anim => {
//     console.log(`${anim} would make a great pet`);
// })

// -------------------- 36
// function make_shirt(size, message)  {
//     console.log(`${message} ${size}`);
// }
// make_shirt(45, "Size is")

// ------------------- 37
// function large_shirt(size, message)  {
//     if(size < 30 && size > 23)
//     console.log(message);
//     else if(size >15 && size < 22) {
//         console.log(message);
//     }
//     else {
//         console.log("Hurray!");
//     }
// }
// large_shirt(45, "I love js")

// ------------------- 38
// function describe_city(city, country) {
//     console.log(`${city} is in ${country}`);
// }
// describe_city("karachi", "pakistan");

// function describe_city(city, country) {
//     console.log(`${city} is in ${country}`);
// }
// describe_city("lahore", "pakistan");

// function describe_city(city, country) {
//     console.log(`${city} is in ${country}`);
// }
// describe_city("lahore");

// ------------------------------- 39
// function city_country(city, karachi) {
//     console.log(`"${city},${country}"`);
// }
// city_country("multan", "Pakistan");

// function city_country(city, karachi) {
//     console.log(`"${city},${country}"`);
// }
// city_country("texas", "US");

// function city_country(city, karachi) {
//     console.log(`"${city},${country}"`);
// }
// city_country("makka", "Saudia");

// --------------------------- 40

// function make_album(artist, title_name) {
//     var obj;
//     artist.forEach(art => {
//         title_name.forEach(tit => {
//             obj = {
//                 name: art,
//                 title: tit,
//             }
//         })
//         return  console.log(obj);
//     });
// }
// var artists = ["haseeb", "ali", "asad"];
// var titles = ["Haseeb is a richest person", "jo bhi" , "kuch bhi"]
// make_album(artists, titles)

// ------------------------------ 41
// var magicians = ["das", "dsas" , "ergfre"];
// function show_magicians(magic) {
//    magic.forEach(element => {
//      console.log(element);
//    });
// }
// show_magicians(magicians)

// ------------------------ 42
// var magicians = ["das", "dsas" , "ergfre"];
// function make_great(magic) {
//     magic.forEach(greatmagic => {
//         return magic[greatmagic] =  `great ${greatmagic}`
//     });
// }
// make_great(magicians)
// console.log(magicians);

// ----------------------------- 43
// var magicians = ["das", "dsas" , "ergfre"];
// var newArray = [];
// function make_great(magic) {
//     for (let i = 0; i < magic.length; i++) {
//         newArray[i] = `great ${magic[i]}`
//     }
// }
// make_great(magicians)
// console.log(magicians);
// console.log(newArray);

// ---------------------------- 44
// var items = ["onoin", "maayo", "salad"];
// function sandwichorder(items) {
//     items.forEach(element => {
//         console.log(`This sandwich includes ${element}`);
//     });
// }
// sandwichorder(items)

// var items = ["klg", "trf", "fgr"];
// function sandwichorder(items) {
//     items.forEach(element => {
//         console.log(`This sandwich includes ${element}`);
//     });
// }
// sandwichorder(items)

// var items = ["fds", "ree", "redsalad"];
// function sandwichorder(items) {
//     items.forEach(element => {
//         console.log(`This sandwich includes ${element}`);
//     });
// }
// sandwichorder(items)

// ------------------------ 45
// var car = {
//     manufacture: "honda",
//     model: "CD70 shapatar",
//     color: "red"
// }

// function carDet({manufacture, model} = car) {
//       console.log(`Manufature ${manufacture} and model ${model} and the color is ${color}`);
// }
// carDet(car)
