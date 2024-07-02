![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Zarządzanie formularzami z useReducer

Twoim zadaniem jest uzupełnienie brakujących części kodu w customowym hooku oraz komponencie formularza, aby stworzyć funkcjonalny formularz zarządzany za pomocą `useReducer`. Formularz powinien zawierać logikę aktualizacji pól formularza i przesłania danych, a także obsługiwać dodatkową akcję w reducerze.

## Krok po kroku:

1. **Uzupełnienie Reducera (`formReducer`):**

   - Zaimplementuj akcję `UPDATE_FIELD` w `formReducer`. Akcja ta powinna aktualizować wartość określonego pola formularza w stanie. Powinna obsługiwać zmianę stanu dla każdego pola formularza.
   - Dodaj dodatkową akcję, na przykład `RESET_FORM`, która będzie resetować stan formularza do wartości początkowych.

2. **Implementacja Customowego Hooka (`useGallery`):**

   - Zaimplementuj funkcję `handleChange`, która będzie wywoływać akcję `UPDATE_FIELD` za każdym razem, gdy użytkownik wprowadzi zmianę w polu formularza.
   - Zaimplementuj funkcję `handleSubmit`, która będzie obsługiwać przesłanie formularza (wystarczy wyświetlić dane w konsoli).
   - Dodaj funkcję do resetowania formularza, która wykorzysta nowo dodaną akcję `RESET_FORM`.

3. **Zastosowanie Hooka w Komponencie Formularza (`MyForm`):**
   - Wykorzystaj hook `useGallery` w komponencie `MyForm` do zarządzania stanem formularza.
   - Uzupełnij komponent formularza o odpowiednie obsługi zdarzeń dla pól formularza oraz przycisku wysyłania.

## Oczekiwania

Po zakończeniu formularz powinien być w pełni funkcjonalny, pozwalając na wprowadzanie danych, ich przesyłanie oraz resetowanie stanu formularza.


# Custom hooks w interakcjach użytkownika

Twoim zadaniem jest stworzenie customowego hooka `useGallery` z użyciem `useReducer` do zarządzania galerią zdjęć. Galeria powinna umożliwiać użytkownikowi przeglądanie zdjęć za pomocą przycisków "Następne" i "Poprzednie".

## Krok po kroku

1. **Stwórz Customowy Hook `useGallery`**:

   - Hook powinien wykorzystywać `useReducer` do przechowywania i zarządzania stanem galerii.
   - Stan powinien zawierać aktualnie wybrane zdjęcie oraz listę wszystkich zdjęć.
   - Implementuj akcje `NEXT_PHOTO` i `PREV_PHOTO` w reducerze, aby zmieniać aktualnie wybrane zdjęcie.

2. **Wykorzystaj lokalne zdjęcia**:

   - Jako źródło zdjęć użyj gotowej tablicy `photos` w komponencie `Gallery`.

3. **Implementacja Galerii**:
   - Użyj hooka `useGallery` w komponencie `Gallery`.
   - Komponent `Gallery` powinien wyświetlać aktualnie wybrane zdjęcie oraz przyciski "Następne" i "Poprzednie" do zmiany obrazów.


# Debugowanie kodu z useReducer

W ramach tego zadania Twoim celem będzie zidentyfikowanie i naprawienie błędów w kodzie wykorzystującym hook `useReducer`. W pliku `Tasks.jsx` znajduje się fragment kodu aplikacji zarządzającej listą zadań. W kodzie tym zawarte są typowe błędy, które często pojawiają się podczas pracy z `useReducer` w React. Twoim zadaniem jest znalezienie i naprawienie tych błędów.

## Instrukcje

1. **Analiza Kodu**: Zacznij od dokładnego przeczytania kodu i zrozumienia, jak powinien on działać. Zwróć uwagę na to, jak są zarządzane stany i akcje w reducerze.

2. **Identyfikacja Błędów**: Spróbuj znaleźć błędy, które mogłyby powodować nieprawidłowe działanie aplikacji. Błędy mogą dotyczyć zarówno logiki reducera, jak i sposobu, w jaki jest on używany w komponencie.

3. **Naprawa Błędów**: Po zidentyfikowaniu błędów, wprowadź niezbędne zmiany w kodzie, aby poprawić jego działanie.

## Wytyczne do Debugowania:

1. **Reducer**:

   - Zwróć uwagę na sposób aktualizacji listy zadań i licznika zadań.
   - Sprawdź warunki w filtracji zadań.
   - Przejrzyj, jak stan jest resetowany do wartości początkowych.

2. **Komponent**:
   - Sprawdź logikę dodawania nowych zadań.
   - Zwróć uwagę na sposób, w jaki są obsługiwane zdarzenia kliknięcia.
   - Upewnij się, że klucze i właściwości obiektów są używane poprawnie.

To zadanie ma na celu sprawdzenie umiejętności kursanta w zakresie identyfikacji i rozwiązywania typowych błędów występujących podczas pracy z `useReducer` oraz ogólnych praktyk w React.

## Oczekiwany Efekt:

Po poprawieniu błędów aplikacja powinna poprawnie dodawać nowe zadania do listy oraz umożliwiać ich usuwanie. Licznik zadań (`taskCount`) powinien być aktualizowany w odpowiedni sposób przy każdym dodaniu nowego zadania.
