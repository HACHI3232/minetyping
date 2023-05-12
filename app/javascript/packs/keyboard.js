const Keyboard = {
  elements:{
    keysContainer :null,
    keys:[]
  },

  eventHandlers:{
    oninput:null,
    onclose:null
  },

  properties: {
    value: "",
    capslock:false
  },
  init() {
    //create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    //Setup main elements
    this.elements.main.classList.add("keyboard", "1keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys());

    //Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

  },

  _createKeys(){
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
      "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
      "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
      "space"
    ];

    //Create HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<span class="material-symbols-outlined">$(icon_name)</span>`
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const insertLineBreak = ["backspace", "p" , "enter", "?"].indexOf(key) !== -1;

      //Add attributes/classes
      keyElement.setAttribute("type","button");
      keyElement.classList.add("keyboard__key");

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click",() =>{
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this._triggerEvent("oninput");
          });

          break;

        case "caps":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          keyElement.addEventListener("click",() =>{
            this._toggleCapsLock();
            keyElement.classList.toggle("keyboard__key--active", this.properties.capslock);
          });

          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          keyElement.addEventListener("click",() =>{
            this.properties.value += "\n";
            this._triggerEvent("oninput");
          });

          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          keyElement.addEventListener("click",() =>{
            this.properties.value += " ";
            this._triggerEvent("oninput");
          });

          break;

        case "done":
          keyElement.classList.add("keyboard__key--wide","keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");

          keyElement.addEventListener("click",() =>{
            this.close();
            this._triggerEvent("onclose");
          });

          break;
          
        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener("click",() =>{
            this.properties.value = this.properties.capslock ? key.toUpperCase() : key.toLowerCase();
            this._triggerEvent("oninput");
          });

          break;

      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      };
  });

  return fragment;
},

  _triggerEvent(handlerName) {
    console.log("Event Triggered! Event name: " + handlerName);
  },

  _toggleCapsLock() {
    console.log("Caps Lock Toggled!");
  },

  open(initialValue,oninput,onclose) {

  },

  close(){

  }
};

window.addEventListener("DOMContentLoad", function () {
  Keyboard.init();
});
