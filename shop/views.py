from django.shortcuts import render
from django.http import HttpResponse
from .models import Product
from math import ceil

# Create your views here.
def index(request):
    # products = Product.objects.all()
    # print(products)
    # n= len(products)
    # nColumns = n//5 + ceil((n/5)-(n//5))
    # params = {
    #     'no_of_columns': nColumns,
    #     'range': range(1,nColumns),
    #     'product': products
    #     }
    # allProducts = [[products, range(1, len(products)), nColumns],
    #                [products, range(1, len(products)), nColumns]]

    allProducts = []
    catProducts = Product.objects.values('subcategory','id')
    cats = {item['subcategory'] for item in catProducts}
    for cat in cats:
        prod = Product.objects.filter(subcategory=cat)
        n = len(prod)
        nColumns = n//5 + ceil((n/5)-(n//5))
        allProducts.append([prod,range(1,nColumns),nColumns])

    params = {'allProducts':allProducts}
    return render(request,'index.html',params)

def base(request):
    return render(request,'base.html')

def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'signup.html')

def about(request):
    return render(request,'about.html')

def contact(request):
    return render(request,'contact.html')

def tracker(request):
    return render(request,'tracker.html')

def search(request):
    return render(request,'search.html')

def productView(request):
    return render(request,'productView.html')

def checkout(request):
    return render(request,'checkout.html')

def cart(request):
    return render(request,'cart.html')

def men(request):
    return render(request,'men.html')

def women(request):
    return render(request,'women.html')

def unisex(request):
    return render(request,'unisex.html')

def privacyandterms(request):
    return render(request,'privacyandterms.html')