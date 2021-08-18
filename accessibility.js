const html = document.querySelector("html");
const head = document.querySelector("head");
const body = document.querySelector("body");
// body.style.cursor =  'wait';
// import changeEverything from "./modules";



if (!localStorage.getItem("fontSize")) {
  localStorage.clear();
}

localStorage.setItem("fontSize", 25);
localStorage.setItem("wordSpacing", 25);
localStorage.setItem("lineSpacing", 25);


// ----------------------------->>>> SVG Button <<<<-----------------------------

// Accessibility button svg file code
const svg = document.createElement("div");
svg.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wheelchair" class="svg-inline--fa fa-wheelchair fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M496.101 385.669l14.227 28.663c3.929 7.915.697 17.516-7.218 21.445l-65.465 32.886c-16.049 7.967-35.556 1.194-43.189-15.055L331.679 320H192c-15.925 0-29.426-11.71-31.679-27.475C126.433 55.308 128.38 70.044 128 64c0-36.358 30.318-65.635 67.052-63.929 33.271 1.545 60.048 28.905 60.925 62.201.868 32.933-23.152 60.423-54.608 65.039l4.67 32.69H336c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H215.182l4.572 32H352a32 32 0 0 1 28.962 18.392L438.477 396.8l36.178-18.349c7.915-3.929 17.517-.697 21.446 7.218zM311.358 352h-24.506c-7.788 54.204-54.528 96-110.852 96-61.757 0-112-50.243-112-112 0-41.505 22.694-77.809 56.324-97.156-3.712-25.965-6.844-47.86-9.488-66.333C45.956 198.464 0 261.963 0 336c0 97.047 78.953 176 176 176 71.87 0 133.806-43.308 161.11-105.192L311.358 352z"></path></svg>`;

svg.style.height = "30px";
svg.style.width = "30px";

// Adding svg to the button
const drag = document.createElement("div");
drag.append(svg);

// Adding style to svg button
drag.style = `width: 60px;
            height: 60px;
            background: #067D8D;
            position: fixed;
            bottom: 20px;
            left: 10px;
            z-index: 1000;
            border: 1px solid white;
            display: flex;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            cursor: pointer;`;

html.prepend(drag);

let panelOutside = false;

// Adding event listener to the button to pop out features panel
drag.addEventListener("click", () => {
  if (panelOutside) {
    panel.style.left = "-500px";
    panelOutside = false;
  } else {
    panel.style.left = "10px";
    panelOutside = true;
  }
});

// ----------------------------->>>> Panel of Features <<<<-----------------------------

