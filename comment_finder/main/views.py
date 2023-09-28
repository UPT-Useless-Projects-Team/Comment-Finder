from django.shortcuts import render
from django.http import HttpResponse
import sys

sys.path.append("..")
from utils import test


def index(request):

    return render(request, "build/index.html")
