# coding=utf-8
from flask import Flask, jsonify, request

from sqlalchemy.exc import SQLAlchemyError

from flask_cors import CORS, cross_origin

from .auth import AuthError, requires_auth

from .entities.entity import Session, engine, Base

from .entities.exam import Exam, ExamSchema

# Creating Flask Application
app = Flask(__name__)

# adding CORS to Flask
cors = CORS(app, resources={r"/exams": {"origins": "*"}})

# generate database schema
Base.metadata.create_all(engine)

@app.route('/exams')
#@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_exams():
    # fetching from the database
    session = Session()
    exam_objects = session.query(Exam).all()

    # transforming into JSON-serializable objects
    schema = ExamSchema(many=True)
    exams = schema.dump(exam_objects)

    # serializing as JSON
    session.close()
    return jsonify(exams)

@app.route('/exams', methods=['POST'])
@requires_auth
def add_exam():
    # mount exam object
    posted_exam = ExamSchema(only=('title', 'description'))\
        .load(request.get_json())

    exam = Exam(**posted_exam.data, created_by="HTTP post request")

    # persist exam
    session = Session()
    session.add(exam)
    session.commit()

    # return created exam
    new_exam = ExamSchema()
    session.close()
    return jsonify(new_exam), 201
    
@app.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response