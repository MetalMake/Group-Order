import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinnishPage } from './finnish.page';

describe('FinnishPage', () => {
  let component: FinnishPage;
  let fixture: ComponentFixture<FinnishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinnishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinnishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
