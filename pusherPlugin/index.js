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

        /*let sel = new com.pusher.client.channel.SubscriptionEventListener({
            onEvent: function(channel, event, data) {
                console.log("Event", event, "received event with data: " + JSON.stringify(data));
            }
        });*/

        let EventListener;
        function initializeEventListener() {
            EventListener = java.lang.Object.extend({
                interfaces: [com.pusher.client.channel.SubscriptionEventListener],
                onEvent: function() {
                    console.log("WHATEVER");
                }
            });
        }
        initializeEventListener();

        console.log(new EventListener());
        //channel.bind(event_name, new EventListener());


    }
};
