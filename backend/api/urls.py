from django.urls import path
from .views import DataList, DataDetail

urlpatterns = [
    path('data/', DataList.as_view(), name='data-list'),
    path('data/<int:pk>/', DataDetail.as_view(), name='data-detail'),
]

