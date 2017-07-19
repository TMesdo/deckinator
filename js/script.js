///////////////////////////////////////////////////////////////////////
// Definition des cartes
///////////////////////////////////////////////////////////////////////
// [0-10] 	=> Arene
// [SBGF]  	=> Categorie (Sort, Batiment, Ground, Flying)
// [0-9]  	=> Cout
// [CREL]	=> Rarete (Commune, Rare, Epique, Legendaire)
// [ABCEGMRSTZ] => Type d'attack (Aerien, Boost, Charge, Explosion, Generateur, Multiple, Ralentisseur, Sol, Tour, Zone)
///////////////////////////////////////////////////////////////////////
// Liste des cartes
///////////////////////////////////////////////////////////////////////
var cards = {
	"3":  {arene:0, categorie:'S', cout:3, rarete:'C', attackType:'ASTZ',  	name:"Arrows"},
	"6":  {arene:0, categorie:'G', cout:3, rarete:'C', attackType:'STZ',   	name:"Bomber"},
	"2":  {arene:0, categorie:'G', cout:3, rarete:'C', attackType:'AMST',  	name:"Archers"},
	"1":  {arene:0, categorie:'G', cout:3, rarete:'C', attackType:'ST',    	name:"Knight"},
	"7":  {arene:0, categorie:'S', cout:4, rarete:'R', attackType:'ASTZ',  	name:"Fireball"},
	"8":  {arene:0, categorie:'G', cout:4, rarete:'R', attackType:'ST',    	name:"Mini P.E.K.K.A"},
	"9":  {arene:0, categorie:'G', cout:4, rarete:'R', attackType:'AST',   	name:"Musketeer"},
	"4":  {arene:0, categorie:'G', cout:5, rarete:'R', attackType:'T',     	name:"Giant"},
	"10": {arene:0, categorie:'G', cout:5, rarete:'E', attackType:'CST',   	name:"Prince"},
	"11": {arene:0, categorie:'F', cout:4, rarete:'E', attackType:'ASTZ',  	name:"Baby Dragon"},
	"12": {arene:0, categorie:'G', cout:3, rarete:'E', attackType:'MST',   	name:"Skeleton Army"},
	"13": {arene:0, categorie:'G', cout:5, rarete:'E', attackType:'AMSTZ', 	name:"Witch"},
	"14": {arene:1, categorie:'G', cout:2, rarete:'C', attackType:'AMST',  	name:"Spear Goblin"},
	"15": {arene:1, categorie:'G', cout:2, rarete:'C', attackType:'MST',   	name:"Goblins"},
	"16": {arene:1, categorie:'B', cout:5, rarete:'R', attackType:'AGST',  	name:"Goblin Hut"},
	"17": {arene:1, categorie:'G', cout:4, rarete:'R', attackType:'STZ',   	name:"Valkyrie"},
	"18": {arene:1, categorie:'S', cout:6, rarete:'E', attackType:'ASTZ',  	name:"Lightning"},
	"19": {arene:1, categorie:'S', cout:3, rarete:'E', attackType:'MST',   	name:"Goblin Barrel"},
	"20": {arene:2, categorie:'G', cout:1, rarete:'C', attackType:'MST',   	name:"Skeletons"},
	"21": {arene:2, categorie:'F', cout:3, rarete:'C', attackType:'AMST',  	name:"Minions"},
	"22": {arene:2, categorie:'B', cout:3, rarete:'R', attackType:'GST',   	name:"Tombstone"},
	"23": {arene:2, categorie:'B', cout:5, rarete:'R', attackType:'SZ',    	name:"Bomb Tower"},
	"24": {arene:2, categorie:'G', cout:6, rarete:'E', attackType:'EST',   	name:"Giant Skeleton"},
	"25": {arene:2, categorie:'F', cout:5, rarete:'E', attackType:'ET',    	name:"Balloon"},
	"26": {arene:3, categorie:'B', cout:3, rarete:'C', attackType:'S',     	name:"Cannon"},
	"27": {arene:3, categorie:'G', cout:5, rarete:'C', attackType:'MST',   	name:"Barbarians"},
	"28": {arene:3, categorie:'S', cout:6, rarete:'R', attackType:'ASTZ',  	name:"Rocket"},
	"29": {arene:3, categorie:'B', cout:7, rarete:'R', attackType:'GST',   	name:"Barbarian Hut"},
	"30": {arene:3, categorie:'S', cout:2, rarete:'E', attackType:'BZ',    	name:"Rage"},
	"31": {arene:3, categorie:'B', cout:6, rarete:'E', attackType:'ST',    	name:"X-Bow"},
	"32": {arene:4, categorie:'B', cout:4, rarete:'C', attackType:'S',     	name:"Tesla"},
	"33": {arene:4, categorie:'F', cout:5, rarete:'C', attackType:'AMST',  	name:"Minion Horde"},
	"34": {arene:4, categorie:'B', cout:5, rarete:'R', attackType:'AS',    	name:"Inferno Tower"},
	"35": {arene:4, categorie:'G', cout:4, rarete:'R', attackType:'T',     	name:"Hog Ridern"},
	"36": {arene:4, categorie:'S', cout:4, rarete:'E', attackType:'ARSTZ', 	name:"Freeze"},
	"37": {arene:4, categorie:'G', cout:7, rarete:'E', attackType:'ST',    	name:"P.E.K.K.A"},
	"61": {arene:4, categorie:'F', cout:4, rarete:'L', attackType:'', 		name:"Inferno Dragon"},
	"38": {arene:4, categorie:'F', cout:7, rarete:'L', attackType:'', 		name:"Lava Hound"},
	"39": {arene:5, categorie:'S', cout:2, rarete:'C', attackType:'', 		name:"Zap"},
	"40": {arene:5, categorie:'G', cout:2, rarete:'C', attackType:'', 		name:"Fire Spirits"},
	"41": {arene:5, categorie:'B', cout:4, rarete:'R', attackType:'', 		name:"Furnace"},
	"42": {arene:5, categorie:'G', cout:5, rarete:'R', attackType:'', 		name:"Wizard"},
	"43": {arene:5, categorie:'S', cout:4, rarete:'E', attackType:'', 		name:"Poison spell"},
	"44": {arene:5, categorie:'S', cout:0, rarete:'E', attackType:'', 		name:"Mirror"},
	"63": {arene:5, categorie:'S', cout:5, rarete:'L', attackType:'', 		name:"Graveyard"},
	"45": {arene:5, categorie:'G', cout:3, rarete:'L', attackType:'', 		name:"Ice Wizard"},
	"46": {arene:6, categorie:'B', cout:4, rarete:'C', attackType:'', 		name:"Mortar"},
	"47": {arene:6, categorie:'B', cout:6, rarete:'R', attackType:'', 		name:"Elixir Collector"},
	"91": {arene:6, categorie:'G', cout:4, rarete:'R', attackType:'', 		name:"Battle RAM"},
	"64": {arene:6, categorie:'S', cout:3, rarete:'E', attackType:'', 		name:"Tornado"},
	"48": {arene:6, categorie:'G', cout:8, rarete:'E', attackType:'', 		name:"Golem"},
	"49": {arene:6, categorie:'S', cout:2, rarete:'L', attackType:'', 		name:"The Log"},
	"50": {arene:6, categorie:'G', cout:6, rarete:'L', attackType:'', 		name:"Sparky"},
	"51": {arene:6, categorie:'G', cout:3, rarete:'L', attackType:'', 		name:"Miner"},
	"65": {arene:7, categorie:'G', cout:6, rarete:'C', attackType:'', 		name:"Elite Barbarians"},
	"52": {arene:7, categorie:'G', cout:6, rarete:'C', attackType:'', 		name:"Royal Giant"},
	"60": {arene:7, categorie:'F', cout:3, rarete:'R', attackType:'', 		name:"Mega Minion"},
	"53": {arene:7, categorie:'G', cout:9, rarete:'R', attackType:'', 		name:"Three Musketeers"},
	"54": {arene:7, categorie:'G', cout:4, rarete:'E', attackType:'', 		name:"Dark Prince"},
	"55": {arene:7, categorie:'G', cout:3, rarete:'E', attackType:'', 		name:"Guards"},
	"67": {arene:7, categorie:'G', cout:4, rarete:'L', attackType:'', 		name:"Electro Wizard"},
	"56": {arene:7, categorie:'G', cout:3, rarete:'L', attackType:'', 		name:"Princess"},
	"57": {arene:8, categorie:'G', cout:1, rarete:'C', attackType:'', 		name:"Ice Spirit"},
	"62": {arene:8, categorie:'G', cout:2, rarete:'R', attackType:'', 		name:"Ice Golem"},
	"66": {arene:8, categorie:'S', cout:3, rarete:'E', attackType:'', 		name:"Clone Spell"},
	"58": {arene:8, categorie:'G', cout:5, rarete:'E', attackType:'', 		name:"Bowler"},
	"59": {arene:8, categorie:'G', cout:4, rarete:'L', attackType:'', 		name:"Lumberjack"},
	"92": {arene:9, categorie:'G', cout:3, rarete:'C', attackType:'', 		name:"Goblin Gang"},
	"93": {arene:9, categorie:'G', cout:3, rarete:'R', attackType:'', 		name:"Dart Goblin"},
	"94": {arene:9, categorie:'G', cout:5, rarete:'E', attackType:'', 		name:"Executioner"},
};

