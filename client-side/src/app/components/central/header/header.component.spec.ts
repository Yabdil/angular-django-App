import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { ItemService } from 'src/app/services/item/item.service';
import { UserService } from 'src/app/services/user/user.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      declarations: [ HeaderComponent ],
      providers: [
        { provide: UserService, useClass: FakeUserService},
        { provide: ItemService}
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    TestBed.inject(UserService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have render title on UI', () => {
    let title = fixture.nativeElement
    expect(title.querySelector('.app-name-container p').textContent).toBe('Element App')
  })

  it("Should have the connected user's fullName", () => { 
    fixture.detectChanges()
    expect(component.fullName).toBe('Abdillahi Abdi')
  })
});



class FakeUserService{ 
  firstName = 'Abdillahi'
  lastName = 'Abdi'

}