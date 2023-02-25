from flask import Blueprint, render_template, request, jsonify, redirect, url_for

from flask_googlemaps import Map
#from apikey import key as apikey

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
  

@views.route("/libaries")
def libview():
    return render_template("libmap.html")

@views.route("/buses")
def busview():
    return render_template("busmap.html")