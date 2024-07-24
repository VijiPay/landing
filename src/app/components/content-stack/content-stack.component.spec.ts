import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentStackComponent } from './content-stack.component';

describe('ContentStackComponent', () => {
  let component: ContentStackComponent;
  let fixture: ComponentFixture<ContentStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentStackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
