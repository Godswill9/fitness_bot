const container = document.querySelector(".container");
const designSection = document.querySelector(".designSection");
const cont = document.querySelector(".cont");
const innerCont = document.querySelector(".innerCont");
const sendButton = document.querySelector(".sendBut");
const inputMessage = document.querySelector("input");
var requestCount = 0;
var loaderCont = document.querySelector(".loaderCont");
var inputSection = document.querySelector(".inputSection");
var allSpans = document.querySelector(`.reciever .options`);

//INTRO ANIMATIONS
var inner1 = document.querySelectorAll(".inner")[0];
var inner2 = document.querySelectorAll(".inner")[1];
var inner3 = document.querySelectorAll(".inner")[2];
var inner4 = document.querySelectorAll(".inner")[3];
var startButton = document.querySelector(".introduction .startBut");
var allIntros = document.querySelector(".introduction");

inputSection.style.display = "none";
innerCont.style.height = "100%";
allIntros.style.display = "none";
setTimeout(() => {
  designSection.style.display = "none";
  allIntros.style.display = "block";
  allIntros.style.zIndex = 3;
  loadAnimations();
}, 3000);

function loadAnimations() {
  setTimeout(() => {
    inner1.classList.add("animateIntro");
  }, 100);
  setTimeout(() => {
    inner2.classList.add("animateIntro");
  }, 1000);
  setTimeout(() => {
    inner3.classList.add("animateIntro");
  }, 1500);
  setTimeout(() => {
    inner4.classList.add("animateIntro");
  }, 2000);
  setTimeout(() => {
    startButton.classList.add("animateIntro");
  }, 2500);
}

function startMessage() {
  setTimeout(() => {
    displayOnScreen("Hi, this is apex fitness", "reciever", []);
  }, 1000);
  setTimeout(() => {
    displayOnScreen(
      "How can we assist you on your fitness journey today?",
      "reciever",
      [
        "Workout Recommendations",
        "Nutrition & Meal Planning",
        "Exercise Guides",
        "Describe what you need",
      ],
      "true"
    );
  }, 2000);
}
// startMessage();
startButton.addEventListener("click", () => {
  allIntros.classList.add("hideIntro");
  startMessage();
  // allIntros.style.zIndex = 2;
  allIntros.style.display = "none";
});

// document.addEventListener("DOMContentLoaded", () => {
//   innerCont.scrollTop += 1000;
// });
// const dots = document.querySelectorAll("div");

function addAnimate(role) {
  const superCont = document.createElement("div");
  const cont = document.createElement("div");
  const dots = document.createElement("div");
  dots.classList.add("dots");
  if (role == "sender") {
    superCont.classList.add("sender");
    superCont.classList.add("anime");
    cont.classList.add("senderInner");
  } else {
    superCont.classList.add("reciever");
    superCont.classList.add("anime");
    cont.classList.add("recieverInner");
  }

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div1.classList.add("goUp");
  div2.classList.add("two");
  div3.classList.add("three");
  dots.appendChild(div1);
  dots.appendChild(div2);
  dots.appendChild(div3);
  cont.appendChild(dots);
  superCont.appendChild(cont);
  // innerCont.appendChild(superCont);
  const divs = dots.querySelectorAll("div");
  // console.log(divs);
  setInterval(() => {
    for (var i = 0; i < divs.length; i++) {
      divs[i].classList.toggle("goUp");
      divs[i].classList.toggle("two");
      divs[i].classList.toggle("three");
    }
  }, 500);
  innerCont.scrollTop += 2000;
  return superCont;
}
if (inputMessage.value == "") {
  sendButton.disabled = true;
  sendButton.classList.add("blur");
}

