const html = document.querySelector("html")
const head = document.querySelector("head")
// import changeEverything from "./modules";

// ----------------------------->>>> SVG Button <<<<-----------------------------

// Accessibility button svg file code
const svg = document.createElement("div")
svg.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wheelchair" class="svg-inline--fa fa-wheelchair fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M496.101 385.669l14.227 28.663c3.929 7.915.697 17.516-7.218 21.445l-65.465 32.886c-16.049 7.967-35.556 1.194-43.189-15.055L331.679 320H192c-15.925 0-29.426-11.71-31.679-27.475C126.433 55.308 128.38 70.044 128 64c0-36.358 30.318-65.635 67.052-63.929 33.271 1.545 60.048 28.905 60.925 62.201.868 32.933-23.152 60.423-54.608 65.039l4.67 32.69H336c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H215.182l4.572 32H352a32 32 0 0 1 28.962 18.392L438.477 396.8l36.178-18.349c7.915-3.929 17.517-.697 21.446 7.218zM311.358 352h-24.506c-7.788 54.204-54.528 96-110.852 96-61.757 0-112-50.243-112-112 0-41.505 22.694-77.809 56.324-97.156-3.712-25.965-6.844-47.86-9.488-66.333C45.956 198.464 0 261.963 0 336c0 97.047 78.953 176 176 176 71.87 0 133.806-43.308 161.11-105.192L311.358 352z"></path></svg>`;

svg.style.height = "30px";
svg.style.width = "30px";

// Adding svg to the button
const drag = document.createElement("div")
drag.append(svg);

// Adding style to svg button
drag.style = 
            `width: 60px;
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
            cursor: pointer;`

html.prepend(drag)

let panelOutside = false;

// Adding event listener to the button to pop out features panel
drag.addEventListener('click', () => {
    if(panelOutside) {
        panel.style = `
            width: 350px;
            height: 400px;
            display: flex;
            justify-content: center;
            background:white;
            align-items: center;
            position: fixed;
            top: 50px;
            left: -500px;
            transition: 0.5s all ease;
            z-index: 1000;
        `
        panelOutside = false;
    }
    else {
        panel.style = `
                width: 350px;
                height: 400px;
                display: flex;
                justify-content: center;
                background:white;
                align-items: center;
                position: fixed;
                top: 50px;
                left: 10px;
                transition: 0.5s all ease;
                z-index: 1000;
            `
        panelOutside = true;
    }
})




// ----------------------------->>>> Panel of Features <<<<-----------------------------

// Creating Panel for different features
const panel = document.createElement("div");
panel.innerHTML =   `
                    <div class="row1"> 
                        <div id="darkHigh" class="options" > Dark High-Contrast </div>
                        <div id="brightHigh" class="options"> Bright High-contrast</div>
                    </div>
                    <div class="row2"> 
                        <div id="monochrome" class="options"> Monochrome </div>
                        <div id="contrast" class="options"> Contrast Mode</div>
                    </div>
                    `
html.prepend(panel);

// Adding styles to the panel
panel.style =   `
                width: 400px;
                height: 400px;
                display: flex;
                justify-content: center;
                background:white;
                align-items: center;
                position: fixed;
                top: 50px;
                left: -500px;
                transition: 0.5s all ease;
                z-index: 1000;
                border-radius: 10px;
                `

// Adding styles to all the 4 options created till now
const AllOptions = document.querySelectorAll(".options");
AllOptions.forEach(each => {
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
        `
});

// ----------------------------->>>> Handling events of all features <<<<-----------------------------

const changeEverything = (background, text) => {
    const allDivs = document.querySelectorAll("div")
    const allMains = document.querySelectorAll("main")
    const allSections = document.querySelectorAll("section")
    const allSvgs = document.querySelectorAll("svg")

    allDivs.forEach((eachDiv) => {
        if(!eachDiv.classList.contains("panel")) {
            eachDiv.style.background = background;
            eachDiv.style.color = text
        }
    })
    allMains.forEach((eachMain) => {
        eachMain.style.background = background;
        eachMain.style.color = text
    })
    allSections.forEach((eachSection) => {
        eachSection.style.background = background;
        eachSection.style.color = text

    })
    allSvgs.forEach((eachSvg) => {
        if(!eachSvg.classList.contains("fa-wheelchair")){
            eachSvg.style.background = text;
        }
    })
}

//  Bright High-Contrast
document.getElementById("brightHigh").addEventListener("click", () => {
    changeEverything("white", "black");
})

// Dark High-Contrast
document.getElementById("darkHigh").addEventListener("click", () => {
    changeEverything("black", "white");
})

// Monochrome
document.getElementById("monochrome").addEventListener("click", () => {
    changeEverything("grey", "white");
})







