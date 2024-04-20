/** @odoo-module **/

import { Component } from "@odoo/owl";

export class CommandPalette extends Component {
    openMainPalette() {
        this.env.services.command.openMainPalette({
            bypassEditableProtection: true,
            global: true,
        })
    }
}

CommandPalette.template = 'udoo_om_core_ux.CommandPalette';
