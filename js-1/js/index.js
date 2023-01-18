const assignmentList = [
  {
    id: 1,
    title: "Simple DOM Manipulation",
    code: {
      name: "code",
      link: "https://github.com/js-training-code-01",
    },
    demo: {
      name: "demo",
      link: "https://github.com/js-training-demo-01",
    },
  },
  {
    id: 2,
    title: "Digital Clock and Stop Watch",
    code: {
      name: "code",
      link: "https://github.com/js-training-code-02",
    },
    demo: {
      name: "demo",
      link: "https://github.com/js-training-demo-02",
    },
  },
  {
    id: 3,
    title: "Simple Carousel",
    code: {
      name: "code",
      link: "https://github.com/js-training-code-03",
    },
    demo: {
      name: "demo",
      link: "https://github.com/js-training-demo-03",
    },
  },
  {
    id: 4,
    title: "Collision Detection",
    code: {
      name: "code",
      link: "https://github.com/js-training-code-04",
    },
    demo: {
      name: "demo",
      link: "https://github.com/js-training-demo-04",
    },
  },
  {
    id: 5,
    title: "What A Mole",
    code: {
      name: "code",
      link: "https://github.com/js-training-code-05",
    },
    demo: {
      name: "demo",
      link: "https://github.com/js-training-demo-05",
    },
  },
  {
    id: 6,
    title: "Ball Collision using Canvas",
    code: {
      name: "code",
      link: "https://github.com/js-training-code-06",
    },
    demo: {
      name: "demo",
      link: "https://github.com/js-training-demo-06",
    },
  },
  {
    id: 7,
    title: "Canvas Brick Breaker",
    code: {
      name: "code",
      link: "https://github.com/js-training-code-07",
    },
    demo: {
      name: "demo",
      link: "https://github.com/js-training-demo-07",
    },
  },
  {
    id: 8,
    title: "Canvas What a Mole",
    code: {
      name: "code",
      link: "https://github.com/js-training-code-08",
    },
    demo: {
      name: "demo",
      link: "https://github.com/js-training-demo-08",
    },
  },
];

var mainContainer = document.createElement("div");
var headerDiv = document.createElement("div");
var containDiv = document.createElement("div");

mainContainer.setAttribute("class", "main-container");
headerDiv.setAttribute("class", "header-container");
containDiv.setAttribute("class", "contain-wrapper");

var username = document.createElement("h4");
username.innerText = "Nijar Shrestha's";
headerDiv.appendChild(username);

var topicName = document.createElement("h2");
topicName.innerText = "JAVASCRIPT TRAINING ASSIGNMENT LIST";
headerDiv.appendChild(topicName);

headerDiv.style.textAlign = "center";
headerDiv.style.marginBottom = "32px";

containDiv.style.padding = "24px 80px";

function appendBlocks() {
  for (let i = 0; i < assignmentList.length; i++) {
    var block = document.createElement("div");
    block.style.display = "inline-block";
    block.style.margin = "24px 24px";
    block.style.padding = "16px 0px";
    block.style.backgroundColor = "#CDC4C1";
    block.style.minWidth = "220px";
    block.style.maxWidth = "224px";
    block.style.borderRadius = "5px";
    containDiv.appendChild(block);

    var titleBlock = document.createElement("h4");
    titleBlock.innerText = assignmentList[i].title;
    titleBlock.style.textAlign = "center";
    block.appendChild(titleBlock);

    var ribbonContainer = document.createElement("div");
    ribbonContainer.style.backgroundColor = "#5D91E2";
    ribbonContainer.style.padding = "8px 24px";
    ribbonContainer.style.margin = "16px 0px";
    ribbonContainer.style.cursor = "pointer";
    block.appendChild(ribbonContainer);

    var codeLink = document.createElement("a");
    codeLink.style.color = "#f5f5f5";
    codeLink.innerText = assignmentList[i].code.name;
    codeLink.href = assignmentList[i].code.link;
    ribbonContainer.appendChild(codeLink);

    var secondRibbonContainer = document.createElement("div");
    secondRibbonContainer.style.backgroundColor = "#5D91E2";
    secondRibbonContainer.style.padding = "8px 24px";
    secondRibbonContainer.style.margin = "16px 0px";
    secondRibbonContainer.style.cursor = "pointer";
    block.appendChild(secondRibbonContainer);

    var demoLink = document.createElement("a");
    demoLink.style.color = "#f5f5f5";
    demoLink.innerText = assignmentList[i].demo.name;
    demoLink.href = assignmentList[i].demo.link;
    secondRibbonContainer.appendChild(demoLink);

    var numberContainer = document.createElement("div");
    block.appendChild(numberContainer);

    var number = document.createElement("h1");
    number.innerText = "0" + assignmentList[i].id;
    number.style.textAlign = "right";
    number.style.padding = "0px 16px";
    number.style.color = "#353639";
    numberContainer.appendChild(number);
  }
}

appendBlocks();

mainContainer.appendChild(headerDiv);
mainContainer.appendChild(containDiv);

document.body.appendChild(mainContainer);
