import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../components/Toast.css';



// const axios = require('axios');
// const regeneratorRuntime = require("regenerator-runtime");

// async function getNewFollower() { 
//     const response = await axios.get(
//     `http://localhost:8888/.netlify/functions/twitch-subscription`);
//     console.log(response.data);
// }

// getNewFollower();




const Toast = props => {
    const { toastList, autoDelete, dismissTime } = props;
    const [list, setList] = useState(toastList);
    

    useEffect(() => {
        //GET
        fetch(`https://twitch-eventsub-app.netlify.app/.netlify/functions/twitch-subscription`)
        .then(response => {console.log(response)});
    }, []);

    useEffect(() => {
        setList([...toastList]);

        // eslint-disable-next-line
    }, [toastList]);




    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, 3000);
        
        return () => {
            clearInterval(interval);
        }

        // eslint-disable-next-line
    }, [toastList, autoDelete, dismissTime, list]);



    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }

    return (
        <>
            <div className={`notification-container top-right`}>
                {
                    list.map((toast, i) =>     
                        <div 
                            key={i}
                            className={`notification toast top-right`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <div className="notification-image">
                                <img src={toast.icon} alt="" />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string,
    autoDelete: PropTypes.bool,
    dismissTime: PropTypes.number,
    followEvent: PropTypes.string
}

export default Toast;