var trad = {
	"1"		: {fr:"Créateur de deck aléatoire pour Clash Royale", en:"Random Deck Generator for Clash Royale"},
	"2" 	: {fr:"Générer", en:"Generate"},
	"3"		: {fr:"Séléctionnez vos cartes ", en:"Choose your cards "},
	"4"		: {fr:"Par cartes", en:"By cards"},
	"5"		: {fr:"Nombre de decks", en:"Number of decks"},
	"6"		: {fr:"Classer par", en:"Sort by"},
	"7"		: {fr:"Arène", en:"Arena"},
	"8"		: {fr:"Elixir", en:"Elixir"},
	"9"		: {fr:"Rarete", en:"Rarity"},
	"10"	: {fr:"Categorie", en:"Type"},
	"11"	: {fr:"Sort", en:"Spell"},
	"12"	: {fr:"Batiment", en:"Building"},
	"13"	: {fr:"Sol", en:"Ground"},
	"14"	: {fr:"Air", en:"Flying"},
	"15"	: {fr:"Commune", en:"Common"},
	"16"	: {fr:"Rare", en:"Rare"},
	"17"	: {fr:"Epique", en:"Epic"},
	"18"	: {fr:"Legendaire", en:"Legendary"},
	"19"	: {fr:"Moyenne du deck", en:"Average cost"},
	"20"	: {fr:"Pas assez de carte disponible pour créer un deck !", en:"Not enough cards to create a deck !"},
	"21"	: {fr:"Minimum", en:"Minimum"},
	"22"	: {fr:"Carte(s) obligatoire(s)", en:"Wanted cards"},
	"23"	: {fr:"Coût", en:"Cost"},
	"24"	: {fr:"cartes", en:"cards"},
	"25"	: {fr:"Partage du deck", en:"Share deck"},
	"26"	: {fr:"Désolé, après ", en:"After"},
	"27"	: {fr:" tentatives aléatoire, aucune des combinaisons testé ne correspondaient à vos attentes, merci de ré-essayer", en:" random attempts, we couldn't make a deck that fits your waitings. You should try again !"},
	"28"	: {fr:"Pas de résultat", en:"No result"},
	"29"	: {fr:"Ce contenu n'est pas affilié à, sponsorisé ni spécifiquement approuvé par Supercell et Supercell dégage toute responsabilité à son sujet. Pour plus d'informations, voyez le règlement sur les contenus de fans : www.supercell.com/fan-content-policy.", en:"This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see Supercell’s Fan Content Policy: www.supercell.com/fan-content-policy."},
}

