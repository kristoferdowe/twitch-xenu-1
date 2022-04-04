exports.handler = async (event) => {
    
    const { headers } = event;

    const type = headers['twitch-eventsub-message-type'] || 'no type';
    const eventType = headers['twitch-eventsub-subscription-type'];


    if(type !== 'notification' || eventType!== 'channel.subscribe') {
        return { statusCode: 200, body: ''};
    }

    console.log({headers: event.headers, body: event.body});

    //at this point you know you have a valid subscription
    //add cool stuff here
    const { event: twitchEvent } = JSON.parse(event.body);
    const user = twitchEvent.user_name;

    console.log(`${user} just subscribed!`);

    return{
        statusCode:200,
        body:'',
};
};                 