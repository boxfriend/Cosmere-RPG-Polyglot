Hooks.once("polyglot.init", (LanguageProvider) => {
	class StormlightLanguageProvider extends LanguageProvider {
		defaultFont = "Tengwar";
		languages = {
			Alethi: {
			},
			Azish: {
			},
			Dawnchant: {
			},
			Herdazian: {
			},
			Iri: {
			},
			Kharbranthian: {
			},
			Singer: {
			},
			Natan: {
			},
			Reshi: {
			},
			Shin: {
			},
			Thaylen: {
			},
			Unkalaki: {
			},
			Veden: {
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