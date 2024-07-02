![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Implementacja walidacji z użyciem Zod w formularzu

Twoim zadaniem jest stworzenie walidacji i obsługi formularza do wysyłania zamówienia.

## Pola formularza do zaimplementowania

- Imię i nazwisko – pole tekstowe (wymagane).
- Adres e-mail – pole tekstowe (wymagane, format e-mail).
- Adres dostawy – pole tekstowe (wymagane, minimum 10 znaków).
- Kod pocztowy – pole tekstowe (wymagane, format kodu pocztowego: XX-XXX).
- Ilość produktów – pole numeryczne (wymagane, minimum 1).

## Krok po kroku

### Instalacja niezbędnych pakietów

Upewnij się, że React Hook Form i Zod są zainstalowane w projekcie.

### Integracja React Hook Form i Zod

Wykorzystaj hook `useForm` z React Hook Form i zintegruj schemat walidacji Zod z formularzem, korzystając z `zodResolver`.

### Implementacja pól formularza

Dodaj do formularza wcześniej określone pola, korzystając z metody register hooka `useForm` dla każdego z pól.

### Wyświetlanie komunikatów o błędach

Zaimplementuj logikę wyświetlania komunikatów o błędach walidacji pod każdym polem formularza, korzystając z obiektu errors zwróconego przez `useForm`.

### Obsługa wysyłania formularza

Dodaj funkcjonalność obsługi wysyłania formularza (`onSubmit`), która zweryfikuje dane i wyświetli je w konsoli lub przekaże do dalszej obróbki.


# Integracja React Hook Form w istniejącej aplikacji

Wracamy do projektu aplikacji "Coffee House". Twoim zadaniem jest dodanie obsługi react-hook-form do formularza rejestracji użytkownika, a także dodanie walidacji do formularza logowania.

Formularz rejestracji powinien zawierać pola dla imienia, nazwiska, adresu e-mail, hasła, powtórzenia hasła oraz checkboxa umożliwiającego subskrypcję newslettera. Po zatwierdzeniu formularza dane powinny zostać wyświetlone w konsoli. Znajduje się on w `pages/sign-up/sign-up.jsx`.

## Krok po kroku

1. Zainstaluj bibliotekę `react-hook-form` w projekcie, jeśli jeszcze tego nie zrobiłeś/aś.
2. Zaimportuj hook `useForm` z biblioteki `react-hook-form`.
3. Użyj hooka `useForm` do stworzenia instancji formularza w komponencie.
4. Zarejestruj pola formularza: `firstName`, `lastName`, `email`, `password`, `confirmPassword` oraz `newsletter` za pomocą metody `register`.
5. Użyj metody `handleSubmit` z hooka `useForm` do obsługi wysyłki formularza.
6. W funkcji obsługującej wysyłkę (`onSubmit`) wyświetl dane formularza w konsoli.

### Walidacja formularza

1. Dodaj walidację do formularza rejestracji:
   - `firstName` oraz `lastName` - wymagane,
   - `email` - wymagane, walidacja poprawności adresu e-mail,
   - `password` - wymagane, minimalna długość 8 znaków,
   - `confirmPassword` - wymagane, zgodność z polem `password`,
   - `newsletter` - opcjonalne.
2. Komunikaty błędów wyświetlaj w konsoli.

### Walidacja formularza logowania

1. Dodaj walidację do formularza logowania:
   - `email` - wymagane, walidacja poprawności adresu e-mail,
   - `password` - wymagane, minimalna długość 8 znaków.
2. Komunikaty błędów wyświetlaj w konsoli.

### Przydatne informacje

W celu zarejestrowania pól formularza przy pomocy hooka `useForm` skorzystaj z metody `register`. Aby obsłużyć wysyłkę formularza, użyj metody `handleSubmit` zwracanej przez hooka `useForm`.

## Kryteria akceptacji

- Formularz rejestracji zawiera pola dla imienia, nazwiska, adresu e-mail, hasła, powtórzenia hasła oraz checkboxa umożliwiającego subskrypcję newslettera.
- Formularz logowania zawiera pola dla adresu e-mail oraz hasła.
- Dane formularzy są wyświetlane w konsoli po zatwierdzeniu formularza.
- Formularze działają poprawnie.
- Zastosowano hook `useForm` z biblioteki `react-hook-form`.
- Pola formularzy są zarejestrowane za pomocą metody `register`.
- Wysyłka formularzy jest obsługiwana przez metodę `handleSubmit`.
- Dodano walidację do formularza rejestracji i logowania.
- Komunikaty błędów wyświetlają się w konsoli.
