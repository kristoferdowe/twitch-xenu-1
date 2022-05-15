import React, {useState} from 'react';
import TopLayer from './TopLayer';
import './App.css';
import Button from './Button';
import Toast from './Toast';




// const BUTTON_PROPS = [
//     {
//       id: 1,
//       type: 'success',
//       className: 'success',
//       label: 'Success'
//     },
    // {
    //   id: 2,
    //   type: 'danger',
    //   className: 'danger',
    //   label: 'Danger'
    // },

  // ];



const App = () => {
  const [list, setList] = useState([]);
  const [position, setPosition] = useState('Select Position');
  // let [getFollower, setGetFollower] = useState('');
  let toastProperties = null;




  // const selectPosition = (e) => {
  //   setPosition(e.target.value);
  //   setList([]);
  // }

  const showToast = type => {
    const id = Math.floor((Math.random() * 101) + 1);

    switch(type) {
      case 'newFollow':
        toastProperties = {
          id,
          title: 'New Follower!',
          description: 'you just followed!',
          backgroundColor: '#5cb85c',
          
        }

      //   break;
      // case 'danger':
      //   toastProperties = {
      //     id,
      //     title: 'Danger',
      //     description: 'This is a error toast component',
      //     backgroundColor: '#d9534f',
          
      //   }
      
        default:
          setList([]);
    }

    setList([...list, toastProperties]);
  }
  

    return (
        <div className="app">
            <TopLayer/>
            <div className="toast-buttons">
         {
            // BUTTON_PROPS.map(e => 
              // <Button 
              //   key={e.id}
              //   className={`${position === 'Select Position' ? `${e.className} btn-disable` : `${e.className}`}`}
              //   label={e.label}
              //   handleClick={() => showToast(e.type)}
              // />
            // )
          } 
      </div> 

      <Toast 
        toastList={list}
        autoDelete={true}
      />
      
    </div>
        
       

    )};
export default App;