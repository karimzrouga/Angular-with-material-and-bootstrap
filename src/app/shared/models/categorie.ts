export class Categorie {
    id?:string;
    nom?:string;
    constructor(args:Categorie={}){
        this.nom=args.nom;
        this.id=args.id;

    }
}
