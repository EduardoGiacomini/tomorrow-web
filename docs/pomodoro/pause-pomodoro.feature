Feature: Pause pomodoro timer

  Sometimes I need to stop the current pomodoro timer to do something.

  Scenario: Pause pomodoro timer
    Given a pomodoro timer running
    When I pause the pomodoro timer
    Then it should stop the countdown
