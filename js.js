const apikey="d1b332e0f12e2191032ccb4e970de362";
        const api="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox=document.querySelector(".search input");
        const searchbtn=document.querySelector(".search button");
        
        async function weather(bla){
            const response= await fetch(api +  `${bla}&appid=${apikey}`);
            let data = await response.json();
            if(response.status==="404" || "400")
            {document.querySelector(".error").style.display="block";
            document.querySelector(".card").style.display="none";

                }
            
            
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " c";
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
            document.querySelector(".humidity").innerHTML=data.main.humidity;
            
            
            
            document.querySelector(".card").style.display="block";
            document.querySelector(".error").style.display="none";


        }

        searchbox.addEventListener("keypress", function(event) {
              if (event.key === "Enter" )
                    {weather(searchbox.value);
                        searchbox.value="";}
        })
        searchbtn.addEventListener("click",()=>{
            weather(searchbox.value);
            searchbox.value="";
        })