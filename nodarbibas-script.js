const grafiks = {
  "Pirmdiena" : [
    {
      nodarbiba: "Visi līmeņi",
      pasniedzejs: "Ārija",
      laiks: "18:30 - 20:00"
    }
  ],
  "Otrdiena": [
    {
      nodarbiba: "Visi līmeņi",
      pasniedzejs: "Inta",
      laiks: "18:00 - 20:00"
    }
  ],
  "Trešdiena": [
	  {
	  	  nodarbiba: "Visi līmeņi",
	      pasniedzejs: "Ārija",
	      laiks: "8:30 - 10:00"
	  },
	  {
	  	  nodarbiba: "Iesācēji",
	      pasniedzejs: "Ārija",
	      laiks: "19:00 - 20:30"
	  }
  ],
  "Ceturtdiena": [
    {
      nodarbiba: "1. līmenis",
      pasniedzejs: "Inta",
      laiks: "18:00 - 19:30"
    }
  ]
};

var nodarbibuSaraksts = document.getElementById("nodarbibu-grafiks");
var template = nodarbibuSaraksts.querySelector(".nodarbibu-grafiks_diena.template");


Object.entries(grafiks).forEach(([day, classes]) => {

	var newDay = template.cloneNode(true);
	var diena = newDay.querySelector(".nodarbibu-grafiks_diena--nosaukums");
	diena.textContent = day;

	var visasNodarbibas = newDay.querySelector(".nodarbibu-grafiks_diena--nodarbibu-saraksts")
	var vienaNodarbiba = newDay.querySelector(".nodarbibu-saraksts--nodarbiba");
	classes.forEach(singleClass => {
		var jaunaNodarbiba = vienaNodarbiba.cloneNode(true);
		var nosaukums = jaunaNodarbiba.querySelector(".nodarbiba--nosaukums");
		var pasniedzejs = jaunaNodarbiba.querySelector(".nodarbiba--pasniedzejs");
		var laiks = jaunaNodarbiba.querySelector(".nodarbiba--laiks span");

		nosaukums.textContent = singleClass.nodarbiba;
		pasniedzejs.textContent = singleClass.pasniedzejs;
		laiks.textContent = singleClass.laiks

		visasNodarbibas.removeChild(vienaNodarbiba);
		visasNodarbibas.appendChild(jaunaNodarbiba);
		jaunaNodarbiba.classList.remove("hidden");
	});


	

	nodarbibuSaraksts.appendChild(newDay);
	nodarbibuSaraksts.removeChild(template);
	newDay.classList.remove("hidden");
	newDay.classList.remove("template")
  // console.log(day);
  // console.log(classes);
});
