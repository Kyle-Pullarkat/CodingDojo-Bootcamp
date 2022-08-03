# makes user class
class User:
    #Declares self
    def __init__(self, name, age):
        self.name= name
        self.age= age
        self.account_balance=0

    # Function that deposits+ money into acc balance
    def make_deposit(self, amount):
        self.account_balance += amount

    #Function that Withdrawls- money out of acc balance
    def make_withdrawal(self, amount):
        self.account_balance -= amount

    #Function that displayes user name and acc balance
    def display_user_balance(self):
        print(f"User: {self.name}, Balance: {self.account_balance}")

# Declaring all users  // otherwise errors w/o declared users
Kyle=User("Kyle","22")
Jimmy=User("Jimmy","35")
Vanessa=User("Vanessa","22")


# Makes 3 deposits and displays balance
Kyle.make_deposit(75)
Kyle.make_deposit(25)
Kyle.make_deposit(300)
Kyle.display_user_balance()


#Makes 2 deposits and 2 withdrawls and displays balance
Jimmy.make_deposit(50)
Jimmy.make_deposit(50)
Jimmy.make_withdrawal(25)
Jimmy.make_withdrawal(50)
Jimmy.display_user_balance()

#Makes 1 deposit and 3 withdrawls and displays user balance
Vanessa.make_deposit(500)
Vanessa.make_withdrawal(50)
Vanessa.make_withdrawal(75)
Vanessa.make_withdrawal(100)
Vanessa.display_user_balance()

# i tested that the balances can be negative if need be


#Bonus....