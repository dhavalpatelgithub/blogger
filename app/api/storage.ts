export class LangStorage {

    static lang = 'en';


    /**
     * The function `setLang` sets the language and stores it in the local storage.
     * @param {string} lang - The `lang` parameter is a string that represents the language code or
     * identifier that you want to set for the application. It is used to specify the language in which
     * the application should display content or messages.
     */
    static setLang(lang: string) {
        this.lang = lang;
        localStorage.setItem('lang', lang);
    }

    /**
     * The function `getLang` retrieves the language preference from local storage or defaults to 'en'.
     * @returns The `getLang` method returns the language stored in the `localStorage` if it exists,
     * otherwise it returns 'en' as the default language.
     */
    static getLang(): string {
        if (this.lang) {
            return this.lang;
        }
        const lang = localStorage.getItem('lang');
        this.lang = lang ? lang : 'en';
        return this.lang;
    }
}