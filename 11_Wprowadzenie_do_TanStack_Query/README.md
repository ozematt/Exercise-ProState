![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Implementacja useQuery w praktyce

Twoim zadaniem jest stworzenie aplikacji React, która wykorzystuje hook `useQuery` z biblioteki TanStack Query do pobierania i wyświetlania listy postów z JSONPlaceholder API. Zadanie to skupia się na umiejętności korzystania z `useQuery` do asynchronicznego pobierania danych oraz zarządzania stanem ładowania, błędami i prezentowaniem danych.

## Krok po kroku

### Konfiguracja TanStack Query

- Zainstaluj TanStack Query w swoim projekcie.
- Skonfiguruj `QueryClient` oraz umieść `QueryClientProvider` w głównym komponencie Twojej aplikacji.

### Pobieranie listy postów

- Użyj JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts) do pobierania listy postów.
- Implementuj `useQuery` do asynchronicznego zapytania o posty, korzystając z podanego endpointu.

### Obsługa stanów zapytania

- Dodaj logikę do obsługi różnych stanów zapytania (`isPending`, `error`, `data`), aby informować użytkownika o procesie ładowania, ewentualnych błędach oraz wyświetlić pobrane dane.

### Wyświetlanie listy postów

- Po pomyślnym pobraniu danych wyświetl listę postów w formie uproszczonej – każdy post jako osobny element zawierający tytuł i skróconą treść (np. pierwsze 100 znaków).
- Każdy element listy powinien zawierać również identyfikator posta.

## Wymagania

- Aplikacja korzysta z `useQuery` do pobierania listy postów z JSONPlaceholder API.
- Aplikacja poprawnie obsługuje stan ładowania, błędy oraz wyświetlanie danych.
- Aplikacja prezentuje listę postów, pokazując ich tytuły, skrócone treści oraz identyfikatory.


# Zastosowanie useMutation

Twoim zadaniem jest stworzenie aplikacji React, która wykorzystuje hook `useMutation` z biblioteki TanStack Query do zarządzania stanem danych w aplikacji. Zadanie to skupia się na umiejętności korzystania z `useMutation` do zarządzania stanem danych w aplikacji oraz wykonywania operacji dodawania i usuwania danych na serwerze.

## Krok po kroku

### Instalacja JSON Server

- Zainstaluj JSON Server globalnie lub jako zależność deweloperską w swoim projekcie za pomocą komendy `npm install -g json-server` lub `npm install --save-dev json-server`.

### Dane startowe

- Dane startowe znajdują się w pliku `data/db.json` w katalogu tego zadania. Plik ten zawiera listę postów, które będą wykorzystywane w Twojej aplikacji. Możesz dowolnie modyfikować te dane, dodając nowe posty lub usuwając istniejące.

### Uruchomienie JSON Server

- Otwórz terminal w **katalogu zadania** i uruchom JSON Server używając komendy `json-server --watch data/db.json --port 3001`. Domyślnie serwer będzie dostępny pod adresem `http://localhost:3001`.
- Teraz, pod adresem `http://localhost:3001/posts` dostępna jest lista Twoich postów.

### Implementacja useMutation

- W swojej aplikacji React skorzystaj z `useMutation` z biblioteki TanStack Query do implementacji funkcjonalności dodawania nowych postów oraz usuwania istniejących. Będziesz potrzebować funkcji do wykonania zapytań POST i DELETE do Twojego serwera JSON.

### Dodawanie postów

- Implementuj formularz (z użyciem React Hook Form) w swojej aplikacji, który pozwoli użytkownikowi na wprowadzenie tytułu i treści nowego posta.
- Wykorzystaj `useMutation` do wysłania danych formularza do serwera JSON za pomocą zapytania POST.

### Usuwanie postów

- Dodaj przycisk „Usuń” przy każdym poście wyświetlanym w aplikacji.
- Użyj `useMutation` do wysłania zapytania DELETE do serwera JSON, aby usunąć wybrany post.

### Aktualizacja listy postów

- Po każdej operacji dodania lub usunięcia posta upewnij się, że lista postów w aplikacji jest aktualizowana. Możesz to osiągnąć, invalidując zapytania dotyczące postów za pomocą odpowiednich metod dostępnych w TanStack Query.

## Wymagania

- Lokalny serwer JSON do zarządzania danymi postów.
- Funkcjonalność dodawania nowych postów do bazy danych.
- Funkcjonalność usuwania postów z bazy danych.
- Automatyczna aktualizacja wyświetlanej listy postów po każdej operacji na danych.


