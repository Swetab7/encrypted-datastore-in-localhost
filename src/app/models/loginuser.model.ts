export class Loginuser {
    id:number;
    first_name:string;
    last_name:string;
    email: any;
    


    constructor(id:number, first_name:string,
    			last_name:string,email:any){
    	this.id=id;
    	this.first_name=first_name
       	this.last_name=last_name;
    	this.email=email;
    }
   }