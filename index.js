function calculateBMI() {
    var weightInput = document.getElementById("weight-bar");
    var heightInput = document.getElementById("height-bar");
    var resultDiv = document.getElementById("hasil");
  
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight)) {
      resultDiv.innerHTML = "Silahkan masukkan tinggi dan berat badan yang valid.";
      return;
    }
   
    var bmi = weight / ((height / 100) ** 2);
    var category = "";
  
    if (bmi < 18.5) {
      category = "Berat badan kurang";
    } else if (bmi < 25) {
      category = "Berat badan ideal/normal";
    } else if (bmi < 30) {
      category = "Kelebihan berat badan";
    } else {
      category = "Kegemukan [Obesitas]";
    }
  
    resultDiv.innerHTML = "BMI kamu adalah " + bmi.toFixed(2) + " (" + category + ")";
  }

function resetData() {
    document.getElementById("gender-male").checked =false;
    document.getElementByid("gender-female").checked =false;
    weightInput.value =""
    heightInput.value =""
