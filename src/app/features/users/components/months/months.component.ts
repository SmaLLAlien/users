import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IMonth} from '../../models/month.model';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthsComponent {
  @Input() months: IMonth[];
  @Output() hoveredMonth: EventEmitter<string> = new EventEmitter<string>();

  onHover(month: string): void {
    this.hoveredMonth.emit(month);
  }

  setColor(month: IMonth): string {
    switch (month.usersQuantity) {
      case 0:
      case 1:
      case 2:
        return 'month--gray';
      case 3:
      case 4:
      case 5:
      case 6:
        return 'month--blue';
      case 7:
      case 8:
      case 9:
      case 10:
        return 'month--green';
      default:
        return 'month--red';
    }
  }
}
