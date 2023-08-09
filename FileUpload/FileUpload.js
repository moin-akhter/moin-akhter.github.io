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
              
            //let shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot = this.attachShadow({mode: "open"});
            //shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._fileIput = this._shadowRoot.getElementById("fileInput");
            this._btnUpload = this._shadowRoot.getElementById("btnUpload");
            
            this._btnUpload.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();           
            this.dispatchEvent(event);
            }); 

        }

        fireChanged() {
            console.log("OnClick Triggered");
            const file1 = this._fileInput.files[0];
            if (file1) {
            //console.log(this._fileInput.files[0]);
                console.log("File read");
        }                
    }
    customElements.define('custom-fileload', CustLoad);
  

})();
