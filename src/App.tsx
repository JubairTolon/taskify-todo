import { FC, useState } from 'react'
import './App.css'
import InputField from './components/InputField'

const App: FC = () => {
  const [todo, setTodo] = useState<string>('');

  return (
    <div className="App">
      <h1 className='heading'>Taskify ToDo</h1>
      <InputField />
    </div>
  )
}

export default App
