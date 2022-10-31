let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', onSubmit);

function onSubmit(){
    let nameBox = document.getElementById("name-input");
    console.log("Name: " + nameBox.value);
    let addressBox = document.getElementById("address-input");
    console.log("Address: " + addressBox.value);
    let ageBox = document.getElementById("age-input");
    console.log("Age: " + ageBox.value);
    let schoolBox = document.getElementById("school-input");
    console.log("School: " + schoolBox.value);

    let textBox = document.getElementById("text");
    textBox.innerText = `Thank you ${nameBox.value}`;
    document.getElementById("submit").style.backgroundColor = "LightBlue";

    document.getElementById("form").style.transform = "rotate(16deg)";
    document.getElementById("form").style.transition = "transform 0.5s ease-in";

    setTimeout(() => {
        const inputs = document.querySelectorAll('#name-input, #address-input, #age-input, #school-input');
        inputs.forEach(input => {
            input.value = "";
        })        
        textBox.innerText = "";
        submitButton.style.backgroundColor = "white";
        document.getElementById("form").style.transform = "rotate(0deg)";

    }, 2000)
}

document.getElementById(p);
p.innerText = 'Thank you ${namebox.value}';