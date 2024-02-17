Feature: Resume pomodoro timer

  After pause the pomodoro time I need to resume the countdown.

  Scenario: Resume pomodoro timer
    Given a paused pomodoro timer
    When I resume the pomodoro timer
    Then it should start the countdown
