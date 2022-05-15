exports.handler = async (event) => {
    
    const { headers } = event;

    const type = headers['twitch-eventsub-message-type'] || 'no type';
    const eventType = JSON.parse(event.body).subscription.type;
    
    if (type == "webhook_callback_verification") {
      return {
        statusCode: 200,
        headers: { 
          "content-type": "text/plain",
         },
        body: JSON.parse(event.body).challenge,
      };
    }


    if(type !== 'notification' || eventType !== 'channel.follow') {
        return { 
          statusCode: 200,
          body: ''
        };
    }

    console.log({headers: event.headers, body: event.body});

    //at this point you know you have a valid subscription
    //add cool stuff here

    
    const { event: twitchEvent } = JSON.parse(event.body);
    const user = twitchEvent.user_name;

    console.log(`${user} just followed!!`);

    return{
        statusCode:200,
        body:'',
};
};                 
