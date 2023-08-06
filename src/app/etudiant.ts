export class Etudiant {
    matricule!: string;
    nom!: string;
    nomContactUrgence!: string;
    relationContactUrgence!: string;
    prenom!: string;
    sexe!: string;
    dateDeNaissance!: string;
    numeroDeTelephone!: number;
    numeroDeTelephoneUrgence!: number;
    numeroWhatsapp!: number;
    emailEtudiant!: string;
    classe!: string;
    poids!: number;
    taille!: number;
    groupeSanguin!: string;
    autres!: string;
    filiere!: string;
    niveau!: string;
    antecedantMedicaux!: number[]; // Attribut antecedantMedicaux, si nécessaire
}

