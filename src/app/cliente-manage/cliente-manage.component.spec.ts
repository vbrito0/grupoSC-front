import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteManageComponent } from './cliente-manage.component';

describe('ClienteManageComponent', () => {
  let component: ClienteManageComponent;
  let fixture: ComponentFixture<ClienteManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
