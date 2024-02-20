Feature: Add todo

  I use todo lists to remember my daily tasks or grocery list for example. Add a
  new todo should be easy.

  Scenario: Add a new todo
    Given the todo description
    When I save with submit button
    Then it should add the new todo to todo list

  Scenario Outline: Add an existent todo
    Given a duplicated todo description
    When I save with submit button
    Then it should not save the todo again
