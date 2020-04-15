import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SuperLabSagaPatternTestModule } from '../../../test.module';
import { EmployeeDetailComponent } from 'app/entities/employee/employee-detail.component';
import { Employee } from 'app/shared/model/employee.model';

describe('Component Tests', () => {
  describe('Employee Management Detail Component', () => {
    let comp: EmployeeDetailComponent;
    let fixture: ComponentFixture<EmployeeDetailComponent>;
    const route = ({ data: of({ employee: new Employee('9fec3727-3421-4967-b213-ba36557ca194') }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SuperLabSagaPatternTestModule],
        declarations: [EmployeeDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(EmployeeDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(EmployeeDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load employee on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.employee).toEqual(jasmine.objectContaining({ id: '9fec3727-3421-4967-b213-ba36557ca194' }));
      });
    });
  });
});
