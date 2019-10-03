module.exports = {
    connect:function(app_key, channel_name) {
        PusherOptions = com.pusher.client.PusherOptions;
        Pusher = com.pusher.client.Pusher;
        Channel = com.pusher.client.channel.Channel;
        PusherEvent = com.pusher.client.channel.PusherEvent;
        ChannelEventListener = com.pusher.client.channel.ChannelEventListener;

        const options = new PusherOptions().setCluster("eu");
        const pusher = new Pusher(app_key, options);

        pusher.connect();

        const channel = new Channel(pusher.subscribe(channel_name));
        connectedChannel = pusher.getChannel(channel_name);
    },
    newEvent:function(event_name) {
        SubscriptionEventListener = com.pusher.client.channel.SubscriptionEventListener;

        let sel = new SubscriptionEventListener({
            onEvent: function(event) {
                console.log(event);
            }
        });

        connectedChannel.bind(event_name, sel);
    }
};
