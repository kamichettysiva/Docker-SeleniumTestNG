Feature: verify AirAsia Login and flight search functionalities

  Background: 
   # Given User is on landing page

  @SearchFlight
  Scenario Outline: Search for flight as a guest user
    Given User is on Landing Page
    When User selects Flights menu item on search widget
    And Enter from location "<from location>"
    And Enter to location "<to location>"
    And Select depart date "<depart date>"
    And Select return date "<return date>"
    And Click confrim on date picker
    And Click search
    Then Search results with user selected "<from location>", "<to location>" are displayed

    Examples: 
      |from location           |to location           |depart date           |return date           |
      |Kuala Lumpur (KUL)      |Chennai (MAA)         |19/07/2020            |22/07/2020            |

  @LoginAndLogout
  Scenario Outline: Login to AirAsia and verify Account Settings
    Given User is on Landing Page
    When User clicks on BIG Login
    And Login with "<email address>" and password "<password>"
    And Verify account name "<account name>"is displayed
    And Click on account profile name "<account name>"
    And Click logout
    Then Verify logout is successful

    Examples:
      |email address              |password             |account name         |
      |signinairasia@gmail.com    |Bonpi71021           |Signin               |

