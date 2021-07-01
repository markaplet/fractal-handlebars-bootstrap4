# alert

Alerts keep users informed of important and sometimes time-sensitive changes.

* [Bootstrap 3](http://bootstrapdocs.com/v3.0.3/docs/components/#alerts)
* [Bootstrap 4](http://getbootstrap.com/docs/4.0/components/alerts/)

## API

* alertDismissable: (optional) added a close button to alert
* alertTitle: (optional) adds text to the alert-header div typically to style like a heading
* alertText: (required) the main text to display to the user in the alert-body div
* alertFooter: (optional) adds text to the alert-footer div

## Testing

* Screenreaders should announce that component is an alert because of role=alert
* If dismisable, screenreaders should not announce "times" used for close button, but should announce "close" due to aria-label=close
* Contrast between the foreground (text) color and the background color should be 4.5:1 for normal text. Large text (larger than 18 point or 14 point bold) should have a contrast ratio of 3:1.

## Accessibility

* Use the ARIA role="alert" to inform assistive technologies of a time-sensitive and important message that is not interactive. If the message is interactive, use the alertdialog role instead.
* Do not visually hide alert messages on the page and then make them visible when they are needed. Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.

## Usability

### When to use

* As a notification that keeps people informed of the status of the system and which may or may not require the user to respond. This includes errors, warnings, and general updates.
* As a validation message that alerts someone that they just did something that needs to be corrected or as confirmation that a task was completed successfully.

### When to consider something else

* On long forms, always include in-line validation in addition to any error messages that appear at the top of the form.
* If an action will result in destroying a user’s work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialogue, to allow the user to confirm that this is what they want.

## Guidance

* When the user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. Think about how much context to provide with your message. For example, a notification of a system change may require more contextual information than a validation message. Write the message in concise, human readable language; avoid jargon and computer code.
* Be polite in error messages — don’t place blame on the user.
* Users generally won’t read documentation but will read a message that helps them resolve an error; include relevant information in your error message.
* Don’t overdo it — too many notifications will either overwhelm or annoy the user and are likely to be ignored.
* Allow a user to dismiss a notification wherever appropriate.
* Don’t include notifications that aren’t related to the user’s current goal.

## Issues

* When testing component in isolation, automated tools like [WAVE](https://wave.webaim.org/) will report that the page is missing headings. This is expected as the component will normally be part of a template.
