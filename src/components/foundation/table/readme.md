# Table

[Bootstrap 4 Table Wiki](https://getbootstrap.com/docs/4.6/content/tables/)

## API
* `uniqueID` (recommended): It's recommended that developers set a unique ID for each table dynamically
* `isResponsive` (optional): If `true` table will be scrollable on mobile
* `caption` (optional): Adds a `<caption>` element to the table: See also [Caption & Summary](https://www.w3.org/WAI/tutorials/tables/caption-summary/) 
* `columnHeaders` (required): An array of objects, which contain all of the headers for the columns. See below.
* `dataRows` (required): An array of objects, which contain all of the data for the rows, including row headers. See below.

### columnHeaders
* `header`: The header text to be used for the column.

### dataRows
* `rowHeaders`: An array of objects, which contain the row headers. There may be more than one. See below.
* `dataCells`: An array of objects, which contain the data for the cells. See below.

#### rowHeaders
* `header`: The header text to be used for the row header. May be rich text.

#### dataCells
* `data`: The text to be used for the data cell. May be rich text.

## Testing
* Recommend using a table caption
* Mark row and column headings using the ‘scope’ attribute

