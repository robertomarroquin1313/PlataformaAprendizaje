const defaultFile = 'https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png';

const file = document.getElementById( 'foto' );
const img = document.getElementById( 'img' );
file.addEventListener( 'change', e => {
  if( e.target.files[0] ){
    const reader = new FileReader( );
    reader.onload = function( e ){
      img.src = e.target.result;
    }
    // que la imagen la pase a formato URL
    reader.readAsDataURL(e.target.files[0])
  }else{
    img.src = defaultFile;
  }
} );