var loading = [];
var arene = ["0","1","2","3","4","5","6","7","8","9"];
var categorie = ["S","Spell","B","Building","G","Ground","F","Flying"];
var cout = ["0","1","2","3","4","5","6","7","8","9"];
var rarete = ["C","Common","R","Rare","E","Epic","L","Legendary"];
var templates = {
	"0": {name:"Reset"},
	"1": {name:"Classic", sort:2, batiment:1, sol:3, air:2, coutMin:'3.0', coutMax:'4.1'},
	"2": {name:"Hogg cycle", batiment:1, coutMax:'3.0', force:'35'},
	"3": {name:"Golem Balloon", sort:2, batiment:1, coutMax:'4.4', force:'48;25'},
};

function translate(content) {
	// console.log("translate");
	// loadingGif('translate');
	// var userLang = navigator.language || navigator.userLanguage;
	// // if ((userLang == 'fr') || (userLang == 'de')) {}
	// if ((userLang == 'fr')) {}
	// else { userLang = 'en'; }
	// // Si ça concerne un contenu envoyé
	// if (content !== undefined) { 
	// 	for(var word in trad) {
	// 		content.replace(""+trad[word]['en']+"",trad[word][userLang]);
	// 	}
	// 	return content;
	// // Sinon, remplacement dans tout le contenu
	// } else {	
	// 	for(var word in trad) {
	// 		$(":contains('"+trad[word]['en']+"'):not(:has(*))").each(function() {
	// 			$(this).html($(this).html().replace(""+trad[word]['en']+"",trad[word][userLang]));
	// 		});
	// 	}
	// }
	// loadingGif('translate');
}

