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
    path('category/men/',views.men,name='men'),
    path('category/women/',views.women,name='women'),
    path('category/unisex/',views.unisex,name='unisex'),
    path('privacyandterms/',views.privacyandterms,name='privacyandterms'),
]