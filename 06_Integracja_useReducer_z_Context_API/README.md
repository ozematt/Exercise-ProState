![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Tworzenie własnego stanu globalnego

Twoim zadaniem jest stworzenie globalnego systemu zarządzania preferencjami użytkownika w aplikacji React, używając `useReducer` i Context API. Ten system pozwoli na łatwe przechowywanie i dostęp do ustawień takich jak preferowany motyw (jasny/ciemny), język aplikacji oraz włączone/wyłączone powiadomienia.

## Krok po kroku

1. **Utworzenie Contextu i Providera:**

   - Utwórz `UserPreferencesContext` używając `React.createContext()`.
   - Stwórz komponent `UserPreferencesProvider`, który będzie używał `useReducer` do zarządzania stanem preferencji.

2. **Definicja Reducera:**

   - Zaimplementuj reducer obsługujący akcje takie jak `SET_THEME`, `SET_LANGUAGE`, `TOGGLE_NOTIFICATIONS`. Stan początkowy może zawierać domyślne ustawienia, np. `{ theme: 'light', language: 'en', notifications: true }`.

3. **Wykorzystanie Contextu w aplikacji:**

   - W głównym komponencie aplikacji (np. `App.js`) opakuj całą aplikację komponentem `UserPreferencesProvider`.
   - Utwórz komponenty konfiguracyjne, takie jak przełącznik motywu czy selektor języka, które będą korzystać z `useContext(UserPreferencesContext)` do odczytu i aktualizacji globalnego stanu preferencji.

4. **Implementacja interfejsu użytkownika:**
   - Dodaj interfejs umożliwiający użytkownikowi zmianę preferencji. Może to być panel ustawień z przełącznikami i dropdownami do zmiany motywu, języka i ustawień powiadomień.
   - Implementuj logikę aktualizacji stanu globalnego przy użyciu dispatchera z `useReducer` po zmianie przez użytkownika któregokolwiek z ustawień.

## Oczekiwania

Po zakończeniu zadania, aplikacja powinna:

- Posiadać globalny stan przechowujący preferencje użytkownika, dostępny w dowolnym miejscu aplikacji.
- Umożliwiać użytkownikowi łatwą zmianę preferencji (motyw, język, powiadomienia) za pomocą dedykowanego interfejsu.
- Reagować na zmiany w preferencjach użytkownika poprzez aktualizację interfejsu użytkownika zgodnie z nowymi ustawieniami (np. zmiana motywu).


# Debugowanie i optymalizacja

Twoim zadaniem jest zidentyfikowanie typowych problemów i zastosowanie odpowiednich technik optymalizacji, aby poprawić wydajność aplikacji.

## Krok po kroku

1. **Analiza wydajności:** Użyj narzędzi developerskich React (np. React Developer Tools) do analizy wydajności aplikacji. Zwróć uwagę na komponenty, które ulegają niepotrzebnym renderowaniom.

2. **Optymalizacja `useReducer`:** Sprawdź, czy reducer jest odpowiednio strukturyzowany i czy akcje są wywoływane tylko wtedy, gdy jest to konieczne. Zastanów się, czy niektóre akcje mogą być połączone lub zredukowane, aby zmniejszyć liczbę aktualizacji stanu.

3. **Memoizacja callbacków:** Zidentyfikuj callbacki przekazywane do komponentów i użyj hooka `useCallback`, aby zapobiec ich niepotrzebnemu redefiniowaniu przy każdym renderowaniu.

4. **Optymalizacja Context API:** Upewnij się, że Context API nie powoduje niepotrzebnych renderowań w komponentach konsumujących. Rozważ zastosowanie wzorca `Context selector` lub podział kontekstu na mniejsze części, jeśli jest to uzasadnione.

5. **Wykorzystanie `React.memo`:** Owrapuj komponenty w `React.memo`, aby zapobiec ich renderowaniu, gdy propsy, które otrzymują, się nie zmieniają.

6. Rozważ, czy użycie Context API jest tutaj uzasadnione, czy też istnieją lepsze sposoby zarządzania stanem dla tego przypadku.

## Wskazówka

Podczas debugowania i optymalizacji pamiętaj, że każda zmiana w kodzie powinna być przemyślana i uzasadniona. Nie wszystkie techniki optymalizacji będą odpowiednie dla każdego scenariusza. Ważne jest, aby zrozumieć przyczyny problemów wydajnościowych i adekwatnie do nich dobierać rozwiązania.

## Typowe problemy i obszary do optymalizacji

1. **Nadużywanie Context API:** Użycie Context API dla zbyt prostego stanu, który mógłby być zarządzany lokalnie.
2. **Optymalizacja renderowania komponentów:** Komponenty mogą być niepotrzebnie renderowane ponownie z powodu nowych obiektów przekazywanych do `Provider`.
3. **Niewykorzystanie memoizacji:** Brak użycia `React.memo` lub `useMemo` do optymalizacji komponentów, które nie zależą bezpośrednio od zmieniającego się stanu.
4. **Zbyt ogólne użycie jednego reducera:** W dużych aplikacjach, pojedynczy reducer obsługujący cały stan może stać się zbyt skomplikowany i trudny do zarządzania.
