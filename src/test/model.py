from odoo import api, fields, models

class Record(models.Model):
    _name = 'record.restricted'
    "_check_company_auto = True",
    "",
    "company_id = fields.Many2one(",
    "    'res.company', required=True, default=lambda self: self.env.company",
    ")",
    "${1:other_record_id} = fields.Char(string=_('${2}'), check_company=True)",
