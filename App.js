import { View, Button } from 'react-native';
import * as Notifications from 'expo-notifications'; // Install this

// Зависимость для работы уведомления
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Структура Сообщения для уведомления
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
          await schedulePushNotification(); // Вызов Уведомления по нажатию!
        }}
      />
    </View>
  );
}