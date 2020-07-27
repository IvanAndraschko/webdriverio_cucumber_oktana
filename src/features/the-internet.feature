Feature: The internet herokuapp

	Scenario: Login > correct username and password
		Given User goes to the-internet page via URL
		And A user is on the-internet page
		When Goes to the login page via URL
		Then A user is on login page
		When Tries to log in with the username "tomsmith" and password "SuperSecretPassword!"
		Then A user is on Secure Area page
		And User gets a success message saying "You logged into a secure area!"

	# @Skip
	Scenario Outline: Login > wrong username and/or password
		Given User goes to the-internet page via URL
		And A user is on the-internet page
		When Goes to the login page via URL
		Then A user is on login page
		When Tries to log in with the username "<username>" and password "<password>"
		Then User gets an error message saying "<error>"

		Examples:
		|username 		|password 				|error 	|
		| 				| 						|Your username is invalid!|
		|tomsmith 		|						|Your password is invalid!|
		|				|SuperSecretPassword! 	|Your username is invalid!|
		|wrongUsername	|SuperSecretPassword! 	|Your username is invalid!|
		|tomsmith 		|wrongPassword 			|Your password is invalid!|
		