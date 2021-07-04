# Navs

[Bootstrap 4 Navs Wiki](https://getbootstrap.com/docs/4.6/components/navs/)

## Todo

* Allow for the use of buttons instead of links when in tabs mode. May be cleaner and less complicated to make separate component. 

## API

* `navModifier` (optional): Used for adding any decorator classes for example `nav-tabs` or `nav-pills`.
* `navUniqueID` (optional): Sets a unique id for the nav component. Required when `navIsTablist` is `true`.
* `navIsTablist` (required): Set to `true` to enable bootstrap tab behavior. Note: Will only output tab content when set to `true`.
* `navContentModifier` (optional): Used for adding any decorator classes.
* `navContentUniqueID` (optional): Adds a unique id for the tab content container. Required when `navIsTablist` is `true`.

### Nav Items

* `navItemModifier` (optional): Used for adding any decorator classes.
* `navLinkModifier` (optional): Used for adding any decorator classes.
* `navLinkUniqueID` (required): Specify a unique ID for js behavior and accessibility.
* `navLinkIsActive` (required):  Specifies the active link or tab. Required when `navIsTablist` is `true`
* `navLinkIsDisabled` (required): Set to `true` to disable a link while keeping link on page.
* `navLinkURL` (required): URL users will go when link is clicked. When functioning as tabs, the url should target the `navLinkUniqueID` for example `#home`. 
* `navLinkLabel` (required): The display label for the link.
* `tabContent` (required): Accepts valid html, Required when `navIsTablist` is `true`.