function showPopup(title,content) {
	$("body").append("<div class='layer'></div><div class='popup'><h2>"+title+"</h2><p>"+content+"</p></div>");
	$('.popup').css('margin-top',(0 - $('.popup').outerHeight() / 2));
	$('.popup').css('margin-left',(0 - $('.popup').outerWidth() / 2));
	if ($('.popup input').length) {
		$('.popup input').select();
	}
	$('.layer').click(function() {
		$('.popup').remove();
		$(this).remove();
	});
	translate();
}

function loadingGif(id) {
	var tmp = loading.indexOf(id);
	if (tmp>=0) {
		loading.splice(tmp, 1);
	} else {
		loading.push(id);
	}
	if (loading.length>0) {
		if($('body .loading').length) {}
		else {
			$('body').append("<div class='loading'></div>");
		}
	} else {
		$('body .loading').remove();
	}
}

function generateCards(type) {
	var checked = "";
	// Si chargement de la page
	if(type === undefined) {
		var type = 'arene';
		var checked = "checked='checked'";
	}
	// Sauvegarde des cartes coch&eacute;s
	var listeCoche = [];
	$('.filter .cards input:checked').each(function() {
		listeCoche.push($(this).attr('id'));
	});
	// Vidange des cartes
	$('.filter .cards .liste').remove();
	// Generation des listes de carte
	switch(type) {
		case "arene": 
			for(i=0; i < arene.length; i++) { $('.filter .cards').append("<div class='liste liste_"+type+arene[i]+"'><h3>Arena "+arene[i]+"</h3></div>"); } break;
		case "elixir": 
			for(i=0; i < cout.length; i++) { $('.filter .cards').append("<div class='liste liste_"+type+cout[i]+"'><h3>"+cout[i]+" Elixir</h3></div>"); } break;
		case "rarete": 
			for(i=0; i < rarete.length; i++) { $('.filter .cards').append("<div class='liste liste_"+type+rarete[i]+"'><h3>"+rarete[i+1]+"</h3></div>"); i++; } break;
		case "categorie": 
			for(i=0; i < categorie.length; i++) { $('.filter .cards').append("<div class='liste liste_"+type+categorie[i]+"'><h3>"+categorie[i+1]+"</h3></div>"); i++; } break;
	}
	// Generation des cartes
	for(var i in cards) {
		switch(type) {
			case "arene": var varValue = cards[i].arene; break;
			case "elixir": var varValue = cards[i].cout; break;
			case "rarete": var varValue = cards[i].rarete; break;
			case "categorie": var varValue = cards[i].categorie; break;
		}
		$('.filter .cards .liste_'+type+varValue).append("<input type='checkbox' "+checked+" id='card"+i+"' data-cout='"+cards[i].cout+"' class='arene"+cards[i].arene+" categorie"+cards[i].categorie+" cout"+cards[i].cout+" rarete"+cards[i].rarete+"'><label for='card"+i+"'><img title=\""+cards[i].name+"\" src='img/"+i+".png'></label>");
	}
	// Remise en place des cases coch&eacute;s
	for(i=0; i < listeCoche.length; i++) {
		$('.filter .cards #'+listeCoche[i]).prop('checked', true);
	}
	translate();
}

function generateArenes() {
	for(i=0; i < arene.length; i++) {
		$('.filter div.arene').append("<input type='checkbox' checked='checked' id='arene"+arene[i]+"'><label for='arene"+arene[i]+"'>Arena "+arene[i]+"</label><br />");
	}
}

