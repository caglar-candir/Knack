import {Page} from "@playwright/test";

export class LoginPage {

    email = '#email';
    password = '#password';
    submit = '#submit';
    adminEmail: 'input[id="email"]';
    adminPassword: 'input[id="password"]';
    adminSubmit : 'input[type="submit"]';
    
    
    readonly page : Page

    constructor(page){
    this.page = page;
    this.email ;
    this.password ;
    this.submit ;
    }

    async gotoLoginPage () {
        await this.page.goto('https://dashboard.knack.com/sign-in');
    }

    async login(email, password){
        await this.page.locator(this.email).fill (email);
        await this.page.locator(this.password).fill (password);
        await this.page.click(this.submit); 

    }

    async adminLogin (adminEmail, adminPassword){
        await this.page.locator(this.adminEmail).fill(adminEmail);
        await this.page.locator(this.adminPassword).fill(adminPassword);
        await this.page.click(this.adminSubmit); 
    }

}