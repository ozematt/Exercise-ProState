![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Stworzenie pierwszego reducera

Twoim zadaniem jest stworzenie reducera w React, który będzie zarządzał stanem licznika. Ten licznik będzie miał możliwość zwiększania i zmniejszania swojej wartości. Na podstawie wartości licznika, będziesz zmieniać rozmiar pewnego elementu JSX w Twojej aplikacji.

### Krok po kroku

1. **Stwórz Nowy Komponent:**
   Utwórz nowy komponent React, nazwijmy go `ThemeSelector`.

2. **Definicja Stanu Początkowego:**
   Zdefiniuj stan początkowy dla reducera. Powinien on zawierać wartość licznika, np. `{ count: 0 }`.

3. **Implementacja Reducera:**
   Stwórz funkcję reducera, która będzie obsługiwać dwie akcje: `increment` i `decrement`. Każda z tych akcji powinna odpowiednio zwiększać lub zmniejszać wartość `count` w stanie.

4. **Użycie useReducer:**
   Zastosuj hook `useReducer` w komponencie `ThemeSelector`, przekazując do niego swojego reducera oraz stan początkowy.

5. **Implementacja Interfejsu Użytkownika:**
   Dodaj przyciski do zwiększania i zmniejszania licznika, które będą dispatchować odpowiednie akcje do reducera.

6. **Dynamiczna Zmiana Elementu JSX:**
   Na podstawie wartości licznika, zwiększaj lub zmniejszaj rozmiar elementu JSX (np. diva lub tekstu) wyświetlanego w komponencie. Możesz to zrobić, modyfikując styl CSS tego elementu w zależności od wartości licznika.

### Pytania do Zadania

1. Jakie są główne zalety używania reducera w tym scenariuszu w porównaniu z użyciem `useState`?
2. W jaki sposób zmieniasz rozmiar elementu JSX w oparciu o wartość licznika?
3. Jakie działania są wykonywane przez akcje `increment` i `decrement` w Twoim reducerze?

---

To zadanie ma na celu praktyczne zastosowanie `useReducer` w prostym, ale bardzo pouczającym scenariuszu. Poprzez implementację licznika, kursanci nauczą się zarządzać stanem w bardziej złożony sposób i zobaczą, jak zmiany stanu mogą wpływać na interfejs użytkownika.
