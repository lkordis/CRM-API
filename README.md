# CRM-API

## Instalacija

#### Preduvjeti

+ MongoDB - v3.4.7
+ Node.js - v7.8.0
+ Npm - 4.2.0

Za instalaciju projekt potrebno je u terminal upisati ```npm install```.

Za pokretanje projekta potrebno je u terminal upisati ```npm run dev```. Također potrebno je i pokrenuti MongoDB server naredbom ```mongod``` u terminalu.

#### Rute

+ **GET** /account - Informacije o korisničkom računu
+ **GET** /cart - Informacije o korisnčkoj košarici
+ **POST** /cart - Dodavanje proizvoda u košaricu
  + **POST** /cart/buy - Kupovina korisničke košarice
+ **GET** /faq/:type - Informacije o čestim pitanjima
+ **POST** /malfunction/:type - Prijava kvara
+ **GET** /products/:type - Informacije u proizvodima
+ **GET** /services/:type - Informacije o uslugama
