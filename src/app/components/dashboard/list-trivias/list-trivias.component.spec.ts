import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTriviasComponent } from './list-trivias.component';

describe('ListTriviasComponent', () => {
  let component: ListTriviasComponent;
  let fixture: ComponentFixture<ListTriviasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTriviasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTriviasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
