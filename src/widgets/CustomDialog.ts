import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import Themed, { theme } from '@dojo/framework/widget-core/mixins/Themed';
import { w } from '@dojo/framework/widget-core/d';
import Dialog, { DialogProperties } from '@dojo/widgets/dialog';

import * as css from './styles/CustomDialog.m.css';

@theme(css)
export class CustomDialog extends Themed(WidgetBase)<DialogProperties> {
	protected render() {
		return w(Dialog, {
			enterAnimation: this.theme(css.enter) || undefined,
			exitAnimation: this.theme(css.exit) || undefined,
			...this.properties
		});
	}
}
