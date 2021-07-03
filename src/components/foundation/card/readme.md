# Card
_Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options._

## TODO
Currently, this component is a prototype draft and will likely change in future versions. Expect the following changes:

* Add additional hooks for css styling
* Add pre and post component hooks for additional custom styling
* Create system of injecting components into the card body
* Add support for card header

## API 
* `cardModifier` (optional): Used for adding any decorator classes.
* `cardImageURL` (optional): URL for image cap.
* `cardImageAlt` (optional): Accessible alt text for an image. Required when image is used.
* `cardImageModifier` (optional): Used for adding any decorator classes.
* `cardHeaderLevel` (required): Use h2-h6
* `cardHeaderLabel` (required): Display label for heading.
* `cardHeaderText` (required): Main content in card body

### Card Foot Links
* `cardFootLinkModifier` (optional): Used for adding any decorator classes.
* `cardFootLinkURL` (required): URL destination when link clicked.
* `cardFootLinkLabel` (required): Display label for the link.