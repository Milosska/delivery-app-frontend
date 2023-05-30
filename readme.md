# TasteMe Delivery App

This is a non-adaptive delivery web App intended to help people make food orders
via Internet. It allows choose foods from various restaurants, add them to the
shopping cart, correct curent order and personal delivery data and track orders'
history.

Homepage:

## Authorisation

First visit to the TasteMe app should start with the user registration.

![RegisterPage](./assets/register_page.jpg)

The registered users should use login page to enter their personal account.

![LoginPage](./assets/login_page.jpg)

## Restaurants page

After successful auth process user is redirected to the restaurants page.
![RestaurantsPage](./assets/restaurants_page.jpg)

Left side menu here is a list of restaurants, that allows user to choose foods
and drinks from the restaurants' delivery menu.

Menu is presented by the list of product cards, each contains a product info,
namely a name, picture, ingredients list, cusisne type and price.

Add button indicated at the end of the product card allows to add product to the
shopping cart or remove it from there.

## Shopping cart page

Shopping cart page allows user to correct current order.
![ShoppingCartPage](./assets/cart_page.jpg)

Here user can set delivery address and contact phone. Data from the user profile
are indicated by default, but one can indicate specific data for the current
delivery.

Order menu is presented by choosen products' cards, where user can change the
number of items selected for the delivery.

Bottom indicator will calculate the total order price.

## Orders page

This page conteins orders history. ![OrdersPage](./assets/orders_page.jpg)

Here user cant track info about all the orders made. This info includes order
id, delivery data and address, set of ordered foods and order total price.

## Technology stack

TasteMe App was build using indicated tech stack:

<div align="center">
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
 	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm" /></code>
	<code><img height="50" src="https://user-images.githubusercontent.com/25181517/187955008-981340e6-b4cc-441b-80cf-7a5e94d29e7e.png" alt="webpack" title="webpack" /></code>
    <code><img height="50" src="https://styled-components.com/logo.png" alt="webpack" title="webpack" /></code>
</div>
