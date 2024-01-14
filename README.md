# Push notification EXPO
> First need to install ```expo-notification```
```cmd
npx expo install expo-notifications
```
> Import it to the project
```js
import * as Notifications from 'expo-notifications'; 
```
> Now need to sed Notification Handler 
>> It need to be outside of your app class or function
>> You can put it dirctly after imports and before app functicon/class starts You can see exemple in the bottom
### Notification handler
```js
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, // Sowing the alert
    shouldPlaySound: true, // Plaing Sound
    shouldSetBadge: false, // ICON
  }),
});
```
> ```shouldShowAlert``` - important be true for you can get the notification

> ```shouldPlaySound``` - Enables vibration if it true

> ```shouldSetBadge``` - Enables Icon if it true

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
> You can call to this function after click to the button. See exemple with full code
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