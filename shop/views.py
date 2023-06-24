from django.shortcuts import render
from django.http import HttpResponse
from .models import Product, Contact, Order
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
    if request.method == "POST":
        # print(request)
        name =  request.POST.get('name','')
        email = request.POST.get('email', '')
        phone = request.POST.get('phone','')
        message = request.POST.get('message','')
        # submitBtn = request.POST.get('submit','')
        contact = (Contact(
            name=name,
            email=email,
            phone=phone,
            message = message
                            ))
        thank = True
        contact.save()
        # print(name)
        # print(email)
        # print(phone)
        # print(message)
        # print(name)
        return render(request,'contact.html',{'thank':thank})
    return render(request,'contact.html')

def tracker(request):
    return render(request,'tracker.html')

def search(request):
    return render(request,'search.html')

def productView(request, productId):
    # Fetch the product using id
    product = Product.objects.filter(id=productId)
    print(product)
    return render(request,'productview.html',
                  {'product': product[0]}
                  )

def checkout(request):
    if request.method == "POST":
        items_json = request.POST.get('itemsJson','')
        name = request.POST.get('name','')
        email = request.POST.get('email','')
        phone = request.POST.get('phone','')
        address1 = request.POST.get('address1','')
        address2 = request.POST.get('address2','')
        city = request.POST.get('city','')
        state = request.POST.get('state','')
        zip_code = request.POST.get('zip_code','')
        order = (Order(
            items_json = items_json,
            name=name,
            email=email,
            phone=phone,
            address1=address1,
            address2=address2,
            city=city,
            state=state,
            zip_code=zip_code,
                            ))
        order.save()
        thank = True
        id = order.order_id
        return render(request,'checkout.html',{'thank':thank, 'id':id})
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