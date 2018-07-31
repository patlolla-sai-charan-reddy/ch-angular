import { ChModule } from './ch.module';

describe('ChModule', () => {
  let chModule: ChModule;

  beforeEach(() => {
    chModule = new ChModule();
  });

  it('should create an instance', () => {
    expect(chModule).toBeTruthy();
  });
});
