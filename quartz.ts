import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()

const originalLightgray = config.theme?.colors?.lightgray

if (config.theme?.colors) {
  config.theme.colors.lightgray = "#ffffff"
}

export default config
export const layout = await loadQuartzLayout()