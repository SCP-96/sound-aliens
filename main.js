function startClassification(){
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MriNZvuUg/model.json', modelReady);
}

function modelReady() {
classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("rick_roll_intensifies").innerHTML = 'I can hear - ' + results[0].label;
    document.getElementById("rick_roll_grade").innerHTML = 'Accuracy' + (results[0].confidence*100).toFixed(2) + "%";
    document.getElementById("rick_roll_intensifies").style.color = "rgb("+ random_number_r +","+ random_number_g +", "+ random_number_b +")";
    document.getElementById("rick_roll_grade").style.color = "rgb("+ random_number_r +","+ random_number_g +", "+ random_number_b +")";

    img = document.getElementById('lime_sus');
    img1 = document.getElementById('cyan_sus');
    img2 = document.getElementById('red_sus');
    img3 = document.getElementById('green_sus');

    if (results[0].label == "clap") {
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src - 'aliens-04.png';
    } else if (results[0].label == "oo") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.gif';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
    } else if (results[0].label == "click") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.gif';
        img3.src = 'aliens-04.png';
    } else {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.gif';
    }
}
}