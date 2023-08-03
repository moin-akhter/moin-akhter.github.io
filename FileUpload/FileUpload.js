(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<input type="file" id="fileInput"><button type="button" onclick="handleFile()" id="btnFileUpload">Upload</button>` ;   
   
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
            this.dispatchEvent(event);
            });           
        }
        fireChanged() {
            console.log("OnClick Triggered - checkpoint Moin");  
            //write logic here to handleFile
            //alert("show alert - "+document.getElementById('btnFileUpload').type);
            
        }    
        function handleFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const fileContent = e.target.result;
      const dataArray = parseFileContent(fileContent);
      // Use the dataArray as needed
      console.log(dataArray);
    };
    reader.readAsText(file);
  } else {
    //alert('Please select a file before uploading.');
  }
}
// Function to parse the file content and store it in a JavaScript array
function parseFileContent(fileContent) {
  const lines = fileContent.trim().split('\n');
  const headers = lines[0].trim().split('\t');
  const dataArray = [];
  for (let i = 1; i < lines.length; i++) {
    const columns = lines[i].trim().split('\t');
    const dataObject = {};
    for (let j = 0; j < headers.length; j++) {
      dataObject[headers[j]] = columns[j];
    }
    dataArray.push(dataObject);
  }
  return dataArray;
}
        
    }

    customElements.define('file-upload', FileUploadClass);
    
})();
