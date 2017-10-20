var bucketModal = document.getElementById('bucket-modal');
var bucketBtn = document.getElementById('bucket-btn');
var mopaModal = document.getElementById('mopa-modal');
var mopaBtn = document.getElementById('mopa-btn');
var roadrunnerModal = document.getElementById('roadrunner-modal');
var roadrunnerBtn = document.getElementById('roadrunner-btn');
var roadrunnerSpan = document.getElementsByClassName("close")[0];
var bucketSpan = document.getElementsByClassName("close")[1];
var mopaSpan = document.getElementsByClassName("close")[2];

bucketBtn.onclick = function() {
    bucketModal.style.display = "block";
}

mopaBtn.onclick = function() {
	mopaModal.style.display = "block";
}

roadrunnerBtn.onclick = function() {
	roadrunnerModal.style.display = "block";
}

bucketSpan.onclick = function() {
    bucketModal.style.display = "none";
}

mopaSpan.onclick = function() {
	mopaModal.style.display = "none";
}

roadrunnerSpan.onclick = function() {
	roadrunnerModal.style.display = "none";
}

// if user clicks outside of modal
window.onclick = function(event) {
    if (event.target == roadrunnerModal) {
        roadrunnerModal.style.display = "none";
    }
    else if (event.target == bucketModal) {
        bucketModal.style.display = "none";
    } else if (event.target == mopaModal) {
    	mopaModal.style.display = "none";
    }
}
