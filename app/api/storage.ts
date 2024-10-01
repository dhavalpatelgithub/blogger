export class LangStorage {

    static lang = 'en';

    static setLang(lang: string) {
        this.lang = lang;
        localStorage.setItem('lang', lang);
    }

    static getLang(): string {
        if (this.lang) {
            return this.lang;
        }
        const lang = localStorage.getItem('lang');
        this.lang = lang ? lang : 'en';
        return this.lang;
    }
}