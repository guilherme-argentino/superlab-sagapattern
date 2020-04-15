import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SuperLabSagaPatternTestModule } from '../../../test.module';
import { JobHistoryComponent } from 'app/entities/job-history/job-history.component';
import { JobHistoryService } from 'app/entities/job-history/job-history.service';
import { JobHistory } from 'app/shared/model/job-history.model';

describe('Component Tests', () => {
  describe('JobHistory Management Component', () => {
    let comp: JobHistoryComponent;
    let fixture: ComponentFixture<JobHistoryComponent>;
    let service: JobHistoryService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SuperLabSagaPatternTestModule],
        declarations: [JobHistoryComponent]
      })
        .overrideTemplate(JobHistoryComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(JobHistoryComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(JobHistoryService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new JobHistory('9fec3727-3421-4967-b213-ba36557ca194')],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.jobHistories && comp.jobHistories[0]).toEqual(jasmine.objectContaining({ id: '9fec3727-3421-4967-b213-ba36557ca194' }));
    });
  });
});
