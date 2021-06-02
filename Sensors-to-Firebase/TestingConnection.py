#from firebase import firebase
#firebase = firebase.FirebaseApplication("https://demo1-ac202-default-rtdb.firebaseio.com/", None)


#data = {
 #   'name':"Smith"
#}


#result = firebase.post('/Student', data)
#print(result)
 
import firebase_admin
from firebase_admin import credentials, firestore
import sensors
import time
# initialize sdk
cred = credentials.Certificate("credJson.json")
firebase_admin.initialize_app(cred)
# initialize firestore instance
firestore_db = firestore.client()
while True:
    
    pmtwofive, pmten = sensors.airquality()
    temperature, pressure = sensors.bme280()
    humidity  = sensors.am2301()
#COAD, CODE = sensors.mq7()
    rain = sensors.raindropSensor()


# add data
#firestore_db.collection(u'songs').add({'Temperature': temperature, 'Humidity': humidity, 'Pressure': pressure, 'Rain': "rain", 'COAD': 'COAD', 'CODE': 'CODE', 'PMtwofive':2, 'PMten':10})
    firestore_db.collection(u'Weather').add({'Temperature': temperature, 'Humidity': humidity, 'Pressure': pressure, 'Rain': rain, 'PMtwofive':pmtwofive, 'PMten':pmten})
#firestore_db.collection(u'song').add({'song': 'Imagine', 'artist': 'John Lennon'})
# read data
    snapshots = list(firestore_db.collection(u'Weather').get())
    for snapshot in snapshots:
       
       print(snapshot.to_dict()) 