import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingComponent } from './typing.component';
import { MatCardModule } from '@angular/material/card';

describe('TypingComponent', () => {
  let component: TypingComponent;
  let fixture: ComponentFixture<TypingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      declarations: [ TypingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should give an example of testing a class', () => {
    const eneteredText = 'q';
    const randomLetter = '';

    // get result from function or property
    // const resulTotTest = component.yourfunctionOrProperty(eneteredText, randomLetter );
    // expect(resulTotTest).toBe('here should go the name of the expected class.... ');
  });
});