//THIS IS THE TYPING INDICATOR FOR THE USER
//THIS IS THE TYPING INDICATOR FOR THE USER
//THIS IS THE TYPING INDICATOR FOR THE USER
inputMessage.addEventListener("input", (e) => {
  sendButton.disabled = false;
  sendButton.classList.remove("blur");
  var animatedCont = addAnimate("sender");
  const anime = document.getElementsByClassName("anime");
  // if (inputMessage.value == "") {
  //   innerCont.removeChild(animatedCont);
  // }
  if (anime.length == 0 && inputMessage.value !== "") {
    // innerCont.appendChild(animatedCont);
    innerCont.scrollTop += 100;
  }
  if (e.target.value == "") {
    return;
  }
});
// setInterval(addAnimate("sender"), 1000);
// var arr = [];
var arr = [
  {
    role: "sender",
    messages: ["hi", "i need a mechanic", "my car just stopped"],
  },
  {
    role: "reciever",
    messages: ["oh", "whats the issue"],
  },
  {
    role: "reciever",
    messages: ["so it can be resolved"],
  },
  {
    role: "sender",
    messages: ["my car jor", "the engine"],
  },
  {
    role: "reciever",
    messages: [
      `Okay, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores reprehenderit natus doloribus unde quas deserunt ut
                ducimus, fuga maiores quasi, aliquam nobis. Blanditiis sapiente
                nesciunt nostrum dicta esse, molestiae beatae. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Amet illum, earum
                repellat quidem magni sed vero dolores animi! Harum asperiores
                tempore ex praesentium unde, facilis qui quis reiciendis
                delectus inventore. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Natus minima ad quod nulla error facere amet
                perferendis debitis dolorum minus quasi praesentium, nobis
                voluptas impedit quis eius porro repellat cumque. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dignissimos
                inventore labore ducimus? Quis amet quaerat sequi nemo maiores
                quia eos, eveniet nesciunt fugiat in impedit possimus
                voluptatibus eius ipsam facere.`,
      `Okay, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores reprehenderit natus doloribus unde quas deserunt ut
                ducimus, fuga maiores quasi, aliquam nobis. Blanditiis sapiente
                `,
    ],
  },
];

function render() {
  var messages = arr.map((item, i) => {
    var val = "";
    if (item.role == "sender") {
      val = ` <div class="sender">
            <div class="senderInner">
                ${item.messages.map((item, i) => {
                  return ` <span>${item}</span>`;
                })}
            </div>
          </div>
        `;
    } else {
      val = `  <div class="reciever">
            <div class="recieverInner">
                ${item.messages.map((item, i) => {
                  return ` <span>${item}</span>`;
                })}
            </div>
          </div>
            `;
    }
    return val;
  });

  return messages.join("");
}

// console.log(render());
// innerCont.innerHTML = "nothin";

const displayOnScreen = (elem, role, options, addDes) => {
  const superCont = document.createElement("div");
  const cont = document.createElement("div");
  if (role == "sender") {
    superCont.classList.add("sender");
    cont.classList.add("senderInner");
  } else if (role == "reciever2") {
    superCont.classList.add("reciever2");
    cont.classList.add("recieverInner");
  } else {
    superCont.classList.add("reciever");
    cont.classList.add("recieverInner");
  }
  const span = document.createElement("span");
  var spanLast = document.createElement("span");
  span.innerHTML = elem;
  cont.appendChild(span);
  superCont.appendChild(cont);
  if (!options) {
    var message =
      "Hi, respond as a fitness expert. Give me tips for " +
      elem +
      ".  Let it be detailed but not very long, and let our conversation flow by asking me relevant questions. Thanks";
    replyMessage(message);
    return;
  }
  if (options?.length !== 0) {
    setTimeout(() => {
      const optionDiv = document.createElement("div");
      const describe = document.createElement("div");
      optionDiv.classList.add("options");
      var lastElem = options[options.length - 1];
      if (addDes == "true") {
        // options[options.length - 1] = options[options.length - 1];
        options.forEach((element, i) => {
          const span = document.createElement("span");
          span.innerHTML = element;
          options[options.length - 1] = "or";

          optionDiv.appendChild(span);
          cont.appendChild(optionDiv);
          superCont.appendChild(cont);
        });
        const span2 = document.createElement("span");
        span2.classList.add("spanIn");
        span2.innerHTML = lastElem;
        describe.classList.add("describe");
        describe.appendChild(span2);
        optionDiv.appendChild(describe);
      } else {
        options.forEach((element, i) => {
          const span = document.createElement("span");
          span.innerHTML = element;

          optionDiv.appendChild(span);
          cont.appendChild(optionDiv);
          superCont.appendChild(cont);
        });
      }
      const allMessages = optionDiv.querySelectorAll("span");
      for (var i = 0; i < allMessages.length; i++) {
        if (allMessages[i].innerHTML == "or") {
          allMessages[i].style.display = "none";
        }
      }
      allMessages.forEach((item, i) => {
        item.addEventListener("click", () => {
          if (
            i == allMessages.length - 1 &&
            item.innerText === "Describe what you need"
          ) {
            // console.log("yay");
            inputSection.style.display = "flex";
            innerCont.style.height = "85%";
          } else {
            inputSection.style.display = "flex";
            innerCont.style.height = "85%";
            displayOnScreen(item.innerText, "sender", []);
            inputMessage.value = "";
            var animatedCont = addAnimate("reciever");
            setTimeout(() => {
              innerCont.appendChild(animatedCont);
              innerCont.scrollTop += 2000;
            }, 1000);

            var arr = chooseSub(item.textContent);
            setTimeout(() => {
              displayOnScreen(
                "Okay, choose a specific goal",
                "reciever2",
                arr,
                "false"
              );
            }, 2000);
          }
        });
      });
    }, 500);
  }
  const anime = document.getElementsByClassName("anime")[0];
  if (anime) {
    innerCont.removeChild(anime);
  }
  innerCont.appendChild(superCont);
  innerCont.scrollTop += 100;
};

