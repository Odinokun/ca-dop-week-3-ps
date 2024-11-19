import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from './components/Button';
import './App.css';

type PropsType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<PropsType[]>([]);

  const getPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      setTodos(res.data);
    });
    //************************************************************** */
    //************************************************************** */
    //************************************************************** */
    console.log(
      '%cWelcome text!!!',
      'color: goldenrod; font-size: 20px; font-family: cursive;'
    );
    //************************************************************** */
    //************************************************************** */
    //************************************************************** */
  };

  useEffect(() => {
    getPosts();
  }, []);

  const removePosts = () => setTodos([]);
  const showPosts = () => getPosts();

  const mapTodos: JSX.Element[] = todos.map(el => {
    return (
      <li key={el.id}>
        <span>{el.id} - </span>
        <span>{el.title}</span>
        <span>{el.completed}</span>
      </li>
    );
  });

  return (
    <div>
      <div>
        <Button name='SHOW POSTS' onClick={showPosts} />
        <Button name='CLEAN POSTS' onClick={removePosts} />
      </div>
      <ul>{mapTodos}</ul>
    </div>
  );
}

export default App;
