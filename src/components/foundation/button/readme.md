# Button

_Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more._

## API
* `buttonType` (Required) Choose either "button", "submit", or "reset" - the latter two are used with forms.
* `buttonName` (Optional) The name of the button
* `buttonValue` (Optional) The value of the button.
* `buttonIsDisabled` (Optional) Adds disabled attribute if set to true.
* `buttonFormId` (Optional) Set to the ID of the form it's associated with if it lives outside of the form.
* `buttonAriaLabel` (Required/Optional) A label for the button for screen readers. Required if there are no words within the button (ex: an icon is being used instead).
* `buttonRole` (Optional) A WAI-ARIA role used for accessibility to describe the role of the button.
* `buttonText` (Required) The text to be contained within the button.
* `buttonIsSrOnly` (Optional) Adds sr-only class, which can be used to make the button's text visible only to screen readers.
* `buttonHasHamburger` (Optional) Set to true to include spans for styling a hamburger inside the button.
* `buttonHasIcon` (Optional) Set to true to include spans for including icon fonts inside the button.
* `buttonSvgIcon` (Optional) See [icon docs](/components/detail/icon).

### dataAttr
* `buttonDataName`: (Optional) Name for the data attribute (ex: Bootstrap modals use data-toggle="modal", so you would enter "toggle" for the name). 
* `buttonDataValue`: (Optional) Value for the data attribute (ex: For a Boostrap modal use "modal").

### Modifiers
* `buttonModifier`: (Optional) Used to style the button (options: 'primary')

## Testing 

* Buttons should display a visible focus state when users tab to them.
* Pressing the Space key triggers a button, but pressing the Enter key triggers a link.
* Ensure text maintains a 4.5:1 contrast ratio with the background color.

## Accessibility

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as the `aria-label` or with additional hidden text with the .sr-only class. 

### Read More Links
If designs utilize buttons or links with visual labels such as "Read More", use the `buttonAriaLabel` attribibute to specify an accessible label. For example: 

**Before**: `For more information about web development, <a href="/about">read more</a>`    
**After**: `For more information about web development, <a href="/about" aria-label="read more about web development">read more</a>`

## Usability 

### When to use

* Use buttons for the most important actions you want users to take on your site, such as “download,” “sign up,” or “log out.”

### When to consider something else

* If you want to lead users between pages of a website. Use links instead.
* Less popular or less important actions may be visually styled as links.

### Guidance

* Use a `<button>` element when the button triggers an on page function such as opening a menu, expanding an accordion, etc. 
* Use an `<a>` element for buttons that take users to another page.
* Generally, use primary buttons for actions that go to the next step and use secondary buttons for actions that happen on the current page.
* Style the button most users should click in a way that distinguishes from other buttons on the page. 
* Make sure buttons look clickable. Use color variations to distinguish static, hover and active states.
* Avoid using too many buttons on a page.
* Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “download,” “view” or “sign up”).
* Make the first word of the button’s label a verb. For example, instead of “Complaint Filing” label the button “File a complaint.”