// Creating Panel for different features
const panel = document.createElement("div");
panel.innerHTML = `
                    <div style="font-size: 1.15rem; margin: 15px 0 10px 0;">Color Adjustments</div>
                    <div class="row" style="display:flex; flex-direction: row; justify-content: center; user-select: none;"> 
                        <div id="darkHigh" class="options" > Dark High-Contrast </div>
                        <div id="brightHigh" class="options"> Bright High-contrast</div>
                    </div>
                    <div class="row" style="display:flex; flex-direction: row; justify-content: center; user-select: none;"> 
                        <div id="monochrome" class="options"> Monochrome </div>
                        <div id="contrast" class="options"> Contrast Mode</div>
                    </div>
                    <div style="width: 100%; text-align: center; user-select: none; margin: 30px 0;">
                        <div style="font-size: 1.15rem; margin: 15px 0 10px 0;">Content Adjustment</div>
                        <div class="contentOptions" style="display: flex; margin: 10px 0; flex-direction: row; font-size: 0.85rem;justify-content:center;">
                            <div class= "fontSize active" style="cursor: pointer; border-radius: 20px; background: lightblue; padding: 5px 10px;transition: 0.4s all ease;"> Font Size </div>
                            <div class= "wordSpacing" style=" transition: 0.4s all ease;cursor: pointer; border-radius: 20px;  padding: 5px 10px;"> Word Spacing </div>
                            <div class= "lineSpacing" style="transition: 0.4s all ease; cursor: pointer; border-radius: 20px; padding: 5px 10px;"> Line Spacing </div>
                        </div>
                        <div class="contextAdjustment" 
                            style=" display: flex;
                                    width: 80%;
                                    margin: 0 auto;
                                    flex-direction: row;
                                    ">
                            <div class="smallText" 
                                style="flex:0.075; background:blue; color: white; text-align:center; border-radius: 50%;
                                        font-size: 1.25rem; cursor:pointer;"
                                > - 
                            </div> 
                            <div class="outerBar" style="flex:0.8;background: green;border-radius: 20px; margin: 0 5px; height: 20px;">
                                <div style="width: 25%;background: grey; height: 20px; border-radius: 20px;transition: 0.2s all ease;" class="innerBar">
                                </div>
                            </div> 
                            <div class="largeText" 
                                style=" flex: 0.075;
                                        background: blue;
                                        text-align: center;
                                        color: white;
                                        border-radius: 50%;
                                        font-size: 1.25rem;
                                        cursor: pointer;"
                                        > + 
                            </div> 
                          </div>
                    </div>
                    <div style = "margin: 5px 0 15px 0; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                      <div style="font-size: 1.15rem; margin: 15px 0 10px 0;">Change Cursor</div>
                      <div style="display: flex; flex-direction: row;">
                        <div class="whiteCursor" style="display: flex; justify-content: center; flex-direction: column; align-items: center; height: 100px; width: 130px; border: 1px solid black; border-radius: 10px; cursor: pointer; text-align: center; margin: 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 320 512"><path d="M154.149 488.438l-41.915-101.865-46.788 52.8C42.432 465.345 0 448.788 0 413.5V38.561c0-34.714 41.401-51.675 64.794-26.59L309.547 274.41c22.697 24.335 6.074 65.09-27.195 65.09h-65.71l42.809 104.037c8.149 19.807-1.035 42.511-20.474 50.61l-36 15.001c-19.036 7.928-40.808-1.217-48.828-20.71zm-31.84-161.482l61.435 149.307c1.182 2.877 4.117 4.518 6.926 3.347l35.999-15c3.114-1.298 4.604-5.455 3.188-8.896L168.872 307.5h113.479c5.009 0 7.62-7.16 3.793-11.266L41.392 33.795C37.785 29.932 32 32.879 32 38.561V413.5c0 5.775 5.935 8.67 9.497 4.65l80.812-91.194z"/></svg>
                          White Cursor 
                        </div>
                        <div class="blackCursor" style="display: flex; justify-content: center; flex-direction: column; align-items: center; height: 100px; width: 130px; border: 1px solid black; border-radius: 10px; cursor: pointer; text-align: center; margin: 10px;"> 
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mouse-pointer" class="svg-inline--fa fa-mouse-pointer fa-w-10" role="img" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="black" d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"></path></svg>
                          Black Cursor 
                        </div>
                      </div>
                    </div>
                    `;
html.prepend(panel);

// Adding styles to the panel
panel.style = `
                width: 400px;
                height: 600px;
                display: flex;
                flex-direction: column;
                // justify-content: center;
                background: rgb(255,255,255);
                background: radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(217,236,244,1) 100%);
                align-items: center;
                position: fixed;
                top: 10px;
                left: -500px;
                transition: 0.5s all ease;
                z-index: 1000;
                border-radius: 10px;
                padding-top: 30px;
                overflow-y: auto;
                `;

// Adding styles to all the 4 options created till now
const AllOptions = document.querySelectorAll(".options");
AllOptions.forEach((each) => {
  each.style = `
        width: 150px; 
        height: 125px; 
        display: flex; 
        justify-content:center; 
        align-items:center;
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px;
        cursor: pointer;
        font-size: 0.8rem;
        `;
});

// ----------------------------->>>> Handling events of 4 Color Adjustments features <<<<-----------------------------

