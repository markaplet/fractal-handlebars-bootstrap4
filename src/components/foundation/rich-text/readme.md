# rich-text

_Wraps text coming from the cms with a `.rich-text` class to allow for improved author styling.  Specifically this was added to address images, tables, and inline styles that are difficult for authors to control via RTE alone. 

## API
* `text` (required): rich text formatted with html

## Issues
* When testing component in isolation, automated tools like [WAVE](https://wave.webaim.org/) will report that the page is missing headings. This is expected as the component will normally be part of a template.
