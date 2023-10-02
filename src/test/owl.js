"/** @odoo-module **/",
"",
"const { Component, useState, mount, xml } = owl;",
"",
"class MyComponent extends Component {",
"\tsetup() {",
"\t\tthis.state = useState({ value: 1 });",
"\t}",
"",
"\tincrement() {",
"\t\tthis.state.value++;",
"\t}",
"}",
"MyComponent.template = xml",
"\t\`<div t-on-click=\"increment\">",
"\t\t<t t-esc=\"state.value\">",
"\t</div>\`;"
