import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShippingFormPage } from './shipping-form.page';

describe('ShippingFormPage', () => {
  let component: ShippingFormPage;
  let fixture: ComponentFixture<ShippingFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShippingFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
