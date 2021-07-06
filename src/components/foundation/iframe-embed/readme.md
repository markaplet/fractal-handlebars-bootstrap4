# iframe-embed

* [Bootstrap Responsive Embed](http://bootstrapdocs.com/v3.3.6/docs/components/#responsive-embed)
* [W3C Multimedia FAQ](https://www.w3.org/2008/06/video-notes)

## API

* `aspectRatio` (optional/required) - Options are: `16by9` or `4by3`. If not included then iFrame height has to be set.
* `iframeHeight` (optional/required) - Sets the height of the iframe. Must include either px or % (ex: '50%' or '400px'). Should only be set if aspectRatio is not set.
* `iframeURL` (required) - URL to iframe source.
* `allowFullScreen` (optional) - true or false.
* `iframeID` (optional) - Often needed when using javascript to control playback of video.
* `caption` (optional) - Short description of the video.

## Issues
* When testing component in isolation, automated tools like [WAVE](https://wave.webaim.org/) will report that the page is missing headings. This is expected as the component will normally be part of a template.
* Transcripts of videos are technically required to comply with accessibility. 
