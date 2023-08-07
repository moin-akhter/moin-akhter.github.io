(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<input type="file" id="fileInput"><button type="button" id="btnUpload">Upload Test</button>` ;   
    
    class CustLoad extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {            
              
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();           
            this.dispatchEvent(event);
            });           
        }

        fireChanged() {
            console.log("OnClick Triggered");                 
        }                
    }

    customElements.define('custom-fileload', CustLoad);
})();
