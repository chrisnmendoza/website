import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudkipComponent } from './mudkip.component';

describe('MudkipComponent', () => {
  let component: MudkipComponent;
  let fixture: ComponentFixture<MudkipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MudkipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MudkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
