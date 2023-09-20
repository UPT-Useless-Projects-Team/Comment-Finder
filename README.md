# Run

Install and run venv

```
pip install venv
python -m venv venv
```


Depending on your terminal run appropriate activate file

```
venv/Scripts/activate.bat
```


Install requirements

```
pip install -r path/to/requirements.txt
```


And run the server

```
python path/to/manage.py runserver
```


## Compile 

If you make changes to frontend files, you have to build the React project first.

```
cd path/to/frontend
npm run build
```