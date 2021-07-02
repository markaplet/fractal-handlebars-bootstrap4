# Badge
_Documentation and examples for [Bootstrap Badges](https://getbootstrap.com/docs/4.6/components/badge/), the small count and labeling component._

## API

* `modifier`: (optional) Adds modifier and decorator classes the component
* `badgeLabel`: (optional) adds text label to the badge
* `badgeIsLink`: (required) true/false if badge should be treated as a link
* `badgeLinkURL`: (optional) (required if `badgeIsLink` is true) The href of the link 
* `badgePreContent`: generic content injection before label. Useful for adding icons, or support text
* `badgePostContent`: generic content injection after label. Useful for adding icons, or support text

## Contextual Variations (Modifiers)
The badge component supports any standard bootstrap class and any custom classes. Here is a list of bootstrap contextual modifiers:

* `badge-primary`
* `badge-secondary`
* `badge-success`
* `badge-danger`
* `badge-warning`
* `badge-info`
* `badge-light`
* `badge-dark`

### Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as using `badgePreContent` and `badgePostContent` to inject accessible additional text hidden with the `.sr-only` class. 

## Pill Badges
Use the `.badge-pill` modifier class to make badges more rounded (with a larger border-radius and additional horizontal padding). Useful if you miss the badges from v3.