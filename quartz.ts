import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : Infinity
    const dateB = b.date ? new Date(b.date).getTime() : Infinity
    if (a.isFolder !== b.isFolder) {
  return a.isFolder ? -1 : 1
}

    if (dateA !== dateB) return dateA - dateB

    const orderA = a.frontmatter?.order ?? Infinity
    const orderB = b.frontmatter?.order ?? Infinity

    return orderA - orderB
  },
})

ExternalPlugin.Graph({
 localGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 1.1,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: true,
    removeTags: [],
    focusOnHover: false,
    enableRadial: false,
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 1,
    repelForce: 0.7,
    centerForce: 0.5,
    linkDistance: 120,
    fontSize: 0.5,
    opacityScale: 1.4,
    showTags: true,
    removeTags: [],
    focusOnHover: true,
    enableRadial: false,
  },
})


const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
