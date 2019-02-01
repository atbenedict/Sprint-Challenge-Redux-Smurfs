[ ] In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are triggered by interacting with the application. Actions are then sent to Reducers which determine how/if the action will be processed. Reducers then adjust the complete application state, which is housed in the Store.

The store is the only place where the application stores state for the application. It is the single source of truth.

[ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and can be shared with the entire application via subscription. Component state is held within a component and can only be passed to child components as props.

A good place to use component state is when you have a 'view' container and you want to pass information to children without complicating the state flow.

[ ] Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-thunk is a middleware that allows us to dispatch functions, rather than simple objects. It enables us to create asynchronous promise-based requests.
