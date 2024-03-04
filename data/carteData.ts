import type { CarteInterface } from "~/interfaces/carte.interface";
import picture from '/../portfolio/public/projetBoutique.png';

export default [
    {
        id: 1,
        title: 'Projet 1',
        image: "https://i.ibb.co/h9zG84q/Capture-d-e-cran-2024-02-26-a-04-11-33.png",
        outils: 'Figma, React, JS, CSS',
        description: 'Ce projet était basé sur une entreprise fictive "Flink" vendant des prestations de site Web.'
    },
    {
        id: 2,
        title: 'Projet 2',
        image: "https://i.ibb.co/WknMRfP/projet-Boutique.png",
        outils: 'Figma, Dyma, SCSS, Vue3, TS',
        description: "J'ai réalisé ce site à l'aide de la plateforme Dyma afin d'apprendre le langage Vue."
    },
    {
        id: 3,
        title: 'Projet 3',
        image: 'https://i.ibb.co/CHxYywQ/landing-image-1-dr.png',
        outils: 'Figma, JS, HTML, SCSS',
        description: "Ce projet était mon premier portfolio que j'ai pu effectué ainsi vous pouvez l'evolution."
    },
] as CarteInterface[];