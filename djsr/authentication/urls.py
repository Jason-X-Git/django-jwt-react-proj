from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import CustomTokenObtainPairView, CustomUserCreate, HellowWordView

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/create/', CustomTokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HellowWordView.as_view(), name='hello_world'),
]
