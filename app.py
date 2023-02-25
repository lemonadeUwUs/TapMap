from flask import Flask, render_template
from views import views
from flask_googlemaps import GoogleMaps

app = Flask(__name__)
app.register_blueprint(views, url_prefix="/")


  
if __name__ =='__main__':
    app.run(debug=True, port=8000)

 