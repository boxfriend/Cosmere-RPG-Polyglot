Hooks.once("polyglot.init", (LanguageProvider) => {
	class StormlightLanguageProvider extends LanguageProvider {
		languages = {
			Alethi: {
				font: "Tengwar",
			},
			Azish: {
				font: "Tengwar",
			},
			Dawnchant: {
				font: "Tengwar",
			},
			Herdazian: {
				font: "Tengwar",
			},
			Iri: {
				font: "Tengwar",
			},
			Kharbranthian: {
				font: "Tengwar",
			},
			Singer: {
				font: "Tengwar",
			},
			Natan: {
				font: "Tengwar",
			},
			Reshi: {
				font: "Tengwar",
			},
			Shin: {
				font: "Tengwar",
			},
			Thaylen: {
				font: "Tengwar",
			},
			Unkalaki: {
				font: "Tengwar",
			},
			Veden: {
				font: "Tengwar",
			}
		}
		
		getUserLanguages(actor) {
			const known = new Set();
			const literate = new Set();
			
			const languages = actor.system.languages;
			if(!languages)
				return [known, literate];
			
			languages.forEach(lang => { known.add(lang); });
			
			return [known, literate];
		}
		
	};
	console.log("Registering Stormlight Archive languages to Polyglot");
	game.polyglot.api.registerSystem(StormlightLanguageProvider); 
});