import 'custom-event-polyfill/polyfill';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueI18n);

export default class Cookieconsent {
    constructor(options) {
        Vue.prototype.cookieconsent = Object.assign({
            styleType: 'push-down',
            showbar: true,
            cookieConsentTypes: ['marketing', 'statistics', 'preferences', 'essential'],
            autoConsent: [], // 'scroll', 'pageload'
            language: 'nl',
            messages: {
                en: {
                    cookiebar: {
                        description: 'We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. You consent to our cookies if you continue to use our website.',
                        accept: 'Allow cookies',
                        settings: 'Preferences',
                    },
                    cookiepopup: {
                        title: 'Cookie preferences',
                        on: 'On',
                        off: 'Off',
                        alwaysOn: 'Always on',
                        save: 'Save',
                        acceptAll: 'Allow all cookies',
                        tabs: {
                            why: 'Info',
                            essential: 'Essential cookies',
                            preferences: 'Preferences cookies',
                            statistics: 'Statistics cookies',
                            marketing: 'Marketing cookies',
                        },
                        content: {
                            why: 'Cookies are small text files that can be used by websites to make a user\'s experience more efficient. The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission. This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.',
                            essential: 'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
                            preferences: 'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.',
                            statistics: 'Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.',
                            marketing: 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
                        },
                    },
                },
                nl: {
                    cookiebar: {
                        description: 'We gebruiken cookies om content en advertenties te personaliseren, om functies voor social media te bieden en om ons websiteverkeer te analyseren. Ook delen we informatie over uw gebruik van onze site met onze partners voor social media, adverteren en analyse. Deze partners kunnen deze gegevens combineren met andere informatie die u aan ze heeft verstrekt of die ze hebben verzameld op basis van uw gebruik van hun services. U gaat akkoord met onze cookies als u onze website blijft gebruiken.',
                        accept: 'Cookies toestaan',
                        settings: 'Voorkeuren',
                    },
                    cookiepopup: {
                        title: 'Cookie voorkeuren',
                        on: 'Aan',
                        off: 'Uit',
                        alwaysOn: 'Altijd aan',
                        save: 'Opslaan',
                        acceptAll: 'Alle cookies toestaan',
                        tabs: {
                            why: 'Info',
                            essential: 'Noodzakelijke cookies',
                            preferences: 'Voorkeurs cookies',
                            statistics: 'Analytische cookies',
                            marketing: 'Marketing cookies',
                        },
                        content: {
                            why: 'Cookies zijn kleine tekstbestanden die door websites kunnen worden gebruikt om gebruikerservaringen efficiënter te maken.  Volgens de wet mogen wij cookies op je apparaat opslaan als ze strikt noodzakelijk zijn voor het gebruik van de site. Voor alle andere soorten cookies hebben we je toestemming nodig. Deze website maakt gebruik van verschillende soorten cookies. Sommige cookies worden geplaatst door diensten van derden die op onze pagina\'s worden weergegeven.',
                            essential: 'Noodzakelijke cookies helpen een website bruikbaarder te maken, door basisfuncties als paginanavigatie en toegang tot beveiligde gedeelten van de website mogelijk te maken. Zonder deze cookies kan de website niet naar behoren werken.',
                            preferences: 'Deze cookies worden gebruikt om de prestaties en functionaliteit van deze website te verbeteren. Deze cookies zijn niet essentieel om deze website te kunnen gebruiken. Echter kunnen bepaalde onderdelen op deze website zonder deze cookies niet meer optimaal functioneren.',
                            statistics: 'Deze cookies verzamelen informatie die wordt gebruikt om ons te helpen begrijpen hoe onze website worden gebruikt of hoe effectief onze marketingcampagnes zijn. Ook helpen deze cookies ons om deze website aan te passen om uw gebruikservaring te kunnen verbeteren',
                            marketing: 'Marketing cookies worden gebruikt om bezoekers te volgen wanneer ze verschillende websites bezoeken. Hun doel is advertenties weergeven die zijn toegesneden op en relevant zijn voor de individuele gebruiker. Deze advertenties worden zo waardevoller voor uitgevers en externe adverteerders.',
                        },
                    },
                },
            },
        }, options);

        const i18n = new VueI18n({
            locale: Vue.prototype.cookieconsent.language, // set locale
            messages: Vue.prototype.cookieconsent.messages, // set locale messages
        });

        new Vue({
            i18n,
            render: h => h(App),
        }).$mount('#cookieconsent');
    }
}
