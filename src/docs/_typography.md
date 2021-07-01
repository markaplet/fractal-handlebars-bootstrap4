<div class="Document-header"> 
    <h2 class="Document-title">Fonts</h1>
</div>
{{render '@fonts'}}
<p>Fonts are imported using the following code:</p>
<ul>
    <li><code>&lt;link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i" rel="stylesheet"&gt;</code></li>
    <li><code>&lt;link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,700,400i,600i,700i" rel="stylesheet"&gt;</code></li>
</ul>

<div class="Document-header"> 
    <h2 class="Document-title">Rich Text</h1>
</div>
<p>Rich text styles are applied to headings, lists, paragraphs, etc. that are within a container with class <code>rich-text</code></p>
<div style="background-color: #eee; padding: 20px;">
    {{render '@rich-text'}}
</div>