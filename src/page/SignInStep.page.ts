import { $, ElementFinder, ExpectedConditions, browser} from 'protractor';

export class SignInStepPage {
 private until = ExpectedConditions;
 
 private get email(): ElementFinder {
   return $('#email');
 }

 private get password(): ElementFinder {
   return $('#passwd');
 }

 private get submit(): ElementFinder {
   return $('#SubmitLogin > span');
 }

 public async signIn(email, pass): Promise<void> {
   await browser.wait(this.until.presenceOf(this.email), 3000);
   await this.email.sendKeys(email);
   await browser.wait(this.until.presenceOf(this.password), 3000);
   await this.password.sendKeys(pass);
   await browser.wait(this.until.presenceOf(this.submit), 3000);
   return this.submit.click();
 }
}
