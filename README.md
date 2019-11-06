# Installing #
test

## Exercises ##
1. **static-tweet**
	* Beginning exercise
2. **envelope/AddressLabel**
	* Create an `AddressLabel` component that takes a `person` object as a prop and renders their name and address like so:
![](https://i.imgur.com/kEn9GqH.png)
3. **envelope**
	* Create an `Envelope` component that takes `toPerson` and `fromPerson` as props and uses your `AddressLabel` from Exercise 1 to display the return address and the recipient address. Make sure to include a `Stamp` too!
![](https://i.imgur.com/ZfbWp0R.png)
4. **credit_card**
	* Create a `CreditCard` component based on this design. Style it up with CSS or inline styles. Accept a `cardInfo` prop that contains the person’s name, expiration date, credit card number, and bank name.
<img src="https://i.imgur.com/78SxgrS.png" alt="credit card example" width="256" />
5. **poster**
	* Create a `Poster` component that takes `image, title`, and `text` as props. Google “demotivational posters” for inspiration. Render something like the image below.
![](https://i.imgur.com/urcqNZ0.png)
6. **email-example**
	* Create a single-line email, as would appear in an inbox. It should accept an `email` prop, which contains the sender, subject, date, and message. Reference the screenshot below. ![](https://i.imgur.com/nhmiklZ.png)
7. **children-exercises/ErrorBox**
	* Make a component to display an “error box” that looks like this:
![](https://i.imgur.com/8hGQpcc.png)
8. **children-exercises/FirstChildOnly**
	* Write a component called `FirstChildOnly` that accepts any number of children but only renders the first.
9. **children-exercises/LastChildOnly**
	* Write a component called `LastChildOnly` that only renders its last child.
10. **children-exercises/Head**
	* Create a component named `Head` that takes a `number` prop, and renders the first [number] children. e.g. If you pass number=3, and 7 child elements, it will render the first 3.
11. **children-exercises/Tail**
	* Create a component named `Tail` that takes a `number` and renders the last N children.
12. **dialog-box**
	* Create a `Dialog` component which accepts as children `Title, Body,` and `Footer` components, all optional. `Dialog` should verify that all of its children are one of these types, and should output something that looks like this:
<img src="https://i.imgur.com/TLz2MBO.png" alt="dialog box example" width="512" />
13. **github-file-list**
	* Refactor the GitHub file listing example so that none of the components return a table cell `(<td>).` Every component should return a `<span>` or `<div>` instead. This makes them more reusable, and should also improve the code inside `FileList`. Change the CSS if necessary.
	* Sometimes a file will contain a few related components when those components are always used together, and when they’re small (as in the `Nav/NavItem` example from earlier). But most of the time, in real applications, you’ll want to have only one component per file. Refactor the code from Exercise 1 to pull out components into separate files, using `import` and `export`.
14. **static-tweets-using-map**
	* Now you know how to create lists, using Array’s `.map` function. Reuse the `Tweet` component from earlier and create a list of Tweets.
15. **trello-copy-exercise**
	*  Work on rendering a single list of cards. For more practice, render multiple lists of cards side-by-side.
<img src="https://i.imgur.com/DzodjWE.png" alt="trello card item" width="256" />
16. **hacker-news-exercise**
	* Implement the list of stories. For more practice, implement the header too.
<img src="https://i.imgur.com/B6deX8g.png" alt="screenshot from hacker news website" width="768" />
17. **pinterest//**

18. **internet-radio-genre-cloud**
	* Can you come up with a nice way of sizing the buttons so they get progressively larger?
<img alt="screenshot of popular genres box from InternetRadio website" src="https://i.imgur.com/A3uQbE3.png" width="768" />
19. **state-counter**
	* Here’s a quick exercise: add a ‘Reset’ button to CountingParent that resets the counter to 0 when clicked. Just put the button directly inside CountingParent.
	* Once that’s working, refactor your code to move the ‘Reset’ button down into Child. You’ll need to pass down the click handler for the Reset button, and make sure to bind the handler in the constructor.