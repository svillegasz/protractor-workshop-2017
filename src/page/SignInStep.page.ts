import { $, ElementFinder } from 'protractor';

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

  public async signIn(email, password): Promise<void> {
    await this.email.sendKeys(email);
    await this.password.sendKeys(password);
    return await this.submit.click();
  }
}
