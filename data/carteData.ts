import type { CarteInterface } from "~/interfaces/carte.interface";

export default [
    {
        title: 'Projet 1',
        image: './../images/php.png',
        outils: 'Figma, React, JS, CSS',
        description: 'Ce projet était basé sur une entreprise fictive "Flink" vendant des prestations de site Web.'
    },
    {
        title: 'Projet 2',
        image: './../images/projetBoutique.png',
        outils: 'Figma, Dyma, SCSS, Vue3, TS',
        description: "J'ai réalisé ce site à l'aide de la plateforme Dyma afin d'apprendre le langage Vue."
    },
    {
        title: 'Projet 3',
        image: './../images/js.png',
        outils: 'Figma, JS, HTML, SCSS',
        description: "Ce projet était mon premier portfolio que j'ai pu effectué ainsi vous pouvez l'evolution."
    },
] as CarteInterface[];