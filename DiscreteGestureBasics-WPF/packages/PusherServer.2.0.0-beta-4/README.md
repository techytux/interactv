# Pusher .NET Server library

This is a .NET library for interacting with the Pusher REST API.

Registering at <http://pusher.com> and use the application credentials within your app as shown below.

Comprehensive documenation can be found at <http://pusher.com/docs/>.

**This is a 2.0.0 BETA version. Version 1.3 with the previous API can be found [here
](https://github.com/leggetter/pusher-dotnet-server/tree/v1.3.4763).**

## Installation

### NuGet Package
```
Install-Package PusherServer
```

### Download

The latest 2.0.0 BETA can be found here:
<http://cl.ly/3E1a472Z1I30/pusher-dotnet-server-2.0.0-beta.2.zip>

## How to use

### Constructor

```
var Pusher = new Pusher(APP_ID, APP_KEY, APP_SECRET);
```

### Publishing/Triggering events

To trigger an event on one or more channels use the trigger function.

#### A single channel

```
var result = pusher.Trigger( "channel-1", "test_event", new { message = "hello world" } );
```

#### Multiple channels

```
var result = pusher.Trigger( new string[]{ "channel-1", "channel-2" ], "test_event", new { message: "hello world" } );
```

### Excluding event recipients

In order to avoid the person that triggered the event also receiving it the `trigger` function can take an optional `ITriggerOptions` parameter which has a `SocketId` property. For more informaiton see: <http://pusher.com/docs/publisher_api_guide/publisher_excluding_recipients>.

```
var result = pusher.Trigger(channel, event, data, new TriggerOptions() { SocketId = "1234.56" } );
```

### Authenticating Private channels

To authorise your users to access private channels on Pusher, you can use the `Authenticate` function:

```
var auth = pusher.Authenticate( channelName, socketId );
var json = auth.ToJson();
```

The `json` can then be returned to the client which will then use it for validation of the subscription with Pusher.

For more information see: <http://pusher.com/docs/authenticating_users>

### Authenticating Presence channels

Using presence channels is similar to private channels, but you can specify extra data to identify that particular user:

```
var channelData = new PresenceChannelData() {
	user_id: "unique_user_id",
	user_info: new {
	  name = "Phil Leggetter"
	  twitter_id = "@leggetter"
	}
};
var auth = pusher.Authenticate( channelName, socketId, channelData );
var json = auth.ToJson();
```

The `json` can then be returned to the client which will then use it for validation of the subscription with Pusher.

For more information see: <http://pusher.com/docs/authenticating_users>

### Application State

It is possible to query the state of your Pusher application using the generic `Pusher.Get( resource )` method and overloads.

For full details see: <http://pusher.com/docs/rest_api>

#### List channels

You can get a list of channels that are present within your application:

```
IGetResult<ChannelsList> result = pusher.Get<ChannelsList>("/channels");
```

You can provide additional parameters to filter the list of channels that is returned.

```
IGetResult<ChannelsList> result = pusher.Get<ChannelsList>("/channels", new { filter_by_prefix = "presence-" } );
```

#### Fetch channel information

Retrive information about a single channel:

```
IGetResult<object> result = pusher.Get<object>("/channels/my_channel" );
```

*Note: `object` has been used above because as yet there isn't a defined class that the information can be serialized on to*

#### Fetch a list of users on a presence channel

Retrive a list of users that are on a presence channel:

```
IGetResult<object> result = pusher.Get<object>("/channels/presence-channel/users" );
```

*Note: `object` has been used above because as yet there isn't a defined class that the information can be serialized on to*

## Development Notes

* Developed using Visual Studio 2010
* PusherServer acceptance tests presently need the [PusherClient](https://github.com/pusher/pusher-dotnet-client) DLL. Eventually this will be changed to fetch via NuGet.

## License

This code is free to use under the terms of the MIT license.
