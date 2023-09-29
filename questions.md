1. What is the difference between Component and PureComponent? Give
an example where it might break my app.

**Component** and **PureComponent**: These classes are only used in class components. 

Component doesn't implements **shouldComponentUpdate** method and component re-renders by default whenever setState is called or the parent component re-renders. 

**PureComponent** has implement **shouldComponentUpdate** and that does a shallow comparison of state and props.

// it will not be checked by the shallow comparison algorithm
```
class MyPureComponent extends PureComponent {
  render() {
    return (
      <span>{this.props.item.id}</span>
    )
  }
}
```

// here, each render will create a new function
```
class MyComponent extends Component {
  render() {
    return (
      <div>
        <MyPureComponent renderProp={value => (<span>{value}</span>)}/>
      </div>
    );
  }
}
```
2. Context + ShouldComponentUpdate might be dangerous. Why is that?

**ShouldComponentUpdate** checks only props and state, but context value changes will trigger redraws anyway.

3. Describe 3 ways to pass information from a component to its PARENT.

a. Use props or context to define a callback that can change data in a parent and send it to a child;

b. A child component can use refs and change ref.current;

c. Use a state manager and connect parent and child to the same store or just use a shared global state.

4. Give 2 ways to prevent components from re-rendering.

Make use of **PureComponent/React.memo** or implement **shouldComponentUpdate**

5. What is a fragment and why do we need it? Give an example where it might
break my app.

A fragment is a syntax for returning multiple elements without wrapping them into an additional DOM element. Getting too many child components may break application layout. In arrays, fragments should also be used with the key attribute. It is often forgotten by developers.

6. Give 3 examples of the HOC pattern.

a. withLogger
b. withErrorHandling
c. withLoading

```
function withLoading(WrappedComponent) {
  return function(props) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

const MyComponent = (props) => <div>{props.data}</div>;
const MyComponentWithLoading = withLoading(MyComponent);
```

7. What's the difference in handling exceptions in promises, callbacks
and async...await?

Promises are handled with the catch function.
Exceptions in async functions are handled by try {} catch (e).
Callback for handling exceptions in callbacks.

8. How many arguments does setState take and why is it async.

There are two arguments to **setState**: the update function and the callback. **setState** is async because **React batches** state updates, and then makes a single update for several components at once.

9. List the steps needed to migrate a Class to Function Component.

a. **Class signatures** should be replaced with **function signatures**
b. **PureComponents** should be replaced with memo()
c. **Constructor state** initialization should be replaced with **UseState hook**
d. **Lifecycle methods** should be replaced with **useEffect hook(s)**
e. Your functional component should be the body of the **render() method**

10. List a few ways styles can be used with components.

a. inline styles
b. css/scss/less
c. css in js
d. css modules

11. How to render an HTML string coming from the server.

You can use a 3rd party HTML parser or **dangerouslySetInnerHTML** attribute to:
```
<span dangerouslySetInnerHTML={{ __html: "<b>some text</b>" }} />
```