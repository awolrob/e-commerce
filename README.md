# 13 Object Relational Mapping (ORM): E-commerce Back End

## Author: Rob Ellingson
- Source: [Github](https://github.com/awolrob/e-commerce)

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```
### Database Models

Database contains the following four models:

* `Category`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `category_name`
    * String
    * Doesn't allow null values

* `Product`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_name`
    * String
    * Doesn't allow null values

  * `price`
    * Decimal
    * Doesn't allow null values
    * Validates that the value is a decimal

  * `stock`
    * Integer
    * Doesn't allow null values
    * Set a default value of 10
    * Validates that the value is numeric

  * `category_id`
    * Integer
    * References the `category` model's `id` 

* `Tag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `tag_name`
    * String

* `ProductTag`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Uses auto increment

  * `product_id`
    * Integer
    * References the `product` model's `id`

  * `tag_id`
    * Integer
    * References the `tag` model's `id`

### Associations

Database contains the following associations using Sequelize models:

* `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.

* `Category` has many `Product` models.

* `Product` belongs to many `Tag` models. Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.

* `Tag` belongs to many `Product` models.
  
## Install
```
* npm install express
* npm install mysql2
* npm install sequelize 
* npm install dotenv

mysql -u root -p
  password
  source db/schema.sql
  quit

npm run seed
```
## Run
```
npm start
```

## Video of Final Application

* The walkthrough video demonstrates how to create the schema from the MySQL shell (source db/schema.sql).
* The walkthrough video demonstrates how to seed the database from the command line (npm run seed).
* The walkthrough video demonstrates how to start the application’s server (npm start).
* The walkthrough video demonstrates GET routes for all categories, all products, and all tags being tested in Insomnia Core.
* The walkthrough video demonstrates GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.
* The walkthrough video demonstrates POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

https://drive.google.com/file/d/1bGJJ-dIg__3CPiuPfpaQmzVECkyN4AW_/view?usp=sharing

- - -
` https://github.com/awolrob | 2021-08-22 ` 