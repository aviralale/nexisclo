echo "BUILD START"
python 3.11.4 -m pip install -r requirements.txt
python 3.11.4 manage.py collectstatic --noinpt --clear
echo "BUILD END"