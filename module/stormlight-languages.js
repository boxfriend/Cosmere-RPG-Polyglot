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
		
		async getLanguages() {
			const langs = {};
			const languagesSetting = game.settings.get("polyglot", "Languages");
			for (let lang in this.languages) {
				langs[lang] = {
					label: this.languages[lang].label || lang,
					font: languagesSetting[lang]?.font || this.languages[lang]?.font || this.defaultFont,
					rng: languagesSetting[lang]?.rng ?? "default",
				};
			}
			this.languages = langs;
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