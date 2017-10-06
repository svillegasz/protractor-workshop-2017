import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get email(): ElementFinder {
    return $('#email');
  }

  private get password(): ElementFinder {
    return $('#passwd');
  }

  private get submit(): ElementFinder {
    return $('#SubmitLogin > span');
  }

  public signIn(email, pass): promise.Promise<void> {
    this.email.sendKeys(email);
    this.password.sendKeys(pass);
    return this.submit.click();
  }
}
