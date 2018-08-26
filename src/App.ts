import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { w, v } from '@dojo/framework/widget-core/d';
import dojo from '@dojo/themes/dojo';
import custom from './themes/custom/theme';

import { CustomDialog } from './widgets/CustomDialogs';

export class App extends WidgetBase {
	private _noThemeOpen = false;
	private _customOpen = false;

	render() {
		return v('div', [
			v('h2', [ 'Custom Dialog' ]),
			w(CustomDialog, {
				theme: dojo,
				open: this._noThemeOpen,
				title: 'Dialog',
				modal: true,
				underlay: true,
				closeable: true,
				onRequestClose: () => {
					this._noThemeOpen = false;
					this.invalidate();
				}
			}),
			v('button', {
				onclick: () => {
					this._noThemeOpen = true;
					this.invalidate();
				},
			}, [ 'click me!' ]),
			v('h2', [ 'Custom Dialog With Custom Theme' ]),
			w(CustomDialog, {
				theme: custom,
				open: this._customOpen,
				title: 'Dialog',
				modal: true,
				underlay: true,
				closeable: true,
				onRequestClose: () => {
					this._customOpen = false;
					this.invalidate();
				}
			}),
			v('button', {
				onclick: () => {
					this._customOpen = true;
					this.invalidate();
				},
			}, [ 'click me!' ])
		]);
	}
}
