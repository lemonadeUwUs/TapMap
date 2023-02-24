from flask import Blueprint, render_template, request, jsonify, redirect, url_for

from flask_googlemaps import Map


views = Blueprint(__name__,"views")

'''@views.route("/")
def home():
    return render_template("index.html", name = "dumbass")

@views.route("/profile/<username>")
def profile(username):
   return render_template("index.html", name = username)
   

@views.route("/json")
def get_json():
    return jsonify({'A':'1','B':'2'})

@views.route("/go-to-home")
def go_to_home():
    return redirect(url_for("views.home"))'''


@views.route("/")
def mapview():
    # creating a map in the view
    mymap = Map(
        identifier="view-side",
        lat=37.4419,
        lng=-122.1419,
        markers=[(37.4419, -122.1419)]
    )
    sndmap = Map(
        identifier="sndmap",
        lat=37.4419,
        lng=-122.1419,
        markers=[
          {
             'icon': 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
             'lat': 37.4419,
             'lng': -122.1419,
             'infobox': "<b>Hello World</b>"
          },
          {
             'icon': 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
             'lat': 37.4300,
             'lng': -122.1400,
             'infobox': "<b>Hello World from other place</b>"
          }
        ]
    )
    return render_template('map.html', mymap=mymap, sndmap=sndmap)