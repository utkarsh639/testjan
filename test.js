let fullbox = document.getElementById('fullbox')
let fullimg = document.getElementById('fullimg')

function opneFullimg(picture){
    fullbox.style.display = 'flex';
    fullimg.src=picture;
}
function closeimg(){
    fullbox.style.display = 'none';

}