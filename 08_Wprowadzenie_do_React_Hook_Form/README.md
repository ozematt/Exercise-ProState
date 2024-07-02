![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Tworzenie prostego formularza

Twoim zadaniem jest stworzenie formularza rejestracji użytkownika z użyciem biblioteki React Hook Form. Formularz powinien zawierać pola dla imienia użytkownika, adresu e-mail, hasła oraz checkboxa umożliwiającego subskrypcję newslettera.

## Krok po kroku:

### Instalacja React Hook Form

Jeśli jeszcze tego nie zrobiłeś/aś, zainstaluj React Hook Form w swoim projekcie, używając polecenia `npm install react-hook-form`.

### Tworzenie komponentu formularza

- Utwórz nowy komponent `Recipe`.
- Zaimportuj `useForm` z `react-hook-form`.

### Implementacja formularza

- Użyj hooka `useForm` do stworzenia instancji formularza w komponencie.
- Zarejestruj pola formularza: `name`, `email`, `password`, `biography`, `jobRole` i `experienceLevel` za pomocą metody `register`.

### Obsługa wysyłki formularza

- Użyj metody `handleSubmit` z hooka `useForm` do obsługi wysyłki formularza.
- W funkcji obsługującej wysyłkę (`onSubmit`) wyświetl dane formularza w konsoli.


# Zastosowanie React Hook Form w dynamicznych formularzach

Twoim zadaniem jest stworzenie formularza, który umożliwi użytkownikowi wprowadzenie nazwy przepisu, ilości porcji, opisu przygotowania oraz składników. Lista składników powinna być dynamiczna – użytkownik ma mieć możliwość dodawania kolejnych składników według potrzeb.

## Krok po kroku:

### Struktura formularza

- Utwórz formularz zawierający następujące pola:
  - **Nazwa przepisu** (pole tekstowe)
  - **Ilość porcji** (pole numeryczne)
  - **Opis przepisu** (pole tekstowe wieloliniowe, `textarea`)

### Implementacja dynamicznego dodawania składników

Zaprojektuj część formularza przeznaczoną na wprowadzanie składników w taki sposób, aby użytkownik mógł dodawać kolejne pozycje (składniki) na listę.

### Wykorzystanie `useFieldArray`

Do zarządzania dynamiczną listą składników wykorzystaj mechanizm `useFieldArray` z biblioteki React Hook Form. Pamiętaj, aby każdy nowy składnik mógł być indywidualnie dodany do listy.

### Dodawanie i usuwanie składników

Zapewnij interfejs umożliwiający dodanie nowego składnika do listy oraz usunięcie każdego z już dodanych składników. Każda pozycja na liście składników powinna być wyposażona w przycisk lub mechanizm pozwalający na jej usunięcie.

### Zbieranie danych z formularza

Przygotuj funkcję, która pozwoli na zebranie danych z formularza po jego wysłaniu. Funkcja ta powinna być w stanie obsłużyć zarówno podstawowe informacje o przepisie, jak i dynamicznie dodane składniki.

### Testowanie formularza

Przetestuj działanie formularza, szczególnie funkcjonalność związaną z dynamicznym dodawaniem i usuwaniem składników. Sprawdź, czy po wysłaniu formularza, wszystkie wprowadzone informacje są poprawnie zbierane.


# Integracja React Hook Form w istniejącej aplikacji

Wracamy do projektu aplikacji "Coffee House". Twoim zadaniem jest dodanie obsługi react-hook-form do formularza logowania użytkownika.

Formularz powinien zawierać pola dla adresu e-mail oraz hasła. Po zatwierdzeniu formularza dane powinny zostać wyświetlone w konsoli. Znajduje się on w `pages/login/login.jsx`.

## Krok po kroku

1. Zainstaluj bibliotekę `react-hook-form` w projekcie, jeśli jeszcze tego nie zrobiłeś/aś.
2. Zaimportuj hook `useForm` z biblioteki `react-hook-form`.
3. Użyj hooka `useForm` do stworzenia instancji formularza w komponencie.
4. Zarejestruj pola formularza: `email` oraz `password` za pomocą metody `register`.
5. Użyj metody `handleSubmit` z hooka `useForm` do obsługi wysyłki formularza.
6. W funkcji obsługującej wysyłkę (`onSubmit`) wyświetl dane formularza w konsoli.
7. Sprawdź, czy formularz działa poprawnie.

## Przydatne informacje

W celu zarejestrowania pól formularza przy pomocy hooka `useForm` skorzystaj z metody `register`. Aby obsłużyć wysyłkę formularza, użyj metody `handleSubmit` zwracanej przez hooka `useForm`.

## Kryteria akceptacji

- Formularz logowania zawiera pola dla adresu e-mail oraz hasła.
- Dane formularza są wyświetlane w konsoli po zatwierdzeniu formularza.
- Formularz działa poprawnie.
- Zastosowano hook `useForm` z biblioteki `react-hook-form`.
- Pola formularza są zarejestrowane za pomocą metody `register`.
- Wysyłka formularza jest obsługiwana przez metodę `handleSubmit`.
