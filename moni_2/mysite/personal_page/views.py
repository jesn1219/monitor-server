from django.shortcuts import render
from django.conf import settings
from .models import PersonalInfo
import os

def home(request):
    personal_info = PersonalInfo.objects.first()
    return render(request, 'personal_page/home.html', {'personal_info': personal_info})

def index(request):
    return render(request, 'personal_page/index.html')

#def board(request):
#    media_path = os.path.join(settings.MEDIA_ROOT, 'experiments')
#    media_files = sorted(os.listdir(media_path), reverse=True)
#    return render(request, 'personal_page/board.html', {'media_files': media_files})




def board(request):
    media_directory = os.path.join('media', 'experiments')
    media_files = []

    for root, dirs, files in os.walk(media_directory):
        for file in files:
            if file not in media_files:
                media_files.append(file)

    return render(request, 'personal_page/board.html', {'media_files': media_files})