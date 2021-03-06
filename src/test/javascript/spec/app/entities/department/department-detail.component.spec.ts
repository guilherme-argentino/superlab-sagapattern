import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SuperLabSagaPatternTestModule } from '../../../test.module';
import { DepartmentDetailComponent } from 'app/entities/department/department-detail.component';
import { Department } from 'app/shared/model/department.model';

describe('Component Tests', () => {
  describe('Department Management Detail Component', () => {
    let comp: DepartmentDetailComponent;
    let fixture: ComponentFixture<DepartmentDetailComponent>;
    const route = ({ data: of({ department: new Department('9fec3727-3421-4967-b213-ba36557ca194') }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SuperLabSagaPatternTestModule],
        declarations: [DepartmentDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(DepartmentDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DepartmentDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load department on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.department).toEqual(jasmine.objectContaining({ id: '9fec3727-3421-4967-b213-ba36557ca194' }));
      });
    });
  });
});
