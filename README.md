## StockNotify Mobile App
* [General info](#general-info)
* [Technologies](#technologies)
* [Screens](#screens)


## General info
The project was an engineer work, therefore detailed information about it can be found in the work available on the platform. Using the application, you can read the latest stock market news, search for historical news for individual companies and industries. Set an alert for the type of message so that the application notifies you when a message about the defined type appears. 

	
## Technologies
Project is created with:
* Axios": "^0.21.0",
* Expo": "^44.0.0",
* Expo-background-fetch": "~10.1.0",
* Expo-notifications": "~0.14.0",
* Expo-task-manager": "~10.1.0",
* React": "17.0.1",
* React-dom": "17.0.1",
* React-native": "0.64.3",
* React-navigation": "^4.4.3",
  
  
	
## Setup
To run this project install it locally using npm:

```
$ npm install
$ npm install expo-cli
$ npm start
``` 
You can use emulator in Android Studio, web app, or install expo app on your device and use app on your own smartphone

## Screens
* Main: <br/>
The main screen shows the latest messages sorted by the newest. To load new messages, drag the screen to the most recent message. The user can read the message by pressing the appropriate button. A new window is then opened with the full text of the message. 
<p align="center">
<img src="https://github.com/Pattal/stock-notify-app/blob/master/Images/home.jpg" width="300" height="500">
<img src="https://github.com/Pattal/stock-notify-app/blob/master/Images/details.jpg" width="300" height="500">
</p>

* Search: <br/>
On this screen, you can search for historical messages for the selected company 
<p align="center">
<img src="https://github.com/Pattal/stock-notify-app/blob/master/Images/history2.jpg" width="300" height="500">
<img src="https://github.com/Pattal/stock-notify-app/blob/master/Images/history3.jpg" width="300" height="500">
</p>

* Notification: <br/>
In the filters section, the user can define his own filters, which the application will use to search for future messages. Choosing the company option will result in the option to search for the company whose reports are of interest to the user. After selecting the industry option, the user has the option to choose the industry in which he is interested in stock market news (e.g. gaming). Selecting the "message type" option allows you to select one of four types of reports (periodic reports, information on dividends, information on the general meeting of shareholders, and estimated financial data). After defining the filter, the application will notify the user as soon as a message that meets the requirements is found. In the notification part, you can see all messages that meet the defined filters and move pop-up notifications to it. 
<p align="center">
<img src="https://github.com/Pattal/stock-notify-app/blob/master/Images/add_filter.jpg" width="300" height="500">
<img src="https://github.com/Pattal/stock-notify-app/blob/master/Images/choose.jpg" width="300" height="500">
<img src="https://github.com/Pattal/stock-notify-app/blob/master/Images/alert.jpg" width="300" height="500">
<br/>
<img src="https://github.com/Pattal/stock-notify-app/blob/master/Images/delete.jpg" width="300" height="500">
<img src="https://github.com/Pattal/stock-notify-app/blob/master/Images/pops.jpg" width="300" height="500">

</p>
