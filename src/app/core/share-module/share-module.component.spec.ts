import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareModuleComponent } from './share-module.component';

describe('ShareModuleComponent', () => {
  let component: ShareModuleComponent;
  let fixture: ComponentFixture<ShareModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareModuleComponent]
    });
    fixture = TestBed.createComponent(ShareModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
