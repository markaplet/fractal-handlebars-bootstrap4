# List Group
_List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to 
support just about any content within._

[List Group on Bootstrap 4 Wiki](https://getbootstrap.com/docs/4.6/components/list-group/)

## API
* `listGroupModifier` (optional): Used for adding any decorator classes such as `.list-group-flush` or `.list-group-horizontal`
* `listGroupType` (required): list groups can use `div`, `li`, or `ol`

### List Items
* `listItemModifier` (optional): Used for adding any decorator classes such as 
  [contextual classes](https://getbootstrap.com/docs/4.6/components/list-group/#contextual-classes)
* `listItemIsButton` (required): Set to true to use button format. (Requires `listGroupType` to be `div`)
* `listItemIsLink` (required): Set to true to use link format. (Requires `listGroupType` to be `div`)
* `listItemIsListItem` (required): Set to true to use list item format. (Requires `listGroupType` to be `ul` or `ol`)
* `listItemIsDisabled` (required): set to true to mark item as disabled.
* `listItemIsActive` (required): set to true to mark an item as the currently active item.
* `listItemURL` (optional): Required if `listItemIsLink` is true. Specify the link destination when clicked.
* `listItemLabel` (required): The label to be displayed for the list item. Can accept valid HTML 
