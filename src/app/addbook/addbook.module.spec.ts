import { AddbookModule } from './addbook.module';

describe('AddbookModule', () => {
  let addbookModule: AddbookModule;

  beforeEach(() => {
    addbookModule = new AddbookModule();
  });

  it('should create an instance', () => {
    expect(addbookModule).toBeTruthy();
  });
});
