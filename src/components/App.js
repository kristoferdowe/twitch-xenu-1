import React, {useState} from 'react';
import TopLayer from './TopLayer';
import './App.css';
import Button from './Button';
import Toast from './Toast';
const BUTTON_PROPS = [
    {
      id: 1,
      type: 'success',
      className: 'success',
      label: 'Success'
    },
    {
      id: 2,
      type: 'danger',
      className: 'danger',
      label: 'Danger'
    },

  ];

const App = () => {
    const [list, setList] = useState([]);
  const [position, setPosition] = useState('Select Position');
  let [checkValue, setCheckValue] = useState(false);
  let toastProperties = null;
  const selectPosition = (e) => {
    setPosition(e.target.value);
    setList([]);
  }

  const showToast = type => {
    const id = Math.floor((Math.random() * 101) + 1);

    switch(type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
          
        }

        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'This is a error toast component',
          backgroundColor: '#d9534f',
          
        }
      
        default:
          setList([]);
    }

    setList([...list, toastProperties]);
  }
  
   const onCheckBoxChange = () => {
    checkValue = !checkValue;
    setCheckValue(checkValue);
    setList([]);
  }

  const onInputChange = (e) => {
    const time = parseInt(e.target.value, 10);
    setDismissTime(time);
  }


    return (
        <div className="app">
            <TopLayer/>
            <div className="toast-buttons">
          {
            BUTTON_PROPS.map(e => 
              <Button 
                key={e.id}
                className={`${position === 'Select Position' ? `${e.className} btn-disable` : `${e.className}`}`}
                label={e.label}
                handleClick={() => showToast(e.type)}
              />
            )
          }
          
       
        {/* <div className="select">
          <input 
            id="auto"
            type="checkbox"
            name="checkbox"
            value={checkValue}
            onChange={onCheckBoxChange}
          />
          <label htmlFor="auto">Auto Dismiss</label>
        </div>
        <div className="select">
          <input 
            className={`${!checkValue ? 'disabled' : ''}`}
            type="text"
            name="checkbox"
            placeholder="Dismiss time Ex: 3000"
            autoComplete="false"
            onChange={onInputChange}
          />
        </div> */}
        {/* <div className="select">
          <select
            name="position"
            value={position}
            onChange={selectPosition}
            className="position-select"
          >
            <option>Select Position</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
          </select>
        </div>*/}
      </div> 

      <Toast 
        toastList={list}
        // position={position}
        autoDelete={true}
       
      />
      
    </div>
        
       

    )};
export default App;