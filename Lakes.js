var lakesInCity = ["Agara", "Kaikondrahalli",
    "Puttenahalli",
    "Bellandur",
    "Brookfield"
];
var valuesInLakes=["agara","kaik","putt","bell","brook"];

console.log("lakesInCity", lakesInCity);
var selec = document.getElementById("lakesFrmJS");
console.log(selec);
for (var i = 0; i < lakesInCity.length; i++) {
    console.log("option", lakesInCity[i]);
    var opts = document.createElement("option");
    opts.textContent = lakesInCity[i];
    opts.value = valuesInLakes[i];
    console.log(opts)
    selec.add(opts);
}
console.log("opts", opts);
