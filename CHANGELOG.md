# The Tutorial Changelog

This changelog is ordered in reverse chronological order, meaning that the last changes made will always be on top of the file, so that readers will not have to scroll all the way down with each change.

## Stage 6: React router

In this stage we introduced react-router to our app

    - First we install the dependecy react-router-dom
    - Then we updated our links in our navigation.
    - Afterwards we chose what components to render and when using `switch`.
    - We created a help component and a 404 component and we stored them inside the new `views` directory.

## Stage 5: Lifecycle Methods

In this stage we introduced localStorage where we store all our data, and using react's lifecycle methods we made our app dynamic

    - Updated our functions to store and manipulate data in the localstorage.
    - Installed font awesome for react and created a loader for smoother UI.

**Links**

- [State and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Lifecycle methods diagram](https://hackernoon.com/hn-images/1*sn-ftowp0_VVRbeUAFECMA.png)

## Stage 4: Events and forms

In this stage we add all the functionalities we needed

    - First we added a simple on click event in our todo item component.
    - After we made sure it worked, we drilled the event all the way up to the the grandparent.
      Using props the click event that happened in the `ToDoItem` went all the way up to `App`
      component, through `ToDoContainer.
    - Afterwards we did the same exactly for the todones items.
    - Finally we set up our form to add a new item.

**Links**

- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [Forms](https://reactjs.org/docs/forms.html)
- [Components data communication](https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17)

## Stage 3: Props and State

In this stage we try to play around with props and state

    - We created seperate components for the todo and todones items.
    - We passed props from our ToDosContainer and ToDonesContainers to each item.
    - We updated our App component as a class component.
    - We gathered all our fake data in the state of our App component and fed
      them as props to each child.
    - So now `App.js` sends an array of todo-items to `ToDosContainer` via props. And
     `ToDosContainer` sends each item to the the `ToDoItem` component again via props.

**Links**

- [Components and Props](https://reactjs.org/docs/components-and-props.html)

## Stage 2: Components

In this stage we set up our basic structure.

    - We restructed our folder structure and create seperate folders for our different kind of files.
    - We designed our app structure and created the necessary components.
    - We rendered a list of todo and todones items using an array of data.
    - We conditionally returned our lists based on the length of our data.

**Links**

- [Components API](https://reactjs.org/docs/react-component.html)
- [Rendering elements](https://reactjs.org/docs/rendering-elements.html)
- [Conditional rendering](https://reactjs.org/docs/conditional-rendering.html)
- [Lists and keys](https://reactjs.org/docs/lists-and-keys.html)

## Stage 1: Hello world

In this stage we have set up our initial structure for our react app.

    - We printed hello world in our main file.
    - We deleted files we don't need.
    - We installed node-sass using npm and we connected it to our app.

**Links**

- [ `create-react-app` official documentation ](https://create-react-app.dev/)
- [Sass with `create-react-app`](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)

## Stage 0: Boilerplate

This branch contains a boilerplate for almost every react app you are going to create.  
This boilerplate consists of:

- Files created by [`npx create-react-app`](https://github.com/facebook/create-react-app).

We will pass the name of our app as an arguments running `npm create-react-app todo-app`.  
We have also created a .gitignore file.
