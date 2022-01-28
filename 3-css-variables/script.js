const inputs = document.querySelectorAll(".controls input");

function handleInputChange() {

    //this is a suffix provided by data property data-sizing
    //this can be extracted from dataset object from the html element
    const suffix = this.dataset.sizing || "";

    //if we defined variables in :root element this is how we change them: 
    //global css variables
    //documentElement is html element actually, since we put variables in root
    //we then set style of that element dynamically
    
    // document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);


    //if we define variables in body for example, we can update them like this
    //get the body html element and change the property of style
    document.getElementsByTagName("body")[0].style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach((input) => {
    input.addEventListener("change", handleInputChange);
    input.addEventListener("input", handleInputChange);
});

console.log(inputs);