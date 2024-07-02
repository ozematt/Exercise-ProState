![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Praktyczne Zastosowanie Best Practices w Redux Toolkit

### Zadanie praktyczne: Praktyczne Zastosowanie Best Practices w Redux Toolkit

#### Cel:

Kursant potrafi stosować najlepsze praktyki Redux Toolkit (RTK) w rzeczywistych projektach.

#### Opis zadania:

Zadanie polega na zastosowaniu wybranych najlepszych praktyk RTK w istniejącej aplikacji zarządzającej listą zadań (todo list). Kursant powinien zaimplementować `createEntityAdapter` do zarządzania znormalizowanym stanem oraz optymalizować selektory za pomocą `createSelector`.

#### Krok po kroku:

1. **Zastosowanie `createEntityAdapter` do zarządzania zadaniami:**

   - Przekształć istniejący stan zadań w aplikacji, używając `createEntityAdapter` do zarządzania stanem. Zaimplementuj podstawowe operacje CRUD (Create, Read, Update, Delete) dla zadań.

2. **Optymalizacja Selektorów:**
   - Stwórz selektory za pomocą `createSelector` do wybierania zadań na podstawie różnych filtrów, np. wyświetlanie tylko zadań aktywnych czy ukończonych.

#### Kryteria Akceptacji:

1. **Poprawna Implementacja Adaptera:**

   - Adapter zadania został poprawnie skonfigurowany za pomocą `createEntityAdapter`.
   - Akcje do dodawania, usuwania, aktualizowania i pobierania zadań są w pełni funkcjonalne.

2. **Zaimplementowane Operacje CRUD:**

   - Możliwość dodawania nowego zadania.
   - Możliwość usuwania istniejącego zadania.
   - Możliwość aktualizacji istniejącego zadania.
   - Poprawne wyświetlanie listy zadań.

3. **Optymalizacja Selektorów:**

   - Selektory są memoizowane za pomocą `createSelector`.
   - Selektory efektywnie filtrują zadania na podstawie stanu (np. wszystkie, aktywne, ukończone).

4. **Zachowanie Poprawności Stanu:**

   - Stan aplikacji jest zawsze aktualny i odpowiada interakcjom użytkownika.
   - Zmiany w stanie są widoczne w UI bez opóźnień lub błędów.

5. **Integracja i Testy:**
   - Funkcjonalność jest w pełni zintegrowana z istniejącym UI aplikacji.
   - Przeprowadzone zostały testy manualne potwierdzające działanie wszystkich funkcjonalności związanych z zarządzaniem zadaniami.

Zastosowanie `createEntityAdapter` pozwoli na ustrukturyzowane i efektywne zarządzanie zadaniami, podczas gdy optymalizacja selektorów zapewni szybsze i bardziej efektywne przetwarzanie danych w aplikacji. Te zmiany nie tylko poprawią wydajność aplikacji, ale także ułatwią przyszłe modyfikacje i rozwój projektu.
