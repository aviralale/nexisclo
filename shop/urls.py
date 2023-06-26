from django.urls import path
from . import views

urlpatterns = [
    path('', views.index,name='index'),
    path('base/',views.base,name='base'),
    path('login/',views.login,name='login'),
    path('signup/',views.signup,name='signup'),
    path('about/',views.about,name='about'),
    path('contact/',views.contact,name='contact'),
    path('tracker/',views.tracker,name='tracker'),
    path('search/',views.search,name='search'),
    path('productview/<int:productId>',views.productView,name='productview'),
    path('checkout/',views.checkout,name='checkout'),
    path('cart/',views.cart,name='cart'),
    path('privacyandterms/',views.privacyandterms,name='privacyandterms'),
    path('verify_payment/', views.verify_payment, name='verify_payment'),
]