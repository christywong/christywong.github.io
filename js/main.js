var bucketModal = document.getElementById('bucket-modal');
var bucketBtn = document.getElementById('bucket-btn');
var mopaModal = document.getElementById('mopa-modal');
var mopaBtn = document.getElementById('mopa-btn');
var bucketSpan = document.getElementsByClassName("close")[0];
var mopaSpan = document.getElementsByClassName("close")[1];

bucketBtn.onclick = function() {
    bucketModal.style.display = "block";
}

mopaBtn.onclick = function() {
	mopaModal.style.display = "block";
}

bucketSpan.onclick = function() {
    bucketModal.style.display = "none";
}

mopaSpan.onclick = function() {
	mopaModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == bucketModal) {
        bucketModal.style.display = "none";
    } else if (event.target == mopaModal) {
    	mopaModal.style.display = "none";
    }
}
