# Dropdown 
_Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin._

[Bootstrap 4 Dropdown Wiki](https://getbootstrap.com/docs/4.6/components/dropdowns)

## Todo
* Add support for buttons instead of links
* Add split buttons support

## API

* `dropdownGroupModifier` (optional):  Used for adding any decorator classes and [directions](https://getbootstrap.com/docs/4.6/components/dropdowns/#directions)
* `dropdownMenuModifier` (optional): Used for adding additional classes to the dropdown menu.
* `dropdownButtonModifier` (optional): Used for adding any decorator classes such as `.btn-primary`
* `dropdownButtonLabel` (required):  The label text that appears on the button.

### Dropdown Items

* `dropdownIncludeDivider` (required): If true, will add a divider line above link.
* `dropdownItemModifier` (optional): Used for adding additional classes to the link item such as `active`.
* `dropdownItemURL` (required): The url destination when clicked.
* `dropdownItemLabel` (required): The label used for the dropdown menu link