function generateCategories() {
	for(i=0; i < categorie.length; i++) {
		$('.filter div.categorie').append("<input type='checkbox' checked='checked' id='categorie"+categorie[i]+"'><label for='categorie"+categorie[i]+"'>"+categorie[i+1]+"</label><br />");
		i++;
	}
}

function generateCouts() {
	for(i=0; i < cout.length; i++) {
		$('.filter div.cout').append("<input type='checkbox' checked='checked' id='cout"+cout[i]+"'><label for='cout"+cout[i]+"'>"+cout[i]+" Elixir</label><br />");
	}
}

function generateRaretes() {
	for(i=0; i < rarete.length; i++) {
		$('.filter div.rarete').append("<input type='checkbox' checked='checked' id='rarete"+rarete[i]+"'><label for='rarete"+rarete[i]+"'>"+rarete[i+1]+"</label><br />");
		i++;
	}
}

function generateTemplates() {
	for(var i in templates) {
		$('.filter div.templates .registered').append("<button id='template"+i+"'>"+templates[i].name+"</button>");
	}
}

function generateChoix() {
	for(i=0; i < categorie.length; i++) {
		$('.filter div.templates .choix').append("<div><h3>"+categorie[i+1]+"</h3><select id='choix"+categorie[i]+"'></select><span class='type hide' id='choix"+categorie[i]+"Type'></span></div>");
		// Nbr de carte possible
		$('.filter div.templates .choix #choix'+categorie[i]).append("<option value='null'>-</option>");
		for(j=0;j<9;j++) {
			$('.filter div.templates .choix #choix'+categorie[i]).append("<option value='"+j+"'>"+j+"</option>");
		}
		// Type de choix
		$('.filter div.templates .choix #choix'+categorie[i]+'Type').append("<input type='checkbox' checked='checked' value='min'> Minimum");
		// Trigger sur choix
		$('.filter div.templates .choix #choix'+categorie[i]).change(function() {
			if ($(this).val() != 'null') {
				$(this).parent().find('.type').removeClass('hide');
			} else {
				$(this).parent().find('.type').addClass('hide');
			}
		});
		i++;
	}
	// Creation du range
	$('.filter div.templates .choix').append("<div id='range'><h3>Cost</h3><div class='max'>7</div><div class='min'>0</div><div id='slider'></div></div>");
	$('.filter div.templates .choix #range #slider').slider({
		range: true,
		min:0,
		max:7,
		values:[0,7],
		step:0.1,
		slide: function( event, ui ) {
			$('.filter div.templates .choix #range .min').html(ui.values[0]);
			$('.filter div.templates .choix #range .max').html(ui.values[1]);
		}
	});
	// Creation de la liste des cartes pour choix
	$('.filter div.templates .choix').append("<div><h3>Wanted cards</h3><select id='cards' multiple size=5></select></div><div class='chosenCards'></div>");
	for(var i in cards) {
		$('.filter div.templates .choix #cards').append("<option value='"+i+"'>"+cards[i].name+"</option>");
	}
	// Filtre du select pour les remettres par ordre alphabetique
	var cardsElems = $('.filter div.templates .choix #cards').find('option');
	cardsElems.sort(function(a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
	$('.filter div.templates .choix #cards').html('').append(cardsElems);
	// Creation des vignettes des cartes choisies
	$('.filter div.templates .choix #cards').change(function() {
		$('.filter div.templates .choix .chosenCards').html('');
		var chosenCards = $('.filter div.templates .choix #cards').val();
		for(var i in chosenCards) {
			$('.filter div.templates .choix .chosenCards').append("<img title=\""+cards[chosenCards[i]].name+"\" src='img/"+chosenCards[i]+".png'>");
		}
	});
	$('.filter div.templates .choix').append('<button id="template0">Reset</button>');
}

function updateCards(elem) {
	if ($(elem).prop('checked')) {
		$('.cards .'+$(elem).attr('id')).prop('checked', true);
	} else {
		$('.cards .'+$(elem).attr('id')).prop('checked', false);
	}
	$('.filter h1').html('Choose your cards : ' + $('.cards .liste input:checked').length + ' cards');
	translate();
}

function updateChoix(id) {
	var template = templates[id.substr(8)];
	if (template.sort !== undefined) { 
		$('.filter div.templates .choix #choixS').val(template.sort); 
		$('.filter div.templates .choix #choixSType').removeClass('hide');
	} else { 
		$('.filter div.templates .choix #choixS').val('null'); 
		$('.filter div.templates .choix #choixSType').addClass('hide');
	}
	if (template.batiment !== undefined) { 
		$('.filter div.templates .choix #choixB').val(template.batiment);
		$('.filter div.templates .choix #choixBType').removeClass('hide');
	} else { 
		$('.filter div.templates .choix #choixB').val('null'); 
		$('.filter div.templates .choix #choixBType').addClass('hide');
	}
	if (template.sol !== undefined) { 
		$('.filter div.templates .choix #choixG').val(template.sol);
		$('.filter div.templates .choix #choixGType').removeClass('hide');
	} else { 
		$('.filter div.templates .choix #choixG').val('null'); 
		$('.filter div.templates .choix #choixGType').addClass('hide');
	}
	if (template.air !== undefined) { 
		$('.filter div.templates .choix #choixF').val(template.air);
		$('.filter div.templates .choix #choixFType').removeClass('hide');
	} else { 
		$('.filter div.templates .choix #choixF').val('null'); 
		$('.filter div.templates .choix #choixFType').addClass('hide');
	}
	if ((template.coutMin !== undefined) && (template.coutMax !== undefined)) { 
		$('.filter div.templates .choix #range #slider').slider('values',0,template.coutMin);
		$('.filter div.templates .choix #range #slider').slider('values',1,template.coutMax);
		$('.filter div.templates .choix #range .min').html(template.coutMin);
		$('.filter div.templates .choix #range .max').html(template.coutMax);
	} else {		
		if (template.coutMin !== undefined) { 
			$('.filter div.templates .choix #range #slider').slider('values',0,template.coutMin);
			$('.filter div.templates .choix #range .min').html(template.coutMin);
		} else {
			$('.filter div.templates .choix #range #slider').slider('values',0,0);
			$('.filter div.templates .choix #range .min').html(0);
		}
		if (template.coutMax !== undefined) { 
			$('.filter div.templates .choix #range #slider').slider('values',1,template.coutMax);
			$('.filter div.templates .choix #range .max').html(template.coutMax);
		} else {
			$('.filter div.templates .choix #range #slider').slider('values',1,7);
			$('.filter div.templates .choix #range .max').html(7);
		}
	}
	if (template.force !== undefined) {
		if (template.force.search(';')>=0) {
			var tmp = template.force.split(';');
			$('.filter div.templates .choix #cards').val(tmp);
		} else {
			$('.filter div.templates .choix #cards').val(template.force);
		}
	} else {
		$('.filter div.templates .choix #cards').val('');
	}
	// Refresh des vignettes des cartes choisis
	$('.filter div.templates .choix .chosenCards').html('');
	var chosenCards = $('.filter div.templates .choix #cards').val();
	for(var i in chosenCards) {
		$('.filter div.templates .choix .chosenCards').append("<img title=\""+cards[chosenCards[i]].name+"\" src='img/"+chosenCards[i]+".png'>");
	}
	translate();
}

function choixFromUrl() {
	var hash = window.location.hash.substr(1);
	if (hash != '') {
		var tmp = hash.split('_');
		$('.filter div.templates .choix #cards').val(tmp);
	}
}

function share(elem) {
	var tmp = [];
	$(elem).find('img').each(function() {
		tmp.push($(this).attr('data-id'));
	});
	var url = window.location+"#"+tmp.join('_');
	showPopup("Share deck","<input type='text' value='"+url+"'>");
}

function createGenerator(nbr) {
	if(nbr === undefined) { nbr = 1; }
	if (nbr > 3) { alert('3 decks max !'); }
	else {
		$('.generator .generated').remove();
		for(i=0;i<nbr;i++) {
			$('.generator').append("<div class='generated'><div class='info'><b>Average cost :</b> <span></span></div></div>");
		}
	}
	loadingGif('generateTemplateDeck');
	generateTemplateDeck();
}

function generateRandomDeck() {
	loadingGif('generateRandomDeck');
	$('.generator .generated').each(function() {
		var listeComplete = [];
		var coutTotal = 0;
		var nbrCartes = 0;
		$('.cards input:checked').each(function() {
			listeComplete.push($(this).attr('id'));
		});
		if (listeComplete.length < 8) { alert(translate('Not enough cards to create a deck !')); }
		else {
			$(this).find('div.img').remove();
			$(this).find('.notfound').remove();
			for(i=0;i<8;i++) {
				var rand = Math.floor(Math.random() * listeComplete.length);
				var detail = cards[listeComplete[rand].substr(4)];
				$(this).prepend("<img title=\""+detail.name+"\" class='rarete"+detail.rarete+"' src='img/"+listeComplete[rand].substr(4)+".png'>");
				if (detail.cout > 0) { nbrCartes++; }
				coutTotal = parseInt(coutTotal) + detail.cout;
				listeComplete.splice(rand, 1);
			}
			$(this).find('.info b').html('Average cost :');
			$(this).find('.info span').html(parseFloat(coutTotal / nbrCartes).toFixed(1));
		}
	});
	loadingGif('generateRandomDeck');
}

function generateTemplateDeck() {
	$('.generator .generated').each(function() {
		var choixForce = $('.filter div.templates .choix #cards').val();
		var listeComplete = [];
		var liste = [];
		var listeSort = [];
		var listeBatiment = [];
		var listeSol = [];
		var listeAir = [];
		var coutTotal = 100;
		var coutMin = 0;
		var coutMax = 10;
		var nbrEssai = 0;
		var nbrEssaiMax = 9999;
		// Recup des cartes selectionnées
		$('.cards input:checked').each(function() {
			listeComplete.push($(this).attr('id').substr(4));
		});
		if (listeComplete.length < 8) { alert(translate('Not enough cards to create a deck !')); return false; }
		// Carte forcés
		if (choixForce.length>0) {
			for (var i in choixForce) {
				liste.push(choixForce[i]);
				for(var j in listeComplete) {
					if (listeComplete[j] == choixForce[i]) {
						listeComplete.splice(j,1);
					}
				}
			}
		}
		// Decoupage des cartes en categories
		for (var i in listeComplete) {
			if (cards[listeComplete[i]].categorie == 'S') { listeSort.push(listeComplete[i]); }
			if (cards[listeComplete[i]].categorie == 'B') { listeBatiment.push(listeComplete[i]); }
			if (cards[listeComplete[i]].categorie == 'G') { listeSol.push(listeComplete[i]); }
			if (cards[listeComplete[i]].categorie == 'F') { listeAir.push(listeComplete[i]); }
		}
		// Recuperation des coutMin et coutMax
		var couts = $('.filter div.templates .choix #range #slider').slider("option", "values");
		coutMin = couts[0];
		coutMax = couts[1];
		// Génération de la liste en fonction du cout
		while ((coutTotal < coutMin) || (coutTotal > coutMax)) {
			// Si trop d'essai, STOP, c'est surement impossible
			if(nbrEssai>nbrEssaiMax) { break; }
			// Génération de listes clone
			var tmpListe = liste.slice(0);
			var tmpListeSort = listeSort.slice(0);
			var tmpListeBatiment = listeBatiment.slice(0);
			var tmpListeSol = listeSol.slice(0);
			var tmpListeAir = listeAir.slice(0);
			var tmpRestants = [];
			var nbrCartes = 0;
			var coutTotal = 0;
			// Sort
			if ($('.filter div.templates .choix #choixS').val()!='null') {
				for(i=0;i<$('.filter div.templates .choix #choixS').val();i++) {
					var rand = Math.floor(Math.random() * tmpListeSort.length);
					tmpListe.push(tmpListeSort[rand]);
					tmpListeSort.splice(rand,1);
				}
				if (!$('.filter div.templates .choix #choixSType input').prop('checked')) { tmpListeSort = []; }
			}
			// Batiment
			if ($('.filter div.templates .choix #choixB').val()!='null') {
				for(i=0;i<$('.filter div.templates .choix #choixB').val();i++) {
					var rand = Math.floor(Math.random() * tmpListeBatiment.length);
					tmpListe.push(tmpListeBatiment[rand]);
					tmpListeBatiment.splice(rand,1);
				}
				if (!$('.filter div.templates .choix #choixBType input').prop('checked')) { tmpListeBatiment = []; }
			}
			// Sol
			if ($('.filter div.templates .choix #choixG').val()!='null') {
				for(i=0;i<$('.filter div.templates .choix #choixG').val();i++) {
					var rand = Math.floor(Math.random() * tmpListeSol.length);
					tmpListe.push(tmpListeSol[rand]);
					tmpListeSol.splice(rand,1);
				}
				if (!$('.filter div.templates .choix #choixGType input').prop('checked')) { tmpListeSol = []; }
			}
			// Air
			if ($('.filter div.templates .choix #choixF').val()!='null') {
				for(i=0;i<$('.filter div.templates .choix #choixF').val();i++) {
					var rand = Math.floor(Math.random() * tmpListeAir.length);
					tmpListe.push(tmpListeAir[rand]);
					tmpListeAir.splice(rand,1);
				}
				if (!$('.filter div.templates .choix #choixFType input').prop('checked')) { tmpListeAir = []; }
			}
			// Concatenation des cartes restantes
			tmpRestants = tmpListeSort.concat(tmpListeBatiment, tmpListeSol, tmpListeAir);
			// Génération aléatoire parmis les cartes qu'il reste
			for(i=tmpListe.length; i<8 ;i++) {
				var rand = Math.floor(Math.random() * tmpRestants.length);
				tmpListe.push(tmpRestants[rand]);
				tmpRestants.splice(rand,1);
			}
			// Calcul du cout de la liste temporaire
			for(var i in tmpListe) {
				if (cards[tmpListe[i]].cout > 0) { nbrCartes++; }
				coutTotal = parseInt(coutTotal) + cards[tmpListe[i]].cout;
			}
			coutTotal = parseFloat(coutTotal / nbrCartes).toFixed(1);
			nbrEssai++;
		}
		if (nbrEssai>nbrEssaiMax) {
			// Si trop d'essai, on affiche un message d'erreur
			$(this).find('div.img').remove();
			$(this).find('.notfound').remove();
			$(this).prepend("<div class='notfound'>After "+(nbrEssaiMax+1)+" random attempts, we couldn't make a deck that fits your waitings. You should try again !</div>");
			$(this).find('.info b').html('No result');
			$(this).find('.info span').html('');
		} else {
			// Liste généré OK, affichage
			liste = tmpListe;
			var coutTotal = 0;
			var nbrCartes = 0;
			$(this).find('div.img').remove();
			$(this).find('.notfound').remove();
			for(var i in liste) {
				var detail = cards[liste[i]];
				$(this).prepend("<div class='img'><img title=\""+detail.name+"\" class='rarete"+detail.rarete+"' data-id='"+liste[i]+"' src='img/"+liste[i]+".png'></div>");
				if (detail.cout > 0) { nbrCartes++; }
				coutTotal = parseInt(coutTotal) + detail.cout;
			}
			$(this).find('.info b').html('Average cost : ');
			$(this).find('.info span').html(parseFloat(coutTotal / nbrCartes).toFixed(1)+" <a>\u2197</a>");
			// Button de partage
			$(this).find('.info span a').click(function() {
				share($(this).parent().parent().parent());
			});
		}
	});
	translate();
	loadingGif('generateTemplateDeck');
}


$(document).ready(function (e) {
	loadingGif('begin');
	generateArenes();
	generateCategories();
	generateCouts();
	generateRaretes();
	generateChoix();
	generateTemplates();
	generateCards();
	choixFromUrl();
	createGenerator();
	translate();
	// Button de génération
	$('.generate button').click(function() {
		loadingGif('generateTemplateDeck');
		$(this).blur();
		generateTemplateDeck();
	});
	$('.filter .templates button').click(function() {
		$(this).blur();
		updateChoix($(this).attr('id'));
	});
	// Filtres
	$('.showArene').click(function() { $(this).toggleClass('actif'); $('.arene').toggle(); });
	$('.showRarete').click(function() { $(this).toggleClass('actif'); $('.rarete').toggle(); });
	$('.showCategorie').click(function() { $(this).toggleClass('actif'); $('.categorie').toggle(); });
	$('.showCout').click(function() { $(this).toggleClass('actif'); $('.cout').toggle(); });
	$('.filter .nbGenerated button').click(function() {
		$(this).blur();
		$('.filter .nbGenerated button').removeClass('selected');
		createGenerator($(this).attr('id').substr(8));
		$(this).addClass('selected');
	});
	$('.filter .cardsOrder button').click(function() {
		$(this).blur();
		$('.filter .cardsOrder button').removeClass('selected');
		generateCards($(this).attr('id'));
		$(this).addClass('selected');
	});
	$('.filter input').change(function() {
		$(this).blur();
		updateCards($(this));
	});
	loadingGif('begin');
});