from flask import Flask,redirect,url_for,render_template,request,jsonify
import pickle
import warnings
import numpy as np


warnings.filterwarnings("ignore", category=UserWarning, message="X does not have valid feature names")




#print(loaded_model.predict([])[0])

app=Flask(__name__,template_folder='templates')


@app.route('/',methods=['GET','POST'])
def home():
    return render_template('index.html')

@app.route('/output',methods=['GET'])
def output():
    global arr
    return jsonify(arr)
if __name__=='__main__':
    app.run(debug=True)
