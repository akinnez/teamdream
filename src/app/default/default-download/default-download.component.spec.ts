import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDownloadComponent } from './default-download.component';

describe('DefaultDownloadComponent', () => {
  let component: DefaultDownloadComponent;
  let fixture: ComponentFixture<DefaultDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
