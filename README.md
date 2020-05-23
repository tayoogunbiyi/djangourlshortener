# Djangourlshortener . 

A simple django and react application illustrating how to shorten urls 

# Project Setup

# Setting up a virtual environment 

Create a new virtual environment  and activate it (http://virtualenvwrapper.readthedocs.io/en/latest/)

```
mkvirtualenv MY_VIRTUAL_ENV
workon MY_VIRTUAL ENV
```

# Installing required packages:
```
pip install -r requirements.txt
```
# Installing React Dependencies 

```
npm install
```

# Make DB migrations :
```
python manage.py makemigrations api
python manage.py migrate
```

# Run tests

```

coverage run -m pytest

```

# Run Django Backend

```
python manage.py runserver

```

# Run React Application

```
npm start 

```

# Deployment
You would usually deploy this application on a short domain name(e.g goo.gl ,bit.ly) for it to achieve it's purpose.


# TODO
Tests

Configure creation of unique URLs on the front end 

Configure an error toast to be displayed when a URL that has already been shortened is supplied again to be shortened 

