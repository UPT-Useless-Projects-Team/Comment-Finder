from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from django.conf import settings

def test():
    return "123"

uri = f"mongodb+srv://{settings.DATABASES['mongo']['USERNAME']}:{settings.DATABASES['mongo']['PASSWD']}@cluster0.ubs4qwc.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)