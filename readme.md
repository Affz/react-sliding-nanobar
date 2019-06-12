React Infinite Nanobar is a simple React component to render a nanobar loader with infinite loading time. To use this component,


```javascript
npm install react-infinite-nanobar

```

```javascript
import ReactSlidingNanobar from 'react-sliding-nanobar';

const options = {
  color: 'green'
};

ReactDOM.render(
    <ReactSlidingNanobar options={options} />,
    document.getElementById('root') as HTMLElement
);

```

Render the component consitionallty based on the requirements.
