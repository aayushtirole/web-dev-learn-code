# Regex (Regular Expressions) Notes

## 1. Definition
**Regex (Regular Expression)** ek special sequence of characters hota hai jo ek **pattern** define karta hai.  
Ye pattern **strings me search, match, aur replace** karne ke kaam aata hai.  

> Example: Agar hume check karna ho ki koi text valid email hai ya nahi, ya koi number phone number ke format me hai, to regex use karte hain.

---

## 2. Basic Syntax

| Symbol | Meaning |
|--------|---------|
| `.`    | Matches any single character except newline |
| `^`    | Matches the **start** of the string |
| `$`    | Matches the **end** of the string |
| `*`    | Matches 0 or more occurrences of the preceding character |
| `+`    | Matches 1 or more occurrences of the preceding character |
| `?`    | Matches 0 or 1 occurrence of the preceding character |
| `[]`   | Matches any one character inside the brackets |
| `|`    | OR operator, matches either the pattern before or after |
| `()`   | Grouping of characters or patterns |
| `\`    | Escape character, use to match special characters literally |

---

## 3. Character Classes

| Pattern       | Meaning |
|---------------|---------|
| `[abc]`       | Matches either 'a', 'b', or 'c' |
| `[^abc]`      | Matches any character **except** 'a', 'b', or 'c' |
| `[a-z]`       | Matches any lowercase letter |
| `[A-Z]`       | Matches any uppercase letter |
| `[0-9]`       | Matches any digit |
| `\d`          | Matches any digit (0-9) |
| `\D`          | Matches any non-digit |
| `\w`          | Matches any word character (letter, digit, underscore) |
| `\W`          | Matches any non-word character |
| `\s`          | Matches any whitespace (space, tab, newline) |
| `\S`          | Matches any non-whitespace |

---

## 4. Quantifiers

| Symbol     | Meaning |
|------------|---------|
| `*`        | 0 or more occurrences |
| `+`        | 1 or more occurrences |
| `?`        | 0 or 1 occurrence |
| `{n}`      | Exactly n occurrences |
| `{n,}`     | n or more occurrences |
| `{n,m}`    | Between n and m occurrences |

---

## 5. Common Regex Patterns

1. **Email Validation**
```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
