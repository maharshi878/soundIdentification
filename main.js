function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'https://www.akc.org/wp-content/uploads/2017/12/Yellow-Lab-Puppy-Barking-500x500.jpg';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'https://catfriendly.com/wp-content/uploads/2021/02/meow-e1612557327342.jpeg';
      cat = cat + 1;
    } else{
      img.src = 'https://c.tenor.com/L-q99rw2wncAAAAC/bedtime-mouse.gif';
    }
  }
}
