(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<input type="file" id="fileInput"><button type="button" id="btnFileUpload">Upload</button>` ;   
   
    class FileUploadClass extends HTMLElement {
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
            //this handleFile();             
            this.dispatchEvent(event);
            });           
        }
        fireChanged() {
            console.log("OnClick Triggered - checkpoint Moin");  
            //write logic here to handleFile
            //alert("show alert - "+document.getElementById('btnFileUpload').type);
            
        }  
        handleFile() {
            console.log("handleFile triggered - checkpoint Moin"); 
    }

    customElements.define('file-upload', FileUploadClass);
    
})();
