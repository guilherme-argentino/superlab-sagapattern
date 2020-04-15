import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IJobHistory } from 'app/shared/model/job-history.model';
import { JobHistoryService } from './job-history.service';
import { JobHistoryDeleteDialogComponent } from './job-history-delete-dialog.component';

@Component({
  selector: 'jhi-job-history',
  templateUrl: './job-history.component.html'
})
export class JobHistoryComponent implements OnInit, OnDestroy {
  jobHistories?: IJobHistory[];
  eventSubscriber?: Subscription;

  constructor(protected jobHistoryService: JobHistoryService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.jobHistoryService.query().subscribe((res: HttpResponse<IJobHistory[]>) => (this.jobHistories = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInJobHistories();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IJobHistory): string {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInJobHistories(): void {
    this.eventSubscriber = this.eventManager.subscribe('jobHistoryListModification', () => this.loadAll());
  }

  delete(jobHistory: IJobHistory): void {
    const modalRef = this.modalService.open(JobHistoryDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.jobHistory = jobHistory;
  }
}
