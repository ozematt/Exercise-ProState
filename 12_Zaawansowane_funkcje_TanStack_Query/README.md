![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Implementacja paginacji projekcie

Twoim zadaniem jest zaimplementować paginację dla listy postów pobieranych z JSONPlaceholder API, wykorzystując TanStack Query. Paginacja ma na celu poprawę wydajności przez ładowanie ograniczonej liczby postów na stronę oraz umożliwienie użytkownikowi nawigacji między stronami wyników.

## Krok po kroku

### Konfiguracja TanStack Query

Upewnij się, że masz zainstalowaną bibliotekę TanStack Query i skonfigurowany `QueryClient` oraz `QueryClientProvider`.

### Pobieranie postów

Użyj JSONPlaceholder API (`https://jsonplaceholder.typicode.com/posts`) do pobierania postów. Endpoint ten zwraca wszystkie posty, ale również potrafi zwrócić wyniki z paginacją. Możesz wykorzystać parametry `_page` i `_limit` do paginacji, np. `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10` zwróci pierwszą stronę z 10 postami.

### Implementacja paginacji

- Dodaj stan w komponencie do przechowywania aktualnej strony
- Zaimplementuj logikę, która będzie pobierała określoną liczbę postów na stronę (np. 10 postów na stronę). Możesz to osiągnąć poprzez modyfikację zapytania do API lub filtrując dane po stronie klienta.

### Wykorzystanie `useQuery` do paginacji

- Skorzystaj z hooka `useQuery`, przekazując aktualną stronę jako część klucza zapytania, aby odróżnić zapytania dla różnych stron.
- Zaimplementuj przyciski lub paginację, aby użytkownik mógł nawigować między stronami.

## Wymagania

- Implementacja paginacji dla listy postów.
- Możliwość nawigacji między stronami wyników.
- Poprawne wykorzystanie `useQuery` z TanStack Query dla zapytań z paginacją.


# Tworzenie Infinite Query w aplikacji

Celem zadania jest stworzenie komponentu w aplikacji React, który wykorzystuje funkcję infinite query z biblioteki TanStack Query, aby stopniowo ładować dane (np. posty z bloga lub produkty sklepowe) podczas przewijania strony. Funkcjonalność ta umożliwi użytkownikom płynne i efektywne przeglądanie dużych zbiorów danych bez konieczności ręcznego przełączania stron.

## Krok po kroku

### Konfiguracja środowiska

- Upewnij się, że masz zainstalowaną bibliotekę TanStack Query oraz skonfigurowany `QueryClient` i `QueryClientProvider` w swoim projekcie.

### Implementacja infinite query

- Użyj hooka `useInfiniteQuery` z TanStack Query do ładowania danych w partii, definiując funkcję do pobierania danych, która obsługuje paginację na podstawie dostarczonych przez hook argumentów (`pageParam`).
- Zaimplementuj mechanizm, który będzie wykrywał moment, gdy użytkownik dojdzie do końca obecnie załadowanej listy danych, i automatycznie ładował kolejną partię danych. Możesz użyć hook useIntersection z biblioteki `@mantine/hooks`: https://mantine.dev/hooks/use-intersection/.
- Dane pobierz z https://jsonplaceholder.typicode.com/photos. Paginację uzyskaj poprzez dodanie parametrów `_page` i `_per_page` do adresu URL tak jak w poprzednim zadaniu.

### Wyświetlanie danych

- Przygotuj komponent, który będzie renderował załadowane dane, w formie siatki zdjęć z opisami.
- Dodaj wizualne wskaźniki ładowania podczas pobierania danych oraz obsługę potencjalnych błędów.

### Nawigacja między danymi

- Zaimplementuj przycisk lub mechanizm (np. Intersection Observer), który pozwoli na automatyczne ładowanie kolejnych partii danych, gdy użytkownik przewinie listę do końca.

## Wymagania

- Użycie `useInfiniteQuery` do ładowania i wyświetlania danych w partii.
- Automatyczne ładowanie kolejnych partii danych przy przewijaniu.
- Obsługa stanów ładowania i błędów.


# Optymalizacja strony e-commerce

Twoim zadaniem jest rozbudowa aplikacji sklepowej, która umożliwia przeglądanie produktów, zarządzanie koszykiem oraz składanie zamówień. Jest to aplikacja, która została stworzona w poprzednich zadaniach. Twoim zadaniem jest optymalizacja aplikacji, tak aby działała szybciej i była bardziej wydajna.

## Krok po kroku

### Optymalizacja wydajności

- Zidentyfikuj, które komponenty aplikacji są renderowane niepotrzebnie i zaimplementuj `React.memo` w tych komponentach.
- Zaimplementuj `useCallback` w komponentach, które przekazują funkcje jako props.
- Zaimplementuj `useMemo` w komponentach, które wykorzystują obliczenia w celu optymalizacji wydajności.

### Optymalizacja ładowania

- Zaimplementuj `React.lazy` w komponentach, które są ładowane tylko wtedy, gdy są potrzebne.

### Infinite queries

- Zaimplementuj `useInfiniteQuery` z biblioteki React Query w celu ładowania produktów w nieskończoność.
- Użyj również `useIntersection` w celu ładowania kolejnych produktów, gdy użytkownik zbliży się do końca listy produktów.

### Auto-refetching

- Zaimplementuj `useQuery` z opcją `refetchInterval` w celu automatycznego odświeżania danych o zamówieniach co 5 sekund.
- Otwórz nowe okno przeglądarki i złóż zamówienie, a następnie zobacz, jak dane są automatycznie odświeżane co 5 sekund.

## Wymagania

- Aplikacja powinna być zoptymalizowana pod względem wydajności.
- Aplikacja powinna wykorzystywać `React.lazy` do ładowania komponentów tylko wtedy, gdy są potrzebne.
- Aplikacja powinna wykorzystywać `useInfiniteQuery` do ładowania produktów w nieskończoność.
- Aplikacja powinna wykorzystywać `useIntersection` do ładowania kolejnych produktów, gdy użytkownik zbliży się do końca listy produktów.
- Aplikacja powinna wykorzystywać `useQuery` z opcją `refetchInterval` do automatycznego odświeżania danych o zamówieniach co 5 sekund.
- Aplikacja powinna wykorzystywać `React.memo`, `useCallback` oraz `useMemo` w celu optymalizacji wydajności.
