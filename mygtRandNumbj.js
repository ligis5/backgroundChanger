const A = "url(https://images.wallpaperscraft.com/image/road_marking_evening_clouds_horizon_120298_1920x1080.jpg)";
const B = "url(https://images.wallpaperscraft.com/image/landscape_mountains_sun_140434_1920x1080.jpg)";
const C = "url(https://images.wallpaperscraft.com/image/eruption_lava_volcano_oriental_cherry_tree_45542_1920x1080.jpg)";
const D = "url(https://images.wallpaperscraft.com/image/boat_mountains_lake_135258_1920x1080.jpg)";
const E = "url(https://images.wallpaperscraft.com/image/mountains_lake_grass_sky_summer_99494_1920x1080.jpg)";
const F = "url(https://images.wallpaperscraft.com/image/mountains_cordillera_sky_sunset_sun_clouds_95556_1920x1080.jpg)";
const G = "url(https://images.wallpaperscraft.com/image/field_sky_grass_122855_1920x1080.jpg)";
const H = "url(https://images.wallpaperscraft.com/image/clouds_sky_abstract_88538_1920x1080.jpg)";
const I = "url(https://images.wallpaperscraft.com/image/tree_light_dark_82372_1920x1080.jpg)";
const J = "url(https://images.wallpaperscraft.com/image/rocks_sea_sunset_183534_1920x1080.jpg)";
const K = "url(https://images.wallpaperscraft.com/image/cirrus_clouds_sky_clouds_183519_1920x1080.jpg)";
const L	= "url(https://images.wallpaperscraft.com/image/rocks_mountains_peaks_183366_1920x1080.jpg)";
const M = "url(https://images.wallpaperscraft.com/image/ears_wheat_field_183323_1920x1080.jpg)";
const N	= "url(https://images.wallpaperscraft.com/image/girl_loneliness_alone_182828_1920x1080.jpg)";
const O = "url(https://images.wallpaperscraft.com/image/mountains_rocks_horizon_182500_1920x1080.jpg)";

const GALLERY = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O];

const one = document.getElementById("A");
const two = document.getElementById("B");
const tree = document.getElementById("C");
const four = document.getElementById("D");
const five = document.getElementById("E");
const six = document.getElementById("F");
const seven = document.getElementById("G");
const eight = document.getElementById("H");
const nine = document.getElementById("I");
const ten = document.getElementById("J");
const eleven = document.getElementById("K");
const twelve = document.getElementById("L");
const thirteen = document.getElementById("M");
const fourteen = document.getElementById("N");
const fifeteen = document.getElementById("O");

  changeA = () => {
 document.body.style.backgroundImage = A;
};changeB = () => {
 document.body.style.backgroundImage = B;
};changeC = () => {
 document.body.style.backgroundImage = C;
};changeD = () => {
 document.body.style.backgroundImage = D;
};changeE = () => {
 document.body.style.backgroundImage = E;
};changeF = () => {
 document.body.style.backgroundImage = F;
};changeG = () => {
 document.body.style.backgroundImage = G;
};changeH = () => {
 document.body.style.backgroundImage = H;
};changeI = () => {
 document.body.style.backgroundImage = I;
};changeJ = () => {
 document.body.style.backgroundImage = J;
};changeK = () => {
 document.body.style.backgroundImage = K;
};changeL = () => {
 document.body.style.backgroundImage = L;
};changeM = () => {
 document.body.style.backgroundImage = M;
};changeN = () => {
 document.body.style.backgroundImage = N;
};changeO = () => {
 document.body.style.backgroundImage = O;
};

const submitButton = document.getElementById("Submit");
const addUrl = document.getElementById("addurl");
const divMain = document.getElementById("mainpage")

const imageUrl = () => {return addUrl.value.length;}

const createButton = () => {
	const newButton = document.createElement("button");
	const thisButton = newButton.style.backgroundImage = "" + "url" + "(" + addUrl.value + ")";
	newButton.onclick = function() {document.body.style.backgroundImage = thisButton };
	newButton.className = "newButtonClass";
	divMain.appendChild(newButton);
	addUrl.value ="";
 
}




const addButtonAfterClick = () => {
	if (imageUrl() > 0) {
	createButton();
	} 

}

const addButtonAfterKeypress = (event) => {
if (imageUrl() > 0 && event.which === 13) {
	const but = document.createElement("button");
	createButton();
	}
}

submitButton.addEventListener("click", addButtonAfterClick);
addUrl.addEventListener("keypress", addButtonAfterKeypress);
