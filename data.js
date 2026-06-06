window.JAVA_QUIZ = [
  {
    "id": 1,
    "question": "what are static blocks and static initalizers in Java?",
    "answerText": "Static blocks or static initializers are used to initalize static fields in java. we declare static blocks when we\nwant to intialize static fields in our class. Static blocks gets executed exactly once when the class is loaded. Static blocks are executed even before the constructors are executed.",
    "category": "Core Java",
    "options": [
      "When a javac compiler compiler compiles a class it generates.class file.",
      "It contains the executable body that can be applied to the specific object of the class.",
      "Static blocks or static initializers are used to initalize static fields in java.",
      "Main() method is starting point of execution for all java applications."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 2,
    "question": "How to call one constructor from the other constructor?",
    "answerText": "With in the same class if we want to call one constructor from other we use this() method. Based on the\nnumber of parameters we pass appropriate this() method is called.\nRestrictions for using this method:\n1) this must be the first statement in the constructor\n2)we cannot use two this() methods in the constructor",
    "category": "Core Java",
    "options": [
      "A constructor is a special method used to initialize objects in java.",
      "With in the same class if we want to call one constructor from other we use this() method.",
      "this() is used to access one constructor from another with in the same class while super() is used to access superclass constructor.",
      "Method Overloading Method Overriding 1) Method Overloading occurs with in the same Method Overriding occurs between class two..."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 3,
    "question": "What is method overriding in java?",
    "answerText": "If we have methods with same signature (same name, same signature, same return type) in super class\nand subclass then we say\nsubclass method is overridden by superclass.\nWhen to use overriding in java\nIf we want same method with different behaviour in superclass and subclass then we go for overriding.\nWhen we call overridden method with subclass reference subclass method is called hiding the superclass\nmethod.",
    "category": "Core Java",
    "options": [
      "Method Overloading Method Overriding 1) Method Overloading occurs with in the same Method Overriding occurs between class two...",
      "An Object is instance of class.",
      "Java C++ 1) Java is platform independent C++ is platform dependent.",
      "If we have methods with same signature (same name, same signature, same return type) in super class and subclass then we say..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 4,
    "question": "What is super keyword in java?",
    "answerText": "Variables and methods of super class can be overridden in subclass. In case of overriding, a subclass\nobject call its own variables and methods. Subclass cannot access the variables and methods of\nsuperclass because the overridden variables or methods hides the methods and variables of super class.\nBut still java provides a way to access super class members even if its members are overridden. Super is\nused to access superclass variables, methods, constructors.\nSuper can be used in two forms:\n1) First form is for calling super class constructor.\n2) Second one is to call super class variables,methods.\nSuper if present must be the first statement.",
    "category": "Core Java",
    "options": [
      "With in the same class if we want to call one constructor from other we use this() method.",
      "Variables and methods of super class can be overridden in subclass.",
      "Static blocks or static initializers are used to initalize static fields in java.",
      "this() is used to access one constructor from another with in the same class while super() is used to access superclass constructor."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 5,
    "question": "Difference between method overloading and method overriding in java?",
    "answerText": "Method Overloading Method Overriding\n1) Method Overloading occurs with in the same Method Overriding occurs between\nclass two classes superclass and subclass\n2) Since it involves with only one class inheritance Since method overriding occurs between superclass\nis not involved. and subclass inheritance is involved.\n3)In overloading return type need not be the same 3) In overriding return type must be same.\n4) Parameters must be different when we do 4) Parameters must be same.\noverloading\n5) Static polymorphism can be acheived using 5) Dynamic polymorphism can be acheived using\nmethod overloading method overriding.\n6) In overloading one method can’t hide the 6) In overriding subclass method hides that of the\nanother superclass method.",
    "category": "Core Java",
    "options": [
      "A constructor is a special method used to initialize objects in java.",
      "A class having two or more methods with same name but with different arguments then we say that those methods are overloaded.",
      "Method Overloading Method Overriding 1) Method Overloading occurs with in the same Method Overriding occurs between class two...",
      "With in the same class if we want to call one constructor from other we use this() method."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 6,
    "question": "Difference between abstract class and interface?",
    "answerText": "Interface Abstract Class\n1) Interface contains only abstract methods 1) Abstract class can contain abstract methods,\nconcrete methods or both\n2) Access Specifiers for methods in interface 2) Except private we can have any access\nmust be public specifier for methods in abstract class.\n3) Variables defined must be public, static, 3) Except private variables can have any access\nfinal specifiers\n4) Multiple Inheritance in java is implemented 4)We cannot achieve multiple inheritance using\nusing interface abstract class.\n5) To implement an interface we use 5)To implement an interface we use implements\nimplements keyword keyword",
    "category": "Core Java",
    "options": [
      "Interface Abstract Class 1) Interface contains only abstract methods 1) Abstract class can contain abstract methods, concrete...",
      "public: “public” is an access specifier which can be used outside the class.",
      "An Object is instance of class.",
      "length(): In String class we have length() method which is used to return the number of characters in string."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 7,
    "question": "Why java is platform independent?",
    "answerText": "The most unique feature of java is platform independent. In any programming language soruce code is\ncompiled in to executable code. This cannot be run across all platforms. When javac compiles a java\nprogram it generates an executable file called.class file.\nclass file contains byte codes. Byte codes are interpreted only by JVM’s. Since these JVM’s are made\navailable across all platforms by Sun Microsystems, we can execute this byte code in any platform. Byte\ncode generated in windows environment can also be executed in linux environment. This makes java\nplatform independent.",
    "category": "Core Java",
    "options": [
      "Classes are fundamental or basic unit in Object Oriented Programming.A class is kind of blueprint or template for objects.",
      "A class having two or more methods with same name but with different arguments then we say that those methods are overloaded.",
      "The most unique feature of java is platform independent.",
      "Interface Abstract Class 1) Interface contains only abstract methods 1) Abstract class can contain abstract methods, concrete..."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 8,
    "question": "What is method overloading in java?",
    "answerText": "A class having two or more methods with same name but with different arguments then we say that those\nmethods are overloaded. Static polymorphism is achieved in java using method overloading.\nMethod overloading is used when we want the methods to perform similar tasks but with different inputs\nor values. When an overloaded method is invoked java first checks the method name, and the number of\narguments,type of arguments; based on this compiler executes this method.\nCompiler decides which method to call at compile time. By using overloading static polymorphism or static\nbinding can be achieved in java.\nNote: Return type is not part of method signature. we may have methods with different return types but\nreturn type alone is not sufficient to call a method in java.",
    "category": "Core Java",
    "options": [
      "this() is used to access one constructor from another with in the same class while super() is used to access superclass constructor.",
      "Constants are fixed values whose values cannot be changed during the execution of program.",
      "The process of wrapping or putting up of data in to a single unit class and keeps data safe from misuse is called encapsulation.",
      "A class having two or more methods with same name but with different arguments then we say that those methods are overloaded."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 9,
    "question": "What is difference between c++ and Java?",
    "answerText": "Java C++\n1) Java is platform independent C++ is platform dependent.\n2) There are no pointers in java There are pointers in C++.\n3) There is no operator overloading in java C ++ has operator overloading.\n4) There is garbage collection in java There is no garbage collection\n5) Supports multithreading Does’nt support multithreading\n6) There are no templates in java There are templates in java\n7) There are no global variables in java There are global variables in c++",
    "category": "Core Java",
    "options": [
      ">> is a right shift operator shifts all of the bits in a value to the right to a specified number of times.",
      "With in the same class if we want to call one constructor from other we use this() method.",
      "Java C++ 1) Java is platform independent C++ is platform dependent.",
      "A constructor is a special method used to initialize objects in java."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 10,
    "question": "What is JIT compiler?",
    "answerText": "JIT compiler stands for Just in time compiler. JIT compiler compiles byte code in to executable code.\nJIT a part of JVM.JIT cannot convert complete java program in to executable code it converts as and\nwhen it is needed during execution.",
    "category": "Core Java",
    "options": [
      "When a javac compiler compiler compiles a class it generates.class file.",
      "The process of wrapping or putting up of data in to a single unit class and keeps data safe from misuse is called encapsulation.",
      "JIT compiler stands for Just in time compiler.",
      "public: “public” is an access specifier which can be used outside the class."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 11,
    "question": "What is bytecode in java?",
    "answerText": "When a javac compiler compiler compiles a class it generates.class file. This.class file contains set of\ninstructions called byte code. Byte code is a machine independent language and contains set of\ninstructions which are to be executed only by JVM. JVM can understand this byte codes.",
    "category": "Core Java",
    "options": [
      "It contains the executable body that can be applied to the specific object of the class.",
      "When a javac compiler compiler compiles a class it generates.class file.",
      "public: “public” is an access specifier which can be used outside the class.",
      "JIT compiler stands for Just in time compiler."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 12,
    "question": "Difference between this() and super() in java?",
    "answerText": "this() is used to access one constructor from another with in the same class while super() is used to\naccess superclass constructor. Either this() or super() exists it must be the first statement in the\nconstructor.",
    "category": "Core Java",
    "options": [
      "Main() method is starting point of execution for all java applications.",
      "If we have methods with same signature (same name, same signature, same return type) in super class and subclass then we say...",
      "this() is used to access one constructor from another with in the same class while super() is used to access superclass constructor.",
      "It contains the executable body that can be applied to the specific object of the class."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 13,
    "question": "What is a class?",
    "answerText": "Classes are fundamental or basic unit in Object Oriented Programming.A class is kind of blueprint or\ntemplate for objects. Class defines variables, methods. A class tells what type of objects we are creating.\nFor example take Department class tells us we can create department type objects. We can create any\nnumber of department objects.\nAll programming constructs in java reside in class. When JVM starts running it first looks for the class\nwhen we compile. Every Java application must have atleast one class and one main method.\nClass starts with class keyword. A class definition must be saved in class file that has same as class name.\nFile name must end with.java extension.\npublic class FirstClass\n{public static void main(String[] args)\n{System.out.println(“My First class”);\n}\n}\nIf we see the above class when we compile JVM loads the FirstClass and generates a.class\nfile(FirstClass.class). When we run the program we are running the class and then executes the main\nmethod.",
    "category": "Core Java",
    "options": [
      "this() is used to access one constructor from another with in the same class while super() is used to access superclass constructor.",
      "A constructor is a special method used to initialize objects in java.",
      "Classes are fundamental or basic unit in Object Oriented Programming.A class is kind of blueprint or template for objects.",
      "It contains the executable body that can be applied to the specific object of the class."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 14,
    "question": "What is an object?",
    "answerText": "An Object is instance of class. A class defines type of object. Each object belongs to some class.Every\nobject contains state and behavior. State is determined by value of attributes and behavior is called\nmethod. Objects are alos called as an instance.\nTo instantiate the class we declare with the class type.\npublic classFirstClass {public static voidmain(String[] args)\n{\nFirstClass f=new FirstClass();\nSystem.out.println(“My First class”);\n}\n}\nTo instantiate the FirstClass we use this statement\nFirstClass f=new FirstClass();\nf is used to refer FirstClass object.",
    "category": "Core Java",
    "options": [
      "An Object is instance of class.",
      "Constants are fixed values whose values cannot be changed during the execution of program.",
      ">> is a right shift operator shifts all of the bits in a value to the right to a specified number of times.",
      "The most unique feature of java is platform independent."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 15,
    "question": "What is method in java?",
    "answerText": "It contains the executable body that can be applied to the specific object of the class.\nMethod includes method name, parameters or arguments and return type and a body of executable code.\nSyntax: type methodName(Argument List){\n}\nex: public float add(int a, int b, int c)\nmethods can have multiple arguments. Separate with commas when we have multiple arguments.",
    "category": "Core Java",
    "options": [
      "Classes are fundamental or basic unit in Object Oriented Programming.A class is kind of blueprint or template for objects.",
      "When a javac compiler compiler compiles a class it generates.class file.",
      "It contains the executable body that can be applied to the specific object of the class.",
      "public: “public” is an access specifier which can be used outside the class."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 16,
    "question": "What is encapsulation?",
    "answerText": "The process of wrapping or putting up of data in to a single unit class and\nkeeps data safe from misuse is called encapsulation.\nThrough encapsulation we can hide and protect the data stored in java objects.Java supports\nencapsulation through access control. There are four access control modifiers in java public, private,protected and default level.\nFor example take a car class, In car we have many parts which is not required for driver to know what all\nit consists inside. He is required to know only about how to start and stop the car. So we can expose\nwhat all are required and hide the rest by using encapsulation.",
    "category": "Core Java",
    "options": [
      "Variables and methods of super class can be overridden in subclass.",
      "JIT compiler stands for Just in time compiler.",
      "The process of wrapping or putting up of data in to a single unit class and keeps data safe from misuse is called encapsulation.",
      "It contains the executable body that can be applied to the specific object of the class."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 17,
    "question": "Why main() method is public, static and void in java?",
    "answerText": "public: “public” is an access specifier which can be used outside the class. When main method is declared\npublic it means it can be used outside class.\nstatic: To call a method we require object. Sometimes it may be required to call a method without the\nhelp of object. Then we declare that method as static. JVM calls the main() method without creating\nobject by declaring keyword static.\nvoid: void return type is used when a method does’nt return any value. main() method does’nt return\nany value, so main() is declared as void.\nSignature: public static void main(String[] args) {",
    "category": "Core Java",
    "options": [
      "With in the same class if we want to call one constructor from other we use this() method.",
      "this() is used to access one constructor from another with in the same class while super() is used to access superclass constructor.",
      "public: “public” is an access specifier which can be used outside the class.",
      "Constants are fixed values whose values cannot be changed during the execution of program."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 18,
    "question": "Explain about main() method in java?",
    "answerText": "Main() method is starting point of execution for all java applications.\npublic static void main(String[] args) {}\nString args[] are array of string objects we need to pass from command line arguments.\nEvery Java application must have atleast one main method.",
    "category": "Core Java",
    "options": [
      "Main() method is starting point of execution for all java applications.",
      "A constructor is a special method used to initialize objects in java.",
      "With in the same class if we want to call one constructor from other we use this() method.",
      "It contains the executable body that can be applied to the specific object of the class."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 19,
    "question": "What is constructor in java?",
    "answerText": "A constructor is a special method used to initialize objects in java.\nwe use constructors to initialize all variables in the class when an object is created. As and when an object\nis created it is initialized automatically with the help of constructor in java.\nWe have two types of constructors\nDefault Constructor\nParameterized Constructor\nSignature: public classname()\n{\n}\nSignature: public classname(parameters list)\n{\n}",
    "category": "Core Java",
    "options": [
      "It contains the executable body that can be applied to the specific object of the class.",
      "With in the same class if we want to call one constructor from other we use this() method.",
      ">> is a right shift operator shifts all of the bits in a value to the right to a specified number of times.",
      "A constructor is a special method used to initialize objects in java."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 20,
    "question": "What is difference between length and length() method in java?",
    "answerText": "length(): In String class we have length() method which is used to return the number of characters in\nstring.\nEx: String str = “Hello World”;\nSystem.out.println(str.length());\nStr.length() will return 11 characters including space.\nlength: we have length instance variable in arrays which will return the number of values or objects in\narray.\nFor example:\nString days[]={” Sun”,”Mon”,”wed”,”thu”,”fri”,”sat”};\nWill return 6 since the number of values in days array is 6.",
    "category": "Core Java",
    "options": [
      "length(): In String class we have length() method which is used to return the number of characters in string.",
      "public: “public” is an access specifier which can be used outside the class.",
      "The process of wrapping or putting up of data in to a single unit class and keeps data safe from misuse is called encapsulation.",
      "An Object is instance of class."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 21,
    "question": "What is ASCII Code?",
    "answerText": "ASCII stands for American Standard code for Information Interchange. ASCII character range is 0 to 255.\nWe can’t add more characters to the ASCII Character set. ASCII character set supports only English. That\nis the reason, if we see C language we can write c language only in English we can’t write in other\nlanguages because it uses ASCII code.",
    "category": "Core Java",
    "options": [
      "ASCII stands for American Standard code for Information Interchange.",
      "An Object is instance of class.",
      "With in the same class if we want to call one constructor from other we use this() method.",
      "length(): In String class we have length() method which is used to return the number of characters in string."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 22,
    "question": "What is Unicode?",
    "answerText": "Unicode is a character set developed by Unicode Consortium. To support all languages in the world Java\nsupports Unicode values. Unicode characters were represented by 16 bits and its character range is 0-\n65,535.\nJava uses ASCII code for all input elements except for Strings,identifiers, and comments. If we want to\nuse telugu we can use telugu characters for identifiers.We can enter comments in telugu.",
    "category": "Core Java",
    "options": [
      "Java C++ 1) Java is platform independent C++ is platform dependent.",
      "A class having two or more methods with same name but with different arguments then we say that those methods are overloaded.",
      "Unicode is a character set developed by Unicode Consortium.",
      "length(): In String class we have length() method which is used to return the number of characters in string."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 23,
    "question": "Difference between Character Constant and String Constant in java?",
    "answerText": "Character constant is enclosed in single quotes. String constants are enclosed in double quotes. Character\nconstants are single digit or character. String Constants are collection of characters.\nEx:’2’, ‘A’\nEx: “Hello World”",
    "category": "Core Java",
    "options": [
      "Character constant is enclosed in single quotes.",
      "It contains the executable body that can be applied to the specific object of the class.",
      "length(): In String class we have length() method which is used to return the number of characters in string.",
      "When a javac compiler compiler compiles a class it generates.class file."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 24,
    "question": "What are constants and how to create constants in java?",
    "answerText": "Constants are fixed values whose values cannot be changed during the execution of program. We create\nconstants in java using final keyword.\nEx: final int number =10;\nfinal String str=”java-interview –questions”",
    "category": "Core Java",
    "options": [
      "Java C++ 1) Java is platform independent C++ is platform dependent.",
      "Static blocks or static initializers are used to initalize static fields in java.",
      "It contains the executable body that can be applied to the specific object of the class.",
      "Constants are fixed values whose values cannot be changed during the execution of program."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 25,
    "question": "Difference between ‘>>’ and ‘>>>’ operators in java?",
    "answerText": ">> is a right shift operator shifts all of the bits in a value to the right to a specified number of times.\nint a =15;\na= a >> 3;\nThe above line of code moves 15 three characters right.\n>>> is an unsigned shift operator used to shift right. The places which were vacated by shift are filled\nwith zeroes.\nCore java Interview questions on Coding Standards",
    "category": "Core Java",
    "options": [
      "When a javac compiler compiler compiles a class it generates.class file.",
      ">> is a right shift operator shifts all of the bits in a value to the right to a specified number of times.",
      "An Object is instance of class.",
      "Constants are fixed values whose values cannot be changed during the execution of program."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 26,
    "question": "Explain Java Coding Standards for classes or Java coding conventions for?",
    "answerText": "Sun has created Java Coding standards or Java Coding Conventions. It is recommended highly to follow\njava coding standards.\nClassnames should start with uppercase letter. Classnames names should be nouns. If Class name is of\nmultiple words then the first letter of inner word must be capital letter.\nEx: Employee, EmployeeDetails, ArrayList, TreeSet, HashSet",
    "category": "Coding Standards",
    "options": [
      "Sun has created Java Coding standards or Java Coding Conventions.",
      "Variable names should start with small letters.",
      "Method names should start with small letters.",
      "Constants in java are created using static and final keywords."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 27,
    "question": "Explain Java Coding standards for interfaces?",
    "answerText": "1) Interface should start with uppercase letters\n2) Interfaces names should be adjectives\nExample: Runnable, Serializable, Marker, Cloneable",
    "category": "Coding Standards",
    "options": [
      "Constants in java are created using static and final keywords.",
      "Variable names should start with small letters.",
      "Interface should start with uppercase letters 2) Interfaces names should be adjectives Example: Runnable, Serializable, Marker,...",
      "Method names should start with small letters."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 28,
    "question": "Explain Java Coding standards for Methods?",
    "answerText": "1) Method names should start with small letters.\n2) Method names are usually verbs\n3) If method contains multiple words, every inner word should start with uppercase letter.\nEx: toString()\n4) Method name must be combination of verb and noun\nEx: getCarName(),getCarNumber()",
    "category": "Coding Standards",
    "options": [
      "Constants in java are created using static and final keywords.",
      "Interface should start with uppercase letters 2) Interfaces names should be adjectives Example: Runnable, Serializable, Marker,...",
      "Sun has created Java Coding standards or Java Coding Conventions.",
      "Method names should start with small letters."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 29,
    "question": "Explain Java Coding Standards for variables?",
    "answerText": "1) Variable names should start with small letters.\n2) Variable names should be nouns\n3) Short meaningful names are recommended.\n4) If there are multiple words every innerword should start with Uppecase character.\nEx: string,value,empName,empSalary",
    "category": "Coding Standards",
    "options": [
      "Variable names should start with small letters.",
      "Interface should start with uppercase letters 2) Interfaces names should be adjectives Example: Runnable, Serializable, Marker,...",
      "Sun has created Java Coding standards or Java Coding Conventions.",
      "Constants in java are created using static and final keywords."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 30,
    "question": "Explain Java Coding Standards for Constants?",
    "answerText": "Constants in java are created using static and final keywords.\n1) Constants contains only uppercase letters.\n2) If constant name is combination of two words it should be separated by underscore.\n3) Constant names are usually nouns.\nEx:MAX_VALUE, MIN_VALUE, MAX_PRIORITY, MIN_PRIORITY",
    "category": "Coding Standards",
    "options": [
      "Interface should start with uppercase letters 2) Interfaces names should be adjectives Example: Runnable, Serializable, Marker,...",
      "Constants in java are created using static and final keywords.",
      "Sun has created Java Coding standards or Java Coding Conventions.",
      "Method names should start with small letters."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 31,
    "question": "Difference between overriding and overloading in java?",
    "answerText": "Overriding Overloading\nIn overriding method names must be same In overloading method names must be same\nArgument List must be same Argument list must be different atleast order of\narguments.\nReturn type can be same or we can return covariant Return type can be different in overloading.\ntype. From 1.5 covariant types are allowed\nWe cant increase the level of checked exceptions. In overloading different exceptions can be thrown.\nNo restrictions for unchecked exceptions\nA method can only be overridden in subclass A method can be overloaded in same class or\nsubclass\nPrivate,static and final variables cannot be Private, static and final variables can be\noverridden. overloaded.\nIn overriding which method is called is decided at In overloading which method to call is decided at\nruntime based on the type of object referenced at compile time based on reference type.\nrun time\nOverriding is also known as Runtime polymorphism, Overloading is also known as Compile time\ndynamic polymorphism or late binding polymorphism, static polymorphism or early\nbinding.",
    "category": "OOP and Access",
    "options": [
      "Overriding Overloading In overriding method names must be same In overloading method names must be same Argument List must be same...",
      "‘is a’ relationship is also known as inheritance.",
      "We can use only two access modifiers for class public and default.",
      "Package is a mechanism to group related classes,interfaces and enums in to a single module."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 32,
    "question": "What is ‘IS-A ‘ relationship in java?",
    "answerText": "‘is a’ relationship is also known as inheritance. We can implement ‘is a’ relationship or inheritance in java\nusing extends keyword. The advantage or inheritance or is a relationship is reusability of code instead of\nduplicating the code.\nEx: Motor cycle is a vehicle\nCar is a vehicle Both car and motorcycle extends vehicle.",
    "category": "OOP and Access",
    "options": [
      "final access modifier can be used for class, method and variables.",
      "Overriding Overloading In overriding method names must be same In overloading method names must be same Argument List must be same...",
      "‘is a’ relationship is also known as inheritance.",
      "In C++ we have access specifiers as public,private,protected and default and access modifiers as static, final."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 33,
    "question": "What is ‘HAS A’’ relationship in java?",
    "answerText": "‘Has a ‘ relationship is also known as “composition or Aggregation”. As in inheritance we have ‘extends’\nkeyword we don’t have any keyword to implement ‘Has a’ relationship in java. The main advantage of\n‘Has-A‘ relationship in java code reusability.",
    "category": "OOP and Access",
    "options": [
      "Overriding Overloading In overriding method names must be same In overloading method names must be same Argument List must be same...",
      "IS-A relationship HAS- A RELATIONSHIP Is a relationship also known as inheritance Has a relationship also known as composition or...",
      "We can use all access modifiers public, private,protected and default for variables.",
      "‘Has a ‘ relationship is also known as “composition or Aggregation”."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 34,
    "question": "Difference between ‘IS-A’ and ‘HAS-A’ relationship in java?",
    "answerText": "IS-A relationship HAS- A RELATIONSHIP\nIs a relationship also known as inheritance Has a relationship also known as composition or\naggregation.\nFor IS-A relationship we uses extends keyword For Has a relationship we use new keyword\nEx: Car is a vehicle. Ex: Car has an engine. We cannot say Car is an\nengine\nThe main advantage of inheritance is reusability of The main advantage of has a relationship is\ncode reusability of code.",
    "category": "OOP and Access",
    "options": [
      "When a reference variable doesn’t point to any value it is assigned null.",
      "Sometimes we may come across a situation where we cannot provide implementation to all the methods in a class.",
      "IS-A relationship HAS- A RELATIONSHIP Is a relationship also known as inheritance Has a relationship also known as composition or...",
      "We can use all access modifiers public, private,protected and default for methods."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 35,
    "question": "Explain about instanceof operator in java?",
    "answerText": "Instanceof operator is used to test the object is of which type.\nSyntax: <reference expression> instanceof <destination type>\nInstanceof returns true if reference expression is subtype of destination type.\nInstanceof returns false if reference expression is null.\nExample: public classInstanceOfExample {public static voidmain(String[] args) {Integer a =\nnewInteger(5);if (a instanceof java.lang.Integer) {\nSystem.out.println(true);\n} else {\nSystem.out.println(false);\n}\n}\n}\nSince a is integer object it returns true.\nThere will be a compile time check whether reference expression is subtype of destination type. If it is not\na subtype then compile time error will be shown as Incompatible types",
    "category": "OOP and Access",
    "options": [
      "Sometimes we may come across a situation where we cannot provide implementation to all the methods in a class.",
      "We can’t have more than one package statement in source file.",
      "Instanceof operator is used to test the object is of which type.",
      "We can create constructor in abstract class, it does’nt give any compilation error."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 36,
    "question": "What does null mean in java?",
    "answerText": "When a reference variable doesn’t point to any value it is assigned null.\nExample: Employee employee;\nIn the above example employee object is not instantiate so it is pointed no where",
    "category": "OOP and Access",
    "options": [
      "We can’t define package statement after import statement in java.",
      "When a reference variable doesn’t point to any value it is assigned null.",
      "final access modifier can be used for class, method and variables.",
      "The important feature of encapsulation is access control."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 37,
    "question": "Can we have multiple classes in single file?",
    "answerText": "Yes we can have multiple classes in single file but it people rarely do that and not recommended. We can\nhave multiple classes in File but only one class can be made public. If we try to make two classes in File\npublic we get following compilation error.\n“The public type must be defined in its own file”.",
    "category": "OOP and Access",
    "options": [
      "Yes we can have multiple classes in single file but it people rarely do that and not recommended.",
      "We can’t have more than one package statement in source file.",
      "Overriding Overloading In overriding method names must be same In overloading method names must be same Argument List must be same...",
      "IS-A relationship HAS- A RELATIONSHIP Is a relationship also known as inheritance Has a relationship also known as composition or..."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 38,
    "question": "What all access modifiers are allowed for top class?",
    "answerText": "For top level class only two access modifiers are allowed. public and default. If a class is declared as\npublic it is visible everywhere.\nIf a class is declared default it is visible only in same package.\nIf we try to give private and protected as access modifier to class we get the below compilation error.\nIllegal Modifier for the class only public,abstract and final are permitted.",
    "category": "OOP and Access",
    "options": [
      "An abstract method is the method which does’nt have any body.",
      "For top level class only two access modifiers are allowed.",
      "We can use all access modifiers public, private,protected and default for variables.",
      "‘Has a ‘ relationship is also known as “composition or Aggregation”."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 39,
    "question": "What are packages in java?",
    "answerText": "Package is a mechanism to group related classes,interfaces and enums in to a single module.\nPackage can be declared using the following statement:\nSyntax: package <package-name>\nCoding Convention: package name should be declared in small letters.\npackage statement defines the namespace.\nThe main use of package is\n1) To resolve naming conflicts\n2) For visibility control: We can define classes and interfaces that are not accessible outside the\nclass.",
    "category": "OOP and Access",
    "options": [
      "Package is a mechanism to group related classes,interfaces and enums in to a single module.",
      "Yes we can have multiple classes in single file but it people rarely do that and not recommended.",
      "final access modifier can be used for class, method and variables.",
      "Identifiers are names in java program."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 40,
    "question": "Can we have more than one package statement in source file?",
    "answerText": "We can’t have more than one package statement in source file. In any java program there can be atmost\nonly 1 package statement. We will get compilation error if we have more than one package statement in\nsource file.",
    "category": "OOP and Access",
    "options": [
      "When a reference variable doesn’t point to any value it is assigned null.",
      "We can’t have more than one package statement in source file.",
      "‘is a’ relationship is also known as inheritance.",
      "For top level class only two access modifiers are allowed."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 41,
    "question": "Can we define package statement after import statement in java?",
    "answerText": "We can’t define package statement after import statement in java. package statement must be the first\nstatement in source file. We can have comments before the package statement.",
    "category": "OOP and Access",
    "options": [
      "Package is a mechanism to group related classes,interfaces and enums in to a single module.",
      "We can’t define package statement after import statement in java.",
      "Identifiers are names in java program.",
      "‘Has a ‘ relationship is also known as “composition or Aggregation”."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 42,
    "question": "What are identifiers in java?",
    "answerText": "Identifiers are names in java program. Identifiers can be class name, method name or variable name.\nRules for defining identifiers in java:\n1) Identifiers must start with letter,Underscore or dollar($) sign.\n2) Identifiers can’t start with numbers.\n3) There is no limit on number of characters in identifier but not recommended to have more than 15\ncharacters\n4) Java identifiers are case sensitive.\n5) First letter can be alphabet,or underscore and dollar sign. From second letter we can have numbers.\n6) We should’nt use reserve words for identifiers in java.",
    "category": "OOP and Access",
    "options": [
      "We can create constructor in abstract class, it does’nt give any compilation error.",
      "Identifiers are names in java program.",
      "The important feature of encapsulation is access control.",
      "An abstract method is the method which does’nt have any body."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 43,
    "question": "What are access modifiers in java?",
    "answerText": "The important feature of encapsulation is access control. By preventing access control we can misuse of\nclass, methods and members.\nA class, method or variable can be accessed is determined by the access modifier. There are three types\nof access modifiers in java. public,private,protected. If no access modifier is specified then it has a default\naccess.",
    "category": "OOP and Access",
    "options": [
      "We can’t define package statement after import statement in java.",
      "‘Has a ‘ relationship is also known as “composition or Aggregation”.",
      "The important feature of encapsulation is access control.",
      "‘is a’ relationship is also known as inheritance."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 44,
    "question": "What is the difference between access specifiers and access modifiers in java- 16?",
    "answerText": "In C++ we have access specifiers as public,private,protected and default and access modifiers as static,\nfinal. But there is no such divison of access specifiers and access modifiers in java. In Java we have\naccess modifiers and non access modifiers.\nAccess Modifiers: public, private, protected, default\nNon Access Modifiers: abstract, final, stricfp.",
    "category": "OOP and Access",
    "options": [
      "In C++ we have access specifiers as public,private,protected and default and access modifiers as static, final.",
      "final access modifier can be used for class, method and variables.",
      "‘Has a ‘ relationship is also known as “composition or Aggregation”.",
      "‘is a’ relationship is also known as inheritance."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 45,
    "question": "What access modifiers can be used for class?",
    "answerText": "We can use only two access modifiers for class public and default.\npublic: A class with public modifier can be visible\n1) In the same class\n2) In the same package subclass\n3) In the same package nonsubclass\n4) In the different package subclass\n5) In the different package non subclass.\ndefault: A class with default modifier can be accesed\n1) In the same class\n2) In the same package subclass\n3) In the same package nonsubclass\n4) In the different package subclass\n5) In the different package non subclass.",
    "category": "OOP and Access",
    "options": [
      "IS-A relationship HAS- A RELATIONSHIP Is a relationship also known as inheritance Has a relationship also known as composition or...",
      "We can create constructor in abstract class, it does’nt give any compilation error.",
      "We can use only two access modifiers for class public and default.",
      "The important feature of encapsulation is access control."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 46,
    "question": "Explain what access modifiers can be used for methods?",
    "answerText": "We can use all access modifiers public, private,protected and default for methods.\npublic: When a method is declared as public it can be accessed\n6) In the same class\n7) In the same package subclass\n8) In the same package nonsubclass\n9) In the different package subclass\n10) In the different package non subclass.\ndefault: When a method is declared as default, we can access that method in\n1) In the same class\n2) In the same package subclass\n3) In the same package non subclass\nWe cannot access default access method in\n1) Different package subclass\n2) Different package non subclass.\nprotected: When a method is declared as protected it can be accessed\n1) With in the same class\n2) With in the same package subclass\n3) With in the same package non subclass\n4) With in different package subclass\nIt cannot be accessed non subclass in different package.\nprivate: When a method is declared as private it can be accessed only in that class.\nIt cannot be accessed in\n1) Same package subclass\n2) Same package non subclass\n3) Different package subclass\n4) Different package non subclass.",
    "category": "OOP and Access",
    "options": [
      "We can use all access modifiers public, private,protected and default for methods.",
      "‘is a’ relationship is also known as inheritance.",
      "Identifiers are names in java program.",
      "We can’t have more than one package statement in source file."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 47,
    "question": "Explain what access modifiers can be used for variables?",
    "answerText": "We can use all access modifiers public, private,protected and default for variables.\npublic: When a variables is declared as public it can be accessed\n1) In the same class\n2) In the same package subclass\n3) In the same package nonsubclass\n4) In the different package subclass\n5) In the different package non subclass.\ndefault: When a variables is declared as default, we can access that method in\n1) In the same class\n2) In the same package subclass\n3) In the same package non subclass\nWe cannot access default access variables in\n4) Different package subclass\n5) Different package non subclass.\nprotected: When a variables is declared as protected it can be accessed\n1) With in the same class\n2) With in the same package subclass\n3) With in the same package non subclass\n4) With in different package subclass\nIt cannot be accessed non subclass in different package.\nprivate: When a variables is declared as private it can be accessed only in that class.\nIt cannot be accessed in\n1) Same package subclass\n2) Same package non subclass\n3) Different package subclass\n4) Different package non subclass.",
    "category": "OOP and Access",
    "options": [
      "For top level class only two access modifiers are allowed.",
      "When a reference variable doesn’t point to any value it is assigned null.",
      "‘is a’ relationship is also known as inheritance.",
      "We can use all access modifiers public, private,protected and default for variables."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 48,
    "question": "What is final access modifier in java?",
    "answerText": "final access modifier can be used for class, method and variables. The main advantage of final access\nmodifier is security no one can modify our classes, variables and methods. The main disadvantage of final\naccess modifier is we cannot implement oops concepts in java. Ex: Inheritance, polymorphism.\nfinal class: A final class cannot be extended or subclassed. We ar e preventing inheritance by marking a\nclass as final. But we can still access the methods of this class by composition. Ex: String class\nfinal methods: Method overriding is one of the important features in java. But there are situations where\nwe may not want to use this feature. Then we declared method as final which will print overriding. To\nallow a method from being overridden we use final access modifier for methods.\nfinal variables: If a variable is declared as final,it behaves like a constant. We cannot modify the value\nof final variable. Any attempt to modify the final variable results in compilation error. The error is as\nfollows\n“final variable cannot be assigned.”",
    "category": "OOP and Access",
    "options": [
      "final access modifier can be used for class, method and variables.",
      "Package is a mechanism to group related classes,interfaces and enums in to a single module.",
      "We can’t define package statement after import statement in java.",
      "Overriding Overloading In overriding method names must be same In overloading method names must be same Argument List must be same..."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 49,
    "question": "Explain about abstract classes in java?",
    "answerText": "Sometimes we may come across a situation where we cannot provide implementation to all the methods\nin a class. We want to leave the implementation to a class that extends it. In such case we declare a class\nas abstract.To make a class abstract we use key word abstract. Any class that contains one or more\nabstract methods is declared as abstract. If we don’t declare class as abstract which contains abstract\nmethods we get compile time error. We get the following error.\n“The type <class-name> must be an abstract class to define abstract methods.”\nSignature; abstract class <class-name>\n{\n}\nFor example if we take a vehicle class we cannot provide implementation to it because there may be two\nwheelers, four wheelers etc. At that moment we make vehicle class abstract. All the common features of\nvehicles are declared as abstract methods in vehicle class. Any class which extends vehicle will provide\nits method implementation. It’s the responsibility of subclass to provide implementation.\nThe important features of abstract classes are:\n1) Abstract classes cannot be instantiated.\n2) An abstract classes contains abstract methods, concrete methods or both.\n3) Any class which extends abstract class must override all methods of abstract class.\n4) An abstract class can contain either 0 or more abstract methods.\nThough we cannot instantiate abstract classes we can create object references. Through superclass\nreferences we can point to subclass.",
    "category": "OOP and Access",
    "options": [
      "We can’t define package statement after import statement in java.",
      "An abstract method is the method which does’nt have any body.",
      "Instanceof operator is used to test the object is of which type.",
      "Sometimes we may come across a situation where we cannot provide implementation to all the methods in a class."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 50,
    "question": "Can we create constructor in abstract class?",
    "answerText": "We can create constructor in abstract class, it does’nt give any compilation error. But when we cannot\ninstantiate class there is no use in creating a constructor for abstract class.",
    "category": "OOP and Access",
    "options": [
      "Package is a mechanism to group related classes,interfaces and enums in to a single module.",
      "We can create constructor in abstract class, it does’nt give any compilation error.",
      "final access modifier can be used for class, method and variables.",
      "The important feature of encapsulation is access control."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 51,
    "question": "What are abstract methods in java?",
    "answerText": "An abstract method is the method which does’nt have any body. Abstract method is declared with\nkeyword abstract and semicolon in place of method body.\nSignature: public abstract void <method name>();\nEx: public abstract void getDetails();\nIt is the responsibility of subclass to provide implementation to abstract method defined in abstract class.\nJava Exception Handling Interview questions",
    "category": "OOP and Access",
    "options": [
      "For top level class only two access modifiers are allowed.",
      "The important feature of encapsulation is access control.",
      "Package is a mechanism to group related classes,interfaces and enums in to a single module.",
      "An abstract method is the method which does’nt have any body."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 52,
    "question": "What is an exception in java?",
    "answerText": "In java exception is an object. Exceptions are created when an abnormal situations are arised in our\nprogram. Exceptions can be created by JVM or by our application code. All Exception classes are defined\nin java.lang. In otherwords we can say Exception as run time error.",
    "category": "Exceptions",
    "options": [
      "Try 2) Catch 3) throw 4) throws 5) finally",
      "In java exception is an object.",
      "Finally block will not be executed whenever jvm shutdowns.",
      "Finally block is used for cleaning up of resources such as closing connections, sockets etc."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 53,
    "question": "State some situations where exceptions may arise in java?",
    "answerText": "1) Accesing an element that does not exist in array.\n2) Invalid conversion of number to string and string to number.\n(NumberFormatException)\n3) Invalid casting of class\n(Class cast Exception)\n4) Trying to create object for interface or abstract class\n(Instantiation Exception)",
    "category": "Exceptions",
    "options": [
      "Throwable class is the root class for Exceptions.",
      "Accesing an element that does not exist in array.",
      "We can handle exceptions in either of the two ways: 1) By specifying try catch block where we can catch the exception.",
      "All the subclasses of Throwable class except error,Runtime Exception and its subclasses are checked exceptions."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 54,
    "question": "What is Exception handling in java?",
    "answerText": "Exception handling is a mechanism what to do when some abnormal situation arises in program. When an\nexception is raised in program it leads to termination of program when it is not handled properly. The\nsignificance of exception handling comes here in order not to terminate a program abruptly and to\ncontinue with the rest of program normally. This can be done with help of Exception handling.",
    "category": "Exceptions",
    "options": [
      "Exception handling is a mechanism what to do when some abnormal situation arises in program.",
      "We shouldn’t declare any code between try and finally block.",
      "Each try block requires atleast one catch block or finally block.",
      "All subclasses of RuntimeException are called unchecked exceptions."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 55,
    "question": "What is an eror in Java?",
    "answerText": "Error is the subclass of Throwable class in java. When errors are caused by our program we call that as\nException, but some times exceptions are caused due to some environment issues such as running out of\nmemory. In such cases we can’t handle the exceptions. Exceptions which cannot be recovered are called\nas errors in java.\nEx: Out of memory issues.",
    "category": "Exceptions",
    "options": [
      "Finally block will not be executed whenever jvm shutdowns.",
      "We shouldn’t declare any code between try and finally block.",
      "Error is the subclass of Throwable class in java.",
      "Separating normal code from exception handling code to avoid abnormal termination of program."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 56,
    "question": "What are advantages of Exception handling in java?",
    "answerText": "1) Separating normal code from exception handling code to avoid abnormal termination of program.\n2) Categorizing in to different types of Exceptions so that rather than handling all exceptions with\nException root class we can handle with specific exceptions. It is recommended to handle exceptions with\nspecific Exception instead of handling with Exception root class.\n3) Call stack mechanism: If a method throws an exception and it is not handled immediately, then that\nexception is propagated or thrown to the caller of that method. This propogation continues till it finds an\nappropriate exception handler,if it finds handler it would be handled otherwise program terminates\nabruptly.",
    "category": "Exceptions",
    "options": [
      "Separating normal code from exception handling code to avoid abnormal termination of program.",
      "In some cases our code may throw more than one exception.",
      "Finally block will not be executed whenever jvm shutdowns.",
      "Generally JVM throws the exception and we handle the exceptions by using try catch block."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 57,
    "question": "In how many ways we can do exception handling in java?",
    "answerText": "We can handle exceptions in either of the two ways:\n1) By specifying try catch block where we can catch the exception.\n2) Declaring a method with throws clause.",
    "category": "Exceptions",
    "options": [
      "We shouldn’t declare any code between try and catch block.",
      "Exception handling is a mechanism what to do when some abnormal situation arises in program.",
      "This error is thrown when JVM tries to load the class but no definition for that class is found NoClassDefFoundError will occur.",
      "We can handle exceptions in either of the two ways: 1) By specifying try catch block where we can catch the exception."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 58,
    "question": "List out five keywords related to Exception handling?",
    "answerText": "1) Try\n2) Catch\n3) throw\n4) throws\n5) finally",
    "category": "Exceptions",
    "options": [
      "finally block is more important than return statement when both are present in a program.",
      "All subclasses of RuntimeException are called unchecked exceptions.",
      "We shouldn’t declare any code between try and finally block.",
      "Try 2) Catch 3) throw 4) throws 5) finally"
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 59,
    "question": "Explain try and catch keywords in java?",
    "answerText": "In try block we define all exception causing code. In java try and catch forms a unit. A catch block catches\nthe exception thrown by preceding try block. Catch block cannot catch an exception thrown by another try\nblock. If there is no exception causing code in our program or exception is not raised in our code jvm\nignores the try catch block.\nSyntax:\ntry\n{\n}\nCatch(Exception e)\n{\n}",
    "category": "Exceptions",
    "options": [
      "Throwable class is the root class for Exceptions.",
      "In try block we define all exception causing code.",
      "Finally block will not be executed whenever jvm shutdowns.",
      "When JVM detects exception causing code, it constructs a new exception handling object by including the following information."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 60,
    "question": "Can we have try block without catch block?",
    "answerText": "Each try block requires atleast one catch block or finally block. A try block without catch or finally will\nresult in compiler error. We can skip either of catch or finally block but not both.",
    "category": "Exceptions",
    "options": [
      "Yes try statements can be nested.",
      "When JVM tries to load a class by its string name, and couldn’t able to find the class classNotFoundException will be thrown.",
      "From Java 7, we can catch more than one exception with single catch block.",
      "Each try block requires atleast one catch block or finally block."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 61,
    "question": "Can we have multiple catch block for a try block?",
    "answerText": "In some cases our code may throw more than one exception. In such case we can specify two or more\ncatch clauses, each catch handling different type of exception. When an exception is thrown jvm checks\neach catch statement in order and the first one which matches the type of exception is execution and\nremaining catch blocks are skipped.\nTry with multiple catch blocks is highly recommended in java.\nIf try with multiple catch blocks are present the order of catch blocks is very important and the order\nshould be from child to parent.",
    "category": "Exceptions",
    "options": [
      "All the subclasses of Throwable class except error,Runtime Exception and its subclasses are checked exceptions.",
      "Throws statement is used at the end of method signature to indicate that an exception of a given type may be thrown from the method.",
      "In some cases our code may throw more than one exception.",
      "Finally block will not be executed whenever jvm shutdowns."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 62,
    "question": "Explain importance of finally block in java?",
    "answerText": "Finally block is used for cleaning up of resources such as closing connections, sockets etc. if try block\nexecutes with no exceptions then finally is called after try block without executing catch block. If there is\nexception thrown in try block finally block executes immediately after catch block.\nIf an exception is thrown,finally block will be executed even if the no catch block handles the exception.",
    "category": "Exceptions",
    "options": [
      "In try block we define all exception causing code.",
      "This error is thrown when JVM tries to load the class but no definition for that class is found NoClassDefFoundError will occur.",
      "We shouldn’t declare any code between try and finally block.",
      "Finally block is used for cleaning up of resources such as closing connections, sockets etc."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 63,
    "question": "Can we have any code between try and catch blocks?",
    "answerText": "We shouldn’t declare any code between try and catch block. Catch block should immediately start after try\nblock.\ntry{\n//code\n}\nSystem.out.println(“one line of code”); // illegal\ncatch(Exception e){\n//\n}",
    "category": "Exceptions",
    "options": [
      "In try block we define all exception causing code.",
      "We shouldn’t declare any code between try and catch block.",
      "After throw statement jvm stop execution and subsequent statements are not executed.",
      "Error is the subclass of Throwable class in java."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 64,
    "question": "Can we have any code between try and finally blocks?",
    "answerText": "We shouldn’t declare any code between try and finally block. finally block should immediately start after\ncatch block.If there is no catch block it should immediately start after try block.\ntry{\n//code\n}\nSystem.out.println(“one line of code”); // illegal\nfinally{\n//\n}",
    "category": "Exceptions",
    "options": [
      "We shouldn’t declare any code between try and finally block.",
      "Generally JVM throws the exception and we handle the exceptions by using try catch block.",
      "Try 2) Catch 3) throw 4) throws 5) finally",
      "To create customized error messages we use userdefined exceptions."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 65,
    "question": "Can we catch more than one exception in single catch block?",
    "answerText": "From Java 7, we can catch more than one exception with single catch block. This type of handling reduces\nthe code duplication.\nNote: When we catch more than one exception in single catch block, catch parameter is implicity final.\nWe cannot assign any value to catch parameter.\nEx: catch(ArrayIndexOutOfBoundsException || ArithmeticException e)\n{\n}\nIn the above example e is final we cannot assign any value or modify e in catch statement.",
    "category": "Exceptions",
    "options": [
      "We shouldn’t declare any code between try and finally block.",
      "From Java 7, we can catch more than one exception with single catch block.",
      "Yes we can rethrow the same exception from our catch handler.",
      "All the subclasses of Throwable class except error,Runtime Exception and its subclasses are checked exceptions."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 66,
    "question": "What are checked Exceptions?",
    "answerText": "1) All the subclasses of Throwable class except error,Runtime Exception and its subclasses are checked\nexceptions.\n2) Checked exception should be thrown with keyword throws or should be provided try catch block, else\nthe program would not compile. We do get compilation error.\nExamples:\n1) IOException,\n2) SQlException,\n3) FileNotFoundException,\n4) InvocationTargetException,\n5) CloneNotSupportedException\n6) ClassNotFoundException\n7) InstantiationException",
    "category": "Exceptions",
    "options": [
      "Yes we can rethrow the same exception from our catch handler.",
      "All the subclasses of Throwable class except error,Runtime Exception and its subclasses are checked exceptions.",
      "When JVM detects exception causing code, it constructs a new exception handling object by including the following information.",
      "Separating normal code from exception handling code to avoid abnormal termination of program."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 67,
    "question": "What are unchecked exceptions in java?",
    "answerText": "All subclasses of RuntimeException are called unchecked exceptions. These are unchecked exceptions\nbecause compiler does not checks if a method handles or throws exceptions.\nProgram compiles even if we do not catch the exception or throws the exception.\nIf an exception occurs in the program,program terminates. It is difficult to handle these exceptions\nbecause there may be many places causing exceptions.\nExample: 1) Arithmetic Exception\n3) ArrayIndexOutOfBoundsException\n4) ClassCastException\n5) IndexOutOfBoundException\n6) NullPointerException\n7) NumberFormatException\n8) StringIndexOutOfBounds\n9) UnsupportedOperationException",
    "category": "Exceptions",
    "options": [
      "Separating normal code from exception handling code to avoid abnormal termination of program.",
      "After throw statement jvm stop execution and subsequent statements are not executed.",
      "finally block is more important than return statement when both are present in a program.",
      "All subclasses of RuntimeException are called unchecked exceptions."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 68,
    "question": "Explain differences between checked and Unchecked exceptions in java?",
    "answerText": "Unchecked Exception Checked Exception\n1) All the subclasses of RuntimeException are All subclasses of Throwable class except\ncalled unchecked exception. RuntimeException are called as checked exceptions\n2) Unchecked exceptions need not be handled at Checked Exceptions need to be handled at compile\ncompile time time.\n3) These exceptions arise mostly due to coding\nmistakes in our program.\n4) ArrayIndexOutOfBoundsException, SqlException,\nClassCastException, IndexOutOfBoundException FileNotFoundException,ClassNotFoundException",
    "category": "Exceptions",
    "options": [
      "Unchecked Exception Checked Exception 1) All the subclasses of RuntimeException are All subclasses of Throwable class except called...",
      "We shouldn’t declare any code between try and catch block.",
      "We can handle exceptions in either of the two ways: 1) By specifying try catch block where we can catch the exception.",
      "When JVM detects exception causing code, it constructs a new exception handling object by including the following information."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 69,
    "question": "What is default Exception handling in java?",
    "answerText": "When JVM detects exception causing code, it constructs a new exception handling object by including the\nfollowing information.\n1) Name of Exception\n2) Description about the Exception\n3) Location of Exception.\nAfter creation of object by JVM it checks whether there is exception handling code or not. If there is\nexception handling code then exception handles and continues the program. If there is no exception\nhandling code JVM give the responsibility of exception handling to default handler and terminates\nabruptly.\nDefault Exception handler displays description of exception,prints the stacktrace and location of exception\nand terminates the program.\nNote: The main disadvantage of this default exception handling is program terminates abruptly.",
    "category": "Exceptions",
    "options": [
      "Try 2) Catch 3) throw 4) throws 5) finally",
      "When JVM detects exception causing code, it constructs a new exception handling object by including the following information.",
      "This error is thrown when JVM tries to load the class but no definition for that class is found NoClassDefFoundError will occur.",
      "Yes try statements can be nested."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 70,
    "question": "Explain throw keyword in java?",
    "answerText": "Generally JVM throws the exception and we handle the exceptions by using try catch block. But there are\nsituations where we have to throw userdefined exceptions or runtime exceptions. In such case we use\nthrow keyword to throw exception explicitly.\nSyntax: throw throwableInstance;\nThrowable instance must be of type throwable or any of its subclasses.\nAfter the throw statement execution stops and subsequent statements are not executed. Once exception\nobject is thrown JVM checks is there any catch block to handle the exception. If not then the next catch\nstatement till it finds the appropriate handler. If appropriate handler is not found,then default exception\nhandler halts the program and prints the description and location of exception.\nIn general we use throw keyword for throwing userdefined or customized exception.",
    "category": "Exceptions",
    "options": [
      "In java exception is an object.",
      "Throws statement is used at the end of method signature to indicate that an exception of a given type may be thrown from the method.",
      "Generally JVM throws the exception and we handle the exceptions by using try catch block.",
      "Error is the subclass of Throwable class in java."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 71,
    "question": "Can we write any code after throw statement?",
    "answerText": "After throw statement jvm stop execution and subsequent statements are not executed. If we try to write\nany statement after throw we do get compile time error saying unreachable code.",
    "category": "Exceptions",
    "options": [
      "When JVM tries to load a class by its string name, and couldn’t able to find the class classNotFoundException will be thrown.",
      "After throw statement jvm stop execution and subsequent statements are not executed.",
      "In try block we define all exception causing code.",
      "Finally block is used for cleaning up of resources such as closing connections, sockets etc."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 72,
    "question": "Explain importance of throws keyword in java?",
    "answerText": "Throws statement is used at the end of method signature to indicate that an exception of a given type\nmay be thrown from the method.\nThe main purpose of throws keyword is to delegate responsibility of exception handling to the caller\nmethods, in the case of checked exception.\nIn the case of unchecked exceptions, it is not required to use throws keyword.\nWe can use throws keyword only for throwable types otherwise compile time error saying incompatible\ntypes.\nAn error is unchecked, it is not required to handle by try catch or by throws.\nSyntax: Class Test{\nPublic static void main(String args[]) throws IE\n{\n}\n}\nNote: The method should throw only checked exceptions and subclasses of checked exceptions.\nIt is not recommended to specify exception superclasses in the throws class when the actual exceptions\nthrown in the method are instances of their subclass.",
    "category": "Exceptions",
    "options": [
      "Error is the subclass of Throwable class in java.",
      "When JVM tries to load a class by its string name, and couldn’t able to find the class classNotFoundException will be thrown.",
      "When JVM detects exception causing code, it constructs a new exception handling object by including the following information.",
      "Throws statement is used at the end of method signature to indicate that an exception of a given type may be thrown from the method."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 73,
    "question": "Explain the importance of finally over return statement?",
    "answerText": "finally block is more important than return statement when both are present in a program. For example if\nthere is any return statement present inside try or catch block, and finally block is also present first\nfinally statement will be executed and then return statement will be considered.",
    "category": "Exceptions",
    "options": [
      "Finally block will not be executed whenever jvm shutdowns.",
      "Exception handling is a mechanism what to do when some abnormal situation arises in program.",
      "Finally block is used for cleaning up of resources such as closing connections, sockets etc.",
      "finally block is more important than return statement when both are present in a program."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 74,
    "question": "Explain a situation where finally block will not be executed?",
    "answerText": "Finally block will not be executed whenever jvm shutdowns. If we use system.exit(0) in try statement\nfinally block if present will not be executed.",
    "category": "Exceptions",
    "options": [
      "When JVM tries to load a class by its string name, and couldn’t able to find the class classNotFoundException will be thrown.",
      "Finally block will not be executed whenever jvm shutdowns.",
      "Throws statement is used at the end of method signature to indicate that an exception of a given type may be thrown from the method.",
      "Yes try statements can be nested."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 75,
    "question": "Can we use catch statement for checked exceptions?",
    "answerText": "If there is no chance of raising an exception in our code then we can’t declare catch block for handling\nchecked exceptions.This raises compile time error if we try to handle checked exceptions when there is\nno possibility of causing exception.",
    "category": "Exceptions",
    "options": [
      "Accesing an element that does not exist in array.",
      "When JVM detects exception causing code, it constructs a new exception handling object by including the following information.",
      "Each try block requires atleast one catch block or finally block.",
      "If there is no chance of raising an exception in our code then we can’t declare catch block for handling checked exceptions.This..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 76,
    "question": "What are user defined exceptions?",
    "answerText": "To create customized error messages we use userdefined exceptions. We can create user defined\nexceptions as checked or unchecked exceptions.\nWe can create user defined exceptions that extend Exception class or subclasses of checked exceptions so\nthat userdefined exception becomes checked.\nUserdefined exceptions can extend RuntimeException to create userdefined unchecked exceptions.\nNote: It is recommended to keep our customized exception class as unchecked,i.e we need to extend\nRuntime Exception class but not Excpetion class.",
    "category": "Exceptions",
    "options": [
      "If there is no chance of raising an exception in our code then we can’t declare catch block for handling checked exceptions.This...",
      "When JVM detects exception causing code, it constructs a new exception handling object by including the following information.",
      "In some cases our code may throw more than one exception.",
      "To create customized error messages we use userdefined exceptions."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 77,
    "question": "Can we rethrow the same exception from catch handler?",
    "answerText": "Yes we can rethrow the same exception from our catch handler. If we want to rethrow checked exception\nfrom a catch block we need to declare that exception.",
    "category": "Exceptions",
    "options": [
      "Yes we can rethrow the same exception from our catch handler.",
      "Accesing an element that does not exist in array.",
      "Error is the subclass of Throwable class in java.",
      "Separating normal code from exception handling code to avoid abnormal termination of program."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 78,
    "question": "Can we nested try statements in java?",
    "answerText": "Yes try statements can be nested. We can declare try statements inside the block of another try\nstatement.",
    "category": "Exceptions",
    "options": [
      "In try block we define all exception causing code.",
      "Yes try statements can be nested.",
      "In java exception is an object.",
      "Yes we can rethrow the same exception from our catch handler."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 79,
    "question": "Explain the importance of throwable class and its methods?",
    "answerText": "Throwable class is the root class for Exceptions. All exceptions are derived from this throwable class. The\ntwo main subclasses of Throwable are Exception and Error. The three methods defined in throwable class\nare:\n1) void printStackTrace():\nThis prints the exception information in the following format:\nName of the exception, description followed by stack trace.\n2) getMessage()\nThis method prints only the description of Exception.\n3) toString():\nIt prints the name and description of Exception.",
    "category": "Exceptions",
    "options": [
      "Throwable class is the root class for Exceptions.",
      "Throws statement is used at the end of method signature to indicate that an exception of a given type may be thrown from the method.",
      "Finally block is used for cleaning up of resources such as closing connections, sockets etc.",
      "Yes try statements can be nested."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 80,
    "question": "Explain when ClassNotFoundException will be raised?",
    "answerText": "When JVM tries to load a class by its string name, and couldn’t able to find the class\nclassNotFoundException will be thrown. An example for this exception is when class name is misspelled\nand when we try to load the class by string name hence class cannot be found which raises\nClassNotFoundException.",
    "category": "Exceptions",
    "options": [
      "When JVM tries to load a class by its string name, and couldn’t able to find the class classNotFoundException will be thrown.",
      "Generally JVM throws the exception and we handle the exceptions by using try catch block.",
      "Error is the subclass of Throwable class in java.",
      "Unchecked Exception Checked Exception 1) All the subclasses of RuntimeException are All subclasses of Throwable class except called..."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 81,
    "question": "Explain when NoClassDefFoundError will be raised?",
    "answerText": "This error is thrown when JVM tries to load the class but no definition for that class is found\nNoClassDefFoundError will occur. The class may exist at compile time but unable to find at runtime. This\nmight be due to misspelled classname at command line, or classpath is not specified properly, or the\nclass file with byte code is no longer available.\nJava Interview questions on threads",
    "category": "Exceptions",
    "options": [
      "Finally block is used for cleaning up of resources such as closing connections, sockets etc.",
      "This error is thrown when JVM tries to load the class but no definition for that class is found NoClassDefFoundError will occur.",
      "We can handle exceptions in either of the two ways: 1) By specifying try catch block where we can catch the exception.",
      "When JVM tries to load a class by its string name, and couldn’t able to find the class classNotFoundException will be thrown."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 83,
    "question": "What is process?",
    "answerText": "A process is a program in execution.\nEvery process have their own memory space.Process are heavy weight and requires their own address\nspace. One or more threads make a process.",
    "category": "Threads",
    "options": [
      "Class declared with in another class is defined as nested class.",
      "IllegalMonitorStateException is thrown when wait(), notify() and notifyAll() are called in non synchronized context.",
      "sleep() method causes current running thread to sleep for specified amount of time.",
      "A process is a program in execution."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 84,
    "question": "What is thread in java?",
    "answerText": "Thread is separate path of execution in program.\nThreads are\n1) Light weight\n2) They share the same address space.\n3) creating thread is simple when compared to process because creating thread requires less resources\nwhen compared to process\n4) Threads exists in process. A process have atleast one thread.",
    "category": "Threads",
    "options": [
      "Inner class defined without any class name is called anonymous inner class.",
      "Thread is separate path of execution in program.",
      "Thread local variables are variables associated to a particular thread rather than object.",
      "(or) What is the purpose of nested class in java- 1) Grouping of related classes Classes which are not reusable can be defined as..."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 85,
    "question": "Difference between process and thread?",
    "answerText": "Process Thread\n1) Program in execution. Separate path of execution in program. One or\nmore threads is called as process.\n2) Processes are heavy weight Threads are light weight.\n3) Processes require separate address space. Threads share same address space.\n4) Interprocess communication is expensive. Interthread communication is less expensive\ncompared to processes.\n5) Context switching from one process to another Context switching between threads is low cost.\nis costly.",
    "category": "Threads",
    "options": [
      "Class declared with in another class is defined as nested class.",
      "Process Thread 1) Program in execution.",
      "No sleep() method causes current thread to sleep not any other thread.",
      "Multitasking means performing more than one activity at a time on the computer."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 86,
    "question": "What is multitasking?",
    "answerText": "Multitasking means performing more than one activity at a time on the computer. Example Using\nspreadsheet and using calculator at same time.",
    "category": "Threads",
    "options": [
      "Thread is separate path of execution in program.",
      "Nested classes without any static keyword declaration in class definition are defined as non static nested classes.",
      "No one thread cannot block the other thread in java.",
      "Multitasking means performing more than one activity at a time on the computer."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 87,
    "question": "What are different types of multitasking?",
    "answerText": "There are two different types of multitasking:\n1) Process based multitasking\n2) Thread based multitasking\nProcess based multitasking: It allows to run two or more programs concurrently. In process\nbased multitasking a process is the smallest part of code.\nExample: Running Ms word and Ms powerpoint at a time.\nThread based multitasking: It allows to run parts of a program to run concurrently.\nExample: Formatting the text and printing word document at same time.\nJava supports thread based multitasking and provides built in support for multithreading.",
    "category": "Threads",
    "options": [
      "By default all threads are non daemon.",
      "Daemon threads are threads which run in background.",
      "A process is a program in execution.",
      "There are two different types of multitasking: 1) Process based multitasking 2) Thread based multitasking Process based..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 88,
    "question": "What are the benefits of multithreaded programming?",
    "answerText": "Multithreading enables to use idle time of cpu to another thread which results in faster execution of\nprogram. In single threaded environment each task has to be completed before proceeding to next task\nmaking cpu idle.",
    "category": "Threads",
    "options": [
      "join(),sleep(),wait(),notify(), notifyAll() methods are executed- Method Releases lock (Yes or No) yield() No sleep() No join() No...",
      "No sleep() method causes current thread to sleep not any other thread.",
      "Nested classes defined inside a method are local inner classes.",
      "Multithreading enables to use idle time of cpu to another thread which results in faster execution of program."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 89,
    "question": "Explain thread in java?",
    "answerText": "1) Thread is independent path of execution with in a program.\n2) A thread consists of three parts Virtual Cpu, Code and data.\n3) At run time threads share code and data i.e they use same address space.\n4) Every thread in java is an object of java.lang.Thread class.",
    "category": "Threads",
    "options": [
      "Every thread in java has priorities in between 1 to 10.",
      "Lock also called monitor is used to prevent access to a shared resource by multiple threads.",
      "Thread is independent path of execution with in a program.",
      "Yield() method makes the current running thread to move in to runnable state from running state giving chance to remaining threads..."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 90,
    "question": "List Java API that supports threads?",
    "answerText": "java.lang.Thread: This is one of the way to create a thread. By extending Thread class and overriding\nrun() we can create thread in java.\njava.lang.Runnable: Runnable is an interface in java. By implementing runnable interface and overriding\nrun() we can create thread in java.\njava.lang.Object: Object class is the super class for all the classes in java. In object class we have three\nmethods wait(), notify(), notifyAll() that supports threads.\njava.util.concurrent: This package has classes and interfaces that supports concurrent programming.\nEx: Executor interface, Future task class etc.",
    "category": "Threads",
    "options": [
      "Thread scheduler is part of JVM use to determine which thread to run at this moment when there are multiple threads.",
      "java.lang.Thread: This is one of the way to create a thread.",
      "IllegalMonitorStateException is thrown when wait(), notify() and notifyAll() are called in non synchronized context.",
      "Acquiring lock on the class instance rather than object of the class is called class level lock."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 91,
    "question": "Explain about main thread in java?",
    "answerText": "Main thread is the first thread that starts immediately after a program is started.\nMain thread is important because:\n1) All the child threads spawn from main thread.\n2) Main method is the last thread to finish execution.\nWhen JVM calls main method() it starts a new thread. Main() method is temporarily stopped while the\nnew thread starts running.",
    "category": "Threads",
    "options": [
      "There are three methods in Thread class which prevents execution of thread.",
      "Main thread is the first thread that starts immediately after a program is started.",
      "IllegalMonitorStateException is thrown when wait(), notify() and notifyAll() are called in non synchronized context.",
      "If we don’t override run method.Then default implementation of Thread class run() method will be executed and hence the thread will..."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 92,
    "question": "In how many ways we can create threads in java?",
    "answerText": "We can create threads in java by any of the two ways:\n1) By extending Thread class\n2) By Implementing Runnable interface.",
    "category": "Threads",
    "options": [
      "We can create threads in java by any of the two ways: 1) By extending Thread class 2) By Implementing Runnable interface.",
      "the acquired lock- wait(), notify(), notifyAll() methods are always called in synchronized context.",
      "Multitasking means performing more than one activity at a time on the computer.",
      "Runnable r = new Runnable() { @Override public void run() { } }; Runnable is an interface.If we see the above code it looks like we..."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 93,
    "question": "Explain creating threads by implementing Runnable class?",
    "answerText": "This is first and foremost way to create threads. By implementing runnable interface and implementing\nrun() method we can create new thread.\nMethod signature: public void run()\nRun is the starting point for execution for another thread within our program.\nExample:\npublic class MyClass implements Runnable {\n@Override\npublic void run() {\n// T\n}\n}",
    "category": "Threads",
    "options": [
      "This is first and foremost way to create threads.",
      "If we don’t override run method.Then default implementation of Thread class run() method will be executed and hence the thread will...",
      "Thread is independent path of execution with in a program.",
      "Every thread in java has priorities in between 1 to 10."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 94,
    "question": "Explain creating threads by extending Thread class?",
    "answerText": "We can create a thread by extending Thread class. The class which extends Thread class must override\nthe run() method.\nExample:\npublic class MyClass extends Thread {\n@Override\npublic void run() {\n// Starting point of Execution\n}\n}",
    "category": "Threads",
    "options": [
      "Synchronizing few lines of code rather than complete method with the help of synchronized keyword are called synchronized blocks.",
      "We can create a thread by extending Thread class.",
      "Thread is independent path of execution with in a program.",
      "Inner class defined without any class name is called anonymous inner class."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 95,
    "question": "Which is the best approach for creating thread?",
    "answerText": "The best way for creating threads is to implement runnable interface.\nWhen we extend Thread class we can’t extend any other class.\nWhen we create thread by implementing runnable interface we can implement Runnable interface. In\nboth ways we have to implement run() method.",
    "category": "Threads",
    "options": [
      "Thread scheduler is part of JVM use to determine which thread to run at this moment when there are multiple threads.",
      "Daemon threads are threads which run in background.",
      "The best way for creating threads is to implement runnable interface.",
      "Multitasking means performing more than one activity at a time on the computer."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 96,
    "question": "Explain the importance of thread scheduler in java?",
    "answerText": "Thread scheduler is part of JVM use to determine which thread to run at this moment when there are\nmultiple threads. Only threads in runnable state are choosen by scheduler.\nThread scheduler first allocates the processor time to the higher priority threads. To allocate\nmicroprocessor time in between the threads of the same priority, thread scheduler follows round robin\nfasion.",
    "category": "Threads",
    "options": [
      "wait(): wait() method() makes the thread current thread sleeps and releases the lock until some other thread acquires the lock and...",
      "By default all threads are non daemon.",
      "Thread scheduler is part of JVM use to determine which thread to run at this moment when there are multiple threads.",
      "Process Thread 1) Program in execution."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 97,
    "question": "Explain the life cycle of thread?",
    "answerText": "A thread can be in any of the five states:\n1) New: When the instance of thread is created it will be in New state.\nEx: Thread t= new Thread();\nIn the above example t is in new state. The thread is created but not in active state to make it active we\nneed to call start() method on it.\n2) Runnable state: A thread can be in the runnable state in either of the following two ways:\na) When the start method is invoked or\nb) A thread can also be in runnable state after coming back from blocked or sleeping or waiting state.\n3) Running state: If thread scheduler allocates cpu time, then the thread will be in running state.\n4) Waited /Blocking/Sleeping state:\nIn this state the thread can be made temporarily inactive for a short period of time. A thread can be in\nthe above state in any of the following ways:\n1) The thread waits to acquire lock of an object.\n2) The thread waits for another thread to complete.\n3) The thread waits for notification of other thread.\n5) Dead State: A thread is in dead state when thread’s run method execution is complete. It dies\nautomatically when thread’s run method execution is completed and the thread object will be garbage\ncollected.",
    "category": "Threads",
    "options": [
      "When there are several threads in waiting, thread priorities determine which thread to run.",
      "A thread can be in any of the five states: 1) New: When the instance of thread is created it will be in New state.",
      "Runnable r = new Runnable() { @Override public void run() { } }; Runnable is an interface.If we see the above code it looks like we...",
      "If we don’t override run method.Then default implementation of Thread class run() method will be executed and hence the thread will..."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 98,
    "question": "Can we restart a dead thread in java?",
    "answerText": "If we try to restart a dead thread by using start method we will get run time exception since the thread is\nnot alive.",
    "category": "Threads",
    "options": [
      "Daemon threads are threads which run in background.",
      "If we try to restart a dead thread by using start method we will get run time exception since the thread is not alive.",
      "Runnable r = new Runnable() { @Override public void run() { } }; Runnable is an interface.If we see the above code it looks like we...",
      "If we don’t override run method.Then default implementation of Thread class run() method will be executed and hence the thread will..."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 99,
    "question": "Can one thread block the other thread?",
    "answerText": "No one thread cannot block the other thread in java. It can block the current thread that is running.",
    "category": "Threads",
    "options": [
      "No one thread cannot block the other thread in java.",
      "synchronized methods simultaneously by other threads- No it is not possible to execute synchronized methods by other threads when a...",
      "Thread class interrupt() method is used to interrupt current thread or another thread.",
      "There are three methods in Thread class which prevents execution of thread."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 100,
    "question": "Can we restart a thread already started in java?",
    "answerText": "A thread can be started in java using start() method in java. If we call start method second time once it is\nstarted it will cause RunTimeException(IllegalThreadStateException). A runnable thread cannot be\nrestarted.",
    "category": "Threads",
    "options": [
      "If very few lines of code requires synchronization then it is recommended to use synchronized blocks.",
      "A thread can be started in java using start() method in java.",
      "Yield() causes current thread to sleep for specified amount of time giving opportunity for other threads of equal priority to execute.",
      "join(),sleep(),wait(),notify(), notifyAll() methods are executed- Method Releases lock (Yes or No) yield() No sleep() No join() No..."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 101,
    "question": "What happens if we don’t override run method?",
    "answerText": "If we don’t override run method.Then default implementation of Thread class run() method will be\nexecuted and hence the thread will never be in runnable state.",
    "category": "Threads",
    "options": [
      "java.lang.Thread: This is one of the way to create a thread.",
      "There are two ways to do synchronization in java: 1) Synchronized methods 2) Synchronized blocks To do synchronization we use...",
      "If we don’t override run method.Then default implementation of Thread class run() method will be executed and hence the thread will...",
      "the acquired lock- wait(), notify(), notifyAll() methods are always called in synchronized context."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 102,
    "question": "Can we overload run() method in java?",
    "answerText": "We can overload run method but Thread class start method will always cal run method with no\narguments. But the overloaded method will not be called by start method we have to explicitly call this\nstart() method.",
    "category": "Threads",
    "options": [
      "Thread local variables are variables associated to a particular thread rather than object.",
      "We can overload run method but Thread class start method will always cal run method with no arguments.",
      "By default all threads are non daemon.",
      "A thread can be in any of the five states: 1) New: When the instance of thread is created it will be in New state."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 105,
    "question": "What is a lock or purpose of locks in java?",
    "answerText": "Lock also called monitor is used to prevent access to a shared resource by multiple threads.\nA lock is associated to shared resource. Whenever a thread wants to access a shared resource if must first\nacquire a lock. If already a lock has been acquired by other it can’t access that shared resource. At this\nmoment the thread has to wait until another thread releases the lock on shared resource. To lock an\nobject we use synchronization in java.\nA lock protects section of code allowing only one thread to execute at at a time.",
    "category": "Threads",
    "options": [
      "We are not guaranteed which thread will be executed first when there are threads with equal priorities in the pool.",
      "When a static class is defined inside a enclosing class we define that as nested class.",
      "Lock also called monitor is used to prevent access to a shared resource by multiple threads.",
      "synchronized methods simultaneously by other threads- No it is not possible to execute synchronized methods by other threads when a..."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 106,
    "question": "In how many ways we can do synchronization in java?",
    "answerText": "There are two ways to do synchronization in java:\n1) Synchronized methods\n2) Synchronized blocks\nTo do synchronization we use synchronize keyword.",
    "category": "Threads",
    "options": [
      "When a static class is defined inside a enclosing class we define that as nested class.",
      "Class declared with in another class is defined as nested class.",
      "Inner class defined without any class name is called anonymous inner class.",
      "There are two ways to do synchronization in java: 1) Synchronized methods 2) Synchronized blocks To do synchronization we use..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 107,
    "question": "What are synchronized methods?",
    "answerText": "If we want a method of object to be accessed by single thread at a time we declare that method with\nsynchronized keyword.\nSignature:\npublic synchronized void methodName(){}\nTo execute synchronized method first lock has to be acquired on that object. Once synchronized method\nis called lock will be automatically acquired on that method when no other thread has lock on that\nmethod. once lock has been acquired then synchronized method gets executed. Once synchronized\nmethod execution completes automatically lock will be released. The prerequisite to execute a\nsynchronized method is to acquire lock before method execution. If there is a lock already acquired by\nany other thread it waits till the other thread completes.",
    "category": "Threads",
    "options": [
      "Local inner class does not have any access specifier.",
      "the acquired lock- wait(), notify(), notifyAll() methods are always called in synchronized context.",
      "Process Thread 1) Program in execution.",
      "If we want a method of object to be accessed by single thread at a time we declare that method with synchronized keyword."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 108,
    "question": "When do we use synchronized methods in java?",
    "answerText": "If multiple threads tries to access a method where method can manipulate the state of object, in such\nscenario we can declare a method as synchronized.",
    "category": "Threads",
    "options": [
      "If very few lines of code requires synchronization then it is recommended to use synchronized blocks.",
      "If multiple threads tries to access a method where method can manipulate the state of object, in such scenario we can declare a...",
      "Thread is separate path of execution in program.",
      "We can create a thread by extending Thread class."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 109,
    "question": "When a thread is executing synchronized methods, then is it possible to?",
    "answerText": "synchronized methods simultaneously by other threads-\nNo it is not possible to execute synchronized methods by other threads when a thread is inside a\nsynchronized method.",
    "category": "Threads",
    "options": [
      "When a static class is defined inside a enclosing class we define that as nested class.",
      "synchronized methods simultaneously by other threads- No it is not possible to execute synchronized methods by other threads when a...",
      "If multiple threads tries to access a method where method can manipulate the state of object, in such scenario we can declare a...",
      "A thread can invoke the join() method on other thread to wait for other thread to complete its execution."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 110,
    "question": "When a thread is executing a synchronized method, then is it possible for the?",
    "answerText": "thread to access other synchronized methods of an object -\nYes it is possible for thread executing a synchronized method to execute another synchronized method of\nan object.\npublic synchronized void methodName()\n{\n}\nTo execute synchronized method first lock has to be acquired on that object. Once synchronized method\nis called lock will be automatically acquired on that method when no other thread has lock on that\nmethod. once lock has been acquired then synchronized method gets executed. Once synchronized\nmethod execution completes automatically lock will be released. The prerequisite to execute a\nsynchronized method is to acquire lock before method execution. If there is a lock already acquired by\nany other thread it waits till the other thread completes.",
    "category": "Threads",
    "options": [
      "thread to access other synchronized methods of an object - Yes it is possible for thread executing a synchronized method to execute...",
      "There are two different types of multitasking: 1) Process based multitasking 2) Thread based multitasking Process based...",
      "Usually threads are created to perform different unrelated tasks but there may be situations where they may perform related tasks.",
      "We are not guaranteed which thread will be executed first when there are threads with equal priorities in the pool."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 111,
    "question": "What are synchronized blocks in java?",
    "answerText": "Synchronizing few lines of code rather than complete method with the help of synchronized keyword are\ncalled synchronized blocks.\nSignature:\nSynchronized (object reference){// code}",
    "category": "Threads",
    "options": [
      "Synchronizing few lines of code rather than complete method with the help of synchronized keyword are called synchronized blocks.",
      "A thread can be started in java using start() method in java.",
      "Runnable r = new Runnable() { @Override public void run() { } }; Runnable is an interface.If we see the above code it looks like we...",
      "Every thread in java has priorities in between 1 to 10."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 112,
    "question": "When do we use synchronized blocks and advantages of using synchronized?",
    "answerText": "If very few lines of code requires synchronization then it is recommended to use synchronized blocks. The\nmain advantage of synchronized blocks over synchronized methods is it reduces the waiting time of\nthreads and improves performance of the system.",
    "category": "Threads",
    "options": [
      "sleep() method causes current running thread to sleep for specified amount of time.",
      "We are not guaranteed which thread will be executed first when there are threads with equal priorities in the pool.",
      "We can access static members and static methods of outer class without creating any instance of outer class.",
      "If very few lines of code requires synchronization then it is recommended to use synchronized blocks."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 113,
    "question": "What is class level lock?",
    "answerText": "Acquiring lock on the class instance rather than object of the class is called class level lock. The difference\nbetween class level lock and object level lock is in class level lock lock is acquired on class.class instance\nand in object level lock,lock is acquired on object of class.",
    "category": "Threads",
    "options": [
      "Process Thread 1) Program in execution.",
      "The best way for creating threads is to implement runnable interface.",
      "There are three methods in Thread class which prevents execution of thread.",
      "Acquiring lock on the class instance rather than object of the class is called class level lock."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 114,
    "question": "Can we synchronize static methods in java?",
    "answerText": "Every class in java has a unique lock associated with it. If a thread wants to execute static synchronize\nmethod it need to acquire first class level lock. When a thread was executing static synchronized method\nno other thread can execute static synchronized method of class since lock is acquired on class.\nBut it can execute the following methods simultaneously:\n1) Normal static methods\n2) Normal instance methods\n3) synchronize instance methods\nSignature:\nsynchronized(Classname.class){}",
    "category": "Threads",
    "options": [
      "wait(): wait() method() makes the thread current thread sleeps and releases the lock until some other thread acquires the lock and...",
      "Every class in java has a unique lock associated with it.",
      "When a static class is defined inside a enclosing class we define that as nested class.",
      "the acquired lock- wait(), notify(), notifyAll() methods are always called in synchronized context."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 115,
    "question": "Can we use synchronized block for primitives?",
    "answerText": "Synchronized blocks are applicable only for objects if we try to use synchronized blocks for primitives we\nget compile time error.",
    "category": "Threads",
    "options": [
      "Daemon threads are threads which run in background.",
      "If we want a method of object to be accessed by single thread at a time we declare that method with synchronized keyword.",
      "Synchronized blocks are applicable only for objects if we try to use synchronized blocks for primitives we get compile time error.",
      "Local inner class does not have any access specifier."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 116,
    "question": "What are thread priorities and importance of thread priorities in java?",
    "answerText": "When there are several threads in waiting, thread priorities determine which thread to run. In java\nprogramming language every thread has a priority. A thread inherits priority of its parent thread. By\ndefault thread has normal priority of 5. Thread scheduler uses thread priorities to decide when each\nthread is allowed to run. Thread scheduler runs higher priority threads first.",
    "category": "Threads",
    "options": [
      "A thread can be in any of the five states: 1) New: When the instance of thread is created it will be in New state.",
      "When there are several threads in waiting, thread priorities determine which thread to run.",
      "Yield() causes current thread to sleep for specified amount of time giving opportunity for other threads of equal priority to execute.",
      "Thread is independent path of execution with in a program."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 117,
    "question": "Explain different types of thread priorities?",
    "answerText": "Every thread in java has priorities in between 1 to 10. By default priority is 5\n(Thread.NORM_PRIORITY). The maximum priority would be 10 and minimum would be 1.Thread class\ndefines the following constants(static final variables) to define properties.\nThread. MIN_PRIORITY = 1;\nThread.NORM_PRIORITY=5;\nThread. MAX_PRIORITY=10;",
    "category": "Threads",
    "options": [
      "java.lang.Thread: This is one of the way to create a thread.",
      "thread to access other synchronized methods of an object - Yes it is possible for thread executing a synchronized method to execute...",
      "Every thread in java has priorities in between 1 to 10.",
      "Nested classes defined inside a method are local inner classes."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 118,
    "question": "How to change the priority of thread or how to set priority of thread?",
    "answerText": "Thread class has a set method to set the priority of thread and get method to get the priority of the\nthread.\nSignature: final void setPriority(int value);\nThe setPriority() method is a request to jvm to set the priority. JVM may or may not oblige the request.\nWe can get the priority of current thread by using getPriority() method of Thread class.\nfinal int getPriority()\n{\n}",
    "category": "Threads",
    "options": [
      "Thread class has a set method to set the priority of thread and get method to get the priority of the thread.",
      "When there are several threads in waiting, thread priorities determine which thread to run.",
      "the acquired lock- wait(), notify(), notifyAll() methods are always called in synchronized context.",
      "Main thread is the first thread that starts immediately after a program is started."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 119,
    "question": "If two threads have same priority which thread will be executed first?",
    "answerText": "We are not guaranteed which thread will be executed first when there are threads with equal priorities in\nthe pool. It depends on thread scheduler to which thread to execute. The scheduler can do any of the\nfollowing things:\n1) It can pick any thread from the pool and run it till it completes.\n2) It can give equal opportunity for all the threads by time slicing.",
    "category": "Threads",
    "options": [
      "We are not guaranteed which thread will be executed first when there are threads with equal priorities in the pool.",
      "Yield() method makes the current running thread to move in to runnable state from running state giving chance to remaining threads...",
      "When there are several threads in waiting, thread priorities determine which thread to run.",
      "Thread local variables are variables associated to a particular thread rather than object."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 120,
    "question": "What all methods are used to prevent thread execution?",
    "answerText": "There are three methods in Thread class which prevents execution of thread.\n1) yield()\n2) join()\n3) sleep()",
    "category": "Threads",
    "options": [
      "There are three methods in Thread class which prevents execution of thread.",
      "sleep() method causes current running thread to sleep for specified amount of time.",
      "Nested classes defined inside a method are local inner classes.",
      "Synchronized blocks are applicable only for objects if we try to use synchronized blocks for primitives we get compile time error."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 121,
    "question": "Explain yield() method in thread class?",
    "answerText": "Yield() method makes the current running thread to move in to runnable state from running state giving\nchance to remaining threads of equal priority which are in waiting state. yield() makes current thread to\nsleep for a specified amount of time.There is no guarantee that moving a current running thread from\nrunnable to running state. It all depends on thread scheduler it doesn’t gurantee anything.\nCalling yield() method on thread does not have any affect if object has a lock. The thread does’nt lose\nany lock if it has acquired a lock earlier.\nSignature:\npublic static native void yield()\n{\n}",
    "category": "Threads",
    "options": [
      "No one thread cannot block the other thread in java.",
      "lock- Calling sleep() method on thread which has lock does’nt affect.",
      "Yield() method makes the current running thread to move in to runnable state from running state giving chance to remaining threads...",
      "sleep() method causes current running thread to sleep for specified amount of time."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 122,
    "question": "Is it possible for yielded thread to get chance for its execution again?",
    "answerText": "Yield() causes current thread to sleep for specified amount of time giving opportunity for other threads of\nequal priority to execute. Thread scheduler decides whether it get chance for execution again or not. It all\ndepends on mercy of thread scheduler.",
    "category": "Threads",
    "options": [
      "Yield() method makes the current running thread to move in to runnable state from running state giving chance to remaining threads...",
      "IllegalMonitorStateException is thrown when wait(), notify() and notifyAll() are called in non synchronized context.",
      "Yield() causes current thread to sleep for specified amount of time giving opportunity for other threads of equal priority to execute.",
      "Thread scheduler is part of JVM use to determine which thread to run at this moment when there are multiple threads."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 123,
    "question": "Explain the importance of join() method in thread class?",
    "answerText": "A thread can invoke the join() method on other thread to wait for other thread to complete its\nexecution. Assume we have two threads, t1 and t2 threads. A running thread t1 invokes join() on\nthread t2 then t1 thread will wait in to waiting state until t2 completes. Once t2 completes the execution,\nt1 will continue.\njoin() method throws Interrupted Exception so when ever we use join() method we should handle\nInterrrupted Exception by throws or by using try catch block.\nSignature:\npublic final void join() throws InterruptedException\n{\n}\npublic final synchronized void join(long millis)\nthrows InterruptedException\n{\n}\npublic final synchronized void join(long millis, int nanos)\nthrows InterruptedException\n{\n}",
    "category": "Threads",
    "options": [
      "Main thread is always non daemon.",
      "Every class in java has a unique lock associated with it.",
      "A thread can invoke the join() method on other thread to wait for other thread to complete its execution.",
      "Inner class defined without any class name is called anonymous inner class."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 124,
    "question": "Explain purpose of sleep() method in java?",
    "answerText": "sleep() method causes current running thread to sleep for specified amount of time. sleep() method is\nthe minimum amount of the time the current thread sleeps but not the exact amount of time.\nSignature:\npublic static native void sleep(long millis) throws InterruptedException\n{\n}\npublic static void sleep(long millis, int nanos)\nthrows InterruptedException {\n}",
    "category": "Threads",
    "options": [
      "Thread local variables are variables associated to a particular thread rather than object.",
      "sleep() method causes current running thread to sleep for specified amount of time.",
      "the acquired lock- wait(), notify(), notifyAll() methods are always called in synchronized context.",
      "(or) What is the purpose of nested class in java- 1) Grouping of related classes Classes which are not reusable can be defined as..."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 125,
    "question": "Assume a thread has lock on it, calling sleep() method on that thread will?",
    "answerText": "lock-\nCalling sleep() method on thread which has lock does’nt affect. Lock will not be released though the\nthread sleeps for a specified amount of time.",
    "category": "Threads",
    "options": [
      "There are three methods in Thread class which prevents execution of thread.",
      "lock- Calling sleep() method on thread which has lock does’nt affect.",
      "An anonymous inner class cannot have any constructor because there is no name for class.",
      "thread class- First to know why they are in object class we should know what wait(), notify(), notifyAll() methods do."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 126,
    "question": "Can sleep() method causes another thread to sleep?",
    "answerText": "No sleep() method causes current thread to sleep not any other thread.",
    "category": "Threads",
    "options": [
      "By default all threads are non daemon.",
      "No sleep() method causes current thread to sleep not any other thread.",
      "Every thread in java has priorities in between 1 to 10.",
      "Thread is independent path of execution with in a program."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 127,
    "question": "Explain about interrupt() method of thread class?",
    "answerText": "Thread class interrupt() method is used to interrupt current thread or another thread. It doesnot mean\nthe current thread to stop immediately, it is polite way of telling or requesting to continue your present\nwork. That is the reason we may not see the impact of interrupt call immediately.\nInitially thread has a boolean property(interrupted status) false. So when we call interrupt() method\nstatus would set to true. This causes the current thread to continue its work and does not have impact\nimmediately.\nIf a thread is in sleeping or waiting status (i.e thread has executed wait () or sleep() method) thread gets\ninterrupted it stops what it is doing and throws an interrupted exception. This is reason we need to handle\ninterrupted exception with throws or try/ catch block.",
    "category": "Threads",
    "options": [
      "Multithreading enables to use idle time of cpu to another thread which results in faster execution of program.",
      "Thread class interrupt() method is used to interrupt current thread or another thread.",
      "Multitasking means performing more than one activity at a time on the computer.",
      "Synchronizing few lines of code rather than complete method with the help of synchronized keyword are called synchronized blocks."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 128,
    "question": "Explain about interthread communication and how it takes place in java?",
    "answerText": "Usually threads are created to perform different unrelated tasks but there may be situations where they\nmay perform related tasks. Interthread communication in java is done with the help of following three\nmethods:\n1) wait()\n2) notify()\n3) notifyAll()",
    "category": "Threads",
    "options": [
      "An anonymous inner class cannot have any constructor because there is no name for class.",
      "Local inner class does not have any access specifier.",
      "Thread is independent path of execution with in a program.",
      "Usually threads are created to perform different unrelated tasks but there may be situations where they may perform related tasks."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 129,
    "question": "Explain wait(), notify() and notifyAll() methods of object class?",
    "answerText": "wait(): wait() method() makes the thread current thread sleeps and releases the lock until some other\nthread acquires the lock and calls notify().\nnotify():notify() method wakes up the thread that called wait on the same object.\nnotfiyAll():notifyAll() method wakes up all the threads that are called wait() on the same object. The\nhighest priority threads will run first.\nAll the above three methods are in object class and are called only in synchronized context.\nAll the above three methods must handle InterruptedException by using throws clause or by using try\ncatch clause.",
    "category": "Threads",
    "options": [
      "Thread is independent path of execution with in a program.",
      "wait(): wait() method() makes the thread current thread sleeps and releases the lock until some other thread acquires the lock and...",
      "A thread can invoke the join() method on other thread to wait for other thread to complete its execution.",
      "Thread class interrupt() method is used to interrupt current thread or another thread."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 130,
    "question": "Explain why wait(), notify() and notifyAll() methods are in Object class rather?",
    "answerText": "thread class-\nFirst to know why they are in object class we should know what wait(), notify(), notifyAll() methods do.\nwait(), notify(), notifyAll() methods are object level methods they are called on same object.wait(),\nnotify(), notifyAll() are called on an shared object so to they are kept in object class rather than thread\nclass.",
    "category": "Threads",
    "options": [
      "A thread can be started in java using start() method in java.",
      "thread class- First to know why they are in object class we should know what wait(), notify(), notifyAll() methods do.",
      "(or) What is the purpose of nested class in java- 1) Grouping of related classes Classes which are not reusable can be defined as...",
      "We can overload run method but Thread class start method will always cal run method with no arguments."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 131,
    "question": "Explain IllegalMonitorStateException and when it will be thrown?",
    "answerText": "IllegalMonitorStateException is thrown when wait(), notify() and notifyAll() are called in non synchronized\ncontext. Wait(), notify(),notifyAll() must always be called in synchronized context other wise we get this\nrun time exception.",
    "category": "Threads",
    "options": [
      "There are three methods in Thread class which prevents execution of thread.",
      "IllegalMonitorStateException is thrown when wait(), notify() and notifyAll() are called in non synchronized context.",
      "If we don’t override run method.Then default implementation of Thread class run() method will be executed and hence the thread will...",
      "Nested classes defined inside a method are local inner classes."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 132,
    "question": "when wait(), notify(), notifyAll() methods are called does it releases the lock?",
    "answerText": "the acquired lock-\nwait(), notify(), notifyAll() methods are always called in synchronized context. When these methods are\ncalled in synchronized context.\nSo when they enter first in synchronized context thread acquires the lock on current object. When wait(),\nnotify(), notifyAll() methods are called lock is released on that object.",
    "category": "Threads",
    "options": [
      "Thread class has a set method to set the priority of thread and get method to get the priority of the thread.",
      "the acquired lock- wait(), notify(), notifyAll() methods are always called in synchronized context.",
      "The best way for creating threads is to implement runnable interface.",
      "sleep() method causes current running thread to sleep for specified amount of time."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 133,
    "question": "Explain which of the following methods releases the lock when yield(),?",
    "answerText": "join(),sleep(),wait(),notify(), notifyAll() methods are executed-\nMethod Releases lock (Yes or No)\nyield() No\nsleep() No\njoin() No\nwait() Yes\nNotify() Yes\nnotifyAll() Yes",
    "category": "Threads",
    "options": [
      "join(),sleep(),wait(),notify(), notifyAll() methods are executed- Method Releases lock (Yes or No) yield() No sleep() No join() No...",
      "Daemon threads are threads which run in background.",
      "If multiple threads tries to access a method where method can manipulate the state of object, in such scenario we can declare a...",
      "Thread class interrupt() method is used to interrupt current thread or another thread."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 134,
    "question": "What are thread groups?",
    "answerText": "Thread Groups are group of threads and other thread groups. It is a way of grouping threads so that\nactions can be performed on set of threads for easy maintenance and security purposes.\nFor example we can start and stop all thread groups. We rarely use thread group class. By default all the\nthreads that are created belong to default thread group of the main thread. Every thread belongs to a\nthread group. Threads that belong to a particular thread group cannot modify threads belonging to\nanother thread group.",
    "category": "Threads",
    "options": [
      "If we don’t override run method.Then default implementation of Thread class run() method will be executed and hence the thread will...",
      "A thread can invoke the join() method on other thread to wait for other thread to complete its execution.",
      "Daemon threads are threads which run in background.",
      "Thread Groups are group of threads and other thread groups."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 135,
    "question": "What are thread local variables?",
    "answerText": "Thread local variables are variables associated to a particular thread rather than object. We declare\nThreadLocal object as private static variable in a class. Everytime a new thread accesses object by using\ngetter or setter we are accesing copy of object. Whenever a thread calls get or set method of\nThreadLocal instance a new copy is associated with particular object.",
    "category": "Threads",
    "options": [
      "We are not guaranteed which thread will be executed first when there are threads with equal priorities in the pool.",
      "We can create a thread by extending Thread class.",
      "Thread local variables are variables associated to a particular thread rather than object.",
      "Multithreading enables to use idle time of cpu to another thread which results in faster execution of program."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 136,
    "question": "What are daemon threads in java?",
    "answerText": "Daemon threads are threads which run in background. These are service threads and works for the\nbenefit of other threads. Garbage collector is one of the good example for daemon threads.\nBy default all threads are non daemon. Daemon nature of a thread can be inherited. If parent thread is\ndaemon, child thread also inherits daemon nature of thread.",
    "category": "Threads",
    "options": [
      "A process is a program in execution.",
      "If we don’t override run method.Then default implementation of Thread class run() method will be executed and hence the thread will...",
      "If we want a method of object to be accessed by single thread at a time we declare that method with synchronized keyword.",
      "Daemon threads are threads which run in background."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 137,
    "question": "How to make a non daemon thread as daemon?",
    "answerText": "By default all threads are non daemon. We can make non daemon nature of thread to daemon by using\nsetDaemon() method. The important point to note here we can call setDaemon() only before start()\nmethod is called on it. If we call setDaemon() after start() method an IllegalThreadStateException will be\nthrown.",
    "category": "Threads",
    "options": [
      "thread class- First to know why they are in object class we should know what wait(), notify(), notifyAll() methods do.",
      "Multithreading enables to use idle time of cpu to another thread which results in faster execution of program.",
      "By default all threads are non daemon.",
      "Thread class has a set method to set the priority of thread and get method to get the priority of the thread."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 138,
    "question": "Can we make main() thread as daemon?",
    "answerText": "Main thread is always non daemon. We cannot change the non daemon nature of main thread to daemon.\nInterview questions on Nested classses and inner classes",
    "category": "Threads",
    "options": [
      "A thread can invoke the join() method on other thread to wait for other thread to complete its execution.",
      "Main thread is always non daemon.",
      "Usually threads are created to perform different unrelated tasks but there may be situations where they may perform related tasks.",
      "We are not guaranteed which thread will be executed first when there are threads with equal priorities in the pool."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 139,
    "question": "What are nested classes in java?",
    "answerText": "Class declared with in another class is defined as nested class.\nThere are two types of nested classes in java.\n1) Static nested class\n2) Non static nested class\nA static nested class has static keyword declared before class definition.",
    "category": "Threads",
    "options": [
      "By default all threads are non daemon.",
      "If we want a method of object to be accessed by single thread at a time we declare that method with synchronized keyword.",
      "Yield() causes current thread to sleep for specified amount of time giving opportunity for other threads of equal priority to execute.",
      "Class declared with in another class is defined as nested class."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 140,
    "question": "What are inner classes or non static nested classes in java?",
    "answerText": "Nested classes without any static keyword declaration in class definition are defined as non static nested\nclasses. Generally non static nested classes are referred as inner classes.\nThere are three types of inner classes in java:\n1) Local inner class\n2) Member inner class\n3) Anonymous inner class",
    "category": "Threads",
    "options": [
      "Usually threads are created to perform different unrelated tasks but there may be situations where they may perform related tasks.",
      "Nested classes without any static keyword declaration in class definition are defined as non static nested classes.",
      "We can create a thread by extending Thread class.",
      "There are two ways to do synchronization in java: 1) Synchronized methods 2) Synchronized blocks To do synchronization we use..."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 141,
    "question": "Why to use nested classes in java?",
    "answerText": "(or)\nWhat is the purpose of nested class in java-\n1) Grouping of related classes\nClasses which are not reusable can be defined as inner class instead of creating inner class.\nFor example: We have a submit button upon click of submit button we need to execute some code. This\ncode is related only to that class and cannot be reused for other class. Instead of creating a new class we\ncan create inner class\n2) To increase encapsulation:\nInner class can access private members of outer class.so by creating getter and setter methods for\nprivate variables, outside world can access these variables. But by creating inner class private variables\ncan be accesed only by inner class.\n3) Code readable and maintainable:\nRather than creating a new class we can create inner class so that it is easy to maintain.\n4) Hiding implementation:\nInner class helps us to hide implementation of class.",
    "category": "Threads",
    "options": [
      "We can create threads in java by any of the two ways: 1) By extending Thread class 2) By Implementing Runnable interface.",
      "(or) What is the purpose of nested class in java- 1) Grouping of related classes Classes which are not reusable can be defined as...",
      "the acquired lock- wait(), notify(), notifyAll() methods are always called in synchronized context.",
      "Synchronizing few lines of code rather than complete method with the help of synchronized keyword are called synchronized blocks."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 142,
    "question": "Explain about static nested classes in java?",
    "answerText": "When a static class is defined inside a enclosing class we define that as nested class. Static nested classes\nare not inner classes. Static nested classes can be instantiated without instance of outer class.\nA static nested doesnot have access to instance variables and non static methods of outer class.",
    "category": "Threads",
    "options": [
      "When a static class is defined inside a enclosing class we define that as nested class.",
      "IllegalMonitorStateException is thrown when wait(), notify() and notifyAll() are called in non synchronized context.",
      "If we want a method of object to be accessed by single thread at a time we declare that method with synchronized keyword.",
      "Main thread is always non daemon."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 143,
    "question": "How to instantiate static nested classes in java?",
    "answerText": "We can access static members and static methods of outer class without creating any instance of outer\nclass.\nSyntax for instantiating Static nested class:\nOuterclassName.StaticNestedClassName ref=new OuterclassName.StaticNestedClassName();",
    "category": "Threads",
    "options": [
      "Every class in java has a unique lock associated with it.",
      "When a static class is defined inside a enclosing class we define that as nested class.",
      "We can access static members and static methods of outer class without creating any instance of outer class.",
      "java.lang.Thread: This is one of the way to create a thread."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 144,
    "question": "Explain about method local inner classes or local inner classes in java?",
    "answerText": "Nested classes defined inside a method are local inner classes. We can create objects of local inner class\nonly inside method where class is defined. A local inner classes exist only when method is invoked and\ngoes out of scope when method returns.",
    "category": "Threads",
    "options": [
      "An anonymous inner class cannot have any constructor because there is no name for class.",
      "Nested classes defined inside a method are local inner classes.",
      "No one thread cannot block the other thread in java.",
      "sleep() method causes current running thread to sleep for specified amount of time."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 145,
    "question": "Explain about features of local inner class?",
    "answerText": "1) Local inner class does not have any access specifier.\n2) We cannot use access modifiers static for local inner class. But we can use abstract and final for local\ninner class.\n3) We cannot declare static members inside local inner classes.\n4) We can create objects of local inner class only inside method where class is defined.\n5) Method local inner classes can only access final variables declared inside a method.\n6) Method local inner classes can be defined inside loops(for,while) and blocks such as if etc.",
    "category": "Threads",
    "options": [
      "Every thread in java has priorities in between 1 to 10.",
      "Local inner class does not have any access specifier.",
      "Every class in java has a unique lock associated with it.",
      "Multithreading enables to use idle time of cpu to another thread which results in faster execution of program."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 146,
    "question": "Explain about anonymous inner classes in java?",
    "answerText": "Inner class defined without any class name is called anonymous inner class. Inner class is declared and\ninstantiated using new keyword.The main purpose of anonymous inner classes in java are to provide\ninterface implementation. We use anonymous classes when we need only one instance for a class. We can\nuse all members of enclosing class and final local variables.\nWhen we compile anonymous inner classes compiler creates two files\n1) EnclosingName.class\n2) EnclsoingName$1.class",
    "category": "Threads",
    "options": [
      "We can create threads in java by any of the two ways: 1) By extending Thread class 2) By Implementing Runnable interface.",
      "No sleep() method causes current thread to sleep not any other thread.",
      "Inner class defined without any class name is called anonymous inner class.",
      "Yield() causes current thread to sleep for specified amount of time giving opportunity for other threads of equal priority to execute."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 147,
    "question": "Explain restrictions for using anonymous inner classes?",
    "answerText": "1) An anonymous inner class cannot have any constructor because there is no name for class.\n2) An anonymous inner class cannot define static methods, fields or classes.\n3) We cannot define an interface anonymously.\n4) Anonymous inner class can be instantiated only once.",
    "category": "Threads",
    "options": [
      "This is first and foremost way to create threads.",
      "Nested classes without any static keyword declaration in class definition are defined as non static nested classes.",
      "The best way for creating threads is to implement runnable interface.",
      "An anonymous inner class cannot have any constructor because there is no name for class."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 148,
    "question": "Is this valid in java - can we instantiate interface in java?",
    "answerText": "Runnable r = new Runnable() {\n@Override\npublic void run() {\n}\n};\nRunnable is an interface.If we see the above code it looks like we are instantiating Runnable interface. But\nwe are not instantiating interface we are instantiating anonymous inner class which is implementation of\nRunnable interface.",
    "category": "Threads",
    "options": [
      "There are two ways to do synchronization in java: 1) Synchronized methods 2) Synchronized blocks To do synchronization we use...",
      "If we want a method of object to be accessed by single thread at a time we declare that method with synchronized keyword.",
      "By default all threads are non daemon.",
      "Runnable r = new Runnable() { @Override public void run() { } }; Runnable is an interface.If we see the above code it looks like we..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 149,
    "question": "Explain about member inner classes?",
    "answerText": "Non static class defined with in enclosing class are called member inner class. A member inner class is\ndefined at member level of class. A member inner class can access the members of outer class including\nprivate members.\nFeatures of member inner classes:\n1) A member inner class can be declared abstract or final.\n2) A member inner class can extend class or implement interface.\n3) An inner class cannot declare static fields or methods.\n4) A member inner class can be declared with public, private, protected or default access.",
    "category": "Inner Classes",
    "options": [
      "Non static class defined with in enclosing class are called member inner class.",
      "Make instance variables private.",
      "Converting primitives to objects can be done with the help of wrapper classes.",
      "For every primitive in java we have corresponding wrapper class."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 150,
    "question": "How to instantiate member inner class?",
    "answerText": "OuterClassName.InnerclassName inner=new OuterClassReference.new InnerClassName();\nWe cannot instantiate inner class without outer class reference",
    "category": "Inner Classes",
    "options": [
      "the class- No compiler won’t create default constructor if there is parameterized constructor in the class.",
      "For every primitive in java we have corresponding wrapper class.",
      "OuterClassName.InnerclassName inner=new OuterClassReference.new InnerClassName(); We cannot instantiate inner class without outer...",
      "Reference and object are both different."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 151,
    "question": "How to do encapsulation in Java?",
    "answerText": "Make instance variables private.\nDefine getter and setter methods to access instance variables.",
    "category": "Inner Classes",
    "options": [
      "Converting primitives to objects can be done with the help of wrapper classes.",
      "Java automatic type conversion is done if the following conditions are met: 1) When two types are compatible Ex: int, float int can...",
      "When destination type is smaller than source type we use narrowing conversion mechanism in java.",
      "Make instance variables private."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 152,
    "question": "What are reference variables in java?",
    "answerText": "Variables which are used to access objects in java are called reference variables.\nEx: Employee emp=new Employee();\nIn the above example emp is reference variable.\nReference variable can be of only one type.\nA reference variable can point to any number of objects. But if a reference variable is declared final it\ncan’t point to other objects.\nA reference variable can be declared either to a class type or interface type. If a reference variable is\ndeclared with interface type it points to the class that implements the interface.",
    "category": "Inner Classes",
    "options": [
      "Converting primitives to objects can be done with the help of wrapper classes.",
      "Variables which are used to access objects in java are called reference variables.",
      "Only methods can be overridden in java.",
      "Static variables cannot be serialized in java."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 153,
    "question": "Will the compiler creates a default constructor if I have a parameterized?",
    "answerText": "the class-\nNo compiler won’t create default constructor if there is parameterized constructor in the class. For\nexample if I have a class with no constructors, then compiler will create default constructor.\nFor Example:\npublic classCar {}\nIn the above Car class there are no constructors so compiler creates a default constructor.\npublic classCar {Car(String name) {\n}\n}\nIn this example compiler won’t create any default constructor because already there is one constructor in\nthe Car class.",
    "category": "Inner Classes",
    "options": [
      "the class- No compiler won’t create default constructor if there is parameterized constructor in the class.",
      "Variables which are used to access objects in java are called reference variables.",
      "For every primitive in java we have corresponding wrapper class.",
      "Yes we can have method name same as class name it won’t throw any compilation error but it shows a warning message that method name..."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 154,
    "question": "Can we have a method name same as class name in java?",
    "answerText": "Yes we can have method name same as class name it won’t throw any compilation error but it shows a\nwarning message that method name is same as class name.",
    "category": "Inner Classes",
    "options": [
      "Static variables cannot be serialized in java.",
      "Yes we can have method name same as class name it won’t throw any compilation error but it shows a warning message that method name...",
      "Java automatic type conversion is done if the following conditions are met: 1) When two types are compatible Ex: int, float int can...",
      "To save the state of an object to persistent state we use serialization."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 155,
    "question": "Can we override constructors in java?",
    "answerText": "Only methods can be overridden in java. Constructors can’t be inherited in java. So there is no point of\nverriding constructors in java.",
    "category": "Inner Classes",
    "options": [
      "Import keyword is used to import single class or package in to our source file.import statement is declared after package decalaration.",
      "Only methods can be overridden in java.",
      "Make instance variables private.",
      "Reference and object are both different."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 156,
    "question": "Can Static methods access instance variables in java?",
    "answerText": "No.Instance variables can’t be accessed in static methods. When we try to access instance variable in\nstatic method we get compilation error. The error is as follows:\nCannot make a static reference to the non static field name",
    "category": "Inner Classes",
    "options": [
      "Variables which are used to access objects in java are called reference variables.",
      "Java automatic type conversion is done if the following conditions are met: 1) When two types are compatible Ex: int, float int can...",
      "No.Instance variables can’t be accessed in static methods.",
      "Only references can be passed to a method not an object."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 157,
    "question": "How do we access static members in java?",
    "answerText": "Instance variables and instance methods can be accessed using reference variable. But to access static\nvariables or static methods we use Class name in java.",
    "category": "Inner Classes",
    "options": [
      "Instance variables and instance methods can be accessed using reference variable.",
      "For every primitive in java we have corresponding wrapper class.",
      "Assigning a value of one type to variable of other type is called type conversion.",
      "When destination type is smaller than source type we use narrowing conversion mechanism in java."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 158,
    "question": "Can we override static methods in java?",
    "answerText": "Static methods can’t be overridden. If we have a static method in superclass and subclass with same\nsignature then we don’t say that as overriding. We call that as",
    "category": "Inner Classes",
    "options": [
      "Only references can be passed to a method not an object.",
      "OuterClassName.InnerclassName inner=new OuterClassReference.new InnerClassName(); We cannot instantiate inner class without outer...",
      "Static methods can’t be overridden.",
      "Converting primitives to objects can be done with the help of wrapper classes."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 159,
    "question": "Difference between object and reference?",
    "answerText": "Reference and object are both different. Objects are instances of class that resides in heap memory.\nObjects does’nt have any name so to access objects we use references. There is no alternative way to\naccess objects except through references.\nObject cannot be assigned to other object and object cannot be passed as an argument to a method.\nReference is a variable which is used to access contents of an object. A reference can be assigned to other\nreference,passed to a method.",
    "category": "Inner Classes",
    "options": [
      "Variables which are used to access objects in java are called reference variables.",
      "Static methods can’t be overridden.",
      "Reference and object are both different.",
      "Objects get garbage collected not its references."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 160,
    "question": "Objects or references which of them gets garbage collected?",
    "answerText": "Objects get garbage collected not its references.",
    "category": "Inner Classes",
    "options": [
      "Only methods can be overridden in java.",
      "Converting primitives to objects can be done with the help of wrapper classes.",
      "Objects get garbage collected not its references.",
      "Reference and object are both different."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 161,
    "question": "How many times finalize method will be invoked - who invokes finalize()?",
    "answerText": "Finalize () method will be called only once on object. Before the object gets garbage collected garbage\ncollector will call finalize() method to free the resources. Finalize() method will be called only when object\nis eligible for garbage collection.",
    "category": "Inner Classes",
    "options": [
      "OuterClassName.InnerclassName inner=new OuterClassReference.new InnerClassName(); We cannot instantiate inner class without outer...",
      "Import keyword is used to import single class or package in to our source file.import statement is declared after package decalaration.",
      "Finalize () method will be called only once on object.",
      "For every primitive in java we have corresponding wrapper class."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 162,
    "question": "Can we able to pass objects as an arguments in java?",
    "answerText": "Only references can be passed to a method not an object. We cannot pass the objects to a method. The\nlargest amount of data that can passed as parameters are long or double.",
    "category": "Inner Classes",
    "options": [
      "When destination type is smaller than source type we use narrowing conversion mechanism in java.",
      "To save the state of an object to persistent state we use serialization.",
      "Only references can be passed to a method not an object.",
      "Sun defined standard naming conventions for packages."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 163,
    "question": "Explain wrapper classes in java?",
    "answerText": "Converting primitives to objects can be done with the help of wrapper classes. Prior to java 1.5 we use\nWrapper classes to convert primitives to objects. From java 1.5 we have a new feature autoboxing which\nis used to convert automatically primitives to objects but in wrapper classes programmer has to take care\nof converting primitives to objects.\nWrapper classes are immutable in java. Once a value is assigned to it we cannot change the value.",
    "category": "Inner Classes",
    "options": [
      "Only references can be passed to a method not an object.",
      "Static variables cannot be serialized in java.",
      "Only methods can be overridden in java.",
      "Converting primitives to objects can be done with the help of wrapper classes."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 164,
    "question": "Explain different types of wrapper classes in java?",
    "answerText": "For every primitive in java we have corresponding wrapper class. Here are list of wrapper classes\navailable in java.\nPrimtive Wrapper Class\nboolean Boolean\nint Integer\nfloat Float\nchar Character\nbyte Byte\nlong Long\nshort Short",
    "category": "Inner Classes",
    "options": [
      "Import keyword is used to import single class or package in to our source file.import statement is declared after package decalaration.",
      "For every primitive in java we have corresponding wrapper class.",
      "the class- No compiler won’t create default constructor if there is parameterized constructor in the class.",
      "Instance variables and instance methods can be accessed using reference variable."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 165,
    "question": "Explain about transient variables in java?",
    "answerText": "To save the state of an object to persistent state we use serialization. If we want a field or variable in the\nobject not to be saved, then we declare that variable or field as transient.\nExample: public Class Car implements serializable\n{\ntransient int carnumber;\n}",
    "category": "Inner Classes",
    "options": [
      "Static methods can’t be overridden.",
      "To save the state of an object to persistent state we use serialization.",
      "For every primitive in java we have corresponding wrapper class.",
      "Assigning a value of one type to variable of other type is called type conversion."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 166,
    "question": "Can we serialize static variables in java?",
    "answerText": "Static variables cannot be serialized in java.",
    "category": "Inner Classes",
    "options": [
      "Java automatic type conversion is done if the following conditions are met: 1) When two types are compatible Ex: int, float int can...",
      "To save the state of an object to persistent state we use serialization.",
      "Static variables cannot be serialized in java.",
      "Only methods can be overridden in java."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 167,
    "question": "What is type conversion in java?",
    "answerText": "Assigning a value of one type to variable of other type is called type conversion.\nExample: int a =10;\nlong b=a;\nThere are two types of conversion in java:\n1) Widening conversion\n2) Narrowing conversion",
    "category": "Inner Classes",
    "options": [
      "Finalize () method will be called only once on object.",
      "Only references can be passed to a method not an object.",
      "the class- No compiler won’t create default constructor if there is parameterized constructor in the class.",
      "Assigning a value of one type to variable of other type is called type conversion."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 168,
    "question": "Explain about Automatic type conversion in java?",
    "answerText": "Java automatic type conversion is done if the following conditions are met:\n1) When two types are compatible\nEx: int, float\nint can be assigned directly to float variable.\n2) Destination type is larger than source type.\nEx: int, long\nInt can be assigned directly to long.Automatic type conversion takes place if int is assigned to long\nbecause long is larger datatype than int.\nWidening Conversion comes under Automatic type conversion.",
    "category": "Inner Classes",
    "options": [
      "Objects get garbage collected not its references.",
      "Only references can be passed to a method not an object.",
      "Static variables cannot be serialized in java.",
      "Java automatic type conversion is done if the following conditions are met: 1) When two types are compatible Ex: int, float int can..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 169,
    "question": "Explain about narrowing conversion in java?",
    "answerText": "When destination type is smaller than source type we use narrowing conversion mechanism in java.\nNarrowing conversion has to be done manually if destination type is smaller than source type. To do\nnarrowing conversion we use cast. Cast is nothing but explicit type conversion.\nExample: long a;\nbyte b;\nb=(byte)a;\nNote: casting to be done only on valid types otherwise classcastexception will be thrown.",
    "category": "Inner Classes",
    "options": [
      "the class- No compiler won’t create default constructor if there is parameterized constructor in the class.",
      "OuterClassName.InnerclassName inner=new OuterClassReference.new InnerClassName(); We cannot instantiate inner class without outer...",
      "When destination type is smaller than source type we use narrowing conversion mechanism in java.",
      "Finalize () method will be called only once on object."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 170,
    "question": "Explain the importance of import keyword in java?",
    "answerText": "Import keyword is used to import single class or package in to our source file.import statement is\ndeclared after package decalaration. We use wild character (*) to import package.\nNote: After compilation the compiled code does not contain import statement it will be replaced with fully\nqualified class names",
    "category": "Inner Classes",
    "options": [
      "Converting primitives to objects can be done with the help of wrapper classes.",
      "When destination type is smaller than source type we use narrowing conversion mechanism in java.",
      "Import keyword is used to import single class or package in to our source file.import statement is declared after package decalaration.",
      "No.Instance variables can’t be accessed in static methods."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 171,
    "question": "Explain naming conventions for packages?",
    "answerText": "Sun defined standard naming conventions for packages.\n1) Package names should be in small letters.\n2) Package name starts with reverse company domain name (excluding www) followed by department\nand project name and then the name of package.\nExample: com.google.sales.employees",
    "category": "Inner Classes",
    "options": [
      "Sun defined standard naming conventions for packages.",
      "Reference and object are both different.",
      "For every primitive in java we have corresponding wrapper class.",
      "Only references can be passed to a method not an object."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 172,
    "question": "What is classpath?",
    "answerText": "The path where our.class files are saved is referred as classpath.JVM searches for.class files by using the\nclass path specified. Class path is specified by using CLASSPATH environment variable. CLASSPATH\nenvironment variable can contain more than one value. CLASSPATH variable containing more than one\nvalue is separated by semicolon.\nExample to set class path from command prompt:\nset CLASSPATH= C:Program FilesJavajdk1.6.0_25bin;.;\nonly parent directories need to be added to classpath.Java compiler will look for appropriate packages and\nclasses.",
    "category": "OOP Concepts",
    "options": [
      "Encapsulation is the process of wrapping of code and behaviour in a single unit called class and preventing from misuse is called...",
      "The path where our.class files are saved is referred as classpath.JVM searches for.class files by using the class path specified.",
      "Static variables do not belong to instances of the class.",
      "Inheritance is one of the important feature of object oriented language."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 173,
    "question": "What is jar?",
    "answerText": "Jar stands for java archive file. Jars are created by using Jar.exe tool. Jar files contains.class files, other\nresources used in our application and manifest file.Manifest file contains class name with main method.jar\ncontains compressed.class files. Jvm finds these.class files without uncompressing this jar.",
    "category": "OOP Concepts",
    "options": [
      "Jar stands for java archive file.",
      "Polymorphism is combination of two greek words which mean many forms.",
      "Prior to Java 7 we can use only int values and enum constants in Switch.Starting with Java 7 we can use strings in Switch statement.",
      "Local variables are variables which are defined inside a method."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 174,
    "question": "What is the scope or life time of instance variables?",
    "answerText": "When object is instantiated using new operator variables get allocated in the memory.instance variables\nremain in memory till the instance gets garbage collected",
    "category": "OOP Concepts",
    "options": [
      "When we declare variables variables are created in stack.",
      "Interface is a contract.",
      "Object oriented programming should support these three features: 1) Inheritance 2) Encapsulation 3) Polymorphism",
      "When object is instantiated using new operator variables get allocated in the memory.instance variables remain in memory till the..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 175,
    "question": "Explain the scope or life time of class variables or static variables?",
    "answerText": "Static variables do not belong to instances of the class. We can access static fields even before\ninstantiating the class. Static variable remain in memory till the life time of application.",
    "category": "OOP Concepts",
    "options": [
      "Easy maintenance 2) Code reusability 3) Code extendability 4) Reliable",
      "Static variables do not belong to instances of the class.",
      "Beginning with Java 5 has a new feature Varargs which allows methods to have variable number of arguments.",
      "From Java 5.0 we can import static variables in to source file."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 176,
    "question": "Explain scope or life time of local variables in java?",
    "answerText": "Local variables are variables which are defined inside a method. When the method is created local\nvariables gets created in stack memory and this variable gets deleted from memory once the method\nexecution is done.",
    "category": "OOP Concepts",
    "options": [
      "Local variables are variables which are defined inside a method.",
      "Prior to Java 7 we can use only int values and enum constants in Switch.Starting with Java 7 we can use strings in Switch statement.",
      "Enums cannot extend any other class or enum.",
      "In Java we cannot copy two objects but by assigning one reference to other we can copy objects."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 177,
    "question": "Explain about static imports in java?",
    "answerText": "From Java 5.0 we can import static variables in to source file. Importing static member to source file is\nreferred as static import. The advantage of static import is we can access static variables without class or\ninterface name.\nSyntax: import static packagename.classname.staticvariablename;\nEx: import static com.abc.Employee.eno;\nTo import all static variables from a class in to our source file we use *.\nimport static com.abc.Employee.*",
    "category": "OOP Concepts",
    "options": [
      "Beginning with Java 5 has a new feature Varargs which allows methods to have variable number of arguments.",
      "From Java 5.0 we can import static variables in to source file.",
      "language and its features- In traditional programming language to solve a problem we use set of procedures.",
      "Easy maintenance 2) Code reusability 3) Code extendability 4) Reliable"
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 178,
    "question": "Can we define static methods inside interface?",
    "answerText": "We can’t declare static methods inside interface. Only instance methods are permitted in interfaces.only\npublic and abstract modifiers are permitted for interface methods. If we try to declare static methods\ninside interface we get compilation error saying\n“Illegal modifier for the interface method Classname.methodName(); only public & abstract are\npermitted”.",
    "category": "OOP Concepts",
    "options": [
      "All the methods defined in interfaces are implicitly abstract even though abstract modifier is not declared.",
      "Polymorphism is combination of two greek words which mean many forms.",
      "We can’t declare static methods inside interface.",
      "Prior to Java 7 we can use only int values and enum constants in Switch.Starting with Java 7 we can use strings in Switch statement."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 179,
    "question": "Define interface in java?",
    "answerText": "Interface is collection of abstract methods and constants. An interface is also defined as pure or 100\npercent abstract class.Interfaces are implicitly abstract whether we define abstract access modifier or not.\nA class implementing interface overrides all the abstract methods defined in interface. Implements\nkeyword is used to implement interface.",
    "category": "OOP Concepts",
    "options": [
      "The path where our.class files are saved is referred as classpath.JVM searches for.class files by using the class path specified.",
      "language- Traditional Programming language Object Oriented Programming Language A program is divided in to modules and procedures.",
      "Jar stands for java archive file.",
      "Interface is collection of abstract methods and constants."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 180,
    "question": "What is the purpose of interface?",
    "answerText": "Interface is a contract. Interface acts like a communication between two objects. When we are defining\ninterface we are defining a contract what our class should do but not how it does. An interface does’nt\ndefine what a method does. The power of interface lies when different classes that are unrelated can\nimplement interface. Interfaces are designed to support dynamic method resolution at run time.",
    "category": "OOP Concepts",
    "options": [
      "Interface is a contract.",
      "All the methods defined in interfaces are implicitly abstract even though abstract modifier is not declared.",
      "Jar stands for java archive file.",
      "language- Traditional Programming language Object Oriented Programming Language A program is divided in to modules and procedures."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 181,
    "question": "Explain features of interfaces in java?",
    "answerText": "1) All the methods defined in interfaces are implicitly abstract even though abstract modifier is not\ndeclared.\n2) All the methods in interface are public whether they are declared as public or not.\n3) variables declared inside interface are by default public, static and final.\n4) Interfaces cannot be instantiated.\n5) we cannot declare static methods inside interface.\n6) ‘ implements’ keyword is used to implement interface.\n7) Unlike class, interface can extend any number of interfaces.\n8) We can define a class inside interface and the class acts like inner class to interface.\n9) An interface can extend a class and implement an interface\n10) Multiple inheritance in java is achieved through interfaces.",
    "category": "OOP Concepts",
    "options": [
      "Enums cannot extend any other class or enum.",
      "All the methods defined in interfaces are implicitly abstract even though abstract modifier is not declared.",
      "The path where our.class files are saved is referred as classpath.JVM searches for.class files by using the class path specified.",
      "Easy maintenance 2) Code reusability 3) Code extendability 4) Reliable"
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 182,
    "question": "Explain enumeration in java?",
    "answerText": "Enumeration is a new feature from Java 5.0. Enumeration is set of named constants. We use enum\nkeyword to declare enumeration. The values defined in enumeration are enum constants.Each enum\nconstant declared inside a enum class is by default public, static and final.\nExample:\npackage javaexamples;\npublic enum Days {\nSUN,MON,TUE,WED,THU,FRI,SAT;\n}\nSUN,MON,TUE,WED,THU,FRI,SAT are enum constants.",
    "category": "OOP Concepts",
    "options": [
      "If superclass and subclass have same fields subclass cannot override superclass fields.",
      "Enumeration is a new feature from Java 5.0.",
      "In Java we cannot copy two objects but by assigning one reference to other we can copy objects.",
      "Static variables do not belong to instances of the class."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 183,
    "question": "Explain restrictions on using enum?",
    "answerText": "1) Enums cannot extend any other class or enum.\n2) We cannot instantiate an enum.\n3) We can declare fields and methods in enum class. But these fields and methods should follow the\nenum constants otherwise we get compilation error.",
    "category": "OOP Concepts",
    "options": [
      "language- Traditional Programming language Object Oriented Programming Language A program is divided in to modules and procedures.",
      "Enums cannot extend any other class or enum.",
      "Jar stands for java archive file.",
      "Prior to Java 7 we can use only int values and enum constants in Switch.Starting with Java 7 we can use strings in Switch statement."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 184,
    "question": "Explain about field hiding in java?",
    "answerText": "If superclass and subclass have same fields subclass cannot override superclass fields. In this case\nsubclass fields hides the super class fields. If we want to use super class variables in subclass we use\nsuper keyword to access super class variables.",
    "category": "OOP Concepts",
    "options": [
      "If superclass and subclass have same fields subclass cannot override superclass fields.",
      "Beginning with Java 5 has a new feature Varargs which allows methods to have variable number of arguments.",
      "Easy maintenance 2) Code reusability 3) Code extendability 4) Reliable",
      "Interface is collection of abstract methods and constants."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 185,
    "question": "Explain about Varargs in java?",
    "answerText": "Beginning with Java 5 has a new feature Varargs which allows methods to have variable number of\narguments. It simplifies creation of methods when there are more number of arguments. Earlier to java 5\nVarargs are handled by creating method with array of arguments.\nEx: public static void main(String[] args)\nA variable length argument is specified using ellispses with type in signature. main method with var args\nis written as follows:\npublic static void main(String … args)\nIf no arguments are passes we get array with size 0.There is no need for null check if no arguments are\npassed.",
    "category": "OOP Concepts",
    "options": [
      "Enumeration is a new feature from Java 5.0.",
      "Reusability:The major advantage of inheritance is code reuse.",
      "Beginning with Java 5 has a new feature Varargs which allows methods to have variable number of arguments.",
      "If superclass and subclass have same fields subclass cannot override superclass fields."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 186,
    "question": "Explain where variables are created in memory?",
    "answerText": "When we declare variables variables are created in stack. So when the variable is out of scope those\nvariables get garbage collected.",
    "category": "OOP Concepts",
    "options": [
      "When we declare variables variables are created in stack.",
      "Interface is collection of abstract methods and constants.",
      "Interface is a contract.",
      "Reusability:The major advantage of inheritance is code reuse."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 187,
    "question": "Can we use Switch statement with Strings?",
    "answerText": "Prior to Java 7 we can use only int values and enum constants in Switch.Starting with Java 7 we can use\nstrings in Switch statement. If we use strings in switch statement prior to Java 7 we will get compile time\nerror “only int and enum constants are permitted”.",
    "category": "OOP Concepts",
    "options": [
      "Prior to Java 7 we can use only int values and enum constants in Switch.Starting with Java 7 we can use strings in Switch statement.",
      "Java replaced traditional programming language developed in 1970’s.",
      "Object oriented programming should support these three features: 1) Inheritance 2) Encapsulation 3) Polymorphism",
      "Easy maintenance 2) Code reusability 3) Code extendability 4) Reliable"
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 188,
    "question": "In java how do we copy objects?",
    "answerText": "In Java we cannot copy two objects but by assigning one reference to other we can copy objects. For\nexample if we have a reference r1 that point to object.so when we declare r2=r1, we are assigning\nreference r1 to r2 so now r2 points to the same object where r1 points. Any changes done by one\nreference on an object will reflect to other.\nOops concepts interview questions",
    "category": "OOP Concepts",
    "options": [
      "Enums cannot extend any other class or enum.",
      "Local variables are variables which are defined inside a method.",
      "In Java we cannot copy two objects but by assigning one reference to other we can copy objects.",
      "We can’t declare static methods inside interface."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 189,
    "question": "Explain about procedural programming language or structured programming?",
    "answerText": "language and its features-\nIn traditional programming language to solve a problem we use set of procedures. Once the procedures or\nfunctions are determined next they concentrate on storing data.\nFeatures:\n1) In this top down approach is followed. First procedures were determined and then concentrate on\nminute details.\n2) Concentrate more on functions and procedure rather than data.\n3) In traditional programming language procedures manipulate global data without knowing to other\nprocedures.\n4) Very little concentration on minute details\nThe main drawback of traditional programming languages works well only for small problems. But not\nsuitable for larger problems.\nEx: C language, Pascal",
    "category": "OOP Concepts",
    "options": [
      "language and its features- In traditional programming language to solve a problem we use set of procedures.",
      "Static variables do not belong to instances of the class.",
      "Enumeration is a new feature from Java 5.0.",
      "All the methods defined in interfaces are implicitly abstract even though abstract modifier is not declared."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 190,
    "question": "Explain about object oriented programming and its features?",
    "answerText": "Java replaced traditional programming language developed in 1970’s. In Object oriented programming\neverything is made up of object. In this language bottom up approach is followed. Each\nobject communicates with other as opposed to traditional view.\nFeatures:\n1) In this bottom approach is followed. First concentrates on minute details like creating objects then\nconcentrates on implementation or solving the problem.\n2) Concentrate more on data and give less importance for implementation.\n3) Objects communicate with each other\nThe main advantage of object oriented programming language is works well for larger problems.",
    "category": "OOP Concepts",
    "options": [
      "Reusability:The major advantage of inheritance is code reuse.",
      "Java replaced traditional programming language developed in 1970’s.",
      "We can’t declare static methods inside interface.",
      "Jar stands for java archive file."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 191,
    "question": "List out benefits of object oriented programming language?",
    "answerText": "1) Easy maintenance\n2) Code reusability\n3) Code extendability\n4) Reliable",
    "category": "OOP Concepts",
    "options": [
      "language- Traditional Programming language Object Oriented Programming Language A program is divided in to modules and procedures.",
      "The path where our.class files are saved is referred as classpath.JVM searches for.class files by using the class path specified.",
      "Easy maintenance 2) Code reusability 3) Code extendability 4) Reliable",
      "Enumeration is a new feature from Java 5.0."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 192,
    "question": "Differences between traditional programming language and object oriented?",
    "answerText": "language-\nTraditional Programming language Object Oriented Programming Language\nA program is divided in to modules and procedures. A program is divided in to number of objects.\nImplementation is done through procedures. Implementation is done through interfaces.\nIn traditional programming there is no In oops encapsulation is done by tightly coupling\nencapsulation all procedures access data. data and behaviour together in class.\nSuitable for small programs or problems Suitable for large programs and complex problems.",
    "category": "OOP Concepts",
    "options": [
      "When object is instantiated using new operator variables get allocated in the memory.instance variables remain in memory till the...",
      "From Java 5.0 we can import static variables in to source file.",
      "Inheritance is one of the important feature of object oriented language.",
      "language- Traditional Programming language Object Oriented Programming Language A program is divided in to modules and procedures."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 193,
    "question": "Explain oops concepts in detail?",
    "answerText": "Object oriented programming should support these three features:\n1) Inheritance\n2) Encapsulation\n3) Polymorphism",
    "category": "OOP Concepts",
    "options": [
      "Enums cannot extend any other class or enum.",
      "Enumeration is a new feature from Java 5.0.",
      "Interface is a contract.",
      "Object oriented programming should support these three features: 1) Inheritance 2) Encapsulation 3) Polymorphism"
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 194,
    "question": "Explain what is encapsulation?",
    "answerText": "Encapsulation is the process of wrapping of code and behaviour in a single unit called class and preventing\nfrom misuse is called encapsulation. Encapsulation exposes only part of object which are safe to exposed\nand remaining part of object is kept secured.\nEncapsulation is supported through access control in java. There are four types of access control\nspecifiers(public,private, protected, default) in java which supports encapsulation.\nFor example tv manufacturers exposes only buttons not all the thousands of electronic components which\nit is made up of.",
    "category": "OOP Concepts",
    "options": [
      "Static variables do not belong to instances of the class.",
      "Encapsulation is the process of wrapping of code and behaviour in a single unit called class and preventing from misuse is called...",
      "Object oriented programming should support these three features: 1) Inheritance 2) Encapsulation 3) Polymorphism",
      "Beginning with Java 5 has a new feature Varargs which allows methods to have variable number of arguments."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 195,
    "question": "What is inheritance?",
    "answerText": "Inheritance is one of the important feature of object oriented language. Inheriting is the process of\nacquiring features of others. For example a child acquires the features of their parents.\nIn java inheritance is the process of inheriting member of existing classes by extending their functionality.\nThe original class is called base class, parent class or super class. The new class derived from parent is\ncalled child class, sub class, and derived class.\nWe use extends keyword in java to extend a class in java. All java classes extend java.lang.Object since\nobject class is the super class for all classes in java.\nWhen we create a new class by using inheritance ‘is-a’ relationship is formed.",
    "category": "OOP Concepts",
    "options": [
      "Interface is collection of abstract methods and constants.",
      "Interface is a contract.",
      "Enums cannot extend any other class or enum.",
      "Inheritance is one of the important feature of object oriented language."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 196,
    "question": "Explain importance of inheritance in java?",
    "answerText": "Reusability:The major advantage of inheritance is code reuse. We can avoid duplicating code by using\ninheritance. We can place all common state and behaviour in that class, by extending that class we can\nExtendability: We can add new functionality to our application without touching the existing code.\nFor example if we take Ms word we came across number of versions of msword such as word 2003,2007.\nEverytime they won’t write new code they reuse the existing code and some more features.",
    "category": "OOP Concepts",
    "options": [
      "Reusability:The major advantage of inheritance is code reuse.",
      "Local variables are variables which are defined inside a method.",
      "From Java 5.0 we can import static variables in to source file.",
      "Enums cannot extend any other class or enum."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 197,
    "question": "What is polymorphism in java?",
    "answerText": "Polymorphism is combination of two greek words which mean many forms. In polymorphism actual type\nof object involved in method call determines which method to call rather type of reference variable.\n59) What is covariant return -\nIn java 1.4 and earlier one method can override super class method if both methods have same signature\nand return types.\nFrom Java 1.5, a method can override other method if argument types match exactly though return\ntypes are different.(Return type must be subtype of other method).\nExample: Class A\n{\nA doSomeThing()\n{\nreturn new A();\n}\n}\nExample: Class B\n{\nB doSomeThing()\n{\nreturn new B();\n}\n}\nFrom java 1.5 return type for doSomeThing() in Class B is valid. We get compile time error in 1.4 and\nearlier.\nCollection Framework interview questions",
    "category": "OOP Concepts",
    "options": [
      "Static variables do not belong to instances of the class.",
      "Polymorphism is combination of two greek words which mean many forms.",
      "The path where our.class files are saved is referred as classpath.JVM searches for.class files by using the class path specified.",
      "Interface is a contract."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 198,
    "question": "What is collections framework?",
    "answerText": "A framework is set of classes and interfaces to build a functionality. Java collections framework provides\nset of interfaces and classes for storing and manipulating collections. Collection framework contains\nclasses and interfaces in java.util package and java.util.concurrent packages.\nAdvantages or benefits of Collections framework:\n1) High performance\n2) Using this framework we can create different types of collections\n3) We can create our own collection and we can extend a collection.\n4) Reduces programming effort.\n5) Increases speed and quality: Collections framework provides high performance, implementations of\nuseful data structures and algorithms.",
    "category": "Collections",
    "options": [
      "List 2) Set 3) Queue 4) Deque (From Java 6)",
      "A framework is set of classes and interfaces to build a functionality.",
      "Vector is similar to arraylist used for random access.",
      "List interface extends collection interface used to store sequence of elements in collection."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 199,
    "question": "What is collection?",
    "answerText": "A collection is a container which holds group of objects. Collection provides a way to manage objects\neasily. Collections manages group of objects as single unit.\nExamples include list of strings, integers etc.\nHere are few basic operations we do on collections:\n1) Adding objects to collection.\n2) Removing or deleting objects from collection.\n3) Retrieving object from collection.\n4) Iterating collection.",
    "category": "Collections",
    "options": [
      "Difference HashMap Hashtable Synronization HashMap is not synchronized.",
      "If we want to search for an element in collection and does not want any sorting order we go for HashSet.",
      "A framework is set of classes and interfaces to build a functionality.",
      "A collection is a container which holds group of objects."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 200,
    "question": "Difference between collection, Collection and Collections in java?",
    "answerText": "collection: represent group of objects where objects are stored.\nCollection: This is one of the core interface which provides basic functionality for collection.\nCollections: Collections contains some utility static methods that operate on collections.",
    "category": "Collections",
    "options": [
      "If we want to iterate through all the elements in collection we use Iterator.",
      "Difference Arraylist LinkedList Access Implements RandomAccess interface we It extends Abstract sequential List can search randomly...",
      "collection: represent group of objects where objects are stored.",
      "Linked list is used for storing a collection of objects that allows efficient addition and removal of elements in the middle of the..."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 201,
    "question": "Explain about Collection interface in java?",
    "answerText": "Collection is the fundamental and root interface in Collections framework. Collection extends Iterable\ninterface and inherits iterator method which returns Iterator object.\nSignature:\npublic interface Collection<E> extends Iterable<E> {\n}\nMethods in Collection interface:\nboolean add(E e); Adds an element to the collection. Returns true if element is added.\nboolean remove(Object Removes an object from collection if that object is present in collection. Return\no); true if matching object is removed from collection.\nboolean Adds all the elements specified in the collection to this collection.Returns true\naddAll(Collection<- if all elements are added.\nextends E> c);\nboolean Removes all the elements from this collection that are specified in other\nremoveAll(Collection<-> collection.Returns true if all the elements are removed.\nc);\nint size(); Returns number of elements in collection.\nboolean isEmpty(); Checks whether collection contains elements or not. If no elements are\npresent it returns false.\nboolean contains(Object Checks whether specified object is in collection or not. Return true if object is\no); in collection.\nIterator<E> iterator(); Used to iterator over collection. No guarantee on order of elements iterated.\nboolean Removes all the elements which are not in specified collection. Returns only\nretainAll(Collection<-> elements specified in collection removing other elements.\nc);\nObject[] toArray(); Returns an array of elements in collection.",
    "category": "Collections",
    "options": [
      "Concurrent HashMap is implemented in java.util.concurrent package.",
      "Collection is the fundamental and root interface in Collections framework.",
      "A map is an association of key-value pairs.",
      "Hashset implements set interface and extends AbstractSet."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 202,
    "question": "List the interfaces which extends collection interface?",
    "answerText": "1) List\n2) Set\n3) Queue\n4) Deque (From Java 6)",
    "category": "Collections",
    "options": [
      "Arrays are used to store primitives or objects of same type or variables that are subclasses of same type.",
      "A set is a collection which does not allow duplicates.",
      "List 2) Set 3) Queue 4) Deque (From Java 6)",
      "List interface extends collection interface used to store sequence of elements in collection."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 203,
    "question": "Explain List interface?",
    "answerText": "List interface extends collection interface used to store sequence of elements in collection.\nWe can even store duplicate elements in list.\nWe can insert or access elements in list by using index as we do in arrays.\nList is an ordered collection.\nThe main difference between List and non list interface are methods based on position.\nSome of the operations we can perform on List:\n1) Adding an element at specified index.\n2) Removing an element at specified index.\n3) To get the index of element\nList contains some specific methods apart from Collection interface methods.",
    "category": "Collections",
    "options": [
      "A collection is a container which holds group of objects.",
      "LinkedHashMap extends HashMap and implements Map.lLinked hashmap gurantees order of elements.",
      "Difference HashMap Hashtable Synronization HashMap is not synchronized.",
      "List interface extends collection interface used to store sequence of elements in collection."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 204,
    "question": "Explain methods specific to List interface?",
    "answerText": "boolean addAll(int index, Collection<- extends E> This method inserts all the elements in specified\nc); collection to the list at specified position.\nE get(int index); This method returns an element at specified\nposition in the list.\nE set(int index, E element); This method replaces the element at specified\nposition in the list with the specified element.\nvoid add(int index, E element); This method inserts the specified element with the\nindex specified.\nE remove(int index); This method removes the element at specified\nindex and returns the element removed.\nint indexOf(Object o); indexOf() method returns the index of last\noccurrence of specified element. If there is no\nelement in the list it removes the element.\nListIterator<E> listIterator(); Returns a list iterator of elements in list.\nList<E> subList(int fromIndex, int toIndex); This method returns list of elements between\nindexes specified.",
    "category": "Collections",
    "options": [
      "LinkedHashSet extends HashSet and implements Set interface.",
      "boolean addAll(int index, Collection<- extends E> This method inserts all the elements in specified c); collection to the list at...",
      "Both ArrayList and vector grows dynamically.",
      "TreeSet implements navigableSet interface and extends Abstract set.It creates collection that uses tree for storage."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 205,
    "question": "List implementations of List Interface?",
    "answerText": "1) ArrayList\n2) Vector\n3) LinkedList",
    "category": "Collections",
    "options": [
      "HashSet 2) Linked HashSet 3) TreeSet",
      "ArrayList 2) Vector 3) LinkedList",
      "Vector is similar to arraylist used for random access.",
      "collection: represent group of objects where objects are stored."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 206,
    "question": "Explain about ArrayList?",
    "answerText": "ArrayList is an ordered collection which extends AbstractList and implements List interface.\nWe use ArrayList mainly when we need faster access and fast iteration of elements in list.\nWe can insert nulls in to arraylist.\nArraylist is nothing but a growable array.\npublic class ArrayList<E> extends AbstractList<E> implements List<E>,\nRandomAccess, Cloneable, java.io.Serializable{}\nFrom java 1.4 ArrayList implements RandomAccess interface which is a marker interface which supports\nfast and random access.\nAdvantages:\n1) Faster and easier access.\n2) Used for Random access of elements.\nDrawbacks:\n1) We cannot insert or delete elements from middle of list.",
    "category": "Collections",
    "options": [
      "Both ArrayList and vector grows dynamically.",
      "If we want to search for an element in collection and does not want any sorting order we go for HashSet.",
      "ArrayList is an ordered collection which extends AbstractList and implements List interface.",
      "Vector is similar to arraylist used for random access."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 207,
    "question": "Difference between Array and ArrayList?",
    "answerText": "Arrays are used to store primitives or objects of same type or variables that are subclasses of same type.\nArrayList: It is an ordered collection which grows dynamically.\nIn list we can insert nulls values and list allows duplicate elements.\nARRAY ARRAY LIST\n1) While creating array we have to know the 1) But it is not required to know size while\nsize. creating ArrayList, because arraylist grows\ndynamically.\n2) To put an element in to array we use the 2) We can add element to arraylist with following\nfollowing syntax:String array[] = syntax:List<String> stringList = new\nnewString[5];array[1] = “java”;We must know ArrayList<String>();stringList.add(“java”);\nspecific location to insert an element in to\narray. If we try to put element in index which is\nout of range we get ArrayIndexOutOfBounds\nException\n3) Arrays are static 3) ArrayList is dynamic\n4) We can store objects and primitives 4) We can store only primitives prior to 1.5. From\n1.5 we can store even objects also.\n5) We have to manually write logic for inserting 5) Just a method call would add or remove\nand removing elements. elements from list.\n6) Arrays are faster 6) Arraylist is slower.\n7) Arraylist is implemented using arrays.",
    "category": "Collections",
    "options": [
      "List 2) Set 3) Queue 4) Deque (From Java 6)",
      "Arrays are used to store primitives or objects of same type or variables that are subclasses of same type.",
      "TreeSet is preferred 1) if elements are to be maintained in sorting order.",
      "LinkedHashMap extends HashMap and implements Map.lLinked hashmap gurantees order of elements."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 208,
    "question": "What is vector?",
    "answerText": "Vector is similar to arraylist used for random access.\nVector is a dynamic array like arraylist.\nvector size increases or decreases when elements are added and removed.\nVector is synchronized.\nvector and Hashtable are the only collections since 1.0.\nRest of the collections are added from 2.0.\npublic class Vector<E>extends AbstractList<E>implements List<E>,\nRandomAccess, Cloneable, java.io.Serializable",
    "category": "Collections",
    "options": [
      "Vector is similar to arraylist used for random access.",
      "If we want to search for an element in collection and does not want any sorting order we go for HashSet.",
      "Linked list is used for storing a collection of objects that allows efficient addition and removal of elements in the middle of the...",
      "List 2) Set 3) Queue 4) Deque (From Java 6)"
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 209,
    "question": "Difference between arraylist and vector?",
    "answerText": "Both ArrayList and vector grows dynamically. The differences between arraylist and vector are:\n1) Arraylist is not synchronized and vector is synchronized.\n2) Vector is legacy collection introduced in 1.0 and Arraylist introduced in java 2.0.\nPerformance wise it is recommended to use arraylist rather than vector because by default vector is\nsynchronized which reduces performance if only one thread accesses it.",
    "category": "Collections",
    "options": [
      "HashSet 2) Linked HashSet 3) TreeSet",
      "TreeSet is preferred 1) if elements are to be maintained in sorting order.",
      "Both ArrayList and vector grows dynamically.",
      "List interface extends collection interface used to store sequence of elements in collection."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 210,
    "question": "Define Linked List and its features with signature?",
    "answerText": "Linked list is used for storing a collection of objects that allows efficient addition and removal of elements\nin the middle of the collection.\nThe main drawback with arrays is if we want to insert an element in the middle of the list we need to\nmove each element to next position and insert the element. Similarly with remove if we want to remove\nan element we need to remove the element and move the list of elements.\nBut with linked list we can insert and delete in the middle of the list efficiently by just updating the\nneighbouring node reference.\nLinked list class is in java.util package.\nLinked List class extends class extends AbstractSequentialList and I mplements List, Deque, Cloneable\nand Serializable.\nSignature:public class LinkedList<E> extends\nAbstractSequentialList<E>\nimplements List<E>, Deque<E>, Cloneable, java.io.Serializable\n{\n}\nImportant methods specific to LinkedList class:\n1) public E getFirst():\ngetFirst() will returns the first element in the list.\n2) public E getLast():\ngetLast() returns the last element in the list.\n3) public E removeFirst():\nremoveFirst() method removes the first element in the list.\n4) public E removeLast():\nremoveLast() method removes the last element in the list.\n5) public void addFirst(E e)\nInserts the element at beginning of the list.\n6) public void addLast(E e):\nInserts the element at end of the list.",
    "category": "Collections",
    "options": [
      "Both ArrayList and vector grows dynamically.",
      "A map is an association of key-value pairs.",
      "List interface extends collection interface used to store sequence of elements in collection.",
      "Linked list is used for storing a collection of objects that allows efficient addition and removal of elements in the middle of the..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 211,
    "question": "Define Iterator and methods in Iterator?",
    "answerText": "If we want to iterate through all the elements in collection we use Iterator. Iterator is a standard way to\naccess elements one by one in collection. Iterator is an object associated with collection used to loop\nthrough the collection.\nSteps for accessing elements in Iterator:\n1) Obtain Iterator object by calling iterator() method on collection.\nEx: ArrayList <String> al=new ArrayList<String>();\nIterator itr=al.iterator();\n2) Call hasNext() method on iterator object in loop as long as hasNext() returns true.\nEx: while(itr.hasNext())\n{\n}\n3) Get each element by calling next() inside the loop.\nwhile(itr.hasNext())\n{\nString str=itr.next();\n}\nMethods in iterator:\nMethod Description\nboolean hasNext(); This method returns true if there is next element.hasNext() points to position\nbefore first lement.If there are any elements if will return true.\nE next(); Returns the next element in the iteration.. If there are no elements in the\nIteration NoSuchElementException is thrown. next() will move the pointer to\nnext position and returns the element.\nvoid remove(); Removes the element.\nNote: If we call next() on last element it will throw java.util.NoSuchElementException. So before calling\nnext() first we should call hasNext() whether it has elements or not. If there is next element we can call\nnext() so that we can avoid exception.",
    "category": "Collections",
    "options": [
      "If we want to search for an element in collection and does not want any sorting order we go for HashSet.",
      "Vector is similar to arraylist used for random access.",
      "If we want to iterate through all the elements in collection we use Iterator.",
      "HashSet 2) Linked HashSet 3) TreeSet"
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 212,
    "question": "In which order the Iterator iterates over collection?",
    "answerText": "The order in which Iterator will iterate the collection depends on the traversal order of collection.\nFor example: for list traversal order will be sequential, and for set the order cannot be determined, and\nfor sorted sorted set will sort the elements in sorted order.\nSo it all depends on the collection in which order iterator iterates.\n212) Explain ListIterator and methods in ListIterator-\nList Iterator is similar to Iterator but ListIterator is bidirectional.\nWe can traverse through the collection in either forward or backward direction.\nList Iterator extends Iterator and all the methods in Iterator will be there in ListIterator too with some\nadditional methods.\nList Iterator doesn’t have current element.Position of List Iterator lies between two elements i.e previous\nelement and next element.\nFeatures of ListIterator:\n1) Traversal of List in either direction.\n2) Modification of its elements.\n3) Access to elements position.\nSignature:\npublic interface ListIterator<E> extends Iterator<E> {\n}\nListIterator methods:\nMethod Description\nVoid add(E obj) Inserts element in to the list infront of the element returned by call to next() and\nafter the element returned by call to next().\nboolean hasNext(); Returns true if there are more elements in the list instead of throwing exception if\nthere are no elements.\nE next(); Returns the next element. NoSuchElementException is thrown if there is no next\nelement.\nboolean Returns true if there are elements when iterating list in reverse direction.\nhasPrevious();\nE previous(); Returns the previous element in the list.\nint nextIndex(); Returns the index of the element returned by next() method. If there are no\nelements it returns the size of the list.\nint Returns the index of the element returned by previous() method. If there are no\npreviousIndex(); elements it returns the size of the list. Returns -1 if the iterator is at beginning of\nlist.\nvoid remove(); Removes the element that was returned by calling next() or previous(). An Illegal\nstate Exception will be thrown if remove() is called before next() or previous().\nvoid set(E e); This method replaces an element in the list with the specified element.",
    "category": "Collections",
    "options": [
      "Sno Comparator Comparable 1.",
      "ArrayList is an ordered collection which extends AbstractList and implements List interface.",
      "LinkedHashSet extends HashSet and implements Set interface.",
      "The order in which Iterator will iterate the collection depends on the traversal order of collection."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 213,
    "question": "Explain about Sets?",
    "answerText": "A set is a collection which does not allow duplicates. Set internally implements equals() method which\ndoesn’t allow duplicates.Adding an duplicate element to a set would be ignored.Set interface is\nimplemented in java.util.set package.Set interface does not have any additional methods. It has only\ncollection methods. A set can contain atmost one null value.\nArrayList is an ordered collection.In arraylists order remains same in which they are inserted. But coming\nto set it is an unordered collection.\npublic interface Set<E> extends Collection<E> {\n}\nImportant operations that can be performed on set:\n1) Adding an element to set.\n2) Removing an element from set.\n3) Check if an element exist in set.\n4) Iterating through set.",
    "category": "Collections",
    "options": [
      "Hashtable was available before collection framework.",
      "The order in which Iterator will iterate the collection depends on the traversal order of collection.",
      "A set is a collection which does not allow duplicates.",
      "ArrayList is an ordered collection which extends AbstractList and implements List interface."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 214,
    "question": "Implementations of Set interface?",
    "answerText": "1) HashSet\n2) Linked HashSet\n3) TreeSet",
    "category": "Collections",
    "options": [
      "TreeSet is preferred 1) if elements are to be maintained in sorting order.",
      "HashSet 2) Linked HashSet 3) TreeSet",
      "LinkedHashSet extends HashSet and implements Set interface.",
      "TreeSet implements navigableSet interface and extends Abstract set.It creates collection that uses tree for storage."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 215,
    "question": "Explain HashSet and its features?",
    "answerText": "Hashset implements set interface and extends AbstractSet. Features of Hashset are:\n1) It does not allow duplicates.\n2) It does not gurantee ordering of elements.\n3) It is unsorted and unordered set.\n4) Performance wise it is recommended to use hashset when compared to other sets because it\ninternally uses hashing mechanism.\n5) Allows insertion of nulls.\nNote: For efficiency whenever objects are added to HashSet it need to implement the hashCode()\nmethod.\npublic class HashSet<E> extends AbstractSet<E>\nimplements Set<E>, Cloneable, java.io.Serializable\n{\n}",
    "category": "Collections",
    "options": [
      "SortedMap extends Map interface.Sorted Map maintains sorted order of keys in a map.",
      "collection: represent group of objects where objects are stored.",
      "Hashset implements set interface and extends AbstractSet.",
      "If we want to search for an element in collection and does not want any sorting order we go for HashSet."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 216,
    "question": "Explain Tree Set and its features?",
    "answerText": "TreeSet implements navigableSet interface and extends Abstract set.It creates collection that uses tree\nfor storage.\nFeatures of Treeset are:\n1) It does not allow duplicates.\n2) When we retrieve the elements in treeset we will get elements in sorted order.\npublic class TreeSet<E> extends AbstractSet<E>\nimplements NavigableSet<E>, Cloneable, java.io.Serializable\n{",
    "category": "Collections",
    "options": [
      "TreeSet implements navigableSet interface and extends Abstract set.It creates collection that uses tree for storage.",
      "Both ArrayList and vector grows dynamically.",
      "collection: represent group of objects where objects are stored.",
      "Hashtable was available before collection framework."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 217,
    "question": "When do we use HashSet over TreeSet?",
    "answerText": "If we want to search for an element in collection and does not want any sorting order we go for HashSet.\n82) When do we use TreeSet over HashSet-\nTreeSet is preferred\n1) if elements are to be maintained in sorting order.\n2) Fast insertion and retrieval of elements.",
    "category": "Collections",
    "options": [
      "If we want to search for an element in collection and does not want any sorting order we go for HashSet.",
      "A map is an association of key-value pairs.",
      "Concurrent HashMap is implemented in java.util.concurrent package.",
      "A set is a collection which does not allow duplicates."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": "217A",
    "question": "When do we use TreeSet over HashSet?",
    "answerText": "TreeSet is preferred\n1) if elements are to be maintained in sorting order.\n2) Fast insertion and retrieval of elements.",
    "category": "Collections",
    "options": [
      "ArrayList 2) Vector 3) LinkedList",
      "Hashtable was available before collection framework.",
      "The order in which Iterator will iterate the collection depends on the traversal order of collection.",
      "TreeSet is preferred 1) if elements are to be maintained in sorting order."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 218,
    "question": "What is Linked HashSet and its features?",
    "answerText": "LinkedHashSet extends HashSet and implements Set interface.\npublic class LinkedHashSet<E>\nextends HashSet<E>\nimplements Set<E>, Cloneable, java.io.Serializable {\n}\nLinked HashSet is similar to HashSet but in linked HashSet we maintain order but in HashSet we don’t\nmaintain order. Maintaining order means elements will be retrieved in order which they are inserted.",
    "category": "Collections",
    "options": [
      "Concurrent HashMap is implemented in java.util.concurrent package.",
      "Hashset implements set interface and extends AbstractSet.",
      "SortedMap extends Map interface.Sorted Map maintains sorted order of keys in a map.",
      "LinkedHashSet extends HashSet and implements Set interface."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 219,
    "question": "Explain about Map interface in java?",
    "answerText": "A map is an association of key-value pairs. Both keys and values in map are objects.\nFeatures of map:\n1) Maps cannot have duplicate keys but can have duplicate value objects.",
    "category": "Collections",
    "options": [
      "Concurrent HashMap is implemented in java.util.concurrent package.",
      "HashSet 2) Linked HashSet 3) TreeSet",
      "Vector is similar to arraylist used for random access.",
      "A map is an association of key-value pairs."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 220,
    "question": "What is linked hashmap and its features?",
    "answerText": "LinkedHashMap extends HashMap and implements Map.lLinked hashmap gurantees order of elements.\nElements are retrieved in same order they are inserted.Linked HashMap uses internally double linked lists\nto keep insertion order.\nThe differences between Hashmap and linked hashmap is\n1) LinkedHashMap maintains the insertion order while HashMap doesnot maintain order.\n2) HashMap if faster for insertion and deletion of elements when compared to linked hashmap. Linked\nhashmap is preferred only for faster iteration of elements.\npublic class LinkedHashMap<K,V>\nextends HashMap<K,V>\nimplements Map<K,V>\n{\n}",
    "category": "Collections",
    "options": [
      "LinkedHashMap extends HashMap and implements Map.lLinked hashmap gurantees order of elements.",
      "If we want to iterate through all the elements in collection we use Iterator.",
      "Difference Arraylist LinkedList Access Implements RandomAccess interface we It extends Abstract sequential List can search randomly...",
      "A map is an association of key-value pairs."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 221,
    "question": "What is SortedMap interface?",
    "answerText": "SortedMap extends Map interface.Sorted Map maintains sorted order of keys in a map.\nBy default sorted map maintains natural ordering if we want custom order we can specify using\ncomparator.\npublic interface SortedMap<K,V> extends Map<K,V> {\n}",
    "category": "Collections",
    "options": [
      "Vector is similar to arraylist used for random access.",
      "SortedMap extends Map interface.Sorted Map maintains sorted order of keys in a map.",
      "TreeSet is preferred 1) if elements are to be maintained in sorting order.",
      "A set is a collection which does not allow duplicates."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 222,
    "question": "What is Hashtable and explain features of Hashtable?",
    "answerText": "Hashtable was available before collection framework.\nWhen collection framework was started Hashtable extends Dictionary class and Map interface.\nHashtable offers a convenient way of storing key/ value pairs.\nHashtable does not allow nulls either keys or values.\nHashtable is synchronized.",
    "category": "Collections",
    "options": [
      "ArrayList 2) Vector 3) LinkedList",
      "Difference HashMap Hashtable Synronization HashMap is not synchronized.",
      "Hashtable was available before collection framework.",
      "Linked list is used for storing a collection of objects that allows efficient addition and removal of elements in the middle of the..."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 223,
    "question": "Difference between HashMap and Hashtable?",
    "answerText": "Difference HashMap Hashtable\nSynronization HashMap is not synchronized. Hashtable is synchronized.\nNulls HashMap allows atmost one null key Hashtable does not allow null values.\nand any number of null values.\nPerformance Since HashMap is not synchronized its Performance is slower when compared to\nperformance is faster than Hashtable. HashMap.\nIntroduction HashMap introduced starting from Hashtable is even before collection\ncollection framework. framework.",
    "category": "Collections",
    "options": [
      "A map is an association of key-value pairs.",
      "Difference HashMap Hashtable Synronization HashMap is not synchronized.",
      "TreeSet is preferred 1) if elements are to be maintained in sorting order.",
      "ArrayList is an ordered collection which extends AbstractList and implements List interface."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 224,
    "question": "Difference between arraylist and linkedlist?",
    "answerText": "Difference Arraylist LinkedList\nAccess Implements RandomAccess interface we It extends Abstract sequential List\ncan search randomly all the elements interface which provides\nin the list. sequential access to elements.\nSearching and retrieval of Searching and retrieval of elements is Searching and retrieval of\nelements fast since arraylist provides random elements is slow because of\naccess. sequential access to elements.\nAddition and removal of Adding and removal of elements in Adding and removal of\nelements random positions is slow.For example elements in random positions\nif we want to add element to middle of is fast because there is no need of\nthe list we have to move the elements in resizing the array just by updating\nthe list and then we need to insert the the node structures with new\nelement. Similarly for removing the addresses.\nelement we need to follow the same\nthing.",
    "category": "Collections",
    "options": [
      "A collection is a container which holds group of objects.",
      "TreeSet implements navigableSet interface and extends Abstract set.It creates collection that uses tree for storage.",
      "Difference Arraylist LinkedList Access Implements RandomAccess interface we It extends Abstract sequential List can search randomly...",
      "A map is an association of key-value pairs."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 225,
    "question": "Difference between Comparator and Comparable in java?",
    "answerText": "Sno Comparator Comparable\n1. Defined in java.util package Defined in java.lang package.\n2. Comparator interface is used when Comparable is used to compare itself with other\nwe want to compare two instance.\ndifferent instances\n3. Comparator is used when we want Comparable is used for natural sorting of objects.Ex:\ncustom sorting.Ex: If we take If we take employee class sorting by ename and age we\nemployee class sorting by can say as custom sorting.\nemployeeId is natural sorting.\n4. Should override int compare(T o1, T Should override public int compareTo(T o) method\no2) method which takes two which takes one instance.\ninstances.\n5. For sorting objects we use For sorting objects we use collections.sort(list);\ncollections.sort(list,new\nComparator);",
    "category": "Collections",
    "options": [
      "TreeSet is preferred 1) if elements are to be maintained in sorting order.",
      "Sno Comparator Comparable 1.",
      "Both ArrayList and vector grows dynamically.",
      "Difference Arraylist LinkedList Access Implements RandomAccess interface we It extends Abstract sequential List can search randomly..."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 226,
    "question": "What is concurrent hashmap and its features?",
    "answerText": "Concurrent HashMap is implemented in java.util.concurrent package.\nConcurrent HashMap extends Abstract Map and implements concurrent Map.\nConcurrent HashMap is used in multi threaded environment.\n]It is similar to Hashtable and synchronized version of hashmap but with minor differences.\nConcurrent HashMap does not allow null keys and values.",
    "category": "Collections",
    "options": [
      "HashSet 2) Linked HashSet 3) TreeSet",
      "Sno Comparator Comparable 1.",
      "Concurrent HashMap is implemented in java.util.concurrent package.",
      "A framework is set of classes and interfaces to build a functionality."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 227,
    "question": "Difference between Concurrent HashMap and Hashtable and?",
    "answerText": "collections.synchronizedHashMap-\nLocking Mechansim:ConcurrentHashMap uses completely different hashing mechanism called lock\nstriping which offers better concurrency and scalability.\nThe main advantage of this mechanism is better concurrency instead of synchronizing every method by\nusing common lock which allows only one thread to access at a time, it allows better concurrency by\nallowing multiple threads to access.\nConcurrentModificationException:ConcurrentHashMap provides iterators which doesnot throw concurrent\nmodification exception which allows only one thread to access iterator, while synchronized map may\nthrow concurrent modification exception.",
    "category": "Serialization",
    "options": [
      "Serialization is the process of converting an object in to bytes, so that it can be transmitted over the network,or stored in a flat...",
      "If we don’t want to serialize some fields during serialization we declare those variables as transient.",
      "copyOnWriteArrayList is used in multithreaded environment.",
      "collections.synchronizedHashMap- Locking Mechansim:ConcurrentHashMap uses completely different hashing mechanism called lock..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 228,
    "question": "Explain copyOnWriteArrayList and when do we use copyOnWriteArrayList?",
    "answerText": "copyOnWriteArrayList is used in multithreaded environment. If we want to iterate over arraylist,but the\narraylist is updated by other threads to prevent concurrent modification exception we have two solutions:\n1) First one is we need to synchronize the list manually by using collections.synchronized(list) and\niterate over the list in synchronized block to avoid concurrent modification exception.\n2) The second one is to use copyOnWriteArrayList which takes care of concurrency.\nThe advantage of using copyOnWriteArrayList is no need to synchronize list explicitly. So when we use\ncopyOnWriteArrayList when a thread modifies the list while the other thread was iterating it does not\nmodify original list but creates a copy of list with modified contents so that the iterator won’t know the\nmodifications made to original list.",
    "category": "Serialization",
    "options": [
      "copyOnWriteArrayList is used in multithreaded environment.",
      "When we serialize an object even the object it refers must implement serializable then the reference objects also get serialized.",
      "To implement serialization in java there is an interface defined in java.io package called serializable interface.",
      "Our class must implement serializable interface.If our object contains other objects those class must also implement serializable..."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 229,
    "question": "Explain about fail fast iterators in java?",
    "answerText": "When iterator iterates over collection, collection should not be modified except by that iterator.\nModification means collection cannot be modified by thread when other thread is iterating, if such\nmodification happens a concurrent modification exception will be thrown.Such kind of iterators are fail fast\niterators.\nEx: ArrayList,HashSet,HashMap. Almost all the iterators implemented in collections framework are fail\nfast.",
    "category": "Serialization",
    "options": [
      "When iterator iterates over collection, collection should not be modified except by that iterator.",
      "When we serialize an object even the object it refers must implement serializable then the reference objects also get serialized.",
      "collections.synchronizedHashMap- Locking Mechansim:ConcurrentHashMap uses completely different hashing mechanism called lock...",
      "copyOnWriteArrayList is used in multithreaded environment."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 230,
    "question": "Explain about fail safe iterators in java?",
    "answerText": "Fail safe iterators are iterators which does not throw concurrent modification exception, when one thread\nmodifies collection and other thread in the process of iterating the collection.\nIt does not throw concurrent modification exception because when other thread was iterating it does not\nmodify original list but creates a copy of list with modified contents so that the iterator won’t know the\nmodifications made to original list.\nEx: copyOnWriteArrayList\nCore java Serialization interview questions",
    "category": "Serialization",
    "options": [
      "Our class must implement serializable interface.If our object contains other objects those class must also implement serializable...",
      "copyOnWriteArrayList is used in multithreaded environment.",
      "When we serialize an object even the object it refers must implement serializable then the reference objects also get serialized.",
      "Fail safe iterators are iterators which does not throw concurrent modification exception, when one thread modifies collection and..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 231,
    "question": "What is serialization in java?",
    "answerText": "Serialization is the process of converting an object in to bytes, so that it can be transmitted over the\nnetwork,or stored in a flat file and can be recreated later. Serialized object is an object represented as\nsequence of bytes that includes objects data, object type, and the types of data stored in the object.",
    "category": "Serialization",
    "options": [
      "We can’t serialize static variables in java.",
      "If we don’t want to serialize some fields during serialization we declare those variables as transient.",
      "Serial version unique identifier is a 64 bit long value.This 64 bit long value is a hash code of the class name,super interfaces and...",
      "Serialization is the process of converting an object in to bytes, so that it can be transmitted over the network,or stored in a flat..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 232,
    "question": "What is the main purpose of serialization in java?",
    "answerText": "The main uses of serialization are:\n1) Persistence:\nWe can write data to a file or database and can be used later by deserializing it.\n2) Communication:\nTo pass an object over network by making remote procedure call.\n3) Copying:\nWe can create duplicates of original object by using byte array.\n4) To distribute objects across different JVMs.",
    "category": "Serialization",
    "options": [
      "copyOnWriteArrayList is used in multithreaded environment.",
      "The main uses of serialization are: 1) Persistence: We can write data to a file or database and can be used later by deserializing it.",
      "Fail safe iterators are iterators which does not throw concurrent modification exception, when one thread modifies collection and...",
      "When iterator iterates over collection, collection should not be modified except by that iterator."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 233,
    "question": "What are alternatives to java serialization?",
    "answerText": "XML based data transfer\nJSON based data transfer.\nXML based data transfer: We can use JIBX or JAXB where we can marshall our object’s data to xml and\ntransfer data and then unmarshall and convert to object.\nJSON based transfer: We can use json to transfer data.",
    "category": "Serialization",
    "options": [
      "Serialization is the process of converting an object in to bytes, so that it can be transmitted over the network,or stored in a flat...",
      "XML based data transfer JSON based data transfer.",
      "To implement serialization in java there is an interface defined in java.io package called serializable interface.",
      "Fail safe iterators are iterators which does not throw concurrent modification exception, when one thread modifies collection and..."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 234,
    "question": "Explain about serializable interface in java?",
    "answerText": "To implement serialization in java there is an interface defined in java.io package called serializable\ninterface. Java.io.Serializable interface is an marker interface which doesnot contain any any methods. A\nclass implements Serializable lets the JVM know that the instances of the class can be serialized.\nSyntax:\npublic interface Serializable {\n}",
    "category": "Serialization",
    "options": [
      "collections.synchronizedHashMap- Locking Mechansim:ConcurrentHashMap uses completely different hashing mechanism called lock...",
      "If we don’t want to serialize some fields during serialization we declare those variables as transient.",
      "To implement serialization in java there is an interface defined in java.io package called serializable interface.",
      "Our class must implement serializable interface.If our object contains other objects those class must also implement serializable..."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 235,
    "question": "How to make object serializable in java?",
    "answerText": "1) Our class must implement serializable interface.If our object contains other objects those class must\nalso implement serializable interface.\n2) We use ObjectOutputStream which extends OutputStream used to write objects to a stream.\n3) We use ObjectInputStream which extends InputStream used to read objects from stream",
    "category": "Serialization",
    "options": [
      "When we serialize an object even the object it refers must implement serializable then the reference objects also get serialized.",
      "Serialization is the process of converting an object in to bytes, so that it can be transmitted over the network,or stored in a flat...",
      "If we don’t want to serialize some fields during serialization we declare those variables as transient.",
      "Our class must implement serializable interface.If our object contains other objects those class must also implement serializable..."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 236,
    "question": "What is serial version UID and its importance in java?",
    "answerText": "Serial version unique identifier is a 64 bit long value.This 64 bit long value is a hash code of the class\nname,super interfaces and member. Suid is a unique id no two classes will have same suid. Whenever an\nobject is serialized suid value will also serialize with it.\nWhen an object is read using ObjectInputStream, the suid is also read. If the loaded class suid does not\nmatch with suid read from object stream, readObject throws an InvalidClassException.",
    "category": "Serialization",
    "options": [
      "Fail safe iterators are iterators which does not throw concurrent modification exception, when one thread modifies collection and...",
      "Serial version unique identifier is a 64 bit long value.This 64 bit long value is a hash code of the class name,super interfaces and...",
      "Our class must implement serializable interface.If our object contains other objects those class must also implement serializable...",
      "If we don’t define serial version UID JVM will create one suid for us."
    ],
    "answer": 1,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 237,
    "question": "What happens if we don’t define serial version UID?",
    "answerText": "If we don’t define serial version UID JVM will create one suid for us. But it is recommended to have suid\nrather than JVM creating because at run time JVM has to compute the hashcode of all the properties of\nclass. This process makes serialization low. We can’t serialize static fields one exception to this is suid\nwhere suid gets serialized along with the object.\nEx:private static final long serialVersionUID = -5885568094444284875L;",
    "category": "Serialization",
    "options": [
      "If we don’t define serial version UID JVM will create one suid for us.",
      "When we serialize an object even the object it refers must implement serializable then the reference objects also get serialized.",
      "Serial version unique identifier is a 64 bit long value.This 64 bit long value is a hash code of the class name,super interfaces and...",
      "collections.synchronizedHashMap- Locking Mechansim:ConcurrentHashMap uses completely different hashing mechanism called lock..."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 238,
    "question": "Can we serialize static variables in java?",
    "answerText": "We can’t serialize static variables in java. The reason being static variable are class variables that belongs\nto a class not to object, but serialization mechanism saves only the object state not the class state.",
    "category": "Serialization",
    "options": [
      "We can’t serialize static variables in java.",
      "Our class must implement serializable interface.If our object contains other objects those class must also implement serializable...",
      "copyOnWriteArrayList is used in multithreaded environment.",
      "XML based data transfer JSON based data transfer."
    ],
    "answer": 0,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 239,
    "question": "When we serialize an object does the serialization mechanism saves its?",
    "answerText": "When we serialize an object even the object it refers must implement serializable then the reference\nobjects also get serialized. If we don’t make reference objects serializable then we get\nNotSerializableException.",
    "category": "Serialization",
    "options": [
      "Serial version unique identifier is a 64 bit long value.This 64 bit long value is a hash code of the class name,super interfaces and...",
      "If we don’t want to serialize some fields during serialization we declare those variables as transient.",
      "copyOnWriteArrayList is used in multithreaded environment.",
      "When we serialize an object even the object it refers must implement serializable then the reference objects also get serialized."
    ],
    "answer": 3,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  },
  {
    "id": 240,
    "question": "If we don’t want some of the fields not to serialize How to do that?",
    "answerText": "If we don’t want to serialize some fields during serialization we declare those variables as transient.\nDuring deserialization transient variables are initialized with default values for primitives and null for\nobject references.\nMore questions and answers\nhttp://becomejavasenior.com/blog/2015/07/01/327-interview-questions-java-developer/",
    "category": "Serialization",
    "options": [
      "copyOnWriteArrayList is used in multithreaded environment.",
      "We can’t serialize static variables in java.",
      "If we don’t want to serialize some fields during serialization we declare those variables as transient.",
      "Fail safe iterators are iterators which does not throw concurrent modification exception, when one thread modifies collection and..."
    ],
    "answer": 2,
    "hint": "Choose the option that best matches the answer from the uploaded PDF notes."
  }
];
