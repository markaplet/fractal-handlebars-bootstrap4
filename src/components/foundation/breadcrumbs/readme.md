# breadcrumbs

* [w3 Specs](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html)
* [Bootstrap 4 Docs](https://getbootstrap.com/docs/4.6/components/breadcrumb/)

## API
* `homeLinkName` (required): Custom home link name.
* `homeLinkURL` (required): Link to return users to homepage. Often "/" is correct.
* `currentLinkName` (required): Label for current page.
* `breadcrumbAriaLabel` (required): Accessible label for assistive technology. "Breadcrumb" as a label has fallen out of favor in recent years so "You are here" is the current recommended label.

### API for "parentLinks"
* `parentLinkName` (required): Label for link.
* `parentLinkURL` (optional): Link to parent page. 

## Testing
* Ensure text maintains a 4.5:1 contrast ratio with the background color.
* Unsure that users are able to navigate by keyboard.
* Use `aria-label="Breadcrumb"` to identify the breadcrumb navigation when scanning the page with a screen reader. 
* Current page should use `aria-current=page` to indicate current page to user.
* Visual separators if any should be added via CSS, and should not be announced by screen readers.

## Issues
* When testing component in isolation, automated tools like [WAVE](https://wave.webaim.org/) will report that the page is missing headings. This is expected as the component will normally be part of a template.
