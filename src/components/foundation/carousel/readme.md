# Carousel
_A slideshow component for cycling through elements—images or slides of text—like a carousel._

[Bootstrap 4 carousel docs](https://getbootstrap.com/docs/4.6/components/carousel/)

Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom 
styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not 
explicitly required. Add and customize as you see fit.

The `.active` class needs to be added to one of the slides otherwise the carousel will not be visible. Also be sure to 
set a unique id on the `.carousel` for optional controls, especially if you’re using multiple carousels on a single page. 
Control and indicator elements must have a `data-target` attribute (or href for links) that matches the id of the 
`.carousel` element.

## API

* `carouselModifier` (optional): 
* `carouselUniqueID` (required): Every carousel must have a unique ID, especially if more than one carousel is on the same page.
* `carouselIndicators` (optional): When set to `true`, adds dot indicators to bottom edge of carousel.
* `carouselControls` (optional): When set to `true`, adds previous and next arrows on left and right of carousel.
* `carouselTouch` (required):  When set to `true`, allows swiping left/right on touchscreen devices to move between slides.
* `carouselAutoPlay` (required): When set to `true`, slides will advance automatically.

### Carousel Items
* `carouselSlideIsActive` (required once): At least one slide must be configured as the first active slide. Slideshow will not appear if not 
* `carouselSlideInterval` (optional): Changes the amount of time (in milliseconds) to delay between automatically cycling to the next item.
* `carouselImageURL` (required): url to image.
* `carouselImageAlt` (required): accessible alt text for image.
* `carouselCaption` (optional): Accepts any valid html as data. 

## Accessibility
The carousel component is not accessible out of the box. See WCAG article 
[What Makes a Carousel Accessible](https://www.w3.org/WAI/tutorials/carousels/#what-makes-a-carousel-accessible) 
Additional HTML and JS is needed to make this component accessible

## Todo
* Add more css hooks on slides for custom styling
* Add pre and post component hooks for additional custom styling
* Add options to change previous and next icons and labels
* Add JS overlay to address accessibility issues


