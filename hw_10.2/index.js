const text = "Wonderful Joyful Happiness Time Task Apple";

function wordsMatch(str) {
	const pattern = /\b[^aA\s]{6,}\b/g;
	return str.match(pattern);
}

console.log(wordsMatch(text));

// Знайти всі слова, що починаються на "к" (кирилиця,мала літера).
// const text1 = "Кіт катався на ковзанах. Катя купила красиву книгу.";
// const pattern1 = /\b[к][а-яіїєґё]*\b/g;
// Відповідь: катався, ковзанах, купила, красиву, книгу

// Знайти всі слова, що починаються на 'П' (кирилиця, велика літера).
// const text2 = "Прийшла Пошта. Петро пішов гуляти по парку."
// const pattern2 = /\b[П][а-яіїєґё]*\b/g
// Відповідь: Прийшла, Пошта, Петро

//Знайти всі слова, що починаються на 'a' (латиниця, мала літера).
// const text3 = "An apple a day keeps the doctor away. Amazing."
// const pattern3 = /\b[a][a-z]*\b/g
// Відповідь: apple, a, away

// Знайти всі слова, що починаються на 'S' (латиниця, велика літера).
// const text4 = "Summer is sunny. Sun shines brightly. Sleep well."
// const pattern4 = /\b[S][a-z]*\b/g
// Відповідь: Summer, Sun, Sleep

// Знайти всі слова, що починаються на 'д' або 'Д' (кирилиця, будь-який регістр).
// const text5 = "Дощ. Дерева. дорога. Дівчинка грає. Дим."
// const pattern5 = /\b[дД][а-яіїєґё]*\b/g
// Відповідь: Дощ, Дерева, дорога, Дівчинка, Дим

// Знайти всі слова, що починаються на 'м' або 'М' (кирилиця, будь-який регістр).
// const text6 = "Миша маленька. Світ змінюється. Мрія."
// const pattern6 = /\b[мМ][а-яіїєґё]*\b/g
// Відповідь: Миша, маленька, Мрія

// Знайти всі слова, що починаються на 't' або 'T' (латиниця, будь-який регістр).
// const text7 = "Today is Tuesday. Time to talk. This test."
// const pattern7 = /\b[tT][a-z]*\b/g
// Відповідь: Today, Tuesday, Time, to, talk, This, test

// Знайти всі слова, що починаються на 'f' або 'F' (латиниця, будь-який регістр).
// const text8 = "Fantastic. Fun for everyone. Friends forever."
// const pattern8 = /\b[fF][a-z]*\b/g
// Відповідь: Fantastic, Fun, for, Friends, forever

// Знайти всі слова, що починаються на 'а' (кирилиця, мала літера) і містять мінімум 3 букви.
// const text9 = "автобус їхав швидко. Лелека летить."
// const pattern9 = /\b[а][а-яіїєґё]{2,}\b/g
// Відповідь: автобус

// Знайти всі слова, що починаються на 'C' (латиниця, велика літера) і закінчуються на 'y'.
// const text10 = "City is busy. Countryside is pretty. Cherry. Candy.";
// const pattern10 = /\b[C][a-z]+[y]\b/g;
// Відповідь: City, Countryside, Candy
