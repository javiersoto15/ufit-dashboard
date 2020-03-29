import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UNutritionPage } from './unutrition.page';

describe('UNutritionPage', () => {
  let component: UNutritionPage;
  let fixture: ComponentFixture<UNutritionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UNutritionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UNutritionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
