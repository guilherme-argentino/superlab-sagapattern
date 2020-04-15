import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.SuperLabSagaPatternRegionModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.SuperLabSagaPatternCountryModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.SuperLabSagaPatternLocationModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.SuperLabSagaPatternDepartmentModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.SuperLabSagaPatternTaskModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.SuperLabSagaPatternEmployeeModule)
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.SuperLabSagaPatternJobModule)
      },
      {
        path: 'job-history',
        loadChildren: () => import('./job-history/job-history.module').then(m => m.SuperLabSagaPatternJobHistoryModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class SuperLabSagaPatternEntityModule {}
