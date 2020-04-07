class Game {
    constructor(){
        this.countryList=[];
 }

init(){
    for(let country in countries) {
        this.countryList.push(new Country(countries[country].nation, countries[country].x, countries[country].y, countries[country].radius, countries[country].infos));
    }
};

    
    draw() {
        
             this.countryList.forEach((country) => {
                country.display();
            });
    }; 	
    
    play(){
      let searchCountry=this.countryList[Math.random(Math.floor()*this.countryList.length)]  ;
     
    }
}