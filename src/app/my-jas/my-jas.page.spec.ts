import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyJasPage } from './my-jas.page';

describe('MyJasPage', () => {
  let component: MyJasPage;
  let fixture: ComponentFixture<MyJasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyJasPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyJasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
