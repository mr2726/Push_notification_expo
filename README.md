# Push Notification with Expo
> First, you need to install the `expo-notifications` library:

```bash
npx expo install expo-notifications
```
> Import it into your project:
```js
import * as Notifications from 'expo-notifications'; 
```
> Now, set up the Notification Handler. Place it outside of your app class or function, directly after imports and before your app function/class starts. You can find an example at the end of the article.
### Notification handler
```js
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, // Show the alert
    shouldPlaySound: true, // Play sound
    shouldSetBadge: false, // Update app icon badge
  }),
});
```
> - `shouldShowAlert`: Important to be true for displaying the notification. 
> - `shouldPlaySound`: Enables vibration if true
> - `shouldSetBadge`: Enables app icon badge if true.

### Setting Notification Body
```js
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
    },
    trigger: { seconds: 2 },
  });
}
```
> Call this function after clicking a button. See the example with full code:
```js
import { View, Button } from 'react-native';
import * as Notifications from 'expo-notifications';

// Notification Handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Notification Body
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
    },
    trigger: { seconds: 2 },
  });
}
export default function App() {
  return (
    <View style={{marginTop: 100, alignItems: 'center'}}>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification(); // Call notification!
        }}
      />
    </View>
  );
}
```