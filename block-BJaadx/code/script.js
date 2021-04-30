// 1. Change the title of the page to `Hello AltCampus!`
document.title = "hello altcampus"
// 2. Select the element using the children property:
document.body.children
//    - Select the `h1` element and change the value to `Learning DOM`
element = document.getElementById("test");
element.innerHTML = "wjed"
//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
ele = document.querySelector("li");
ele.innerHTML = "all About docuemnt "
//    - Select the input element with name `email`
elem = document.querySelectorAll("input");
// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
let ul = document.querySelectorAll("li");
console.log(ul);
// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let emailInput = document.querySelector("input");
console.log(emailInput);
// 5. Select the ul element using class selector and store in `topics`
let topics = document.querySelector(ul)
console.log(topics)
// 6. Select the first label element and store in `label`
let label = document.querySelector("label");
console.log(label)
// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCheckbox = document.querySelector("#remember");
console.log(inputCheckbox)
// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let password = document.querySelector(input[type="password"]);
console.log(password)
// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
let attrPassword = document.querySelector("placeholder");
console.log(attrPassword)
// 10. Select all the `li` element and store in `allTopics`
let allTopics = document.querySelectorAll("li")
console.log(allTopics);
// 11. Select all the input element of any type and store in `allInput`
let allInput = document.querySelectorAll("input");
console.log(allInput);
// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
let allTopics = document.querySelectorAll("li")
allTopics.forEach((ele)=> console.log(ele.innerText));
// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics = document.querySelectorAll
// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let firstLi = document.querySelector(".topics");
console.log(firstLi);
firstLi.firstElementChild
// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
let sum =  document.querySelectorAll("img");
console.log(sum)
sum.forEach((ele)=> console.log("the total number of img element" + ele));

// 16. Select all the `p` element and store in `allPElement`
let allPElement = document.querySelectorAll("p");
// 17. Select all the buttons and log the count of buttons.
let allButtons = document.querySelectorAll("submit");
let sum = 0
allButtons.forEach((ele)=>console.log(sum = sum + ele));
// 18. Select all the `label` element and log the count.

// 19. Select all the elements with `id` of `test`

// 20. Select the first element with id `test` using `getElementById`

// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.

// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.

// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.

// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.

// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
