![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Ulepszanie wydajności aplikacji z Context API

Twoim zadaniem jest rozbudowa projektu "Coffee House". W poprzednim zadaniu zaimplementowałeś/aś zarządzanie stanem aplikacji za pomocą Context API. Teraz czas na optymalizację wydajności aplikacji.

## Krok po kroku

### Optymalizacja wydajności

- Zaimplementuj `React.memo` w komponentach, które nie wymagają częstego renderowania.
- Wykorzystaj `useMemo` do unikania zbędnych obliczeń w komponentach.
- Zaimplementuj `useCallback` w komponentach, które przekazują funkcje jako props.

### Testowanie wydajności

- Skorzystaj z narzędzi deweloperskich, takich jak React DevTools, do analizy wydajności aplikacji.
- Sprawdź, czy aplikacja renderuje się poprawnie i nie występują zbędne renderowania.
- Zidentyfikuj komponenty, które wymagają optymalizacji i zastosuj odpowiednie techniki.

## Kryteria akceptacji

- Komponenty aplikacji są optymalizowane pod kątem wydajności.
- Aplikacja renderuje się poprawnie i nie występują zbędne renderowania.
- Zaimplementowane techniki optymalizacji są zgodne z najlepszymi praktykami w React.


# Strategie Optymalizacji Kontekstowej

Twoim zadaniem jest optymalizacja aplikacji galerii zdjęć, która wykorzystuje Context API do zarządzania stanem wybranych obrazów. Użytkownik może zaznaczać zdjęcia jako ulubione, a aplikacja powinna wyświetlać listę ulubionych zdjęć bez niepotrzebnych renderowań.

## Krok po kroku:

1. **Użyj `useReducer` do zarządzania stanem ulubionych zdjęć**. Stan początkowy powinien być pusty. Reducer powinien obsługiwać akcje dodawania i usuwania zdjęć z ulubionych.
2. **Optymalizuj kontekst przy użyciu `useMemo`**. Zapamiętaj wartość kontekstu, aby uniknąć niepotrzebnych renderowań komponentów korzystających z kontekstu.
3. **Implementuj logikę dodawania i usuwania zdjęć z ulubionych**. Użyj funkcji zwracanych przez `useReducer` do zmiany stanu ulubionych zdjęć.
4. **Wykorzystaj `useContext` w komponencie prezentującym ulubione zdjęcia**, aby wyświetlić tylko te, które są aktualnie zaznaczone jako ulubione.

#### Oczekiwania:

- **Zoptymalizowany kod**: Poprzez zastosowanie `useReducer` i `useMemo` oczekujemy, że aplikacja będzie wydajna i uniknie niepotrzebnych renderowań, szczególnie przy aktualizacji stanu ulubionych zdjęć.
- **Poprawne zarządzanie stanem**: Stan ulubionych zdjęć powinien być zarządzany za pomocą `useReducer`, a zmiany w stanie powinny prowadzić tylko do aktualizacji niezbędnych komponentów.
- **Interaktywność**: Użytkownik powinien móc dodawać i usuwać zdjęcia z listy ulubionych, a zmiany te powinny być odzwierciedlone w interfejsie użytkownika bez opóźnień.

Twoim zadaniem jest uzupełnienie logiki komponentu `Gallery`, wykorzystując hook `useFavorites` do manipulacji stanem ulubionych zdjęć i wyświetlenia ich w aplikacji. Rozwiązanie powinno demonstrować zrozumienie i umiejętność stosowania zaawansowanych strategii optymalizacji w kontekście React Context API.
