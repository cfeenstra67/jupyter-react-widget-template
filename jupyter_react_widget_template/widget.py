from ipywidgets import DOMWidget
from traitlets import Unicode

from jupyter_react_widget_template.constants import MODULE_NAME, MODULE_VERSION


class Widget(DOMWidget):
    # Metadata needed for jupyter to find the widget
    _model_name = Unicode("WidgetModel").tag(sync=True)
    _model_module = Unicode(MODULE_NAME).tag(sync=True)
    _model_module_version = Unicode(MODULE_VERSION).tag(sync=True)
    _view_name = Unicode("WidgetView").tag(sync=True)
    _view_module = Unicode(MODULE_NAME).tag(sync=True)
    _view_module_version = Unicode(MODULE_VERSION).tag(sync=True)

    name = Unicode("World").tag(sync=True)
