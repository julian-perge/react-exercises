This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

# Overview

Make a component to display an "error box" that looks like this:

<img src="https://i.imgur.com/m6SGNnO.png" alt="exmaple error box">

Invoking the component should like this:

```
<ErrorBox>
  Something has gone wrong
</ErrorBox>
```

Use the children prop to place the text properly.

1. Write a component called `FirstChildOnly` that accepts any number of `children` but only renders the first.
2. Write a component called `LastChildOnly` that only renders its last child.
3. Create a component named `Head` that takes a `number` prop, and renders the first [`number`] `children`.
   e.g. If you pass `number=3` and 7 child elements, it will render the first 3.
4. Create a component named `Tail` that takes a `number` and renders the last `N children`.

## Installing

```
yarn install
```
