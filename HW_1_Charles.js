
//Charles HomeWork

//Ex_0: Сфокусуватися на нижче перерахованих запитах

Protocol: http
IP: 162.55.220.72
Port: 5005

Ex_1: 
Method: GET
EndPoint: /get_method
request url params: 
 name: str
 age: int

response: 
[
    “Str”,
    “Str”
]

//Task:
//Зробити і в Rewrite, і в BreakPoint (можна відключити щоб не стопило на кожному запиті)
 //⁃ Підмінити url в Charles щоб в запиті уйшло і'мя яке ви вписали в Postman, а повернулось те, яке ви підставили в Charles.

==================

Ex_2:
Method: POST
EndPoint: /user_info_3
request form data: 
 name: str
 age: int
 salary: int

response: 
{'name': name,
          'age': age,
          'salary': salary,
          'family': {'children': [['Alex', 24], ['Kate', 12]],
                     'u_salary_1_5_year': salary * 4}}

//Task:
//Зробити і в Rewrite, і в BreakPoint (можна відключити щоб не стопило на кожному запиті)
// ⁃ Підменити body в Charles так щоб в запиті пішла salary яку ви вписали в Postman, а в u_salary_1_5_year цифра повернулась меньше оригінальнї із запиту.

==================

Ex_3:
Method: GET
EndPoint: /object_info_1
request url params: 
 name: str
 age: int
 weight: int

response: 
{'name': name,
          'age': age,
          'daily_food': weight * 0.012,
          'daily_sleep': weight * 2.5}

//Task:
//Зробити і в Rewrite, і в BreakPoint (можна відключити щоб не стопило на кожному запиті)
 //⁃ Підмінити параметри запиту в Charles так, щоб в Postman прийшла відповідь де інше name, daily_food > weight з запиту, а daily_sleep < weight з запиту.

==================

Ex_4:
Method: GET
EndPoint: /object_info_3
request url params: 
 name: str
 age: int
 salary: int

response: 
{'name': name,
          'age': age,
          'salary': salary,
          'family': {'children': [['Alex', 24], ['Kate', 12]],
                     'pets': {'cat':{'name':'Sunny',
                                     'age': 3},
                              'dog':{'name':'Luky',
                                     'age': 4}},
                     'u_salary_1_5_year': salary * 4}
          }

//Task:
//Зробити і в Rewrite, і в BreakPoint (можна відключити щоб не стопило на кожному запиті)
//- Зробити через Charles так, щоб сервер повернув 500 код.
//- Зробити через Charles так, щоб сервер повернув 405 код.

==================

Ex_5:
Method: GET
EndPoint: /object_info_4
request url params: 
 name: str
 age: int
 salary: int

response: 
{'name': name,
          'age': int(age),
          'salary': [salary, str(salary * 2), str(salary * 3)]}


//Task:
//Зробити і в Rewrite, і в BreakPoint (можна відключити щоб не стопило на кожному запиті)
// ⁃ Зробити через Charles так, щоб сервер повернув 405 помилку.
 //⁃ Підмінити salary в request
 //⁃ Підмінити (salary * 2) в response

==================

Ex_6:
Method: POST
EndPoint: /user_info_2
request form data: 
 name: str
 age: int
 salary: int

response: 
{'start_qa_salary': salary,
          'qa_salary_after_6_months': salary * 2,
          'qa_salary_after_12_months': salary * 2.7,
          'qa_salary_after_1.5_year': salary * 3.3,
          'qa_salary_after_3.5_years': salary * 3.8,
          'person': {'u_name': [user_name, salary, age],
                     'u_age': age,
                     'u_salary_5_years': salary * 4.2}
          }


//Task:
//Зробити і в Rewrite, і в BreakPoint (можна відключити щоб не стопило на кожному запиті)
 //⁃ Зробити через Charles так, щоб в Postman повернулась відповідь, в якому qa_salary_after_1.5_year перейменовано в qa_salary_after_1.5_month
 //⁃ Зробити так щоб qa_salary_after_3.5_years було меньше qa_salary_after_12_months в response

//Всі настройки Charles вигрузити в GitHub

