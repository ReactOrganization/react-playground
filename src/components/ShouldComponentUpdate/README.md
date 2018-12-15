if any component receives new state or new props, it re-renders itself and all <br />
its children. This is usually okay. But React provides a lifecycle method you <br />
can call when child components receive new state or props, and declare specifically <br />
if the components should update or not. The method is shouldComponentUpdate(), <br />
and it takes nextProps and nextState as parameters.

This method is a useful way to optimize performance. For example, the default behavior <br />
is that your component re-renders when it receives new props, even if the props haven't  <br />
changed. You can use shouldComponentUpdate() to prevent this by comparing the props.  <br />
The method must return a boolean value that tells React whether or not to update the  <br />
component. You can compare the current props (this.props) to the next props (nextProps) <br />
to determine if you need to update or not, and return true or false accordingly.
