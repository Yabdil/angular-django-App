import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateElementComponent } from './create-element.component';

describe('CreateElementComponent', () => {
  let component: CreateElementComponent;
  let fixture: ComponentFixture<CreateElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the two ways bindings', () => { 
    let nativeItem = fixture.nativeElement
    let inputElement: HTMLInputElement = nativeItem.querySelector('input')
    // Testing the two ways binding
    expect(inputElement.value).toBe(component.newItem)
    // here we will simulate a input action 
    inputElement.value = 'Testing the value'
    expect(component.newItem).toBe(inputElement.value)
  })
});
