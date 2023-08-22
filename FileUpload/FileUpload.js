(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<table><tr><td><input type="file" id="fileInput" ></td><td><button type="button" id="btnUpload">Upload File</button></td></tr></table>` ;   
    let fileData = [];
    
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
            this._fileInput = this._shadowRoot.getElementById("fileInput"); //Get the file again to solve refresh issue.
            //console.log("Process new File: " + file); 
                        const file = this._fileInput.files[0];
           fileData = [];
            if(file) { 
                console.log("Process File : " + file.name);
                const reader = new FileReader();
                   reader.onload = function(e) {
                      const fileContent = e.target.result;
                      //const dataArray = this.parseFileContent(fileContent);
                        const lines = fileContent.trim().split('\n');
                          const headers = lines[0].trim().split('\t');
                          const headers1 = headers[0].trim().split(',');
                         // const dataArray = [];
                           //this.fileData = [];
                       
                        //  for (let i = 1; i < lines.length; i++) {
                         for (let i = 0; i < lines.length; i++) {
                           // const columns = lines[i].trim().split('\t');
                         //   const columns1 = lines[i].trim().split(',');
                            //const dataObject = {};
                           // const dataObject1 = [];
                               const dataStr = lines[i].trim();                                                        
                              /*
                            for (let j = 0; j < headers1.length; j++) {
                              //dataObject[headers[j]] = columns[j];
                              //  const vals = {id: columns1[j] , description: columns1[j] };  
                             // dataObject[headers1[j]] = {id: columns1[j] , description: columns1[j] }; 
                                //dataObject1[j] = columns1[j];
                                //dataStr = dataStr + columns1[j]
                              // dataObject[headers1[j]] = columns1[j];
                            }
                            */
                             fileData.push(dataStr);
                            //  this.dataArray.push(dataObject);
                          }
    // Use the dataArray as needed
                       //fileData = dataArray;
                       //console.log(dataArray);
                        };
                         reader.readAsText(file);
                     } //endif
                 //  console.log(fileData);
            } //end fireChanged
         
    getFileData() {
        //console.log(fileData);
          return fileData;
   
    }
    
    } //end class
        
        customElements.define('custom-fileload', CustLoad); 
 })();
