//adding dom elements to variables
const slider = document.querySelector("#planRange");
//setting slider price to 50 as default
slider.value = "50";
const root = document.documentElement;
const toggleButton = document.querySelector(".disccount-button");
const priceMonth= document.querySelector(".amount");
const pageViews= document.querySelector(".visits-amount");
// function used to change the price per visit
function sliderValue(){
    const sliderValue = slider.value;
    const toggleActive = document.querySelector(".active-button");
    root.style.setProperty("--porcent", `${sliderValue}%`);
    // if discount toggle is active then apply the discount
    switch(Number(slider.value)){
        case 0:
            priceMonth.innerHTML = toggleActive ? "6.00" :"8.00";
            pageViews.innerHTML = "10K";
            break;
        case 25:
            priceMonth.innerHTML = toggleActive ? "9.00" : "12.00";
            pageViews.innerHTML = "50K";
            break;
        case 50:
            priceMonth.innerHTML = toggleActive ? "12.00" : "16.00";
            pageViews.innerHTML = "100k";
            break;
        case 75:
            priceMonth.innerHTML = toggleActive ? "18.00" : "24.00";
            pageViews.innerHTML = "500K";
            break;
        case 100:
            priceMonth.innerHTML = toggleActive ? "27.00" : "36.00";
            pageViews.innerHTML =  "1M";
            break;            
    }
}
//adding event to the price slider and toggle button
slider.addEventListener("input",sliderValue);
toggleButton.addEventListener("click",()=>{
    //adding and removing discount when the toggle is active or not active
    toggleButton.classList.toggle("active-button")
    const toggleActive = document.querySelector(".active-button");
    priceMonth.innerHTML =toggleActive? Number(priceMonth.innerHTML) - (Number(priceMonth.innerHTML) * 0.25) + ".00":(Number(priceMonth.innerHTML) + (Number(priceMonth.innerHTML) * 0.334)).toFixed(0) + ".00" ;
    
})