const changeColors = (background, text) => {
  const allDivs = document.querySelectorAll("div");
  const allMains = document.querySelectorAll("main");
  const allSections = document.querySelectorAll("section");
  const allSvgs = document.querySelectorAll("svg");
  const allSpans = document.querySelectorAll("span");

  allDivs.forEach((eachDiv) => {
    if (!eachDiv.classList.contains("panel")) {
      eachDiv.style.background = background;
      eachDiv.style.color = text;
    }
  });
  allMains.forEach((eachMain) => {
    eachMain.style.background = background;
    eachMain.style.color = text;
  });
  allSections.forEach((eachSection) => {
    eachSection.style.background = background;
    eachSection.style.color = text;
  });
  allSvgs.forEach((eachSvg) => {
    if (!eachSvg.classList.contains("fa-wheelchair")) {
      eachSvg.style.background = text;
    }
  });

  allSpans.forEach((eachSpan) => {
    // eachSpan.style.background = background;
    eachSpan.style.color = text;
  });
};

//  Bright High-Contrast
document.getElementById("brightHigh").addEventListener("click", () => {
  changeColors("white", "black");
});

// Dark High-Contrast
document.getElementById("darkHigh").addEventListener("click", () => {
  changeColors("black", "white");
});

// Monochrome
document.getElementById("monochrome").addEventListener("click", () => {
  changeColors("grey", "white");
});

// ----------------------------->>>> Handling events of Content Adjustments features <<<<-----------------------------
const outerBar = document.querySelector(".outerBar");
const innerBar = document.querySelector(".innerBar");

const fontSize = document.querySelector(".fontSize");
const wordSpacing = document.querySelector(".wordSpacing");
const lineSpacing = document.querySelector(".lineSpacing");
const spaceFeatures = document.querySelector(".contentOptions");

const smallText = document.querySelector(".smallText");
const largeText = document.querySelector(".largeText");

fontSize.addEventListener("click", () => {
  fontSize.style.background = "lightblue";
  lineSpacing.style.background = "white";
  wordSpacing.style.background = "white";

  if (!fontSize.classList.contains("active")) fontSize.classList.add("active");
  if (wordSpacing.classList.contains("active")) wordSpacing.classList.remove("active");
  if (lineSpacing.classList.contains("active")) lineSpacing.classList.remove("active");

  // Fetch the width from Localstorage and increase the width of inner bar
  innerBar.style.width = localStorage.getItem("fontSize") + "%";

});
wordSpacing.addEventListener("click", () => {
  fontSize.style.background = "white";
  wordSpacing.style.background = "lightblue";
  lineSpacing.style.background = "white";

  if (fontSize.classList.contains("active")) fontSize.classList.remove("active");
  wordSpacing.classList.add("active");
  if (lineSpacing.classList.contains("active")) lineSpacing.classList.remove("active");

  // Fetch the width from Localstorage and increase the width of inner bar
  innerBar.style.width = localStorage.getItem("wordSpacing") + "%";

});
lineSpacing.addEventListener("click", () => {
  fontSize.style.background = "white";
  wordSpacing.style.background = "white";
  lineSpacing.style.background = "lightblue";

  if (fontSize.classList.contains("active")) fontSize.classList.remove("active");
  if (wordSpacing.classList.contains("active")) wordSpacing.classList.remove("active");
  lineSpacing.classList.add("active");

  // Fetch the width from Localstorage and increase the width of inner bar
  innerBar.style.width = localStorage.getItem("lineSpacing") + "%";

});

const changeTextSize = (change) => {
  const allSpans = document.querySelectorAll("span");

  allSpans.forEach((eachSpan) => {
    const currentSize = parseInt(getComputedStyle(eachSpan).fontSize);
    let finalSize;
    if (change === "small") {
      finalSize = currentSize / 1.05;
    } else if (change === "large") {
      finalSize = currentSize * 1.1;
    }
    eachSpan.style.fontSize = finalSize.toString() + "px";
  });
};

const changeWordSpacing = (change) => {
  const allSpans = document.querySelectorAll("span");
  console.log("coming here");
  allSpans.forEach((eachSpan) => {
    let currentSize = parseInt(getComputedStyle(eachSpan).wordSpacing);
    if (currentSize === 0) currentSize = 1;
    let finalSize;
    if (change === "small") {
      finalSize = currentSize / 1.50;
    } else if (change === "large") {
      finalSize = currentSize * 2;
    }
    eachSpan.style.wordSpacing = finalSize.toString() + "px";
  });
};

