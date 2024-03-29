
const base_api = "https://api.genderize.io"

function showResult(name, gender, probability){
  const predictionElement = document.getElementById("prediction")
  const probabilityPercentage = probability * 100
  let genderDecode
  if(gender == "male"){
    genderDecode = "laki-laki"
  }else{
    genderDecode = "perempuan"
  }

  const predictionText = `halo ${name} jenis kelamin kamu kemungkinan adalah ${genderDecode} dengan kemungkinan sebesar ${probabilityPercentage}%`
  
  predictionElement.textContent = predictionText
}

async function predict(event){
   if(event.key == 'Enter'){
    const firstName = event.target.value
    const constquery = `${base_api}/?name=${firstName}&country_id=ID`
    const response = await fetch(constquery)
    const result = await response.json()
    showResult(result.name, result.gender, result.probability)
   }
}