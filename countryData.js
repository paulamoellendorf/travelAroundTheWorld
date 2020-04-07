
class Country {
	constructor(countryName, xCord,yCord, radius, infos) {
        this.nation = countryName;
        this.x = xCord;
        this.y = yCord;
        this.radius = radius;
        this.infos = infos;
    }
  display(){
    fill ("red");
circle(this.x, this.y,this.radius);
  }
  clicked(){
	  let d=dist(mouseX, mouseY, this.x, this.y);
	  if(d<=this.radius){
		  console.log(true);
	  } 
  } 

}

let countries = {
	USA: {
    nation:"United States Of America",
		x: 198,
		y: 168,
		radius: 70,
		infos: "asdfasdfasdasf"
	},
	Germany: {
		nation:"Deutschland",
		x: 605,
		y: 201,
		radius: 15,
		infos: " "
	},
	France: {
		nation:"Frankreich",
		x: 580,
		y: 220,
		radius: 17,
		infos:"",
	},
	Brazil: {
		nation:"Brasilien",
		x: 403,
		y: 420,
		radius: 50,
		infos:"",
	},
}



