![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Praktyczne zastosowanie Best Practices TanStack Query

Stworzysz prostą aplikację bloga, która pozwala użytkownikom przeglądać posty i komentarze. Aplikacja będzie również oferować formularz do dodawania nowych komentarzy pod postami oraz możliwość odświeżania listy postów i komentarzy, aby zawsze wyświetlać aktualne dane.

## Dane

- Użyj `json-server` do stworzenia fałszywego API z dwoma zasobami: `posts` i `comments`.
- `posts` zawierają pola `id`, `title`, `body`.
- `comments` zawierają pola `id`, `postId`, `body`.

Przykładowe dane dla `json-server`:

```json
{
  "posts": [
    { "id": 1, "title": "Pierwszy post", "body": "Treść pierwszego posta" },
    { "id": 2, "title": "Drugi post", "body": "Treść drugiego posta" }
  ],
  "comments": [
    { "id": 1, "postId": 1, "body": "Komentarz do pierwszego posta" },
    { "id": 2, "postId": 2, "body": "Komentarz do drugiego posta" }
  ]
}
```

## Krok po kroku

1. **Konfiguracja `json-server`**:

   - Przygotuj `json-server` z powyższymi danymi jako bazę dla Twojej aplikacji.

2. **Wyświetlanie listy postów**:

   - Użyj `useQuery` do pobierania listy postów z `json-server` i wyświetl je w aplikacji.

3. **Wyświetlanie komentarzy do posta**:

   - Implementuj rozwijaną sekcję dla każdego posta, która po kliknięciu wyświetli komentarze za pomocą kolejnego zapytania `useQuery` do `json-server`.

4. **Dodawanie komentarzy**:

   - Zaimplementuj formularz umożliwiający dodanie nowego komentarza do posta. Wykorzystaj `useMutation` do obsługi dodawania komentarzy.
   - Po dodaniu komentarza użyj `invalidateQueries` do odświeżenia listy komentarzy dla danego posta.

5. **Odświeżanie listy postów**:
   - Dodaj przycisk „Odśwież”, który korzystając z `refetch`, pozwoli na manualne odświeżenie listy postów.

## Wymagania

- Optymalne użycie `useQuery` i `useMutation` zgodnie z najlepszymi praktykami TanStack Query.
- Zastosowanie cachowania i invalidacji zapytań, aby zapewnić aktualność i wydajność danych.
- Implementacja formularza do dodawania komentarzy z walidacją danych wejściowych.

To zadanie pozwoli Ci na praktyczne wykorzystanie TanStack Query do zarządzania danymi w typowym scenariuszu aplikacji bloga, łącząc teorię z praktyką i skupiając się na wydajności oraz optymalizacji.


# Tworzenie złożonego formularza z React Router i TanStack Query

## Cel

Stworzenie wieloetapowego formularza rejestracji użytkownika, integrując React Router dla nawigacji między etapami oraz TanStack Query dla zarządzania stanem formularza i komunikacji z API.

## Scenariusz formularza

Formularz składa się z trzech etapów:

1. **Dane osobowe**
2. **Adres**
3. **Podsumowanie i potwierdzenie**

## Krok po kroku

### Etap 1: Dane osobowe

Pola formularza:

- Imię (tekstowe)
- Nazwisko (tekstowe)
- Email (email)

Po wypełnieniu, użytkownik klika „Dalej”, co przenosi go do Etapu 2.

### Etap 2: Adres

Pola formularza:

- Ulica (tekstowe)
- Numer domu/mieszkania (tekstowe)
- Miasto (tekstowe)
- Kod pocztowy (tekstowe)

Po wypełnieniu, użytkownik może kliknąć „Wstecz”, aby wrócić do Etapu 1 i dokonać korekty, lub „Dalej”, aby przejść do Etapu 3.

### Etap 3: Podsumowanie i potwierdzenie

Wyświetla wszystkie dane zebrane w poprzednich etapach. Użytkownik ma możliwość dokonania ostatecznych zmian poprzez przycisk „Edytuj”, który przekierowuje do odpowiedniego etapu formularza. Przycisk „Wyślij” służy do wysłania danych do API.

## Zadania do wykonania

1. **Konfiguracja React Router:**

   - Zdefiniuj trasy dla każdego etapu formularza w swoim głównym komponencie aplikacji.

2. **Tworzenie komponentów formularza:**

   - Stwórz oddzielne komponenty dla każdego etapu formularza (`StepOne`, `StepTwo`, `StepThree`), używając `react-hook-form` do zarządzania danymi formularza.

3. **Zarządzanie stanem formularza:**

   - Użyj Context API do przechowywania danych formularza między etapami.

4. **Integracja z API:**

   - Zaimplementuj `useMutation` z TanStack Query do wysyłania danych formularza do API na ostatnim etapie.

5. **Nawigacja i walidacja:**

   - Dodaj logikę nawigacji między etapami, w tym walidację danych przed przejściem do kolejnego etapu.
   - Na etapie podsumowania umożliw opcję edycji danych, przekierowując użytkownika do odpowiedniego etapu formularza.

6. **Wysyłanie i potwierdzenie danych:**
   - Na ostatnim etapie, po kliknięciu „Wyślij”, dane powinny zostać wysłane do API. Wyświetl komunikat potwierdzający wysłanie formularza lub informujący o błędzie.

## Dodatkowe informacje

- Upewnij się, że Twoje API (np. `json-server`) akceptuje strukturę danych wysyłanych przez formularz.
- Zwróć uwagę na optymistyczne aktualizacje po mutacjach, aby poprawić doświadczenie użytkownika.
