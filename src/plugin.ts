import { IJupyterWidgetRegistry } from "@jupyter-widgets/base";
import { Application, IPlugin } from "@lumino/application";
import { Widget } from "@lumino/widgets";
import { WidgetModel } from "./lib/widget-model";
import { WidgetView } from "./widget";
import { MODULE_NAME, MODULE_VERSION } from "./version";

const EXTENSION_ID = "jupyter-react-widget-template:plugin";

const plugin: IPlugin<Application<Widget>, void> = {
  id: EXTENSION_ID,
  requires: [IJupyterWidgetRegistry],
  activate: activateWidgetExtension,
  autoStart: true,
} as unknown as IPlugin<Application<Widget>, void>;

export default plugin;

/**
 * Activate the widget extension.
 */
function activateWidgetExtension(
  app: Application<Widget>,
  registry: IJupyterWidgetRegistry
): void {
  registry.registerWidget({
    name: MODULE_NAME,
    version: MODULE_VERSION,
    exports: { WidgetModel, WidgetView },
  });
}


