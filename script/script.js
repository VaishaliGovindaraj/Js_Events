// //----------------------------------EXERCISES from Nov-18 ppt-------------------------------------------

// const showContent = (e) => {
//     console.log(e.target.textContent);
// }
// const tagName = (e) => {
//     console.log(e.target.tagName);
// }

// document.querySelector(".porcupine").onclick = showContent;

// document.querySelector(".panther").onclick = tagName;

// // window.onclick = (e) => {
// //     console.log(e.target)
// // }

// document.querySelector(".penguin").onclick = (event) => console.log(event.target.textContent.toUpperCase());

// // window.onclick = (e) => console.log(e.target.textContent.toUpperCase());

// const pelicanCall = () => {
//     for(i=0;i<3;i++){
//         console.log("I love Pelicans");
//     }
// }

// const pelicanCallParam = (name) => {
//     for(i=0;i<3;i++){
//         console.log("I love" + name);
//     }
// }

// //document.querySelector(".pelican").addEventListener("click", pelicanCall);

// document.querySelector(".pelican").addEventListener("click", () => pelicanCall("Pelican"));

// const birdlove = (bird) => {
//     console.log(bird + " is a pretty boy");
// }




// document.querySelector(".parrot").addEventListener("click", event =>  birdlove(event.target.textContent));

// document.querySelector(".peacock").addEventListener("click", event =>  birdlove(event.target.textContent));

// //window.addEventListener("click", event =>  birdlove(event.target.textContent));

// const notAntEater = () => {
//     console.log("I'm not an Ant eater")
// }

// const notArmadillo = (color) => {
//     console.log("I'm not an " + color + " Armadillo")
// }

// // document.querySelector(".pangolin").onclick = notAntEater;
// // document.querySelector(".pangolin").onclick = notArmadillo;

// document.querySelector(".pangolin").addEventListener("click", notAntEater);
// document.querySelector(".pangolin").addEventListener("click", () => notArmadillo("blue"));

let tabs = Array.from(document.querySelectorAll(".tab"));
console.log(tabs);
//console.log(typeof tabs); // typeof an array is object
//console.log(Array.isArray(tabs));

//tabs.forEach(item => item.addEventListener("click", () => alert("Hello")));

const animalCall = (animal) => {
    console.log((animal.toLowerCase() === "panther")
        ? animal + " is the jungle assassin"
        : animal + " is the best!!");

    // if(animal === "Panther"){
    //     console.log(animal + " is the jungle assassin");
    // } else{
    //     console.log(animal + " is the best!!");
    // }
}

// tabs.forEach(item => item.addEventListener("click", (e) => animalCall(e.target.textContent) ));  1st way


tabs.forEach(item => item.addEventListener("click", () => animalCall(item.textContent) )); //better way

document.querySelector("footer").addEventListener("click", () => console.log("footer"));


document.querySelector("footer p").addEventListener("click", () => console.log("paragraph"));

document.querySelector("footer p span").addEventListener("click", () => console.log("span"));

// document.querySelector(".pangolin").className("hello");

// document.querySelector(".pangolin").classList.add("hello");

// document.querySelector(".pangolin").remove("hello");

const setActive = (clickedTab) => {
    tabs.forEach(tab => tab.classList.remove("active"));
    clickedTab.classList.add("active");
    document.querySelector(".title").textContent = clickedTab.textContent;
}

tabs.forEach(item => item.addEventListener("click",() => setActive(item)));

//document.querySelector(".parrot").addEventListener("mouseenter", () => alert("Hovered on!!!!!!"));

// document.querySelector(".parrot").addEventListener("mouseleave", () => console.log(" Stopped the Hover!!!!!!"));


let animalContent = Array.from(document.querySelectorAll(".content"));

const findContent = classToMatch => {
    animalContent.forEach(contentDiv => {
        if(contentDiv.classList.contains(classToMatch)){
            contentDiv.classList.add("featured");
        }else{
            contentDiv.classList.remove("featured");
        }
    })
}

tabs.forEach(tab => tab.addEventListener("mouseenter", () => findContent(tab.textContent.toLowerCase())));


tabs.forEach(tab => tab.addEventListener("mouseleave", () => 
    animalContent.forEach(tab => tab.classList.remove("featured"))));

let searchInput = document.querySelector("#search");

searchInput.addEventListener("change", () => console.log(searchInput.value));

//// -------------------Learn about contains vs includes ----------------------------//

const findTab = () =>{
    tabs.forEach(tab => {
        if(tab.textContent.toLowerCase().includes(searchInput.value)){
            tab.classList.add('active');
        }else{
            tab.classList.remove('active')
        }
    })

}

searchInput.addEventListener("change", findTab);

/////////////////////Array/////////////////////////
let countries = ["India", "Germany", "Sweden"];

/////////////////// when u create an OBJECT once/////////////////////
let india = {
    name : "India",
    capital : "Delhi",
    sports : ["Cricket", "Hockey"],
    currency : "Rupees",
    language: ["Tamil","Hindi"]
}

console.log(`In ${india.name} capital is ${india.capital} favourite sport is ${india.sports[0]}`);

/////////////////////////COnstructor////////////////////////////////////

//function countries() 
