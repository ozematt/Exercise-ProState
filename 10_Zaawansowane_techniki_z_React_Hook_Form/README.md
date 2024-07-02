![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Debugowanie formularzy z React Hook Form

Twoim zadaniem jest zidentyfikowanie i naprawienie błędów w podanym kodzie formularza, który został stworzony z użyciem React Hook Form. Formularz zawiera typowe błędy, takie jak niewłaściwa walidacja, błędy w integracji z biblioteką komponentów UI Material UI (MUI) oraz problemy z zarządzaniem stanem.

## Lista błędów do zidentyfikowania i naprawienia

1. **Błąd w destrukturyzacji `formState`:** W kodzie brakuje poprawnej destrukturyzacji `formState` przy użyciu React Hook Form, co jest konieczne do dostępu do obiektu `errors`.

2. **Nieprawidłowy wzorzec email:** W regexie używającym do walidacji adresu email brakuje ukośnika poprzedzającego kropkę, co powoduje niewłaściwą walidację. **Użyj zod** do walidacji tego formularza.

3. **Niewłaściwa nazwa pola "Username":** W `register` użyto `"userName"`, podczas gdy przy sprawdzaniu błędów używane jest `errors.userName`, co może prowadzić do problemów z niespójnością nazw.


# Implementacja zaawansowanych technik w projekcie

Zadanie polega na stworzeniu formularza zgłoszeniowego dla wydarzenia, wykorzystując React Hook Form. Formularz powinien zawierać pola dla danych osobowych uczestnika (imię, nazwisko, adres e-mail) oraz preferencji dotyczących uczestnictwa w wydarzeniu. Twoim zadaniem jest zaimplementować zaawansowane techniki React Hook Form, w tym:

1. **Optymalizacja renderowania komponentów formularza** przy użyciu `React.memo` oraz technik unikania niepotrzebnych renderowań.
2. **Monitorowanie zmian** w formularzu przy użyciu funkcji `watch` oraz dynamiczne dostosowywanie formularza w zależności od wprowadzonych danych (np. pokazywanie dodatkowych opcji dla wybranych preferencji uczestnictwa).
3. **Integrację z zewnętrzną biblioteką UI** (Material UI) dla poprawy estetyki formularza i user experience.

## Szczegółowe wymagania

### Pola formularza

- Imię (tekstowe)
- Nazwisko (tekstowe)
- Adres e-mail (tekstowe, z walidacją formatu e-mail)
- Preferencje uczestnictwa (radio buttons: "online", "osobiście")
- Jeśli użytkownik wybierze "osobiście", pokazać dodatkowe pole "Preferencje dietetyczne" (tekstowe)

### Walidacja

- Wszystkie pola są wymagane.
- Adres e-mail musi być w poprawnym formacie.
- Do walidacji użyj zewnętrznej biblioteki - `zod`.

### Zaawansowane techniki

- Użyj `React.memo` dla komponentów formularza, aby uniknąć niepotrzebnych renderowań.
- Wykorzystaj funkcję `watch` do monitorowania wyboru w polu "Preferencje uczestnictwa" i odpowiedniego dostosowania formularza.
- Integruj formularz z komponentami Material UI, aby polepszyć wygląd i user experience.
- Do obsługi pola "Participation Preference" użyj `Controller` z React Hook Form.


# Integracja React Hook Form w istniejącej aplikacji

Wracamy do projektu aplikacji "Coffee House". Twoim zadaniem jest dodanie obsługi wyświetlania błędów walidacji w formularzu rejestracji i logowania użytkownika. Do UI formularza wykorzystano bibliotekę Material-UI. Dlatego musimy się z nią zintegrować.

## Krok po kroku

1. Zastosuj propsy `error` i `helperText` do pól formularza w komponentach `SignUp` i `Login`.
2. Wydziel komponenty `TextField` do osobnego komponentu który za pomocą contextu będzie:
   - rejestrowany
   - wyświetlał błędy walidacji
   - wyświetlał komunikaty pomocnicze
   - przekazywał wartość pola do formularza
3. Zintegruj komponent `TextField` z formularzem w komponentach `SignUp` i `Login`.
4. Sprawdź, czy błędy walidacji są wyświetlane poprawnie.
5. Upewnij się, że komunikaty pomocnicze są wyświetlane zgodnie z oczekiwaniami.

## Przydatne informacje

W celu wyświetlenia błędów walidacji w formularzu, skorzystaj z propsów `error` i `helperText` dostępnych w komponencie `TextField` z Material-UI.

## Kryteria akceptacji

- Błędy walidacji są wyświetlane w formularzu rejestracji i logowania.
- Komunikaty pomocnicze są wyświetlane zgodnie z oczekiwaniami.
- Komponent `TextField` jest zintegrowany z formularzem w komponentach `SignUp` i `Login`.
- Zastosowano propsy `error` i `helperText` do pól formularza.
- Formularz działa poprawnie.
- Zastosowano Material-UI do budowy interfejsu użytkownika.
