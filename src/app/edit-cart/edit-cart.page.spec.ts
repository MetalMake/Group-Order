import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCartPage } from './edit-cart.page';

describe('EditCartPage', () => {
  let component: EditCartPage;
  let fixture: ComponentFixture<EditCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
