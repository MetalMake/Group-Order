import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathematicsPage } from './mathematics.page';

describe('MathematicsPage', () => {
  let component: MathematicsPage;
  let fixture: ComponentFixture<MathematicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathematicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathematicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
