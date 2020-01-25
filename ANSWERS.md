- [ ] Why would you use class component over function components (removing hooks from the question)?

Before hooks, class components were the only way to use certain functions of React API, for example `state` and `lifecycle methods`. Now with hooks, same features are brought to functional components as well. Even though hooks provide all the functionality, there might still be companies whose codebase is written in class components so we have to know how they work.

- [ ] Name three lifecycle methods and their purposes.

`componentDidMount`: It runs right after the component is mounted, the birth phase of the component. We can do our API requests here and set it to state. Same as: `useEffect( () => {}, [] )`

`componentDidUpdate`: It runs every time the component is updated, the growth phase of the component. It takes `prevProps` and `prevState` as parameters so we can compare old props/state and new props/state to see if there is a need for an update. If there is a DOM update needed, or new API request needed based on `prevState` or `prevProps` this is the place to do it as long as it is wrapped in a condition to check if there is any change in the `props` or `state`. Same as: `useEffect( () => {} )` or `useEffect( () => {}, [dependencyArray] )`, the only difference is it is not called for the initial render whereas `useEffect` version is!

`componentWillUnmout`: It runs right before the component is unmounted, the death phase of the component. It is a good place for cleaning up, for example, event listeners, timers, controlled forms, etc. Same as: `useEffect( () => { return callback; } )`

- [ ] What is the purpose of a custom hook?

If there is a reusable app logic and temporary state involved, (controlled forms and use of localStorage are perfect example) custom hook can handle this for us outside of the component so we have a DRY code.

- [ ] Why is it important to test our apps?

Testing a software manually is very time-consuming. Automated testing does that job for us very quickly. It is also scalable to write a software in a testable way because it forces us to keep our functions pure. As the project gets larger, bugs would be easier to find because our tests would tell us where the problem exactly is.
