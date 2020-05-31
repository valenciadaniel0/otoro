import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellFormPage } from './sell-form.page';

describe('SellFormPage', () => {
  let component: SellFormPage;
  let fixture: ComponentFixture<SellFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
