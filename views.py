from flask import Blueprint, render_template, request, jsonify, redirect, url_for

from flask_googlemaps import Map
from apikey import key as apikey

import requests

views = Blueprint(__name__,"views")
  

@views.route("/libraries")
def libview():
    
    return render_template("libmap.html")

@views.route("/buses")
def busview():
    return render_template("busmap.html")