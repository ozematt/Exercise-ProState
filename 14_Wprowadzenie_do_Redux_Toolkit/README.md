![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Rozwiązywanie Problemów z Redux Toolkit

Twoim zadaniem jest debugowanie istniejącego kodu aplikacji, która wykorzystuje Redux Toolkit. Kod zawiera kilka błędów, które wpływają na działanie aplikacji. Błędy dotyczą różnych aspektów użycia Redux Toolkit, w tym konfiguracji `configureStore`, definicji `createSlice`, a także obsługi akcji asynchronicznych przy użyciu `createAsyncThunk`.

## Wskazówki

Podczas debugowania zwróć uwagę na następujące elementy:

1. **Konfiguracja Store:**

   - Sprawdź, czy `configureStore` jest poprawnie skonfigurowany i czy wszystkie potrzebne middleware są dołączone.
   - Upewnij się, że `reducer` jest poprawnie przekazany do `configureStore`.

2. **Definicja Slice:**

   - Zwróć uwagę na definicję `initialState` i upewnij się, że wszystkie pola są zainicjowane odpowiednimi wartościami.
   - Sprawdź, czy akcje i reduktory są poprawnie zdefiniowane w `createSlice`.
   - Upewnij się, że nazwy akcji są unikalne w obrębie aplikacji.

3. **Akcje Asynchroniczne:**
   - Analizując `createAsyncThunk`, sprawdź, czy logika asynchroniczna jest poprawnie obsługiwana.
   - Zwróć uwagę na obsługę stanów `pending`, `fulfilled` i `rejected` w reducerze.

### Twoje zadania:

- Znajdź i napraw błędy w kodzie.
- Upewnij się, że aplikacja poprawnie obsługuje wszystkie stany akcji asynchronicznych.
- Sprawdź, czy store jest prawidłowo skonfigurowany.


# Implementacja Nowej Funkcjonalności z Redux Toolkit

Twoim zadaniem jest dodanie systemu powiadomień do istniejącego projektu. Funkcjonalność ta będzie wykorzystywać `createSlice` i `createAsyncThunk` z Redux Toolkit do obsługi stanu powiadomień i ich asynchronicznego pobierania z serwera.

## Krok po kroku

1. **Konfiguracja Slice'a dla Powiadomień:**

   Zdefiniuj `notificationsSlice` używając `createSlice`. Slice powinien zarządzać stanem powiadomień, w tym ich listą i stanem ładowania. Powiadomienia powinny być pobrane z JSON Placeholder API: `https://jsonplaceholder.typicode.com/posts`.

2. **Tworzenie Akcji Asynchronicznej:**

   Użyj `createAsyncThunk` do zdefiniowania akcji asynchronicznej `fetchNotifications`, która będzie pobierać powiadomienia z zewnętrznego API.

3. **Integracja z Reduktorem:**

   Zintegruj akcję asynchroniczną `fetchNotifications` z `notificationsSlice`, dodając obsługę dla stanów `pending`, `fulfilled`, `rejected`.

4. **Integracja z UI:**

   Zaimplementuj komponent UI, który wykorzystuje `useDispatch` do wyzwalania `fetchNotifications` i `useSelector` do odczytania stanu powiadomień. Dodaj przycisk do ręcznego odświeżania powiadomień i wyświetlaj ich listę.

## Kryteria akceptacji

Aby uznano zadanie za zakończone sukcesem, musi spełniać następujące kryteria akceptacji:

- Store aplikacji jest skonfigurowany z wykorzystaniem `configureStore` z Redux Toolkit.
- Reduktor powiadomień jest dodany do store'a poprzez `configureStore`.

- Został utworzony `notificationsSlice` z początkowym stanem zawierającym puste powiadomienia i stan ładowania ustawiony na `false`.
- Slice zawiera akcje reduktora, w tym przynajmniej `clearNotifications`, która pozwala na czyszczenie listy powiadomień.

- Utworzono akcję asynchroniczną `fetchNotifications` z wykorzystaniem `createAsyncThunk`, która pobiera dane z zewnętrznego API.
- Akcja asynchroniczna obsługuje wszystkie stany: `pending`, `fulfilled`, `rejected`.

- `notificationsSlice` poprawnie obsługuje akcje asynchroniczne zwracane przez `fetchNotifications`, aktualizując stan w zależności od wyniku akcji.

- Stworzono komponent `NotificationsPanel`, który wyświetla powiadomienia i zawiera przycisk do ich odświeżania.
- Komponent korzysta z `useDispatch` do wyzwalania `fetchNotifications` i `useSelector` do odczytywania stanu powiadomień.
- UI poprawnie wyświetla stan ładowania podczas pobierania powiadomień oraz aktualizuje listę powiadomień po ich pobraniu.

- Stan ładowania jest odpowiednio aktualizowany w UI podczas wykonywania akcji asynchronicznej.
- W przypadku błędu przy pobieraniu powiadomień, aplikacja poprawnie go obsługuje, np. poprzez wyświetlenie komunikatu błędu.
