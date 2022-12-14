/*  
    primitive: numbers, strings, booleans, null, undefined, symbol(a unique value that can be generated by Symbol constructor)
        immutable(non-modifiable) - cannot modify after created
    non-primitive: objects arrays
*/

// let word = 'JavaScript'

// word[0] = 'Y' //this does nothing

// console.log(word)

/*
    non-primitive: mutable/modifiable
*/

// let nums = [1, 2, 3]
// console.log(nums)
// nums [0] = 10
// console.log(nums)

//arrays cannot be equal, even if they have same properties and values
/*
    do not compare non-primitive data types
    do not compare arrays, function, objects
    referred to as reference tpyes, because they are compared by reference
    instead of value
    two objects are only strictly equal if they refere to the same object
*/

/*
    Math Object
        Math.round (rounds to nearest value)
        Math.floor (rounds down)
        Math.ceil (rounds up)
        Math.min (returns min value)
        Math.max (returns max value)
        Math.random (creates random num between 0-0.999999)
        Math.abs (absolute value)
        Math.sqrt (square root)
        Math.pow (power e.g. 3^2)
        Math.E - constant E = 2.718
        Math.log(x) returns natural log with base E of x
            Math.log(2) = Math.LN2
        Trig:
            Math.sin()
            Math.cos()
*/
const PI = Math.PI
console.log(PI)

let randNum = Math.random()
console.log(randNum)
randNum = randNum * 11
randNum = Math.floor(randNum)
console.log(randNum) //rand num between 0-10

/*
    Strings
        String concatenation = connecting 2 strings
            let fullName = firstName + space + lastName
        using addition is old, tedious and error-prone
        use ES6 template strings
    Long Literal Strings
        we can use backslash(\) to indicate string will \
        continue on next line
    
*/
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let fullName = firstName + space + lastName
console.log(fullName)

// const paragraph = "Hello there. My name is Obi-Wan Kenobi.\
// Master, I hate sand. It's - \
// Oh shut up Padawan, you are just bored \
// that you cannot see Padme \
// KENOBIIIIIII!!!!!!- Maul probably." //tab sensitive
// console.log(paragraph)

/*
    Escape Sequences in Strings
        \n new line
        \t tab
        \\back slash
        \' single quote
        \" double quote
            so we can make new line, or create symbols without creating 
            strings or comments
    Template Literals (Template Strings)
        to create template stings, use to back-ticks ( ` `)
            to inject data, enclose expression with curly bracket preceded by
            $ 
*/
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)
//same as console.log(`The sum of 2 and 3 is 5`)
/* 
    Using a string template or string interpolation, 
    we can add expressions = value, some operation (comparison, arithmetic, ternary)
    

    String Methods
    everything JS - object
    string object has many string methods: help use work with strings
        1. length: returns number of char in string including empty space
        2. accessing chars in string: we can access each char in a string using index
            let string = "Spider-Man"
            let firstLetter = string[0] = S
            let secondLetter = string[1] = p
            let lastIndex = string.length - 1 = n
        3. toUpperCase() changes string to uppercase
        4. toLowerCase() changes string to lowercase
        5. substr() takes 2 arguements, starting index and num of char to slice
            let string = 'JavaScript'
            console.log(string.substr(4,6))    // Script
        6. substring() takes 2 arguements:
            starting index and stopping index, but it doesn't include char at
            stopping index
                let string = JavaScript
                console.log(string.substring(0,4))     // Java
                console.log(string.substring(4,10))    // Script
                console.log(string.substring(4))       // Script
        7. spilt(): split method splits string at a specified place
        8. trim() removed trailing space in beginning or end of string
        9. includes(): takes a substring arguement and checks if substring
        arguement exists in string, returns boolean (true or false)
            -case sensitive
        10. replace (): takes as a parameter the old and new substring
        11. charAt(): takes index and it returns the value at that index
        12. charCodeAt() takes index and it returns char code (ASCII number) of value at index
        13. indexOf: take substring and if substring exists, returns
            first position of substring
            if DNE, it returns -1
        14. lastIndexOf() takes a substring and if the substring exists in a string
            it returns last postion of substring if it DNE returns -1
        15. concat() it takes many substrings and joins them
        16. startsWith: takes substring of arguement and checks if string 
            starts with specified substring (return true or false)
        17. endsWith: takes substring and checks if sring ends with 
            specified subsring (T or F)
        18. search: takes substring and returns index of first match
            search value can be string or regular expression pattern
        19. match: takes substring or regular expression as an arguement
            returns an array if there is match. if not returns null
                let string = 'love'
                let patternOne = /love/  //no flag
                let patternTwo = /love/gi -> g-means to search who text
                                             i- case insensitive
        20. repear() it takes a number asnd returns repeated version of string

        
            
*/



// let string = '30 Days Of JavaScript'
// console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
// console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))


/*
    Changing Data Type (Casting)
        converting one data type to another
            parseInt(), parseFloat, Number(), + sign, str
            when we do arithmetic ops string numbs should be 
            converted to int or float, else it returns error
*/