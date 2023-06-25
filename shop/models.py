from django.db import models
from django.core.validators import MinLengthValidator, MaxLengthValidator

# Create your models here.

# PORDUCTS MODEL
class Product(models.Model):
    # product_id = models.AutoField
    product_name = models.CharField(max_length=50)
    product_adder = models.CharField(max_length=50, default="nexisClo")
    desc = models.TextField(validators=[
        MinLengthValidator(250),
        MaxLengthValidator(600)
    ])
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50,default="")
    SUBCATEGORY_CHOICES = [
        ('Men', 'Men'),
        ('Women', 'Women'),
        ('Unisex', 'Unisex'),
    ]

    subcategory = models.CharField(max_length=50, choices=SUBCATEGORY_CHOICES, default='U')
    image1 = models.ImageField(upload_to="shop/images",default="")
    image2 = models.ImageField(upload_to="shop/images",default="")
    image3 = models.ImageField(upload_to="shop/images",default="")
    pub_date = models.DateField()

    objects = models.Manager()

    def __str__(self):
        return self.product_name

    def save(self, *args, **kwargs):
        if not self.product_name:
            raise ValueError("Product name is required")
        super().save(*args, **kwargs)


# CONTACT MODEL
class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=69)
    phone = models.CharField(max_length=18,default="")
    message = models.TextField(max_length=500)
    def __str__(self):
        return self.name
    

# ORDER MODEL
class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    items_json = models.TextField(max_length = 5000,default='')
    name = models.CharField(max_length=90)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    address1 = models.CharField(max_length=120)
    address2 = models.CharField(max_length=120)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=30)
      
# ORDER UPDATE
class OrderUpdate(models.Model):
    update_id = models.AutoField(primary_key=True)
    order_id = models.IntegerField(default='')
    name= models.CharField(max_length=100,default="")
    email = models.CharField(max_length=120,default="")
    phone = models.CharField(max_length=20,default='')
    update_desc = models.CharField(max_length=5000)
    timestamp = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    