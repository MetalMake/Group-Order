import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiologyPage } from './biology.page';

describe('BiologyPage', () => {
  let component: BiologyPage;
  let fixture: ComponentFixture<BiologyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiologyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
