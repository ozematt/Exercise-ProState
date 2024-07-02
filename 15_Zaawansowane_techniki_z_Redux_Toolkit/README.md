![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Implementacja createEntityAdapter

Twoim zadaniem jest stworzenie funkcjonalności zarządzania listą produktów w sklepie internetowym przy użyciu `createEntityAdapter` z Redux Toolkit. Funkcjonalność powinna umożliwiać dodawanie, usuwanie i aktualizowanie produktów.

## Krok po kroku

1. **Tworzenie Adaptera dla Produktów:**

   Zacznij od zdefiniowania adaptera używając `createEntityAdapter`. Określ, jak identyfikowane są produkty (np. przez unikalne `id`).

2. **Stworzenie Slice'a Produktów:**

   Użyj `createSlice` do zdefiniowania slice'a produktów. Wykorzystaj adapter do generowania stanu początkowego i reduktorów.

3. **Integracja z Komponentem UI:**

   Zintegruj slice produktów z komponentem UI, pozwalając na dodawanie, usuwanie i aktualizowanie produktów. Użyj `useDispatch` do dispatchowania akcji i `useSelector` z selektorami generowanymi przez adapter do odczytania stanu produktów.

4. **Dodawanie, Usuwanie i Aktualizacja Produktów:**

   W komponencie zaimplementuj formularze i przyciski pozwalające na interakcje z listą produktów, wykorzystując akcje `productAdded`, `productRemoved`, `productUpdated` do manipulacji stanem.

## Zadanie

Zaimplementuj w aplikacji funkcjonalność zarządzania listą produktów przy użyciu `createEntityAdapter`. Zadanie polega na stworzeniu slice'a produktów, integracji z komponentem UI oraz obsłudze dodawania, usuwania i aktualizacji produktów.

To zadanie pozwoli Ci zrozumieć, jak `createEntityAdapter` może ułatwić zarządzanie znormalizowanymi danymi w aplikacjach Redux, a także jak integrować logikę stanu z komponentami React.


# Tworzenie i Integracja Custom Middleware

Twoim zadaniem jest stworzenie niestandardowego middleware, które będzie logować wszystkie akcje wysyłane do store'a razem z czasem ich wysłania. Następnie musisz zintegrować to middleware z konfiguracją Redux store.

## Krok 1: Tworzenie Custom Middleware

Stwórz plik `loggerMiddleware.js`, w którym zdefiniujesz middleware do logowania akcji.

## Krok 2: Integracja Middleware z Store

Zmodyfikuj konfigurację store'a, aby używać twojego niestandardowego middleware. Jeśli jeszcze nie masz skonfigurowanego store, oto przykładowy sposób, jak to zrobić z użyciem `configureStore` z Redux Toolkit.

### Krok 3: Testowanie Middleware

Aby przetestować działanie twojego middleware, możesz dispatchować dowolną akcję do store i obserwować logi w konsoli. Poniżej znajdziesz przykład, jak można przetestować middleware używając akcji z istniejącego reduktora.

## Zadanie

Stwórz niestandardowe middleware, które loguje szczegóły każdej akcji dispatchowanej do store'a oraz aktualny stan po zastosowaniu akcji. Integruj to middleware z konfiguracją Redux store, a następnie przetestuj jego działanie, obserwując logi w konsoli przeglądarki.

To zadanie pozwoli Ci lepiej zrozumieć, jak middleware interweniuje w przepływ akcji w aplikacjach Redux, a także jak można wykorzystać takie mechanizmy do debugowania, logowania czy zarządzania efektami ubocznymi.
