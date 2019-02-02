import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonHubComponent } from './button-hub.component';


describe('ButtonHubComponent', () => {
  let component: ButtonHubComponent;
  let fixture: ComponentFixture<ButtonHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
