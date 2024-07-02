![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Optymalizacja wydajności z Context API

Twoim zadaniem jest zaimplementowanie Context API w aplikacji React, aby zarządzać motywem strony (jasny/ciemny). Celem jest wykorzystanie Context API do efektywnego przekazywania stanu i funkcji aktualizujących między komponentami, co pozwoli uniknąć problemu prop drilling i optymalizować wydajność aplikacji.

## Krok po kroku

1. **Zarządzaj stanem motywu**: W `TasksContext`, zaimplementuj stan lokalny, który będzie przechowywać aktualny motyw strony (domyślnie 'light'). Użyj hooka `useState` do stworzenia tego stanu.

2. **Funkcja zmiany motywu**: Dodaj funkcję, która pozwala na zmianę motywu między 'light' a 'dark'. Nazwij tę funkcję `toggleTheme` i upewnij się, że aktualizuje ona stan motywu.

3. **Przekaż stan i funkcję do komponentów potomnych**: Upewnij się, że zarówno stan motywu, jak i funkcja `toggleTheme` są przekazywane do komponentów potomnych za pomocą `ThemeContext.Provider`.

4. **Zastosuj zmianę motywu**: W komponencie potomnym, zaimplementuj logikę, która zmienia wygląd komponentu w zależności od aktualnego motywu. Może to być zmiana stylów lub klas CSS.

## Oczekiwania

- Po zakończeniu tego zadania Twoja aplikacja powinna umożliwiać globalną zmianę motywu strony między jasnym a ciemnym motywem, bez konieczności przekazywania propsów dotyczących motywu na każdym poziomie komponentów.
- Komponenty potomne powinny automatycznie reagować na zmianę motywu, bez konieczności ręcznego przekazywania stanu motywu jako props.
- Funkcja zmiany motywu `toggleTheme` powinna być łatwo dostępna dla dowolnego komponentu w drzewie komponentów, umożliwiając zmianę motywu z dowolnego miejsca w aplikacji.


# Tworzenie Contextu i Providerów

Twoim zadaniem jest stworzenie Contextu i odpowiadającego mu Provider komponentu w aplikacji React, aby zarządzać informacjami o języku wyświetlanym w aplikacji. Zostaniesz poprowadzony przez proces tworzenia `LanguageContext` i `TasksContext`, a następnie zaimplementujesz logikę, która pozwoli użytkownikowi na zmianę języka aplikacji.

## Krok po kroku

1. **Utworzenie `LanguageContext`**: Rozpocznij od stworzenia nowego Contextu za pomocą `React.createContext()`. Nazwij ten Context `LanguageContext`.

2. **Implementacja `TasksContext`**:

   - Stwórz komponent funkcjonalny `TasksContext`.
   - Wewnątrz `TasksContext` użyj hooka `useState` do stworzenia stanu `language`, który będzie przechowywał aktualnie wybrany język. Ustaw domyślny język na "English".
   - Zaimplementuj funkcję `setLanguage`, która pozwoli na zmianę aktualnie wybranego języka.

3. **Przekazywanie `language` i `setLanguage` do Provider**:

   - W `TasksContext`, użyj `<LanguageContext.Provider>` do otoczenia dzieci (`children`) przekazywanego komponentu.
   - Przekaż `language` i `setLanguage` jako wartości do dostarczenia przez Context, używając atrybutu `value` w `<LanguageContext.Provider>`.
   - Stwórz hook `useLanguage` w celu ułatwienia dostępu do `language` i `setLanguage` w komponentach potomnych.

4. **Użycie `LanguageContext` w komponencie potomnym**:
   - Stwórz komponent `AddTask`, który użyje `LanguageContext` do wyświetlenia aktywnego języka i pozwoli użytkownikowi na jego zmianę.
   - W `AddTask`, użyj `useContext` z Twoim `LanguageContext` do pobrania `language` i `setLanguage`.
   - Zaimplementuj przyciski lub selektor, który pozwoli użytkownikowi na zmianę języka.

## Oczekiwania

- Ostatecznie, po zaimplementowaniu powyższych kroków, aplikacja powinna zawierać komponent `TasksContext`, który otacza część lub całą aplikację, zapewniając dostęp do wybranego języka i funkcji jego zmiany.
- Komponent `AddTask` powinien pozwalać na zmianę języka aplikacji, wykorzystując dostarczone przez `TasksContext` funkcje i stan.
- Zmiana języka przez użytkownika powinna być odzwierciedlona w całej aplikacji tam, gdzie używany jest `LanguageContext`.


# Wykorzystanie Contextu w komponencie

Twoim zadaniem jest stworzenie i zastosowanie Contextu w aplikacji React, aby zarządzać listą zadań do wykonania (to-do list). Zadanie to pomoże Ci zrozumieć, jak za pomocą Context API można efektywnie przekazywać i zarządzać danymi w hierarchii komponentów.

## Opis zadania

Musisz stworzyć aplikację to-do list, która pozwala na dodawanie nowych zadań, oznaczanie ich jako wykonane, i filtrację zadań na podstawie ich statusu (wszystkie, aktywne, wykonane). Do realizacji tych funkcjonalności wykorzystasz Context API, tworząc `TasksContext` i odpowiadający mu `TasksProvider`.

## Krok po kroku

1. **Stwórz `TasksContext`**:
   Użyj `React.createContext()` do utworzenia nowego Contextu, który będzie przechowywać listę zadań oraz funkcje do ich zarządzania.

2. **Zaimplementuj `TasksProvider`**:
   W komponencie `TasksProvider` zaimplementuj logikę zarządzania stanem listy zadań:

   - Użyj hooka `useState` do przechowywania listy zadań.
   - Dodaj funkcję do dodawania nowych zadań do listy.
   - Dodaj funkcję do oznaczania zadań jako wykonane.
   - Dodaj funkcję do filtrowania zadań.

3. **Przekaż stan i funkcje do komponentów potomnych**:
   Za pomocą `<TasksContext.Provider>`, przekaż listę zadań oraz funkcje zarządzające do komponentów potomnych.

4. **Stwórz komponent `AddTask` do dodawania zadań**:
   Komponent ten powinien zawierać formularz do wprowadzenia tekstu zadania i przycisk do dodawania zadania. Użyj Contextu, aby po dodaniu zadania, zostało ono dodane do globalnej listy zadań.

5. **Stwórz komponent `TasksList` do wyświetlania zadań**:
   Komponent ten powinien wyświetlać listę wszystkich zadań, umożliwiać oznaczanie zadań jako wykonane i filtrować zadania na podstawie ich statusu. Wykorzystaj Context do dostępu do listy zadań i funkcji zarządzających.

6. **Stwórz komponent `Filter` do filtrowania zadań**:
   Komponent ten pozwala na wybór filtrów (wszystkie, aktywne, wykonane). Wykorzystaj Context, aby filtrowanie wpływało na wyświetlane zadania w `TasksList`.

## Oczekiwania

- Po zakończeniu zadania, Twoja aplikacja to-do list powinna być w pełni funkcjonalna i pozwalać na dodawanie zadań, oznaczanie ich jako wykonane, oraz filtrowanie na podstawie ich statusu.
- Komponenty `AddTask`, `TasksList` i `Filter` powinny komunikować się z listą zadań za pomocą Contextu, co zapewnia spójność danych w całej aplikacji.
- Struktura aplikacji powinna być czysta i modułowa, dzięki wykorzystaniu Context API do zarządzania stanem.


# Integracja Context API w Istniejącej Aplikacji

Twoim zadaniem jest rozbudowa projektu "Coffee House". Do aplikacji chcemy dodać obsługę motywu ciemnego i jasnego.

Wykorzystujemy bibliotekę Material-UI, która dostarcza nam gotowe komponenty do stylizacji aplikacji, również do obsługi motywów.

Twoje zadanie polega na dodaniu możliwości zmiany motywu aplikacji z jasnego na ciemny i odwrotnie. W nawigacji przygotowaliśmy przycisk, który po kliknięciu ma zmieniać motyw aplikacji.

## Krok po kroku

### Inicjalizacja contextu

- Utwórz nowy plik `color-mode-context.jsx` w folderze `contexts/color-mode`.
- W pliku zdefiniuj nowy kontekst `ColorModeContext` za pomocą funkcji `createContext`.
- Utwórz komponent `ColorModeProvider`, który będzie dostarczał kontekst do swoich dzieci.
- W komponencie `ColorModeProvider` zdefiniuj stan aplikacji, który będzie przechowywał informację o aktualnym motywie.
- Stwórz hook `useColorMode`, który będzie zwracał aktualny motyw aplikacji.

### Obsługa koloru systemowego

- Chcemy, aby domyślnym motywem był ten który, jest ustawiony w systemie operacyjnym użytkownika. W tym celu wykorzystaj hook `useMediaQuery` z Material-UI. Jeśli użytkownik ma ustawiony motyw ciemny, to aplikacja powinna automatycznie przełączyć się na motyw ciemny.
- Kolejnym wymaganiem jest, aby użytkownik mógł nadpisać ten wybór. Dlatego stan początkowy powinien również uwzględniać wartość zapisaną w `localStorage`.
- Stwórz funkcję `toggleColorMode`, która będzie zmieniać motyw aplikacji. Funkcja powinna zmieniać wartość w stanie aplikacji oraz zapisywać ją w `localStorage`.

### Integracja z Material-UI

- W pliku `main.jsx` zaimportuj komponent `ColorModeProvider` z Material-UI.
- Obejmij komponent `App` w `ColorModeProvider`.
- W komponencie `App` wykorzystaj hook `useColorMode` i przekaż odpowiedni motyw do komponentu `ThemeProvider` z Material-UI.

### Obsługa przycisku zmiany motywu

- W pliku `components/navigation/navigation.jsx` zaimportuj hook `useColorMode`.
- Do wytworzonego już przycisku, dodaj wywołanie funkcji `toggleColorMode` z contextu.

## Kryteria akceptacji

- Po uruchomieniu aplikacji, motyw aplikacji powinien być zgodny z ustawieniami systemowymi użytkownika.
- Po kliknięciu przycisku zmiany motywu, motyw aplikacji powinien zmieniać się na przeciwny.
- Po odświeżeniu strony, motyw aplikacji powinien być zgodny z ostatnim wyborem użytkownika.
- Aplikacja powinna zachować swoje funkcjonalności i wygląd.

## Źródła

- [Material-UI - Dark Mode](https://mui.com/material-ui/customization/dark-mode/)
