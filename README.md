# Web App - E-commerce Price Sensitivity Tool
## Stack: React, Koa, Node JS, MongoDB, Polaris, GraphQL, Apollo, Shopify API 
A Shopify embedded web application that enables e-commerce store owners to monitor their international customers’ price sensitivity on each product in each currency. 

## Features:
### Third-Party API Connection:
Received ```API secret key``` and ```API key``` and used ```koa-middleware``` to work with the ```koa-shopify-auth``` package for Shopify account authentication. 

### Polaris Layout And Styling:
Created ```Polaris``` UI that fits into Shopify UI layout and styles.

### GraphQL Querying Data: 
The reason to pick ```GraphQL``` over ```REST APIs``` is that ```GraphQL``` uses a single endpoint with fields and query the specific data, while ```REST APIs``` use multiple methods to request and modify data. ```GraphQL``` can generally improve the speed of the app since it only queries the specific data the app needs. 

### Apollo Fetching Data:
```Apollo``` is used to build a ```React``` UI that can fetch data with ```GraphQL```.

### Webhooks:
Used ```koa Shopify webhooks packages``` to register and receive Shopify webhooks and listen to events such as creating products, taking orders, receiving payments, etc.
