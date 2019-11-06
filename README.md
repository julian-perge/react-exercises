# Installing #
test

## Exercises ##
1. **static-tweet**
	* Beginning exercise

2. **envelope/AddressLabel**
	* Create an `AddressLabel` component that takes a `person` object as a prop and renders their name and address like so:
	* ![](https://i.imgur.com/kEn9GqH.png)

3. **envelope**
	* Create an `Envelope` component that takes `toPerson` and `fromPerson` as props and uses your `AddressLabel` from Exercise 1 to display the return address and the recipient address. Make sure to include a `Stamp` too!
	* ![](https://i.imgur.com/ZfbWp0R.png)

4. **credit_card**
	* Create a `CreditCard` component based on this design. Style it up with CSS or inline styles. Accept a `cardInfo` prop that contains the person’s name, expiration date, credit card number, and bank name.
	* <img src="https://i.imgur.com/78SxgrS.png" alt="credit card example" width="256" />

5. **poster**
	* Create a `Poster` component that takes `image, title`, and `text` as props. Google “demotivational posters” for inspiration. Render something like the image below.
	* 
	* ![](https://i.imgur.com/urcqNZ0.png)

6. **email-example**
	* Create a single-line email, as would appear in an inbox. It should accept an `email` prop, which contains the sender, subject, date, and message. Reference the screenshot below.
	* ![](https://i.imgur.com/nhmiklZ.png)

7. **children-exercises/ErrorBox**
	* Make a component to display an “error box” that looks like this:
	* ![](https://i.imgur.com/8hGQpcc.png)

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
	* <img src="https://i.imgur.com/TLz2MBO.png" alt="dialog box example" width="512" />

13. **github-file-list**
	* Refactor the GitHub file listing example so that none of the components return a table cell `(<td>).` Every component should return a `<span>` or `<div>` instead. This makes them more reusable, and should also improve the code inside `FileList`. Change the CSS if necessary.
	* Sometimes a file will contain a few related components when those components are always used together, and when they’re small (as in the `Nav/NavItem` example from earlier). But most of the time, in real applications, you’ll want to have only one component per file. Refactor the code from Exercise 1 to pull out components into separate files, using `import` and `export`.
14. **static-tweets-using-map**
	* Now you know how to create lists, using Array’s `.map` function. Reuse the `Tweet` component from earlier and create a list of Tweets.
15. **trello-copy-exercise**
	*  Work on rendering a single list of cards. For more practice, render multiple lists of cards side-by-side.
	* <img src="https://i.imgur.com/DzodjWE.png" alt="trello card item" width="256" />

16. **hacker-news-exercise**
	* Implement the list of stories. For more practice, implement the header too.
	* <img src="https://i.imgur.com/B6deX8g.png" alt="screenshot from hacker news website" width="768" />

17. **pinterest//**

18. **internet-radio-genre-cloud**
	* Can you come up with a nice way of sizing the buttons so they get progressively larger?
	* <img alt="screenshot of popular genres box from InternetRadio website" src="https://i.imgur.com/A3uQbE3.png" width="768" />

19. **state-counter**
	* Here’s a quick exercise: add a ‘Reset’ button to CountingParent that resets the counter to 0 when clicked. Just put the button directly inside CountingParent.
	* Once that’s working, refactor your code to move the ‘Reset’ button down into Child. You’ll need to pass down the click handler for the Reset button, and make sure to bind the handler in the constructor.
20. **component-lifecycle/LifecycleDemo**
	* Here’s an example that uses every lifecycle method. Run it, open up the browser console, click the button, and watch the console to see the order in which they’re called.
21. **component-lifecycle/Reddit** 
	* Another good option is the fetch() function built in to modern browsers. The Fetch API is part of the JavaScript standard. It requires an extra step to parse JSON responses, and it treats basically every response as success, including 404s and 500s, so handling errors involves a little more code. It’s also much more verbose if you need to do a POST/PUT/DELETE or another non-GET operation.
22. **component-lifecycle/OneTimeButton**
	* We’ll start off with a class and then change it into a function that uses the `useState` hook to retain state. Here’s a “button” component that can only be clicked once. Once you click it, the `clicked` state becomes true, and the button becomes disabled.
23. **component-lifecycle/StepTracker**
	* Update state based on previous state. Just like a Fitbit. Every time you take a step, simply click the button. At the end of the day, it will tell you how many steps you took.
24. **component-lifecycle/RandomList**
	* State as an Array. Remember that state can hold any value you want! Here’s an example of a list of random numbers. Clicking the button adds a new random number to the list.
	* Create a RandomList component that shows a button, and a list of random numbers. When you click the button, add another random number to the list. Store the array of numbers with `useState`. The initial state should be an empty array.
25. **component-lifecycle/MultiCounter**
	* State as an Object. Since the setter function returned by `useState` will overwrite the state each time you call it, it works differently from the class-based `this.setState.` Recall that `this.setState` would shallow-merge the object you passed it, into the existing state, taking care not to clobber the other stuff in there. The `useState` setter, instead, will clobber everything. It replaces the entire value with whatever you pass in. Here’s an example where state is an object with a couple values.
26. **component-lifecycle/AudioControls**
27. **component-lifecycle/AudioControls2**
	* Create a component called AudioControls with 4 pieces of state: “volume”, “bass”, “mid, and”treble”, each storing a value between 1 and 100.
	* Display each value along with a label and a pair of +/- buttons for increasing and decreasing the value.
	* Make two separate versions of this component: In the first, store the values in their own individual `useState` variables. In the second, store the values together in one state variable, an object that looks like this:
	```
	{
		volume: <number>,	
		bass: <number>,
		mid: <number>,
		treble: <number>
	}
	```
	* The app should look something like this:
	* ![](https://i.imgur.com/aCCOA6x.png)

28. **component-lifecycle/Badge**
	* You can respond when props change by implementing the `componentDidUpdate` lifecycle method and comparing the old value to the new one (you’ll learn more about lifecycle methods in a later chapter). If the value changed, you can set the “animating” state to `true`. Then in `render`, when “animating” is true, set a CSS class that triggers the animation. When “animating” is `false`, don’t set that class. Here’s what this might look like.

29. **layout-sidebar-state**
	* When you click the “Hide” button, the sidebar should disappear, which means something needs to set a showSidebar flag to false. This flag should be stored in state somewhere.
	* Option 1, the showSidebar flag could reside in the Sidebar component. This way the Sidebar “knows” whether it is open or not. This is similar to how uncontrolled inputs work, which we’ll see in the next chapter.
	* Option 2, the showSidebar flag can reside in the parent of Sidebar, which is the Layout component. Then parent can decide whether to render the Sidebar or not.
30. **input-controls/InputExample**
	* Input controls in React come in two flavors: controlled and uncontrolled.
	* The reason they’re called “controlled” is because you are responsible for controlling their state. You need to pass in a value, and keep that value updated as the user types.
31. **input-controls/RefInput**
	* Alternatively, you can use a ref. A ref gives you access to the input’s underlying DOM node, so you can pull out its value directly. In function components, we can call the `useRef` hook to create an empty ref, and then pass that into a `ref` prop on the input.
32. **pizza-order**
	* Create an app that involves radio buttons, a checkbox, a `select` dropdown, and a textarea. You can model it after this form for ordering a pizza, or make up something on your own.
	* <img alt="example of pizza order app" src="https://i.imgur.com/i2gc9aZ.png" width="384" />
33. **use_reducer-examples/Counter**
	* A complete example of a component using useReducer to increment a number.
34. **use_reducer-examples/ShoppingList**
	* Create a component that sets up a ref and a reducer. The ref will hold a reference to a form input, so that we can extract its value.
	* Add a button to clear the shopping list. You’ll need to dispatch a new action (“clear”) and handle it in the reducer.
35. **use_reducer-room-lights//**
	* Make a “room” with a light that has 4 levels – off, low, medium, high – and change the level each time you press a button. Create a second button to turn the lights off.
36. **use_reducer-keypad**
	* Make a “keypad” with 6 buttons that must be pressed in the correct order to unlock it. Each correct button press advances the state. An incorrect button should reset it.