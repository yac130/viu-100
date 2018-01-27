// Subir foto

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
            
        reader.onload = function (e) {
            $('#upload').attr('src', e.target.result);
        }
            
        reader.readAsDataURL(input.files[0]);
    }
}
    
$("#imageUpload").change(function(){
    readURL(this);
});

// Guardar jpg

  $(".boton-2").click(function(){
        html2canvas( $('.box-image-upload'), {
          onrendered: function (canvas) {
                var myImage = canvas.toDataURL("image/png");
                //create your own dialog with warning before saving file
                //beforeDownloadReadMessage();
                //Then download file
                downloadURI("data:" + myImage, "image.png");
            }
        });
  });

  //Creating dynamic link that automatically click
    function downloadURI(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        //after creating link you should delete dynamic link
        //clearDynamicLink(link); 
    }

// Drag foto

  $(function() {
    $(".wraptocenter").draggable();
  });