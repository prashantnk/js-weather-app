var name = prompt("Please Let us know your name : " );
name = name.toUpperCase();
document.querySelector('.icon').textContent = `Hello : ${name} `;
window.addEventListener('load', () => {
    let lat;
    let long;
    let api;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long);
            console.log(lat);
            api = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=${long}&lat=${lat}`;
            fetch(api, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
                    "x-rapidapi-key": "97b3415f05msha6fc131a4169089p14256ejsn65044320aa36"
                }
            })
                .then(response => {
                    return response.json();
                }).then(value => {
                    console.log(value);
                    document.querySelector('.cityname').textContent = value.data[0].city_name;
                    document.querySelector('.timezone').textContent = value.data[0].timezone;
                    document.querySelector('.temperature-description').textContent = value.data[0].weather.description;
                    document.querySelector('.temperature-degree').textContent = value.data[0].temp;   
                    const unit=document.querySelector('.temperature-unit');   
                    const temp=document.querySelector('.temperature-degree');   
                    document.querySelector('.degree-section').addEventListener("click" , ()=>
                    {
                        if(unit.textContent === 'F')
                        {
                            temp.textContent = value.data[0].temp;  
                            unit.textContent = "C";
                        }
                        else
                        {
                            temp.textContent = Math.floor((temp.textContent )*(9/5) + 32) ;
                            unit.textContent = 'F';
                        }
                    });
                                    
                });
        });
    }
})