import { DisplayProcessor, SpecReporter } from 'jasmine-spec-reporter';
import { AwesomeReport } from 'jasmine-awesome-report';

const jasmineReportConfig = {
  fullPath: 'reports',
  fileName: 'report',
  merge: true
};

export let reporter = () => {
  jasmine.getEnv().addReporter(AwesomeReport.getReport(jasmineReportConfig));
  jasmine.getEnv().addReporter(new SpecReporter({
    customProcessors: [DisplayProcessor],
  }));
};
