import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SuperLabSagaPatternTestModule } from '../../../test.module';
import { LocationDetailComponent } from 'app/entities/location/location-detail.component';
import { Location } from 'app/shared/model/location.model';

describe('Component Tests', () => {
  describe('Location Management Detail Component', () => {
    let comp: LocationDetailComponent;
    let fixture: ComponentFixture<LocationDetailComponent>;
    const route = ({ data: of({ location: new Location('9fec3727-3421-4967-b213-ba36557ca194') }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SuperLabSagaPatternTestModule],
        declarations: [LocationDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(LocationDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(LocationDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load location on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.location).toEqual(jasmine.objectContaining({ id: '9fec3727-3421-4967-b213-ba36557ca194' }));
      });
    });
  });
});
