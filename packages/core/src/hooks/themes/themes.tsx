import { ReactElement, useEffect, useState } from "react";
import { useSettingsManager } from "../settings/settingsManagerContext";
import { SettingsManager } from "../../features";
import { useSystemManager } from "../system/systemManagerContext";
import { Theme } from "@prozilla-os/skins";

interface ThemeProviderProps {
	children: ReactElement;
}

export function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
	const { skin } = useSystemManager();
	const [theme, setTheme] = useState<number | null>(skin.defaultTheme ?? Theme.Dark);
	const settingsManager = useSettingsManager();
	const themeSettings = settingsManager?.getSettings(SettingsManager.VIRTUAL_PATHS.theme);

	useEffect(() => {
		void themeSettings?.get("theme", (value: string) => { setTheme(parseInt(value) || 0); });
	}, [themeSettings]);

	return <div className={`${Theme[theme ?? Theme.Dark]}-theme`}>
		{children}
	</div>;
} 