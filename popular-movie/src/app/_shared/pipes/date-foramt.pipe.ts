import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name: 'dateForamt'
})
export class DateForamtPipe implements PipeTransform {

	transform(value: string, pretext: string): string {
		if (pretext && pretext === 'runtime') {
			let runTime: any = moment.utc(moment.duration(value, 'minutes').asMilliseconds()).format('H:m');
			runTime = runTime.split(':');
			runTime = `${runTime[0]} h ${runTime[1]} m`;
			return runTime;
		}
		return moment(value).format(pretext || 'LL');
	}

}