# Praca z kluczowymi koncepcjami

Twoim zadaniem jest stworzenie aplikacji React, która demonstruje użycie i zrozumienie kluczowych koncepcji TanStack Query: obsługa stale data oraz refetching. Aplikacja będzie korzystać z lokalnego serwera `json-server` do symulacji operacji na danych. Powinna umożliwiać użytkownikowi przeglądanie listy danych (np. postów), z opcjami odświeżania danych oraz wyświetlenia, jak biblioteka radzi sobie z danymi uznawanymi za przestarzałe (stale).

## Krok po kroku

### Przygotowanie `json-server`

- Uruchom `json-server` używając polecenia: `json-server --watch data/db.json --port 3001`.

### Implementacja useQuery z obsługą stale data

- Użyj hooka `useQuery` do pobrania danych z `json-server`. Skonfiguruj `staleTime`, aby określić, jak długo dane mają być traktowane jako aktualne.
- Dodaj przycisk do ręcznego odświeżania danych, wykorzystując metodę `refetch` zwracaną przez `useQuery`.

### Demonstracja refetching

- Skonfiguruj automatyczne odświeżanie danych, np. przy powrocie na stronę lub na interwał czasowy, używając odpowiednich opcji `useQuery` jak `refetchOnWindowFocus` lub `refetchInterval`.
- Zaimplementuj przycisk do ręcznego wywołania refetch, demonstrując natychmiastowe odświeżenie danych.

### Wizualizacja danych i stanów zapytania

- Wyświetl dane pobrane przez `useQuery`, wraz z informacją o stanie zapytania (ładowanie, błąd, dane są aktualne/stare).
- Zilustruj, jak aplikacja reaguje na zmiany stanu danych – odświeżanie, przestarzałość danych.

## Wymagania

- Aplikacja korzysta z `useQuery` do pobierania i wyświetlania danych z `json-server`.
- Aplikacja demonstruje użycie `staleTime` i opcji refetching, takich jak `refetchOnWindowFocus` lub `refetchInterval`.
- Użytkownik może ręcznie odświeżyć dane, co ilustruje działanie refetching.


# Rozbudowa aplikacji z użyciem TanStack Query

Twoim zadaniem jest rozbudowa aplikacji sklepowej, która umożliwia przeglądanie produktów, zarządzanie koszykiem oraz składanie zamówień. Aplikacja powinna korzystać z `json-server` jako backendu dla operacji CRUD na produktach i zamówieniach.

## Krok po kroku

### Pobieranie listy produktów

- Użyj hooka `useQuery` z TanStack Query do pobierania listy produktów z endpointu `http://localhost:3001/products`. Dane powinny być wyświetlane w komponencie `ProductsList`.

### Integracja z Cart Context

- Utwórz Context API dla koszyka (`CartContext`), który będzie przechowywał wybrane produkty oraz udostępniał funkcje `addToCart` i `removeFromCart`.
- Zaimplementuj logikę dodawania produktów do koszyka za pomocą `addToCart` bezpośrednio z listy produktów.

### Modyfikacja komponentu CartList

- Rozszerz `CartList` o wyświetlanie produktów znajdujących się w koszyku, korzystając z danych z `CartContext`.
- Dodaj możliwość usuwania produktów z koszyka za pomocą `removeFromCart`.
- Wyświetl łączną cenę za wszystkie produkty w koszyku.

### Obsługa formularza OrderForm

- Zaimplementuj formularz `OrderForm` korzystając z `react-hook-form` do zbierania danych zamówienia: imię, nazwisko, adres.
- Użyj `useMutation` do wysłania zamówienia (zawierającego dane formularza oraz produkty z koszyka) na endpoint `http://localhost:3001/orders`.

### Wyświetlanie i zarządzanie zamówieniami

- Utwórz komponent `OrdersList`, który będzie używał `useQuery` do pobierania listy wszystkich zamówień z `http://localhost:3001/orders`.
- Zaimplementuj mutację do usuwania zamówień, dając możliwość anulowania zamówienia z listy.

## Wymagania

- Aplikacja korzysta z `json-server` jako backend.
- Funkcjonalność dodawania i usuwania produktów z koszyka za pomocą Context API.
- Składanie zamówień poprzez formularz, z automatycznym dodaniem produktów z koszyka do zamówienia.
- Wyświetlanie listy zamówień i możliwość ich anulowania.
