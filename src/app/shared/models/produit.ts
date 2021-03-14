export class Produit {
    id?:string;
    nom?:string;
    image?:string;
    prix?:number;
    description?:string;
    categID:String;
    pub:String;
 constructor(args:Produit){
 this.description=args.description;
 this.id=args.id;
 this.image=args.image;
 this.nom=args.nom;
 this.prix=args.prix;
 this.categID=args.categID;
 this.pub=args.pub;
 }
}
