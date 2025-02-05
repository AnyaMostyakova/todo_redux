import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from "./components/TodoList/TodoList.tsx";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    );
};

export default App;
