import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCoursePage } from './create-course.page';

describe('CreateCoursePage', () => {
  let component: CreateCoursePage;
  let fixture: ComponentFixture<CreateCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
