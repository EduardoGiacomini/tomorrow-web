Feature: Start pomodoro timer

  Sometimes I don't have the necessary focus to study or read some technical
  book. The Pomodoro technique is usefull to keep the focus for these days.

  Scenario: Start pomodoro timer
    Given the study time
    When I start the pomodoro timer with 30 minutes
    Then it should start a countdown from 30 minutes to 0

  Scenario Outline: Start too long pomodoro timer
    Given the study time
    When I start the pomodoro timer with less than 5 minutes
    Then it should not start the countdown and display a error message

  Scenario Outline: Start too fast pomodoro timer
    Given the study time
    When I start the pomodoro timer with more than 1 hour
    Then it should not start the countdown and display a error message
