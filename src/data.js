
class cvDetails {
    constructor(title, entity, date, details) {
        this.date = date;
        this.entity = entity;
        this.title = title;
        this.details = details;
    }
}
const wevan = "WeVan (location de van aménagés et minibus)"
const charles = new cvDetails("Développeur web",
    "Charles.co (en stage)",
    "(mai 2021 - dec 2021)",
    <div>Développement web font end. Création de landing page. Optimisation SEO Utilisation de REACT Gastby JS, Typscript, Sass.</div>
)
const redacteur = new cvDetails("Rédacteur Web SEO",
    "(en Freelance)",
    "(fev 2019 – dec 2020)",
    <div>Rédaction de contenu optimisé pour le référencement pour différents sites et blogs (CSE-guide.fr, Charles.co, Mayence.com, textbroker.fr, redacteur.com etc. ) sur des sujets variés (médecine, voyage, droit social, marketing, serrurerie).</div>
)
const wevanHead = new cvDetails(
    "Directeur d'Agence",
    wevan,
    "(juill 2017 – dec 2019)",
    <div>En charge de la gestion d’une agence de location de vans.
        * Management et recrutement (équipe de 7 personnes);
        * Suivi comptable et financier et orientation stratégique;
        * Yields management;
        * Supervision de la gestion logistique, de la relation clientéle et fournisseur ;
        Résultats : augmentation de 30% du CA,</div>
)
const wevanManager = new cvDetails(
    "Sales manager ",
    wevan,
    "(avril 2016 – juill 2017)",
    <div>Gestion et organisation de la relation client; Management et recrutement d’une équipe de 3 personnes; Propesction et fidélisation des clients grands comptes ; Supervision de la vente des véhicules en fin de cycle;</div>
)
const wevanSales = new cvDetails(
    "Sales",
    wevan,
    "(août 2015 – avril 2016)",
    <div>Gestion de la relation client; Gestion des litiges;
        Ventes des véhicules en fin de cycle;</div>
)

const eventMission = new cvDetails(
    "Missions en évènementiel",
    "",
    "(juin 2011 – juillet 2015)",
    <div>Entre 2011 et 2016 j’ai effectué des missions évènementielles.
        Ces missions portent sur l’information visiteur ou la promotion commerciale
        et impliquent régulièrement le management d’une équipe.</div>

)

export const proArray = [charles, redacteur, wevanHead, wevanManager, wevanSales, eventMission]

const wild = new cvDetails(
    "Développeur web JS React & Node",
    "Wild Code School",
    "nov 2020 - avril 2021",
    <div>Formation intensive de 5 mois au développement front end et back end.
        Front end : HTML / CSS, Javascript,  React; Back end : Node.js, MySQL; </div>
)
const M1 = new cvDetails(
    "M1 Droit des affaires",
    "Faco Paris",
    "juin 2011",
    ""
)
const licence = new cvDetails(
    "Licence de Droit",
    "Faco Paris",
    "juin 2010",
    ""
)

export const educationArray = [wild, M1, licence]

export const globalDataObject = {
    jerome: {
        photo: "/static/media/jerome-robichez.2326184d77330b99fc60.png",
        leftPart: {
            infos: {
                name: "Jérôme Robichez",
                birthDate: "09 juillet 1987",
                residence: "Bordeaux",
                phone: "06 xx xx xx xx",
                mail: "jerxxxxxxxxx@xxxl.com"
            },
            languages: ["Anglais : courant", "Espagnol :  moyen"],

                
            
        },
        jeromePro: [
            {
                title: "Développeur web",
                entity: "Charles.co (en stage)",
                date: "(mai 2021 - dec 2021)",
                details: <div>Développement web font end. Création de landing page. Optimisation SEO Utilisation de REACT Gastby JS, Typscript, Sass.</div>
                ,
            },
            {
                title: "Rédacteur Web SEO",
                entity: "(en Freelance)",
                date: "(fev 2019 – dec 2020)",
                details: <div>Rédaction de contenu optimisé pour le référencement pour différents sites et blogs (CSE-guide.fr, Charles.co, Mayence.com, textbroker.fr, redacteur.com etc. ) sur des sujets variés (médecine, voyage, droit social, marketing, serrurerie).</div>
                ,
            },
            {
                title: "Directeur d'Agence",
                entity: wevan,
                date: "(juill 2017 – dec 2019)",
                details: <div>En charge de la gestion d’une agence de location de vans.
                    * Management et recrutement (équipe de 7 personnes);
                    * Suivi comptable et financier et orientation stratégique;
                    * Yields management;
                    * Supervision de la gestion logistique, de la relation clientéle et fournisseur ;
                    Résultats : augmentation de 30% du CA,</div>,
            },
            {
                title: "Sales manager",
                entity: wevan,
                date: "(avril 2016 – juill 2017)",
                details: <div>Gestion et organisation de la relation client; Management et recrutement d’une équipe de 3 personnes; Propesction et fidélisation des clients grands comptes ; Supervision de la vente des véhicules en fin de cycle;</div>
                ,
            },
            {
                title: "Sales",
                entity: wevan,
                date: "(août 2015 – avril 2016)",
                details: <div>Gestion de la relation client; Gestion des litiges;
                    Ventes des véhicules en fin de cycle;</div>,
            },
            {
                title: "Missions en évènementiel",
                entity: "",
                date: "(juin 2011 – juillet 2015)",
                details: <div>Entre 2011 et 2016 j’ai effectué des missions évènementielles.
                    Ces missions portent sur l’information visiteur ou la promotion commerciale
                    et impliquent régulièrement le management d’une équipe.</div>,
            },
        ],
        jeromeEducation: [
            {
                title: "Développeur web JS React & Node",
                entity: "Wild Code Schoo",
                date: "nov 2020 - avril 2021",
                details: <div>Formation intensive de 5 mois au développement front end et back end.
                    Front end : HTML / CSS, Javascript,  React; Back end : Node.js, MySQL; </div>,
            },
            {
                title: "M1 Droit des affaires",
                entity: "Faco Paris",
                date: "juin 2011",
                details: "",
            },
            {
                title: "Licence de Droit",
                entity: "Faco Paris",
                date: "juin 2010",
                details: "",
            },
        ]
    }
}
