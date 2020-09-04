import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
	name: 'sanitizeHtmlPipe'
})
export class SanitizeHtmlPipePipe implements PipeTransform {

	constructor(private sanitizer: DomSanitizer) {}
	transform(url) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
