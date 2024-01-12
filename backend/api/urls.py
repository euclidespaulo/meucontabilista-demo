from django.urls import path 
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('userprofiles', UserProfileViewSet, basename='userprofile')
router.register('accountings', AccountingViewSet, basename='accounting')
router.register('appointments', AppointmentViewSet, basename='appointment')

urlpatterns = router.urls


#urlpatterns = [
#    path('', home)
#]