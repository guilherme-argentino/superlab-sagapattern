import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SuperLabSagaPatternTestModule } from '../../../test.module';
import { RegionDetailComponent } from 'app/entities/region/region-detail.component';
import { Region } from 'app/shared/model/region.model';

describe('Component Tests', () => {
  describe('Region Management Detail Component', () => {
    let comp: RegionDetailComponent;
    let fixture: ComponentFixture<RegionDetailComponent>;
    const route = ({ data: of({ region: new Region('9fec3727-3421-4967-b213-ba36557ca194') }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SuperLabSagaPatternTestModule],
        declarations: [RegionDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(RegionDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(RegionDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load region on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.region).toEqual(jasmine.objectContaining({ id: '9fec3727-3421-4967-b213-ba36557ca194' }));
      });
    });
  });
});
