![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Debugowanie stanu useState

Twoim zadaniem jest zdebugowanie i naprawienie kodu w aplikacji React, która nie działa zgodnie z oczekiwaniami. Kod zawiera typowe błędy związane z zarządzaniem stanem przy użyciu hooka `useState` oraz jego interakcji z innymi częściami komponentu.

## Oczekiwane działanie programu

Aplikacja jest prostym licznikiem, który pozwala na zwiększanie i zmniejszanie wartości. Powinna ona również wyświetlać komunikat w konsoli po każdej zmianie wartości licznika, a także zachowywać się poprawnie w sytuacjach asynchronicznych.

### Błędy do znalezienia i naprawienia

1. **Niewłaściwa aktualizacja stanu**:
   Obecny kod bezpośrednio modyfikuje stan zamiast używać funkcji aktualizującej stan. To powoduje, że React nie jest w stanie prawidłowo śledzić zmian i nie aktualizuje interfejsu użytkownika.

2. **Zaniedbanie zależności w efektach ubocznych**:
   W hooku `useEffect` pominięto niezbędne zależności, co prow

adzi do niespodziewanych i niekontrolowanych aktualizacji stanu. Jest to problematyczne, ponieważ powoduje to nieprzewidywalne zachowanie aplikacji, szczególnie podczas interakcji z innymi elementami interfejsu użytkownika.

3. **Nieprawidłowe zarządzanie stanem asynchronicznym**:
   W kodzie występuje błąd, gdzie stan jest aktualizowany po wykonaniu asynchronicznej operacji, jednak nie sprawdza się, czy komponent jest nadal zamontowany. Może to prowadzić do błędów i nieoczekiwanych zachowań w przypadku, gdy komponent zostanie odmontowany przed zakończeniem operacji asynchronicznej.

## Twoje zadanie

Twoim zadaniem jest zlokalizowanie i naprawienie wszystkich trzech błędów w powyższym kodzie. Pamiętaj, żeby skorzystać z odpowiednich praktyk Reacta dotyczących aktualizacji stanu, zarządzania efektami ubocznymi oraz obsługi stanu asynchronicznego

. Po dokonaniu zmian, upewnij się, że:

- Licznik poprawnie zwiększa i zmniejsza wartość.
- Każda zmiana wartości licznika jest logowana w konsoli.
- Aplikacja poprawnie radzi sobie z asynchronicznymi operacjami bez wywoływania błędów.

Pamiętaj, że debugowanie kodu to nie tylko naprawianie błędów, ale także rozumienie, dlaczego dany błąd występuje i jakie są najlepsze praktyki, aby go unikać w przyszłości.

### Wskazówki

1. **Aktualizacja Stanu**: Pamiętaj o niemutowalności stanu w React. Stan powinien być aktualizowany za pomocą funkcji aktualizującej, a nie przez bezpośrednią modyfikację.

2. **Użycie Hooka useEffect**: Upewnij się, że wszystkie zależności są prawidłowo zadeklarowane w tablicy zależności hooka `useEffect`. To zapewnia prawidłowe działanie efektów ubocznych.

3. **Asynchroniczne Operacje**: Podczas pracy z asynchronicznymi operacjami, ważne jest, aby sprawdzić, czy komponent jest nadal zamontowany przed aktualizacją stanu.


# Tworzenie i aktualizacja stanu

Twoim zadaniem jest stworzenie interaktywnej aplikacji w React, która będzie zarządzała listą zakupów. Użyjesz hooka `useState` do zarządzania stanem listy oraz do obsługi interakcji z użytkownikiem, takich jak dodawanie i usuwanie przedmiotów z listy, oraz prostą walidację danych wejściowych.

## Funkcjonalność aplikacji

1. **Tworzenie Stanu Listy Zakupów**:
   Użyj `useState` do stworzenia stanu, który będzie przechowywał listę zakupów. Każdy element listy powinien być obiektem zawierającym co najmniej nazwę przedmiotu.

2. **Dodawanie Przedmiotów do Listy**:
   Użytkownik powinien móc dodać nowy przedmiot do listy za pomocą formularza. Przed dodaniem, upewnij się, że pole formularza nie jest puste.

3. **Usuwanie Przedmiotów z Listy**:
   Obok każdego przedmiotu na liście powinien znajdować się przycisk, który pozwoli na jego usunięcie z listy.

4. **Wyświetlanie Listy**:
   Aktualna lista zakupów powinna być wyświetlana na ekranie, aby użytkownik mógł zobaczyć wszystkie dodane przedmioty.

### Przykładowe użycie i wynik

1. Użytkownik wpisuje "Mleko" w formularz i kliknie przycisk "Dodaj". "Mleko" pojawia się na liście zakupów.
2. Obok "Mleko" jest przycisk "Usuń", który po kliknięciu usuwa "Mleko" z listy.

## Lista kroków do Wykonania

1. Stwórz komponent `ShoppingList`, który będzie zawierał stan listy zakupów oraz logikę do jej zarządzania.
2. Użyj `useState` do stworzenia stanu listy zakupów.
3. Zaimplementuj formularz do dodawania nowych przedmiotów do listy.
4. Dodaj walidację formularza, aby zapobiec dodawaniu pustych elementów.
5. Zaimplementuj funkcję do usuwania przedmiotów z listy.
6. Wyświetl listę zakupów w komponencie `ShoppingList`.
7. Przetestuj swoją aplikację, dodając i usuwając różne przedmioty.

### Wskazówki:

- Pamiętaj o użyciu `useState` do zarządzania stanem listy i formularza.
- Użyj metody `map` do renderowania listy zakupów.
- Do usuwania elementów z listy wykorzystaj metodę `filter`.


# Kompleksowe zarządzenie stanem

Twoim głównym zadaniem jest skonfigurowanie i uruchomienie projektu eCommerce, który będzie rozwijany w trakcie całego kursu. Projekt ten posłuży jako praktyczne zastosowanie technologii, które poznasz. Zapoznasz się również z jego strukturą oraz zależnościami.

Pliki do tego projektu znajdziesz w pliku zip o nazwie "Projet e-commecrce - pliki do zadania 3.zip", dostępnym na platformie LMS. 

## Struktura projektu

Projekt eCommerce składa się z dwóch głównych części:

1. **Frontend (Folder `src`):**

   - Zawiera kod aplikacji frontendowej, czyli interfejs użytkownika, z którym będą wchodzić w interakcję użytkownicy.
   - W tym folderze znajdziesz pliki JavaScript, CSS oraz inne zasoby potrzebne do stworzenia frontu aplikacji.

2. **Backend (Folder `server`):**
   - Obejmuje kod aplikacji backendowej odpowiedzialnej za logikę biznesową i przetwarzanie danych.
   - Używa `json-server`, co jest prostym narzędziem do tworzenia fałszywego API, które będziesz wykorzystywać w celach testowych i rozwojowych dla aplikacji frontendowej.

## Uruchamianie projektu

Aby uruchomić projekt, wykonaj następujące kroki:

1. **Rozpakuj plik zip:**
   Rozpakuj plik zip z projektem do swojego lokalnego środowiska deweloperskiego.

2. **Instalacja Zależności:**
   Użyj komendy `npm install` w katalogu głównym projektu, aby zainstalować wszystkie niezbędne zależności.

3. **Uruchomienie Serwera Backendowego:**
   Otwórz terminal w folderze projektu i wykonaj komendę `npm run server`. Spowoduje to uruchomienie aplikacji backendowej, która będzie dostępna pod adresem `http://localhost:4001`.

4. **Uruchomienie Aplikacji Frontendowej:**
   W drugim terminalu uruchom komendę `npm run dev`. Ta komenda uruchomi aplikację frontendową, dostępną pod adresem `http://localhost:5173`.

5. **Przeglądanie Aplikacji:**
   Otwórz przeglądarkę internetową i przejdź do `http://localhost:5173`, aby zobaczyć działającą aplikację.

## Zadania do wykonania

### 1. Pobieranie produktów z API

Na stronie głównej (`src/pages/home/home.jsx`) dodaj pobieranie produktów z API. Wykorzystaj do tego metodę `fetchCategories` (`src/api/products.js`). Przekaż do niej obiekt ustawień:

```
{
   embedProducts: true,
   limitProducts: 4,
}
```

Dzięki temu każda kategoria będzie zawierać tablicę z 4 produktami. Następnie wynik działania tej funkcji, zapisz do stanu.

Na stronie powinny pojawić się dwie sekcje: "Coffee" i "Coffee Accessories" wraz z produktami.

### 2. Dodawanie produktów do ulubionych

Dodaj do przycisku dodawania do ulubionych (`src/components/favourite-button/favourite-button.jsx`) funkcjonalność dodawania produktu do ulubionych. Na ten moment informacja ta nie będzie nigdzie dalej wysyłana.

- Produkt dodany do ulubionych powinien wyświetlać ikonkę gwiazdki "wypełnioną" - skorzystaj z komponentu: `StarIcon`.
- Produkt niedodany do ulubionych ma wyświetlać `StarBorderIcon`.

### 3. Pobieranie produktów dla kategorii

Na stronie z kategorią (`src/pages/category/category.jsx`) dodaj pobieranie produktów dla konkretnej kategorii.

- `id` kategorii znajduje się w zmiennej `id` która pochodzi z hooka `useParams`.

- Użyj metody `fetchProducts` (src/api/products.js). Przekaż do niej obiekt ustawień: `{ categoryId: id }`. Jako zwrot z tej funkcji otrzymasz wszystkie produkty w danej kategorii.
- Zapisz je do stanu komponentu.
- Pamiętaj, aby sprawdzić, czy przechodzenie między stronami kategorii, odświeża listę plików (lista dependencji `useEffect`)

### 4. Pobieranie produktu

Na stronie z produktem dodaj pobieranie danych o konkretnym produkcie (`src/pages/product/product.jsx`).

- `id` produktu znajduje się w zmiennej `id` która pochodzi z hooka `useParams`
- Użyj metody `fetchProduct` (src/api/products.js). Przekaż do niego parametr `id`. Jako zwrot z tej funkcji otrzymasz wszystkie informacje o danym produkcie.
- Zapisz je do stanu komponentu.
