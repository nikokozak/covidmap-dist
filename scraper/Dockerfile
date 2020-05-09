FROM python:3.8-slim-buster

RUN apt-get update -yqq

RUN mkdir -p usr/scraper

RUN mkdir -p usr/DATA

WORKDIR usr/scraper

COPY . .

RUN pip3 install -r requirements.txt

CMD python3 /usr/scraper/scraper.py

