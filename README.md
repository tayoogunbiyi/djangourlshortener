#Djangourlshortener

Django URL Shortener 
# Project Setup

# Setting up a virtual environment 

Create a new virtual environment  and activate it (http://virtualenvwrapper.readthedocs.io/en/latest/)

```
mkvirtualenv MY_VIRTUAL_ENV
workon MY_VIRTUAL ENV
```

# Install required packages:
```
pip install -r requirements.txt
```
#Install React Dependencies 

```
npm install
```

#Make DB migrations :
```
python manage.py makemigrations
python manage.py migrate
```

#Run React Application
```
npm start 
```

#Deployment
You would usually this application on a short domain name(e.g goo.gl ,bit.ly) for it to achieve it's purpose.


#TODO
Tests
Configure creation of unique URLs on the front end 


