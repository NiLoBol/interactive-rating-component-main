// const formEl = document.querySelector("form");
// const submitBtn = document.querySelector(".submit");
const cardEl = document.querySelector(".card");
const numbers = [...document.querySelectorAll(".number")];

let selected; // this keeps track of which button is pressed

let formSubmitted = false; // global variable check if form is submitted

// const cardsec = () => {
//   return (
//     <div class="card">
//       <div class="center">
//         <svg width="162" height="108" xmlns="http://www.w3.org/2000/svg">
//           <g fill="none">
//             <path
//               fill="#E6E6E6" />
//             <path fill="#39475F" d="M119.847 100.221H58.146L70.332.793h55.025l5.747 7.601z" />
//             <path fill="#61728D" d="M113.172 100.221H51.465L63.651.793h61.706z" />
//             <path fill="#181F27" d="M110.132 81.354H58.576l8.791-71.695h51.557z" />
//             <path fill="#1E252E" d="m92.743 50.055 14.897.177-.29 2.308-14.607-.252z" />
//             <path fill="#39475F" d="m51.465 100.221 7.422 6.864 60.037.915.923-7.779z" />
//             <path
//               d="M99.096 29.058s2.572.183 3.888 5.03c1.316 4.847.865 18.377.865 18.377l-11.096-.177s-5.537-20.137 6.343-23.23Z"
//               fill="#2D394B" />
//             <path fill="#FC7614" d="M5.42 32.843 45.778 0l21.18 26.119L26.603 58.96z" />
//             <path fill="#FFF" d="M27.49 21.931 45.56 7.226l3.497 4.313-18.07 14.706z" />
//             <path
//               d="m25.272 45.175 5.338-4.345a2.772 2.772 0 0 1 3.902.404 2.781 2.781 0 0 1-.404 3.91l-5.338 4.344a2.772 2.772 0 0 1-3.903-.404 2.781 2.781 0 0 1 .405-3.91ZM37.33 35.365l16.89-13.743a2.772 2.772 0 0 1 3.902.404 2.781 2.781 0 0 1-.405 3.909L40.83 39.679a2.772 2.772 0 0 1-3.903-.404 2.781 2.781 0 0 1 .405-3.91Z"
//               fill="#FFF" opacity=".46" />
//             <ellipse fill="#FFF" opacity=".3" cx="17.937" cy="33.636" rx="3.673" ry="3.68" />
//             <ellipse fill="#FFF" opacity=".3" cx="21.664" cy="30.284" rx="3.673" ry="3.68" />
//             <path
//               d="M99.096 29.058s-5.838 2.103-3.803 18.581c1.493 12.073-3.55 28.056-11.004 28.25-7.454.193-21.202-.463-21.202-.463s7.159-18.56 5.676-34.145a14.786 14.786 0 0 1 .763-6.456c.87-2.373 2.487-4.842 5.494-5.245 6.004-.818 24.076-.522 24.076-.522Z"
//               fill="#BAD6FA" />
//             <path
//               d="m58.957 76.63 26.342-.537s-4.017-3.992-4.27-14.154l-36.234.538a31.494 31.494 0 0 0 2.841 7.531 12.547 12.547 0 0 0 11.32 6.623Z"
//               fill="#546F8D" />
//             <path fill="#2D394B" d="m78.21 14.834-.918 6.041h26.621l.806-6.041z" />
//             <path
//               d="M85.54 86.19c-2.872-2.517-7.416-2.022-9.446 1.222a4.955 4.955 0 0 0-.8 2.647c0 3.98 2.744 6.59 8.227 5.492 4.184-.839 5.779-6.073 2.02-9.36Z"
//               fill="#FFF" opacity=".48" />
//             <ellipse fill="#FC7614" cx="147.188" cy="81.542" rx="14.812" ry="14.837" />
//             <path
//               d="M73.731 35.75a.537.537 0 0 1-.038-1.076c.113 0 11.343-.828 17.363-.29a.54.54 0 0 1-.096 1.076c-5.908-.538-17.079.274-17.186.285l-.043.005Zm-.891 7.279a.538.538 0 0 1-.038-1.076c.113 0 11.342-.828 17.363-.29a.54.54 0 0 1-.097 1.076c-5.907-.538-17.073.28-17.185.285l-.043.005Zm-.102 7.564a.538.538 0 0 1-.043-1.076c.112 0 11.347-.829 17.362-.29a.54.54 0 0 1-.096 1.075c-5.908-.538-17.073.28-17.186.286l-.037.005Zm-.715 7.564a.537.537 0 0 1-.037-1.076c.112 0 11.342-.829 17.362-.285a.54.54 0 0 1-.096 1.076c-5.908-.538-17.073.28-17.186.285h-.043Z"
//               fill="#FFF" />
//           </g>
//         </svg>
//       </div>
//       <div class="c-o">
//         You selected out of 5
//       </div>
//       <h2>
//         Thank you!
//       </h2>
//       <p>
//         We appreciate you taking the time to give a rating. If you ever need more support,
//         don’t hesitate to get in touch!
//       </p>

//     </div>
//   )
// }

function setcard() {
  if(selected != null){
    cardEl.innerHTML = `
  <div class="center">
    <img class="m20" src="images/illustration-thank-you.svg" alt="illustration-thank-you" width="162" height="108">
    <div class="c-o">
    You selected out ${selected} of 5
    </div>
    <h2>
      Thank you!
    </h2>
    <p class="LightGrey">
      We appreciate you taking the time to give a rating. If you ever need more support,
      don’t hesitate to get in touch!
    </p>
  </div>
  
  `
  }
  
}
const selectedRating = () => {
  numbers.forEach((number) => {
    number?.classList?.remove("visited")
  })
}

// remove visited class to all buttons with the visited class 
// add visited class to currentTarget 
const init = () => {
  console.log(numbers);
  numbers.forEach((number) => {
    console.log(number);
    number.addEventListener("click", (event) => {

      selected = event.currentTarget.textContent;
      console.log(selected);
      selectedRating();   
      event.currentTarget.classList.add("visited");
    });
  });
}

init();
