import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnChanges {

  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = "Nothing found!";
  @Input() resetLinkText: string = "Reset";
  @Input() resetLinkRoute: string = "/";

  @Output() resetClicked = new EventEmitter<void>();
  @Output() logViewed = new EventEmitter<void>();
  @Output() navigateManually = new EventEmitter<void>();

  onResetClick() {
    this.resetClicked.emit();
  }

  onManualNavigate() {
    this.navigateManually.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible']?.currentValue === true) {
      this.logViewed.emit();
    }
  }
}