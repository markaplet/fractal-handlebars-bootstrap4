# head

_A partial called by every template. Primarily serves as a site configuration file._

## API
* `metaCharset` (required): Defaults to utf-8
* `metaTitle` (required): Title that appears in tabs or bookmarks.
* `metaAuthor` (optional): The name of the person responsible for editing the page
* `metaDescription` (recommended): Explain in only 2 or 3 phrases what the page or site (if homepage) is about
* `metaKeywords` (recommended): Use tags and keywords relevant to the page
* `favicon16` (recommended): 16x16 pixel .ico image appears in URL bar and bookmarks
* `favicon32` (optional): 32x32 pixel .ico image used by Chrome 
* `faviconTouch57` through `faviconTouch512` (optional): Mobile devices can save urls to the users home screen as a shortcut. Device and resolution fragmentation means many different sizes of icons are needed for optimum display of icons. It is recommended that these variations all be set individually for the best possible display. However for simplicity, the 512x512 version could be used, however it should be noted that devices would need to scale the image down to a smaller size and that may lead to a poor representation of brand. Keep in mind that icons with complex detail often don't downscale well.
* `modernizrPath` (optional): url to modernizr script
* `cssPath` (required): url or path to the css file without the extension. E.g. `path/to/file/app` is correct when `path/to/file/app.css` is *not* correct
* `isMinified` (optional): set to true if should use the minified version. The final version of the site should use the minified version.
* `customFonts` (optional): Object containing 1 or more custom fonts
    * `URL` (conditional): If custom fonts are used then each url should be declared
