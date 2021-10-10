import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have render title on UI', () => {
    let title = fixture.nativeElement
    expect(title.querySelector('.app-name-container p').textContent).toBe('Element App')
  })
  it("Should have the connected user's name", () => { 
    let nameOfUser = fixture.nativeElement
    expect(nameOfUser.querySelector('.loged-item').textContent).toBe('Yanick Aman')
  })
});
