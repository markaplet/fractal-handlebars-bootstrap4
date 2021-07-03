# pagination

_Provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative._

* [Bootstrap 4](http://getbootstrap.com/docs/4.0/components/pagination/)

## API
* `paginationAriaLabel` (required): Announces to screen readers what the pagination controls. 
* `paginationPrev` (optional): Previous page decorator
* `paginationPrevURL` (optional): URL for previous page if one exists
* `paginationNext` (optional): Next page decorator
* `paginationNextURL` (optional): URL for next page if one exists

### API for "paginationLinks"
* `paginationLinkName` (required): Typically a numerical value like 1, 2, or 3
* `paginationLinkURL` (required): URL for page

## Testing
* Ensure text maintains a 4.5:1 contrast ratio with the background color.
* Unsure that users are able to navigate by keyboard.
* Users should be able to identify that there is a pagination navigation when scanning the page with a screen reader.
* Each navigation item should be read as "Go to page #".
* Active page should use `aria-selected=true` to indicate current page to user.

