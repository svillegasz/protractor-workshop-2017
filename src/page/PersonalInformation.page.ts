import { $, $$, ElementFinder, ElementArrayFinder, promise } from 'protractor';

export class PersonalInformationPage {
  private get firstName(): ElementFinder {
    return $('input[name="firstname"]');
  }

  private get lastName(): ElementFinder {
    return $('input[name="lastname"]');
  }

  private get sex(): ElementArrayFinder {
    return $$('input[name="sex"]');
  }

  private get yearsOfExperience(): ElementArrayFinder {
    return $$('input[name="exp"]');
  }

  private get professions(): ElementArrayFinder {
    return $$('input[name="profession"]');
  }

  private get profilePicture(): ElementFinder {
    return $('#photo');
  }

  private get automationTools(): ElementArrayFinder {
    return $$('input[name="tool"]');
  }

  private get continent(): ElementFinder {
    return $('#continents');
  }

  private get seleniumCommands(): ElementFinder {
    return $('#selenium_commands');
  }

  private get submit(): ElementFinder {
    return $('#submit');
  }
}
