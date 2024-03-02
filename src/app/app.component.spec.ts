import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the '2023 Sales Report' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('2023 Sales Report');
  });

  it(`should have some data to show on screen`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.data?.length).toBeGreaterThan(0)
  });

  it(`should have at least 3 categories`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.data?.length).toBeGreaterThanOrEqual(3)
  });

  it(`should have at least 3 products for each category`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let test = true;
    for (let i = 0; i < app.data?.length; i++) {
      if (app.data[i]?.products?.length < 3) {
        test = false;
        break;
      }
    }
    expect(test).toBeTrue()
  });
});