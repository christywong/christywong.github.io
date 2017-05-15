// Get the modal
var bucketModal = document.getElementById('bucket-modal');
// Get the button that opens the modal
var bucketBtn = document.getElementById('bucket-btn');
var mopaModal = document.getElementById('mopa-modal');
var mopaBtn = document.getElementById('mopa-btn');
// Get the <span> element that closes the modal
var bucketSpan = document.getElementsByClassName("close")[0];
var mopaSpan = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal 
bucketBtn.onclick = function() {
    bucketModal.style.display = "block";
}
mopaBtn.onclick = function() {
	mopaModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
bucketSpan.onclick = function() {
    bucketModal.style.display = "none";
}
mopaSpan.onclick = function() {
	mopaModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == bucketModal) {
        bucketModal.style.display = "none";
    } else if (event.target == mopaModal) {
    	mopaModal.style.display = "none";
    }
}