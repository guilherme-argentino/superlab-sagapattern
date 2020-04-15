import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SuperLabSagaPatternTestModule } from '../../../test.module';
import { CountryDetailComponent } from 'app/entities/country/country-detail.component';
import { Country } from 'app/shared/model/country.model';

describe('Component Tests', () => {
  describe('Country Management Detail Component', () => {
    let comp: CountryDetailComponent;
    let fixture: ComponentFixture<CountryDetailComponent>;
    const route = ({ data: of({ country: new Country('9fec3727-3421-4967-b213-ba36557ca194') }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SuperLabSagaPatternTestModule],
        declarations: [CountryDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(CountryDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CountryDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load country on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.country).toEqual(jasmine.objectContaining({ id: '9fec3727-3421-4967-b213-ba36557ca194' }));
      });
    });
  });
});
