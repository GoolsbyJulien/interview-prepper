import { getQuestions } from "../Server";
import { textToSpeech } from "../pages/Homepage/homepage";
import { NUM_OF_QUESTIONS } from "./Round";




export function loadQuestion() {


    let i = Math.floor(Math.random() * questions.length);;


    let question = questions[i];

    return question;
}


export function loadQuestions() {

    return getQuestions(NUM_OF_QUESTIONS);
}

const questions = [
    // Behavioral Questions
    "Tell me about a time when you had to work with a difficult team member.",
    "How do you handle stress and pressure?",
    "Describe a situation where you had to solve a problem under significant time pressure.",
    "Can you give an example of a time when you had to persuade someone to see things your way?",
    "Tell me about a time when you failed and how you handled it.",
    "Describe a situation where you had to adapt to a significant change.",
    "How do you prioritize your tasks and manage your time effectively?",
    "Give an example of a successful project you completed. What made it successful?",
    "Describe a challenging situation at work and how you resolved it.",
    "How do you handle conflicts or disagreements within a team?",
    "Tell me about a time when you had to deal with a difficult client or customer.",
    "What motivates you to perform your best work?",
    "Describe a situation where you had to multitask and how you managed it effectively.",
    "Can you give an example of a time when you demonstrated leadership?",
    "How do you stay updated with the latest trends and technologies in software development?",
    "Describe your experience working in Agile/Scrum environments.",
    "What do you do when you encounter a bug or error in your code?",
    "How do you approach debugging and troubleshooting?",
    "Can you explain the difference between front-end and back-end development?",
    "Describe a challenging technical problem you encountered and how you solved it.",
    "How do you ensure the quality and reliability of your code?",
    "What steps do you take to optimize the performance of your code?",
    "How do you collaborate with other team members on a project?",
    "Tell me about a time when you had to learn a new technology or programming language quickly.",
    "Describe your experience with version control systems like Git.",
    "How do you handle code reviews and feedback from colleagues?",
    "Can you give an example of a project where you had to work under tight deadlines?",
    "Describe your approach to software design and architecture.",
    "What do you consider when designing a user interface?",
    "How do you ensure that your code is secure and protected from vulnerabilities?",
    "Tell me about a time when you had to refactor code to improve its readability and maintainability.",
    "How do you keep yourself motivated during long and challenging projects?",
    "Describe your experience with test-driven development (TDD) or behavior-driven development (BDD).",
    "What do you do when you encounter a technical problem that you don't know how to solve?",
    "How do you balance delivering features on time with ensuring code quality?",
    "Can you give an example of a time when you had to work with a legacy codebase?",
    "Describe your experience with continuous integration and continuous deployment (CI/CD) pipelines.",
    "How do you handle working on multiple projects simultaneously?",
    "Tell me about a time when you had to explain technical concepts to non-technical stakeholders.",
    "What do you enjoy most about software development?",
    "Describe a situation where you had to make a difficult decision in a project.",
    "How do you handle constructive criticism?",
    "Can you give an example of a time when you had to work independently without much guidance?",
    "Describe your approach to documenting your code and projects.",
    "How do you ensure that your code is scalable and can handle increased traffic or data?",
    "Tell me about a time when you had to troubleshoot a production issue under pressure.",
    "What do you do to stay organized and focused during busy periods?",
    "Describe your experience with cloud computing platforms like AWS, Azure, or Google Cloud.",
    "How do you approach designing and implementing database schemas?",
    "Can you give an example of a time when you had to compromise to meet a project deadline?",

    // Programming Concept Questions
    "What is object-oriented programming (OOP)?",
    "Explain the difference between procedural and object-oriented programming.",
    "What is a class and an object in object-oriented programming?",
    "Describe the concept of inheritance in object-oriented programming.",
    "What is polymorphism and how is it implemented in object-oriented programming?",
    "Explain the concept of encapsulation.",
    "What is the difference between stack and heap memory?",
    "What is recursion and when would you use it?",
    "Explain the concept of abstraction in programming.",
    "What are design patterns and why are they important?",
    "Describe the difference between synchronous and asynchronous programming.",
    "What is a callback function and how is it used?",
    "Explain the concept of closures in JavaScript.",
    "What is the event loop in JavaScript?",
    "Describe the concept of data structures and give examples.",
    "What is Big O notation and why is it important?",
    "Explain the difference between arrays and linked lists.",
    "What is a hash table and how does it work?",
    "Describe the concept of sorting algorithms and give examples.",
    "Explain the difference between breadth-first search and depth-first search.",
    "What is dynamic programming and when would you use it?",
    "Describe the concept of concurrency in programming.",
    "Explain the difference between concurrency and parallelism.",
    "What are mutexes and semaphores?",
    "Describe the concept of threads and processes.",
    "Explain the difference between compile-time and runtime errors.",
    "What is garbage collection and how does it work?",
    "Describe the concept of memory leaks and how to prevent them.",
    "Explain the difference between static typing and dynamic typing.",
];