const changeLineSpacing = (change) => {
  const allSpans = document.querySelectorAll("span");

  allSpans.forEach((eachSpan) => {
    const currentSize = parseInt(getComputedStyle(eachSpan).lineHeight);
    let finalSize;
    if (change === "small") {
      finalSize = currentSize / 1.05;
    } else if (change === "large") {
      finalSize = currentSize * 1.1;
    }
    eachSpan.style.lineHeight = finalSize.toString() + "px";
  });
};

smallText.addEventListener("click", () => {
    const activeBar = spaceFeatures.querySelector(".active").classList[0];
    // console.log(activeBar)
    if(activeBar == "fontSize") {
        if (innerBar.style.width !== "25%") {
            let finalWidth = parseInt(innerBar.style.width) - 25;
            innerBar.style.width = finalWidth.toString() + "%";
            localStorage.setItem("fontSize", finalWidth)
            changeTextSize("small");
        }
    }
    else if(activeBar == "wordSpacing") {
        if (innerBar.style.width !== "25%") {
          let finalWidth = parseInt(innerBar.style.width) - 25;
          innerBar.style.width = finalWidth.toString() + "%";
          localStorage.setItem("wordSpacing", finalWidth)
          changeWordSpacing("small");
        }
    }
    else {
        if (innerBar.style.width !== "25%") {
          let finalWidth = parseInt(innerBar.style.width) - 25;
          innerBar.style.width = finalWidth.toString() + "%";
          localStorage.setItem("lineSpacing", finalWidth);
          changeLineSpacing("small");
        }
    }

});

largeText.addEventListener("click", () => {
    const activeBar = spaceFeatures.querySelector(".active").classList[0];
    console.log(activeBar)

    if(activeBar == "fontSize") {
        if (innerBar.style.width !== "100%") {
            let finalWidth = parseInt(innerBar.style.width) + 25;
            innerBar.style.width = finalWidth.toString() + "%";
            localStorage.setItem("fontSize", finalWidth);
            changeTextSize("large");
        }
    }
    else if(activeBar == "wordSpacing") {
        if (innerBar.style.width !== "100%") {
          let finalWidth = parseInt(innerBar.style.width) + 25;
          innerBar.style.width = finalWidth.toString() + "%";
          localStorage.setItem("wordSpacing", finalWidth);
          changeWordSpacing("large");
        }
    }
    else {
        if (innerBar.style.width !== "100%") {
          let finalWidth = parseInt(innerBar.style.width) + 25;
          innerBar.style.width = finalWidth.toString() + "%";
          localStorage.setItem("lineSpacing", finalWidth);
          changeLineSpacing("large");
        }
    }

});


// ----------------------------->>>> Changing Cursors <<<<-----------------------------

const whiteCursor = document.querySelector(".whiteCursor");
const blackCursor = document.querySelector(".blackCursor");

whiteCursor.addEventListener('click', () => {
  console.log("YOYOYYO")
  body.style.cursor = `url('data:image/svg;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 320 512"><path d="M154.149 488.438l-41.915-101.865-46.788 52.8C42.432 465.345 0 448.788 0 413.5V38.561c0-34.714 41.401-51.675 64.794-26.59L309.547 274.41c22.697 24.335 6.074 65.09-27.195 65.09h-65.71l42.809 104.037c8.149 19.807-1.035 42.511-20.474 50.61l-36 15.001c-19.036 7.928-40.808-1.217-48.828-20.71zm-31.84-161.482l61.435 149.307c1.182 2.877 4.117 4.518 6.926 3.347l35.999-15c3.114-1.298 4.604-5.455 3.188-8.896L168.872 307.5h113.479c5.009 0 7.62-7.16 3.793-11.266L41.392 33.795C37.785 29.932 32 32.879 32 38.561V413.5c0 5.775 5.935 8.67 9.497 4.65l80.812-91.194z"/></svg> 24 24, auto;`
})
