# Pusher Plugin Test

> NativeScript application for testing Pusher plugin integration — real-time messaging and event handling.

## Overview

A NativeScript application designed to test and demonstrate Pusher plugin integration for real-time messaging and event handling. Built with NativeScript-Vue for a cross-platform mobile experience.

## Features

- **Pusher Integration:** Real-time event subscription and publishing
- **NativeScript:** Cross-platform mobile app (iOS & Android)
- **Vue.js:** Declarative UI with Vue 3
- **Real-Time Messaging:** Live message updates
- **Connection Management:** Reconnection and status monitoring
- **Webhook Testing:** Test Pusher webhooks locally

## Tech Stack

- **Framework:** NativeScript
- **UI:** Vue.js / NativeScript-Vue
- **Real-Time:** Pusher WebSockets
- **Build:** Webpack
- **Language:** JavaScript

## Project Structure

```
├── app/                    # Application source
│   ├── app-root.xml        # Root component
│   ├── main-view-model.js  # View model
│   └── references.d.ts     # Type references
├── platforms/              # Platform-specific builds
├── webpack.config.js       # Webpack configuration
├── package.json            # Dependencies
├── LICENSE                 # License file
├── jsconfig.json           # JavaScript config
└── .editorconfig           # Editor settings
```

## Getting Started

### Prerequisites

- Node.js 18+
- NativeScript CLI (`npm install -g nativescript`)
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

```bash
# Clone the repository
git clone https://github.com/KEYHAN-A/pusherplugintest.git
cd pusherplugintest

# Install dependencies
npm install

# Run on iOS
tns run ios

# Run on Android
tns run android

# Build for production
tns build ios --release
tns build android --release
```

### Pusher Configuration

Update the app configuration with your Pusher credentials:

```javascript
// In main-view-model.js or config file
const pusherConfig = {
  key: 'YOUR_PUSHER_KEY',
  cluster: 'YOUR_PUSHER_CLUSTER',
  forceTLS: true
};
```

## Usage

### Subscribe to Channels

```javascript
import { PusherService } from './pusher-service';

const pusher = new PusherService(pusherConfig);
const channel = pusher.subscribe('my-channel');

channel.bind('my-event', (data) => {
  console.log('Received:', data);
});
```

### Emit Events

```javascript
channel.trigger('my-event', { message: 'Hello!' });
```

## Development

```bash
# Watch for changes
tns livesync ios --watch
tns livesync android --watch

# Clean build
tns clean
tns build ios --clean
tns build android --clean

# Run tests
npm test
```

## Troubleshooting

### iOS Build Issues
- Ensure Xcode command line tools are installed: `xcode-select --install`
- Check CocoaPods: `pod repo update`

### Android Build Issues
- Ensure Android SDK is installed and configured
- Check ANDROID_HOME environment variable

### Pusher Connection Issues
- Verify Pusher key and cluster
- Check network connectivity
- Review Pusher dashboard for channel activity

## License

See `LICENSE` file for details.
