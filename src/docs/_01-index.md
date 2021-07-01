<div class="rich-text">
    <p>You are viewing the <em>Web Style Guide</em> for the <strong>[INSERT PROJECT NAME]</strong>. The goal of this documentation is to illustrate all the elements available and to give an overview of the style and behavior of the interface of the website.</p>
    <p>The <em>Web Style Guide</em> consists of the following:</p>
    <ol>
        <li>Documentation: 
            <ul>
                <li><strong>Colors: </strong>The common colors used throughout the website.</li>
                <li><strong>Icons: </strong>The collection of all icons used on the website.</li>
                <li><strong>Typography: </strong>The fonts, and common styling of headings, paragraphs, and other rich-text elements used on the website.</li>
            </ul>
        </li>
        <li>Components & Pages:
            <ul>
                <li><strong>Components: </strong>The building blocks of the user interfaces and pages. These are broken into three categories:
                    <ol>
                        <li><strong>Atoms: </strong>The most basic elements - such as buttons, lists, pagination, and breadcrumbs, which cannot be broken down into smaller components, and have the most basic functionality. Some of these elements stand on their own, but they are most often used in conjunction with other 'atoms' to form 'molecules'.</li>
                        <li><strong>Molecules: </strong>These are more complex components, which can be made up of 'atoms', or other 'molecules', and often have more advanced functionality. They tend to be common user interface elements, which can be found on most websites. Examples of molecules are Navigation, Accordions, and Carousels.</li>
                        <li><strong>Organisms: </strong>These are the most complex components, which can be made up of 'atoms', 'molecules', and other 'organisms'. They tend to be user interface elements, which are very specific to this particular website.</li>
                    </ol>
                </li>
                <li><strong>Pages: </strong>The layout of components inside of a template to form a web page.</li>
            </ul>
        </li>
    </ol>
    <div class="Document-header"> 
        <h2 class="Document-title">Usage</h2>
    </div>
    <p>In order to use the components as they were designed, and to maintain proper accessibility, each component must be made up of the proper markup, and the page must include the following two files:</p>
    <ul>
        <li><code>&lt;link rel="stylesheet" href="public/assets/css/app.min.css"&gt;</code></li>
        <li><code>&lt;script src="public/assets/js/modernizr-custom.js"&gt;&lt;/script&gt;</code></li>
        <li><code>&lt;script src="public/assets/js/app.min.js"&gt;&lt;/script&gt;</code></li>
    </ul>
    <p>The CSS depends on a few of other assets, which can be found in the following folder: /public/assets.</p>
</div>