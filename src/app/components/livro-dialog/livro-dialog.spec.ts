import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDialog } from './livro-dialog';

describe('LivroDialog', () => {
  let component: LivroDialog;
  let fixture: ComponentFixture<LivroDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
