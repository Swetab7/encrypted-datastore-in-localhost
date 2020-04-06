export class User {
    first_name: string;
    last_name: string;
    email:any;
    password: any;
    password_confirmation:any;

    constructor(fname:string,lname:string,email:any,password:any, cpassword:any){
    	
    	this.first_name=fname;
        this.last_name=lname;
    	this.email=email;
    	this.password=password;
    	this.password_confirmation=cpassword;
    }
   }