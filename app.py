from flask import Flask
from views import views
from flask_googlemaps import GoogleMaps

app = Flask(__name__)
app.register_blueprint(views, url_prefix="/views")


# Initialize the extension
GoogleMaps(app)

# you can also pass the key here if you prefer
GoogleMaps(app, key="8JZ7i18MjFuM35dJHq70n3Hx4")

if __name__ =='__main__':
    app.run(debug=True, port=8000)

