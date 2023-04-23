const history = [
    {
      "time": 2,
      "answer": ""
    },
    {
      "answer": "f",
      "time": 3
    },
    {
      "time": 4,
      "answer": "for "
    },
    {
      "time": 5,
      "answer": "for ()"
    },
    {
      "answer": "for (let)",
      "time": 6
    },
    {
      "time": 7,
      "answer": "for (let )"
    },
    {
      "answer": "for (let i)",
      "time": 8
    },
    {
      "answer": "for (let i = )",
      "time": 9
    },
    {
      "answer": "for (let i = 1;)",
      "time": 10
    },
    {
      "time": 11,
      "answer": "for (let i = 1; )"
    },
    {
      "time": 12,
      "answer": "for (let i = 1; i)"
    },
    {
      "answer": "for (let i = 1; i <)",
      "time": 13
    },
    {
      "answer": "for (let i = 1; i <=)",
      "time": 14
    },
    {
      "time": 15,
      "answer": "for (let i = 1; i <= )"
    },
    {
      "time": 16,
      "answer": "for (let i = 1; i <= 100)"
    },
    {
      "answer": "for (let i = 1; i <= 100;)",
      "time": 17
    },
    {
      "time": 18,
      "answer": "for (let i = 1; i <= 100; )"
    },
    {
      "answer": "for (let i = 1; i <= 100; i)",
      "time": 19
    },
    {
      "time": 21,
      "answer": "for (let i = 1; i <= 100; i++)"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {}",
      "time": 22
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  \n}",
      "time": 23
    },
    {
      "time": 24,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if ()\n}",
      "time": 25
    },
    {
      "time": 26,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i)\n}"
    },
    {
      "time": 27,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i )\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i %)\n}",
      "time": 28
    },
    {
      "time": 29,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % )\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 )\n}",
      "time": 31
    },
    {
      "time": 32,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 ===)\n}"
    },
    {
      "time": 33,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === )\n}"
    },
    {
      "time": 34,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0)\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 )\n}",
      "time": 37
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 &&)\n}",
      "time": 38
    },
    {
      "time": 39,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && )\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i )\n}",
      "time": 41
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % )\n}",
      "time": 43
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5)\n}",
      "time": 44
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 =)\n}",
      "time": 45
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 ==)\n}",
      "time": 46
    },
    {
      "time": 47,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 ===)\n}"
    },
    {
      "time": 48,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === )\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0)\n}",
      "time": 50
    },
    {
      "time": 51,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) \n}"
    },
    {
      "time": 52,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    \n  }\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    con\n  }\n}",
      "time": 53
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.\n  }\n}",
      "time": 54
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log\n  }\n}",
      "time": 55
    },
    {
      "time": 56,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log()\n  }\n}"
    },
    {
      "time": 57,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"\")\n  }\n}"
    },
    {
      "time": 58,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"F\")\n  }\n}"
    },
    {
      "time": 59,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"Fizz\")\n  }\n}"
    },
    {
      "time": 60,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzB\")\n  }\n}"
    },
    {
      "time": 61,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuz\")\n  }\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  }\n}",
      "time": 62
    },
    {
      "time": 63,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } \n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } el\n}",
      "time": 64
    },
    {
      "time": 65,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else i\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if \n}",
      "time": 66
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if ()\n}",
      "time": 68
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i)\n}",
      "time": 69
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i )\n}",
      "time": 72
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i %)\n}",
      "time": 73
    },
    {
      "time": 75,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % )\n}"
    },
    {
      "time": 76,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3)\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 )\n}",
      "time": 77
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 ===)\n}",
      "time": 78
    },
    {
      "time": 80,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0)\n}"
    },
    {
      "time": 81,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) \n}"
    },
    {
      "time": 83,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    \n  }\n}"
    },
    {
      "time": 84,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    cons\n  }\n}"
    },
    {
      "time": 85,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    consol\n  }\n}"
    },
    {
      "time": 86,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.\n  }\n}"
    },
    {
      "time": 87,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log\n  }\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log()\n  }\n}",
      "time": 88
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"\")\n  }\n}",
      "time": 89
    },
    {
      "time": 90,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fiz\")\n  }\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  }\n}",
      "time": 93
    },
    {
      "time": 94,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } e\n}"
    },
    {
      "time": 95,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else\n}"
    },
    {
      "time": 96,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if\n}"
    },
    {
      "time": 97,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if \n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i)\n}",
      "time": 99
    },
    {
      "time": 100,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i )\n}"
    },
    {
      "time": 101,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i %)\n}"
    },
    {
      "time": 103,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % )\n}"
    },
    {
      "time": 104,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 )\n}"
    },
    {
      "time": 105,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 ===)\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0)\n}",
      "time": 107
    },
    {
      "time": 108,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) \n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    \n  }\n}",
      "time": 109
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    c\n  }\n}",
      "time": 110
    },
    {
      "time": 111,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    co\n  }\n}"
    },
    {
      "time": 112,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    con\n  }\n}"
    },
    {
      "time": 113,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console\n  }\n}"
    },
    {
      "time": 114,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.l\n  }\n}"
    },
    {
      "time": 115,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log\n  }\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log()\n  }\n}",
      "time": 116
    },
    {
      "time": 117,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"\")\n  }\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"B\")\n  }\n}",
      "time": 118
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  }\n}",
      "time": 120
    },
    {
      "time": 121,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } \n}"
    },
    {
      "time": 122,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } els\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } else \n}",
      "time": 123
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } else {\n    \n  }\n}",
      "time": 124
    },
    {
      "time": 125,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } else {\n    co\n  }\n}"
    },
    {
      "time": 126,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } else {\n    conso\n  }\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } else {\n    console.\n  }\n}",
      "time": 127
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } else {\n    console.log\n  }\n}",
      "time": 128
    },
    {
      "time": 129,
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } else {\n    console.log()\n  }\n}"
    },
    {
      "answer": "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } else {\n    console.log(i)\n  }\n}",
      "time": 130
    }
  ]

  const answer = "for (let i = 1; i <= 100; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\")\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\")\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\")\n  } else {\n    console.log(i)\n  }\n}"

  const totalTime = 130

  export {history,answer, totalTime}