function addDivAfterFullStop(text) {
  const sentences = text.split("."); // Split the text into sentences

  let modifiedText = "";
  for (const sentence of sentences) {
    modifiedText += `<div style="margin-bottom: 10px;">${sentence}</div>`;
  }

  return modifiedText;
}

const replyMessage = async (message) => {
  var val = `
  Weight management
  Injury recovery support
  General health and wellness advice
  Exercise Guides:
  
  Boosting fitness and health
  Muscle building
  Athletic performance improvement
  Fitness Gear & Equipment Advice:`;

  // var url = "http://localhost:8080/chat";
  var url = "https://fitness-backend-coe8.onrender.com/chat";

  // displayOnScreen(addDivAfterFullStop(val), "reciever", []);
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: message }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.data == "an error occured") {
        setTimeout(() => {
          const anime = document.getElementsByClassName("anime")[0];
          anime.textContent = "An error occured. Refresh the page";
          anime.classList.add("errorMessage");
          sendButton.disabled = true;
          sendButton.classList.add("blur");
        }, 1000);
        return;
      } else {
        requestCount += 1;
        displayOnScreen(addDivAfterFullStop(res.data), "reciever", []);
        // console.log(res.data);
      }
    })
    .catch((err) => {
      alert("no internet");
      setTimeout(() => {
        const anime = document.getElementsByClassName("anime")[0];
        anime.textContent = "An error occured. Refresh the page";
        anime.classList.add("errorMessage");
        sendButton.disabled = true;
        sendButton.classList.add("blur");
      }, 1000);
    });
};

var count = 0;

sendButton.addEventListener("click", () => {
  sendButton.disabled = false;
  sendButton.classList.remove("blur");
  if (inputMessage.value == "") {
    alert("input a message");
    return;
  }
  designSection.style.opacity = "0.3";
  const message =
    inputMessage.value +
    ". Pls reply me simply and as a fitness expert. Let it be detailed but not very long, and let our conversation flow by asking me relevant questions. Thanks";
  const anime = document.getElementsByClassName("anime")[0];
  if (anime) {
    innerCont.removeChild(anime);
  }
  displayOnScreen(message, "sender", []);
  inputMessage.value = "";
  var animatedCont = addAnimate("reciever");
  setTimeout(() => {
    innerCont.appendChild(animatedCont);
    innerCont.scrollTop += 2000;
  }, 1000);
  // setTimeout(() => {
  setTimeout(() => {
    replyMessage(message);
  }, 1200);
  // }, 2000);
  sendButton.disabled = true;
  sendButton.classList.add("blur");
});

inputMessage.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendButton.disabled = false;
    sendButton.classList.remove("blur");
    if (inputMessage.value == "") {
      alert("input a message");
      return;
    }
    designSection.style.opacity = "0.3";
    const message = inputMessage.value;
    const anime = document.getElementsByClassName("anime")[0];
    if (anime) {
      innerCont.removeChild(anime);
    }
    displayOnScreen(message, "sender", []);
    inputMessage.value = "";
    var animatedCont = addAnimate("reciever");
    setTimeout(() => {
      innerCont.appendChild(animatedCont);
      innerCont.scrollTop += 2000;
    }, 1000);
    // setTimeout(() => {
    setTimeout(() => {
      replyMessage(message);
    }, 1200);
    // }, 2000);
    sendButton.disabled = true;
    sendButton.classList.add("blur");
  }
});

var workoutRecommendations = [
  "Getting healthier",
  "Losing or maintaining weight",
  "Building strength and muscles",
  "Relaxing and reducing stress",
];

var nutrition = ["Managing weight", "Taking balanced meals"];

var exerciseGuides = [
  "Boosting fitness and health",
  "Muscle building",
  "Athletic performance improvement",
];

const chooseSub = (i) => {
  var arr = [];
  if (i == "Workout Recommendations") {
    arr = workoutRecommendations;
  } else if (i == "Nutrition & Meal Planning") {
    arr = nutrition;
  } else if (i == "Exercise Guides") {
    arr = exerciseGuides;
  } else {
    return;
  }

  return arr;
};
