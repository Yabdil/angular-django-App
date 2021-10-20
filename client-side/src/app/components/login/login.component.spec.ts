import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger an error and display the message in a span element', () => { 
    let msgError = 'Invalid username/password'
    component.errorMessage = msgError
    fixture.detectChanges() // will trigger a change 
    expect(component.isError()).toBeTrue()
    let spanElement = fixture.nativeElement
    expect(spanElement.querySelector('span').textContent).toBe(msgError) // expecting to have the error message in the span element
  })

  it('should not trigger an error', () => { 
    let msgError = ''
    component.errorMessage = msgError
    expect(component.isError()).toBe(false)
  })

});
