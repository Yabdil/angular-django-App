import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from 'src/app/models/item.model';
import { ElementComponent } from './element.component';

describe('ElementComponent', () => {
  let component: ElementComponent;
  let fixture: ComponentFixture<ElementComponent>;
  let item: Item = { 
    id: 1,
    description: '',
    isFinished: false,
    dateCreated: new Date(),
    createdBy: 1,    
  }
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementComponent);
    component = fixture.componentInstance;
    component.item = item
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
