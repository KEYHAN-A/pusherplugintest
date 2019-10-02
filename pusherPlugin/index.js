module.exports = {
    connect:function(app_key, channel_name, event_name) {
        PusherOptions = com.pusher.client.PusherOptions;
        Pusher = com.pusher.client.Pusher;
        Channel = com.pusher.client.channel.Channel;
        PusherEvent = com.pusher.client.channel.PusherEvent;
        SubscriptionEventListener = com.pusher.client.channel.SubscriptionEventListener;

        const options = new PusherOptions().setCluster("eu");
        const pusher = new Pusher(app_key, options);

        pusher.connect();

        const channel = new Channel(pusher.subscribe(channel_name));
        const ref = new java.lang.ref.WeakReference(pusher);
        const owner = ref.get();


        /*if (owner.eventChannels.has(`${channel_name}_${event_name}`)) {
            const eventData = owner.eventChannels.get(`${channel_name}_${event_name}`)
            alert(eventData);
        }*/

        let sel = new com.pusher.client.channel.SubscriptionEventListener({
            onEvent: function(channel, event, data) {
                console.log("Event", event, "received event with data: " + JSON.stringify(data));
            }
        });



        //alert(binding);

        //channel.bind('my-event', sel);


    }
};
