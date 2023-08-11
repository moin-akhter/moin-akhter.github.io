(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<input type="file" id="fileInput"><button type="button" id="btnUpload">Upload Test</button>` ;   
    
    class CustLoad extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }
  
        const fileData = [];
        
        init() {            
              
            //let shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot = this.attachShadow({mode: "open"});
            //shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._fileInput = this._shadowRoot.getElementById("fileInput");
            this._btnUpload = this._shadowRoot.getElementById("btnUpload");     
            this._btnUpload.addEventListener("click", event => {
            //this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();           
            this.dispatchEvent(event);
            }); 

        }

        fireChanged() {
            console.log("OnClick Triggered"); 
                        const file = this._fileInput.files[0];
            if(file) { 
               //console.log(file);
                const reader = new FileReader();
                   reader.onload = function(e) {
                      const fileContent = e.target.result;
                      //const dataArray = this.parseFileContent(fileContent);
                        const lines = fileContent.trim().split('\n');
                          const headers = lines[0].trim().split('\t');
                          const dataArray = [];
                           //this.fileData = [];
                          for (let i = 1; i < lines.length; i++) {
                            const columns = lines[i].trim().split('\t');
                            const dataObject = {};
                            for (let j = 0; j < headers.length; j++) {
                              dataObject[headers[j]] = columns[j];
                            }
                            //this.fileData.push(dataObject);
                              this.dataArray.push(dataObject);
                          }
    // Use the dataArray as needed
                       this.fileData = dataArray;
                       console.log(dataArray);
                        };
                         reader.readAsText(file);
                     } //endif
                   console.log(this.fileData);
            } //end fireChanged
         
    getFileData() {
        console.log(this.fileData);
          // return this._fileData;
        const testData = ["Saab", "Volvo", "BMW"];
        return testData;
    
    }
    
    } //end class
        
        customElements.define('custom-fileload', CustLoad); 
 })();
