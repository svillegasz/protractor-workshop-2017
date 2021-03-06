import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private get email(): ElementFinder {
    return $('#email');
  }

  private get password(): ElementFinder {
    return $('#passwd');
  }

  private get submit(): ElementFinder {
    return $('#SubmitLogin');
  }

  public async signIn(email, password): Promise<void> {
    await this.email.sendKeys(email);
    await this.password.sendKeys(password);
    await this.submit.click();
  }
}
