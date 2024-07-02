![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Analiza kodu: Optymalizacja stanu

Twoim zadaniem jest głęboka analiza i optymalizacja dostarczonego kodu aplikacji React. Skoncentruj się na wykryciu i eliminacji problemów związanych z nadmiernym renderowaniem, a także na optymalizacji zarządzania stanem przy użyciu hooków `useMemo`, `useCallback` oraz `useReducer`.

Masz do czynienia z fragmentem kodu aplikacji do zarządzania listą zadań. Aplikacja ta pozwala na dodawanie nowych zadań, ich edycję, oznaczanie jako wykonane/niewykonane oraz filtrowanie. Twój cel to zidentyfikować potencjalne problemy z wydajnością i zaproponować usprawnienia.

## Kroki do wykonania

1. **Analiza Kodu:** Zidentyfikuj, jak obecna struktura kodu i logika zarządzania stanem mogą prowadzić do nadmiernego renderowania. Szczególnie zwróć uwagę na obsługę stanu zadań i filtrowania.

2. **Zastosowanie `useState`:** Oceń, czy obecne użycie `useState` jest efektywne. Rozważ, czy logika filtrowania powinna być obsługiwana inaczej.

3. **Propozycja Optymalizacji:** Opracuj strategię optymalizacji, która zmniejszy nadmierne renderowanie i poprawi zarządzanie stanem. Zasugeruj, jak `useMemo` i `useCallback` mogą zostać wykorzystane do optymalizacji komponentów, szczególnie w kontekście interakcji użytkownika i filtrowania zadań.

4. **Rozważanie `useReducer` i Stanu Aplikacji:** Zaplanuj, jak można poprawić zarządzanie stanem zadań za pomocą `useReducer`. Czy możliwe jest lepsze wykorzystanie akcji reducera do zarządzania stanem filtrowania?

5. **Uzasadnienie Propozycji:** Dla każdego zaproponowanego rozwiązania, wyjaśnij, dlaczego uważasz, że jest ono skuteczne w redukcji nadmiernego renderowania i jak wpłynie na ogólną wydajność aplikacji.

Pamiętaj, że celem tego zadania jest nie tylko poprawa wydajności aplikacji, ale również zrozumienie, jak różne hooki React mogą być wykorzystane do efektywnego zarządzania stanem i renderowaniem komponentów.


# Tworzenie wydajnego komponentu

Celem zadania jest stworzenie i optymalizacja komponentu formularza do dodawania komentarzy, wykorzystując hooki `useState`, `useMemo` oraz `useCallback` w celu zapewnienia wysokiej wydajności oraz uniknięcia nadmiernego renderowania.

Twój komponent `UserManagementPanel` ma umożliwić użytkownikom dodawanie komentarzy do posta, wyświetlanie listy aktualnych komentarzy oraz filtrację komentarzy według słowa kluczowego. Optymalizacja wydajności jest kluczowa, zwłaszcza przy dużej liczbie komentarzy.

### Oczekiwany efekt

1. **Dodawanie Komentarzy:** Użytkownik powinien być w stanie dodać nowy komentarz za pomocą pola tekstowego i przycisku "Dodaj".
2. **Wyświetlanie Komentarzy:** Lista dodanych komentarzy powinna być wyświetlana poniżej formularza.
3. **Filtrowanie Komentarzy:** Użytkownik powinien móc filtrować komentarze na podstawie słowa kluczowego wprowadzonego w osobnym polu tekstowym.
4. **Unikanie Nadmiernego Renderowania:** Zwróć szczególną uwagę na optymalizację renderowania komponentów, wykorzystując `useCallback` i `useMemo`, aby zminimalizować wpływ na wydajność.
5. **Zarządzanie Stanem:** Zarządzaj stanem formularza, listy komentarzy i filtra za pomocą `useState`.

Pamiętaj, aby skupić się na praktycznym zastosowaniu hooków React (`useState`, `useMemo`, `useCallback`) do zarządzania stanem i optymalizacji komponentów, mając na uwadze najlepsze praktyki i wzorce projektowe zapewniające wydajność aplikacji React.


# Optymalizacja wydajności z hookami

Celem zadania jest stworzenie i optymalizacja komponentu panelu administracyjnego, który umożliwia przeglądanie, dodawanie i filtrowanie użytkowników. Zadanie skupia się na wykorzystaniu hooków `useState`, `useMemo`, `useCallback`, `useReducer`, oraz `useDebounce` do zapewnienia optymalnej wydajności i unikania nadmiernego renderowania.

Twój komponent `UserManagementPanel` będzie służył do zarządzania listą użytkowników w systemie. Powinien on umożliwiać dodawanie nowych użytkowników, wyszukiwanie użytkowników po imieniu oraz filtrowanie ich według roli. Optymalizacja wydajności jest kluczowa, szczególnie przy dużym wolumenie danych.

### Oczekiwany efekt

1. **Dodawanie Użytkowników:** Umożliw użytkownikom dodawanie nowych użytkowników do listy za pomocą formularza.
2. **Wyszukiwanie i Filtrowanie:** Implementuj funkcjonalność wyszukiwania i filtrowania użytkowników, wykorzystując `useDebounce` do optymalizacji wyszukiwania w czasie rzeczywistym.
3. **Zarządzanie Stanem:** Użyj `useState` do przechowywania stanu użytkowników oraz `useReducer` do zarządzania akcjami związanymi z użytkownikami (dodawanie, filtrowanie).
4. **Optymalizacja Wydajności:** Wykorzystaj `useMemo` do optymalizacji filtrowanej listy użytkowników i `useCallback` do zapewnienia, że funkcje callback nie są niepotrzebnie tworzone na nowo przy każdym renderowaniu.

### Kroki do wykonania

1. **Implementacja Formularza Dodawania Użytkownika:** Stwórz formularz umożliwiający dodanie nowego użytkownika (imienia i roli).
2. **Implementacja Wyszukiwania i Filtrowania:** Dodaj pole do wyszukiwania użytkowników po imieniu oraz opcje filtrowania po roli, wykorzystując `useDebounce` do optymalizacji.
3. **Optymalizacja Listy Użytkowników:** Zastosuj `useMemo` do optymalizacji wyświetlania filtrowanej listy użytkowników.
4. **Zapewnienie Optymalnej Wydajności:** Upewnij się, że wszystkie funkcje są optymalizowane za pomocą `useCallback`, a zarządzanie stanem użytkowników odbywa się przez `useReducer`.
