jQuery(document).ready(function(){

    (function($){
        var temp;
        
        $.getJSON('https://extreme-ip-lookup.com/json', function(d){
            var lat = d.lat;
            var lon = d.lon;
            var city = d.city;
            $(".weather-location").html(city);

            $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=5f7bcf238dc7056a7325948af9cb61be", function(data) {
//                console.log("%cWeather data","background:red;padding:10px;", data);

                //convert kelvin to Celsius
                $(".weather-temp").html(Math.round(data.main.temp - 273.15 )).append("<span> <sup>o</sup>C</span>");
                //
                $(".weather-weather").html(data.weather[0].main);
                //

                //            $(".weather-icon-code").html(data.weather[0].icon);

                $(".weather-icon").attr('src', 'http://openweathermap.org/img/w/'+ data.weather[0].icon+ '.png');



            });
        });

    })(jQuery);

});