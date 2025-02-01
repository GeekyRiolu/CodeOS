export interface DesktopConfigOptions {
	/**
	 * @default 1
	 */
	defaultIconSize: 0 | 1 | 2;

	/**
	 * 0: vertical, 1: horizontal
	 * @default 0
	 * */
	defaultIconDirection: 0 | 1; 
}

export class DesktopConfig {
	defaultIconSize: DesktopConfigOptions["defaultIconSize"];
	defaultIconDirection: DesktopConfigOptions["defaultIconDirection"];

	constructor(options: Partial<DesktopConfigOptions> = {}) {
		const { defaultIconSize, defaultIconDirection } = options as DesktopConfigOptions;

		this.defaultIconSize = defaultIconSize ?? 1;
		this.defaultIconDirection = defaultIconDirection ?? 0;
	}
}