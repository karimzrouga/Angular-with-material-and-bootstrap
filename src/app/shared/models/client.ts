export class Client {
    id?:string;
    nom?:string;
    password?:string;
    email?:string;
    avatar?:string;
    constructor(args:Client={}){
        this.nom=args.nom;
        this.id=args.id;
        this.avatar=args.avatar;
        this.email=args.email;

    }
}
